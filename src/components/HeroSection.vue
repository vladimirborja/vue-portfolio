<script setup>
import { ref, onMounted } from 'vue'

const displayText = ref('')
const fullText = 'Aspiring Full-Stack Developer.'
let i = 0

onMounted(() => {
    const interval = setInterval(() => {
        displayText.value += fullText[i]
        i++
        if (i >= fullText.length) clearInterval(interval)
    }, 80)
})
</script>

<template>
    <section id="about" class="min-h-screen flex items-center pt-14">
        <div class="max-w-5xl mx-auto px-6 py-24">

            <p class="font-mono-custom text-green-500 text-sm mb-4 tracking-widest">
                &gt; whoami
            </p>

            <h1 class="text-5xl md:text-7xl font-bold text-white leading-tight mb-2">
                Hi, I'm <span class="text-green-400">Karl.</span>
            </h1>

            <h2 class="text-3xl md:text-5xl font-bold text-gray-500 mb-8 min-h-[3rem]">
                {{ displayText }}<span class="animate-pulse text-green-400">_</span>
            </h2>

            <p class="text-gray-400 text-lg max-w-xl leading-relaxed mb-10">
                Fresh Bachelor of Science in Information Technology Major in Web Development graduate passionate about
                building clean, fast, and modern
                web applications. Eager to grow as a developer and contribute to real-world projects.
            </p>

            <div class="flex gap-4 flex-wrap">
                <a href="https://github.com/vladimirborja" target="_blank" class="font-mono-custom text-sm px-5 py-2.5 bg-green-500 text-black font-bold hover:bg-green-400
                transition-colors duration-200 rounded">
                    github.com/vladimirborja
                </a>
                <button @click="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })"
                    class="font-mono-custom text-sm px-5 py-2.5 border border-green-700 text-green-400 hover:bg-green-900/30 transition-colors duration-200 rounded">
                    get in touch
                </button>
            </div>

        </div>
    </section>
</template>