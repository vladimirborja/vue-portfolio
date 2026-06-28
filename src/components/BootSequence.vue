<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['done'])

const progress = ref(0)
const exiting = ref(false)
const fadingOut = ref(false)
const contentHidden = ref(false)
const visible = ref(true)

function startProgress() {
    const duration = 1200 // Faster, sleek load time
    const start = performance.now()
    
    function update(time) {
        if (finished) return
        const elapsed = time - start
        const percent = Math.min((elapsed / duration) * 100, 100)
        progress.value = percent
        if (percent < 100) {
            requestAnimationFrame(update)
        } else {
            setTimeout(finish, 100)
        }
    }
    requestAnimationFrame(update)
}

let finished = false
function finish() {
    if (finished) return
    finished = true
    progress.value = 100
    fadingOut.value = true
    
    setTimeout(() => {
        exiting.value = true
        contentHidden.value = true
        setTimeout(() => {
            visible.value = false
            emit('done')
        }, 700)
    }, 200)
}

onMounted(() => {
    startProgress()
})
</script>

<template>
    <div v-if="visible" class="fixed inset-0 z-[100] flex flex-col overflow-hidden select-none pointer-events-none">
        <!-- Top Half Panel -->
        <div :class="exiting ? '-translate-y-full' : 'translate-y-0'" 
            class="flex-1 bg-[#0a0a0a] border-b border-white/5 transition-transform duration-700 ease-in-out"></div>
        
        <!-- Bottom Half Panel -->
        <div :class="exiting ? 'translate-y-full' : 'translate-y-0'" 
            class="flex-1 bg-[#0a0a0a] border-t border-white/5 transition-transform duration-700 ease-in-out"></div>
        
        <!-- Minimalist content overlay -->
        <div v-if="!contentHidden" 
            :class="{'opacity-0': fadingOut}"
            class="absolute inset-0 flex items-center justify-center p-6 bg-transparent transition-opacity duration-300 pointer-events-auto">
            
            <div class="flex flex-col items-center space-y-4">
                <!-- Clean typography -->
                <div class="font-mono-custom text-white text-lg md:text-xl font-bold tracking-widest uppercase">
                    karl.dev
                </div>
                
                <!-- Sleek horizontal progress bar -->
                <div class="w-40 flex flex-col items-center space-y-2">
                    <div class="w-full bg-white/5 border border-white/10 rounded-full overflow-hidden p-0.5 h-2 flex items-center">
                        <div class="h-full bg-gradient-to-r from-green-600 to-emerald-400 rounded-full transition-all duration-75" :style="{ width: `${progress}%` }"></div>
                    </div>
                    <span class="font-mono-custom text-[10px] text-gray-500 font-semibold tracking-wider">
                        {{ Math.round(progress) }}%
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>