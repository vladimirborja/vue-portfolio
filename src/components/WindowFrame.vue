<script setup>
defineProps({
    title: { type: String, required: true },
})

const emit = defineEmits(['close', 'focus'])
</script>

<template>
    <div class="bg-[#0d0d0d] border border-green-900/60 rounded-lg shadow-2xl overflow-hidden flex flex-col"
        @mousedown="emit('focus')">
        <div class="flex items-center justify-between px-3 py-2 bg-[#111] border-b border-green-900/60 cursor-default">
            <span class="font-mono-custom text-xs text-green-400 tracking-wider">
                {{ title }}
            </span>
            <button @click="emit('close')"
                class="font-mono-custom text-xs text-gray-500 hover:text-red-400 transition-colors duration-150 w-5 h-5 flex items-center justify-center rounded hover:bg-red-900/30"
                aria-label="Close window">
                ✕
            </button>
        </div>
        <div class="flex-1 overflow-y-auto p-5">
            <slot />
        </div>
    </div>
</template>