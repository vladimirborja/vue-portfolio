<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FlipText from './ui/FlipText.vue'

const bgTransform1 = ref('translate3d(0, 0, 0)')
const bgTransform2 = ref('translate3d(0, 0, 0)')

const supportsSDA = ref(true)
const scrollY = ref(0)

const handleMouseMove = (e) => {
    const x = e.clientX - window.innerWidth / 2
    const y = e.clientY - window.innerHeight / 2

    bgTransform1.value = `translate3d(${x * 0.04}px, ${y * 0.04}px, 0)`
    bgTransform2.value = `translate3d(${x * -0.025}px, ${y * -0.025}px, 0)`
}

const handleScroll = () => {
    scrollY.value = window.scrollY
}

onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)

    supportsSDA.value = typeof CSS !== 'undefined' &&
        CSS.supports &&
        CSS.supports('(animation-timeline: view()) and (animation-range: entry)')

    const prefersReducedMotion = typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!supportsSDA.value && !prefersReducedMotion) {
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
    }
})

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    if (!supportsSDA.value) {
        window.removeEventListener('scroll', handleScroll)
    }
})

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <section id="hero" class="relative min-h-screen flex items-center pt-36 lg:pt-20 overflow-hidden z-0">
        <div class="absolute inset-0 -z-10 bg-cover bg-center"
            :style="!supportsSDA ? { transform: `translateY(${scrollY * 0.3}px)` } : {}"></div>

        <div class="absolute top-1/4 left-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-green-500/10 dark:bg-green-500/5 blur-[80px] md:blur-[120px] -z-10 animate-pulse pointer-events-none"
            :style="{ transform: `translate(-50%, -50%) ${bgTransform1}` }">
        </div>
        <div class="absolute bottom-1/4 right-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-emerald-600/10 dark:bg-emerald-950/20 blur-[100px] md:blur-[150px] -z-10 animate-pulse pointer-events-none"
            :style="{ transform: `translate(50%, 50%) ${bgTransform2}`, animationDuration: '8s' }"></div>

        <div class="max-w-7xl mx-auto px-6 py-1 w-full relative flex flex-col-reverse lg:flex-row items-center gap-12">

            <div class="flex-1 w-full text-left">
                <div
                    class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200/80 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 font-mono-custom text-xs uppercase tracking-wider mb-6">
                    <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Karl Vladimir B. Borja
                </div>

                <h1
                    class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-2 tracking-tight">
                    <FlipText text="Hi, I'm" class="mr-3" :duration="2.8" />
                    <FlipText text="Karl."
                        class="emerald-500 dark:from-green-400 dark:to-emerald-300 text-green-600 dark:text-green-400"
                        :duration="2.8" />
                </h1>

                <h2 class="text-3xl md:text-5xl font-bold text-gray-600 dark:text-gray-400 mb-8 tracking-tight">
                    <FlipText text="A Web Developer." :duration="3.2" />
                </h2>

                <p class="text-gray-700 dark:text-gray-400 text-lg max-w-xl leading-relaxed mb-12">
                    Fresh Bachelor of Science in Information Technology graduate, Major in Web Development.
                    I build clean, fast, and modern web applications — eager to grow and contribute to
                    real-world projects.
                </p>

                <div class="flex gap-4 flex-wrap">
                    <button @click="scrollTo('projects')"
                        class="group font-mono-custom text-xs uppercase tracking-widest px-6 py-3.5 border border-gray-300 dark:border-white/10 hover:border-green-500 dark:hover:border-green-500 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 bg-white/50 dark:bg-white/5 backdrop-blur hover:bg-gray-100 dark:hover:bg-white/15 transition-all duration-300 rounded-full hover:-translate-y-0.5 flex items-center gap-2">
                        view my work
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                            class="transition-transform duration-300 group-hover:translate-y-0.5">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </button>

                    <button @click="scrollTo('contact')"
                        class="group font-mono-custom text-xs uppercase tracking-widest px-6 py-3.5 border border-gray-300 dark:border-white/10 hover:border-green-500 dark:hover:border-green-500 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 bg-white/50 dark:bg-white/5 backdrop-blur hover:bg-gray-100 dark:hover:bg-white/15 transition-all duration-300 rounded-full hover:-translate-y-0.5 flex items-center gap-2">
                        get in touch
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                            class="transition-transform duration-300 group-hover:translate-x-0.5">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>

                    <a href="/karl-borja-cv.pdf" target="_blank" rel="noopener noreferrer"
                        class="group font-mono-custom text-xs uppercase tracking-widest px-6 py-3.5 border border-gray-300 dark:border-white/10 hover:border-green-500 dark:hover:border-green-500 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 bg-white/50 dark:bg-white/5 backdrop-blur hover:bg-gray-100 dark:hover:bg-white/15 transition-all duration-300 rounded-full hover:-translate-y-0.5 flex items-center gap-2">
                        view cv
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                            class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="flex-shrink-0 relative group/hero-avatar w-full lg:w-auto flex justify-center lg:ml-auto">
                <!-- Rotating glow ring -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg class="absolute w-[calc(100%+32px)] h-[calc(100%+32px)] animate-spin-slow"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#22c55e" stop-opacity="0" />
                                <stop offset="50%" stop-color="#22c55e" stop-opacity="1" />
                                <stop offset="100%" stop-color="#4ade80" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                        <circle
                            cx="50" cy="50" r="47"
                            stroke="url(#glowGradient)"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-dasharray="80 220"
                            fill="none"
                        />
                    </svg>
                    <!-- Outer faint ring -->
                    <svg class="absolute w-[calc(100%+48px)] h-[calc(100%+48px)] animate-spin-slow"
                        style="animation-direction: reverse; animation-duration: 18s;"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="50" cy="50" r="47"
                            stroke="#22c55e"
                            stroke-width="0.5"
                            stroke-linecap="round"
                            stroke-dasharray="30 270"
                            stroke-opacity="0.3"
                            fill="none"
                        />
                    </svg>
                </div>

                <div v-card-spotlight v-tilt
                    class="card-spotlight relative w-72 h-72 sm:w-80 sm:h-80 md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px] rounded-full shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                    <div
                        class="card-spotlight-content w-full h-full rounded-full p-1 bg-white/50 dark:bg-black/40 backdrop-blur-md overflow-hidden">
                        <div
                            class="relative w-full h-full rounded-full overflow-hidden bg-green-50 dark:bg-green-950/20 flex items-center justify-center border border-green-200/30">
                            <img src="../assets/images/profile.JPG" alt="Karl Vladimir B. Borja"
                                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover/hero-avatar:scale-105"
                                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>