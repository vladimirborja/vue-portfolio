<script setup>
defineProps({
    label: { type: String, required: true },
    icon: { type: String, default: '📁' },
})

const emit = defineEmits(['open'])
</script>

<template>
    <button @dblclick="emit('open')"
        class="flex flex-col items-center gap-1 w-20 p-2 rounded hover:bg-green-900/20 focus:bg-green-900/30 transition-colors duration-150 group">
        <span class="text-3xl">{{ icon }}</span>
        <span class="font-mono-custom text-xs text-gray-300 group-hover:text-green-400 text-center leading-tight">
            {{ label }}
        </span>
    </button>
</template>