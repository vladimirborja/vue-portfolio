<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['done'])

const lines = ref([])
const visible = ref(true)

const bootLines = [
    '> booting karl.dev...',
    '> loading portfolio modules...',
    '> connecting to github...',
    '> ready.',
]

function skip() {
    finish()
}

function finish() {
    visible.value = false
    setTimeout(() => emit('done'), 400)
}

onMounted(() => {
    let delay = 200
    bootLines.forEach((line, idx) => {
        setTimeout(() => {
            lines.value.push(line)
            if (idx === bootLines.length - 1) {
                setTimeout(finish, 500)
            }
        }, delay)
        delay += 350
    })
})
</script>

<template>
    <div v-if="visible" @click="skip"
        class="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center cursor-pointer transition-opacity duration-400">
        <div class="font-mono-custom text-green-400 text-sm md:text-base space-y-2 px-6">
            <p v-for="(line, idx) in lines" :key="idx">{{ line }}</p>
            <p class="text-gray-600 text-xs mt-6">click anywhere to skip</p>
        </div>
    </div>
</template>