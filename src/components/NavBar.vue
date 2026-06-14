<script setup>
const links = ['about', 'skills', 'projects', 'contact']

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-green-900 bg-black/90 backdrop-blur-sm">
        <div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
            <span class="font-mono-custom text-green-400 font-bold tracking-wider text-sm">
                &gt; dev.portfolio
            </span>
            <ul class="flex gap-6">
                <li v-for="link in links" :key="link">
                    <button @click="scrollTo(link)"
                        class="font-mono-custom text-xs text-gray-400 hover:text-green-400 transition-colors duration-200 uppercase tracking-widest">
                        {{ link }}
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>