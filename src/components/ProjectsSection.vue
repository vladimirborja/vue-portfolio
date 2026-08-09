<script setup>
import { ref, computed } from 'vue'
import FlipText from './ui/FlipText.vue'
import DiagonalCarousel from './ui/DiagonalCarousel.vue'
import seseImg from '../assets/images/sese.png'
import ratingBlogImg from '../assets/images/wordpress.jpg'
import portfolioImg from '../assets/images/web-portfolio.png'
import jbSuarezImg from '../assets/images/jb-suarez-calc.png'
import paywallCalcImg from '../assets/images/calcpro-paywall.png'

const activeIndex = ref(0)

const projects = [
    {
        name: 'SESE',
        desc: 'A web-based community platform highlighting pet-inclusive establishments in Angeles City, helping pet owners easily locate animal-friendly spaces. Built as a capstone project — served as lead developer for a team-built platform.',
        tags: ['PHP', 'MySQL', 'CSS', 'JavaScript'],
        repo: 'https://github.com/vladimirborja/Capstone_SESE',
        status: 'Capstone Project',
        image: seseImg,
    },
    {
        name: 'JB Suarez Meme Calculator',
        desc: 'A desktop calculator application built with Python and Tkinter featuring dark-mode emerald styling. When evaluating 2 + 2 = 4, it suppresses the numerical output and automatically opens and autoplays a JB Suarez meme video.',
        tags: ['Python', 'Tkinter', 'AppleScript', 'Desktop App'],
        repo: 'https://github.com/vladimirborja/calculator',
        status: 'Personal Project',
        image: jbSuarezImg,
    },
    {
        name: 'CalcPro Paywall Calculator',
        desc: 'A single-file HTML/CSS/JS web calculator with custom dark emerald glassmorphism aesthetics. When pressing equal (=), it displays a humorously strict paywall modal ("pili na hayop") offering monthly (₱499.99) and yearly (₱4,999.99) subscription plans with randomized failure messages.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
        repo: 'https://github.com/vladimirborja/calculator',
        status: 'Personal Project',
        image: paywallCalcImg,
    },
    {
        name: "Vladimir's Rating Blog",
        desc: 'A personalized blog platform built on WordPress focused on reviewing and rating movies, games, or tech products with interactive discussions and custom layout schemes.',
        tags: ['WordPress', 'CMS', 'CSS'],
        link: 'https://vladimirsratingblog5.wordpress.com/',
        status: 'Blog Website',
        image: ratingBlogImg,
    },
    {
        name: 'Personal Portfolio',
        desc: 'A modern personal portfolio website built with Vue 3 and TailwindCSS, featuring a dark/light mode toggle, animated background, perspective carousel for certifications, and a contact form powered by EmailJS.',
        tags: ['Vue 3', 'TailwindCSS', 'Vite', 'Vengeance UI'],
        repo: 'https://github.com/vladimirborja/vue-portfolio',
        link: 'https://vladimirborja.vercel.app/',
        status: 'Personal Project',
        image: portfolioImg,
    },
    {
        name: 'Philippine Weather App',
        desc: 'A modern, dynamic Vue 3 weather application tailored for Philippine cities with real-time conditions, location auto-detection, hourly & 5-day forecasts, severe weather warnings, and unit toggling.',
        tags: ['Vue 3', 'TailwindCSS', 'Vite', 'OpenWeather API'],
        repo: 'https://github.com/vladimirborja/weather-app',
        link: 'http://localhost:5173',
        status: 'Personal Project',
        image: portfolioImg,
    }
]

const carouselItems = computed(() =>
    projects.map((project) => ({
        src: project.image,
        title: project.name,
        alt: `${project.name} project screenshot`,
    })),
)

const activeProject = computed(() => projects[activeIndex.value])
</script>

<template>
    <section id="projects" class="py-24 border-t border-green-200/50 dark:border-green-900/40 relative">
        <div
            class="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[90px] -z-10 pointer-events-none">
        </div>

        <div class="max-w-5xl mx-auto px-6">
            <div
                class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200/80 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 font-mono-custom text-xs uppercase tracking-wider mb-6">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Projects
            </div>

            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">
                <FlipText text="Things I've built" :duration="2.8" />
            </h2>

            <div
                class="rounded-3xl border border-gray-200/60 dark:border-white/10 bg-neutral-100/80 dark:bg-neutral-950/80 overflow-hidden">
                <div class="relative h-[560px] md:h-[640px] bg-neutral-200/50 dark:bg-neutral-900/60">
                    <DiagonalCarousel :items="carouselItems" :loop="true" :slide-size="420" :slide-height="480"
                        :rotation-step="22" :vertical-step="90" :inactive-scale="0.65" track-top="46%"
                        class-name="h-full min-h-0"
                        label-class-name="text-neutral-700 dark:text-neutral-200 font-medium"
                        controls-class-name="border-neutral-300/80 dark:border-white/10"
                        @active-index-change="activeIndex = $event" />
                </div>

                <div
                    class="border-t border-gray-200/60 dark:border-white/10 bg-white/50 dark:bg-black/40 backdrop-blur-md p-6 md:p-8">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                        <span class="font-mono-custom text-green-600 dark:text-green-400 font-bold text-lg">
                            {{ activeProject.name }}
                        </span>
                        <span
                            class="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-green-500/10 border border-green-200/30 dark:border-green-500/20 text-green-700 dark:text-green-400 rounded-full w-fit">
                            {{ activeProject.status }}
                        </span>
                    </div>

                    <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                        {{ activeProject.desc }}
                    </p>

                    <div class="flex flex-wrap gap-1.5 mb-6">
                        <span v-for="tag in activeProject.tags" :key="tag"
                            class="text-[10px] font-mono-custom px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 text-gray-500 dark:text-gray-400">
                            {{ tag }}
                        </span>
                    </div>

                    <div class="flex items-center gap-4">
                        <a v-if="activeProject.repo" :href="activeProject.repo" target="_blank"
                            class="inline-flex items-center gap-2 font-mono-custom text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors w-fit group/btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path
                                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            Repository
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </a>

                        <a v-if="activeProject.link" :href="activeProject.link" target="_blank"
                            class="inline-flex items-center gap-2 font-mono-custom text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors w-fit group/btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path
                                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            Live Site
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>