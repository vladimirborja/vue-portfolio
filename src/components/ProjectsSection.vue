<script setup>
import seseImg from '../assets/images/sese.png'
import ratingBlogImg from '../assets/images/wordpress.jpg'

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
        name: 'Vladimir\'s Rating Blog',
        desc: 'A personalized blog platform built on WordPress focused on reviewing and rating movies, games, or tech products with interactive discussions and custom layout schemes.',
        tags: ['WordPress', 'CMS', 'CSS'],
        link: 'https://vladimirsratingblog5.wordpress.com/',
        status: 'Blog Website',
        image: ratingBlogImg,
    }
]
</script>

<template>
    <section id="projects" v-scroll-reveal class="py-24 border-t border-green-200/50 dark:border-green-900/40 relative">
        <!-- Ambient background bubble -->
        <div
            class="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[90px] -z-10 pointer-events-none">
        </div>

        <div class="max-w-5xl mx-auto px-6">
            <!-- Badge -->
            <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-200/60 dark:border-green-900/40 bg-green-500/5 dark:bg-green-500/10 text-green-700 dark:text-green-400 font-mono-custom text-xs uppercase tracking-wider mb-6">
                &gt; ls ./projects
            </div>

            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">Things I've
                built</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="project in projects" :key="project.name"
                    class="group overflow-hidden rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-none transition-all duration-500 flex flex-col justify-between">

                    <div
                        class="relative w-full h-44 overflow-hidden bg-green-50 dark:bg-green-950/20 border-b border-gray-200/50 dark:border-white/5">
                        <img :src="project.image" :alt="`${project.name} landing page`"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
                        <div
                            class="hidden absolute inset-0 items-center justify-center bg-green-500/5 text-green-600 dark:text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="m18 16 4-4-4-4" />
                                <path d="m6 8-4 4 4 4" />
                                <path d="m14.5 4-5 16" />
                            </svg>
                        </div>
                    </div>

                    <div class="p-6 flex flex-col justify-between flex-1">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <span class="font-mono-custom text-green-600 dark:text-green-400 font-bold text-sm">{{
                                    project.name }}</span>
                                <span
                                    class="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-green-500/10 dark:bg-green-500/10 border border-green-200/30 dark:border-green-500/20 text-green-700 dark:text-green-400 rounded-full">
                                    {{ project.status }}
                                </span>
                            </div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{{ project.desc }}
                            </p>
                            <div class="flex flex-wrap gap-1.5 mb-6">
                                <span v-for="tag in project.tags" :key="tag"
                                    class="text-[10px] font-mono-custom px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 text-gray-500 dark:text-gray-400">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>

                        <a v-if="project.repo" :href="project.repo" target="_blank"
                            class="inline-flex items-center gap-2 font-mono-custom text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors w-fit group/btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-github">
                                <path
                                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            Repository
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-arrow-up-right transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </a>
                        <a v-else-if="project.link" :href="project.link" target="_blank"
                            class="inline-flex items-center gap-2 font-mono-custom text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors w-fit group/btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-globe">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path
                                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            Live Site
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-arrow-up-right transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div
                    class="border border-dashed border-gray-300 dark:border-white/10 hover:border-green-500/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 min-h-[280px]">
                    <div
                        class="w-10 h-10 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                        </svg>
                    </div>
                    <p class="font-mono-custom text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        more projects<br />coming soon
                    </p>
                </div>
            </div>

        </div>
    </section>
</template>