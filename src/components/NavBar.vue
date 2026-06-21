<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const activeSection = ref('')

const links = [
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' }
]

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

let observer = null

onMounted(() => {
    const options = {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
    }

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id
            }
        })
    }, options)

    const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact']
    sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
    })
})

onUnmounted(() => {
    if (observer) observer.disconnect()
})
</script>

<template>
    <div class="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 rounded-full border border-gray-200/50 dark:border-white/10 bg-white/70 dark:bg-black/75 backdrop-blur-xl shadow-2xl shadow-gray-200/20 dark:shadow-black/40 transition-all duration-300">
        <button @click="scrollTo('hero')" 
            class="relative group p-2.5 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-100/50 dark:hover:bg-white/5"
            aria-label="Scroll to top">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal">
                <polyline points="4 17 10 11 4 5"/>
                <line x1="12" y1="19" x2="20" y2="19"/>
            </svg>
            <span class="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-900 dark:bg-gray-50 text-[10px] text-gray-50 dark:text-gray-900 font-mono-custom tracking-widest uppercase opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 shadow-lg border border-gray-800 dark:border-gray-200 whitespace-nowrap">Home</span>
        </button>

        <div class="h-4 w-px bg-gray-200 dark:bg-white/10 mx-1"></div>

        <nav class="flex items-center gap-1">
            <button v-for="link in links" :key="link.id" @click="scrollTo(link.id)"
                class="relative group p-2.5 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center"
                :class="activeSection === link.id 
                    ? 'text-green-600 dark:text-green-400 bg-green-500/10 dark:bg-green-500/10 font-bold' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-100/50 dark:hover:bg-white/5'"
                :aria-label="`Scroll to ${link.name}`">
                
                <!-- About Icon -->
                <svg v-if="link.id === 'about'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                </svg>

                <!-- Skills Icon -->
                <svg v-else-if="link.id === 'skills'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-2">
                    <path d="m18 16 4-4-4-4"/>
                    <path d="m6 8-4 4 4 4"/>
                    <path d="m14.5 4-5 16"/>
                </svg>

                <!-- Projects Icon -->
                <svg v-else-if="link.id === 'projects'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-git-2">
                    <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"/>
                    <path d="M16 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
                    <circle cx="20" cy="19" r="1"/>
                    <path d="M17.5 17.5 19 19"/>
                </svg>

                <!-- Contact Icon -->
                <svg v-else-if="link.id === 'contact'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>

                <span class="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-900 dark:bg-gray-50 text-[10px] text-gray-50 dark:text-gray-900 font-mono-custom tracking-widest uppercase opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 shadow-lg border border-gray-800 dark:border-gray-200 whitespace-nowrap">
                    {{ link.name }}
                </span>
            </button>
        </nav>

        <div class="h-4 w-px bg-gray-200 dark:bg-white/10 mx-1"></div>

        <ThemeToggle class="hover:scale-105 transition-transform duration-300" />
    </div>
</template>