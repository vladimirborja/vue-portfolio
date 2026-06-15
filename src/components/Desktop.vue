<script setup>
import DesktopIcon from './DesktopIcon.vue'

defineProps({
    openWindows: { type: Array, required: true },
})

const emit = defineEmits(['open'])

const icons = [
    { id: 'about', label: 'About.txt', icon: '📄' },
    { id: 'skills', label: 'Skills.exe', icon: '⚙️' },
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'contact', label: 'Contact.app', icon: '✉️' },
]
</script>

<template>
    <div class="min-h-screen bg-[#0a0a0a] relative overflow-hidden">

        <div class="p-6 flex flex-col gap-4 items-start">
            <DesktopIcon v-for="icon in icons" :key="icon.id" :label="icon.label" :icon="icon.icon"
                @open="emit('open', icon.id)" />
        </div>

        <div class="absolute top-6 right-6 font-mono-custom text-xs text-green-700 text-right">
            <p>karl@portfolio:~$</p>
            <p>{{ openWindows.length }} window(s) open</p>
        </div>

    </div>
</template>