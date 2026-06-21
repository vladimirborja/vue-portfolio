<script setup>
import { ref, onMounted } from 'vue'

const displayText = ref('')
const fullText = 'Full-Stack Developer.'
let i = 0

onMounted(() => {
    const interval = setInterval(() => {
        displayText.value += fullText[i]
        i++
        if (i >= fullText.length) clearInterval(interval)
    }, 80)
})

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <section id="hero" class="relative min-h-screen flex items-center pt-14 overflow-hidden z-0">
        <!-- Light/Dark dynamic background layer with smooth transition -->
        <div class="absolute inset-0 -z-10 bg-cover bg-center transition-all duration-300 hero-bg"></div>
        <div class="max-w-5xl mx-auto px-6 py-24 w-full">

            <p class="font-mono-custom text-green-600 dark:text-green-500 text-sm mb-4 tracking-widest">
                &gt; whoami
            </p>

            <h1 class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
                Hi, I'm <span class="text-green-600 dark:text-green-400">Karl.</span>
            </h1>

            <h2 class="text-3xl md:text-5xl font-bold text-gray-600 dark:text-gray-500 mb-8 min-h-[3rem]">
                {{ displayText }}<span class="animate-pulse text-green-600 dark:text-green-400">_</span>
            </h2>

            <p class="text-gray-700 dark:text-gray-400 text-lg max-w-xl leading-relaxed mb-10">
                Fresh Bachelor of Science in Information Technology graduate, Major in Web Development.
                I build clean, fast, and modern web applications — eager to grow and contribute to
                real-world projects.
            </p>

            <div class="flex gap-4 flex-wrap">
                <button @click="scrollTo('skills')"
                    class="font-mono-custom text-sm px-5 py-2.5 bg-green-600 dark:bg-green-500 text-white dark:text-black font-bold hover:bg-green-500 dark:hover:bg-green-400 transition-colors duration-200 rounded">
                    view my work
                </button>
                <button @click="scrollTo('contact')"
                    class="font-mono-custom text-sm px-5 py-2.5 border border-green-600 dark:border-green-700 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200 rounded">
                    get in touch
                </button>
            </div>

        </div>
    </section>
</template>