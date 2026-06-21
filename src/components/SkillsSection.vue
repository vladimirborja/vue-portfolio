<script setup>
const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'Vue', 'TailwindCSS', 'Angular', 'Flutter'] },
    { category: 'Backend', items: ['PHP', 'Laravel', 'MySQL'] },
    { category: 'Developer Tools', items: ['Github', 'Git', 'VS Code'] },
    { category: 'CMS', items: ['WordPress', 'Elementor'] },
    { category: 'Design', items: ['Figma', 'Canva'] },
]
</script>

<template>
    <section id="skills" v-scroll-reveal class="py-24 border-t border-green-200/50 dark:border-green-900/40 relative">
        <!-- Ambient background bubble -->
        <div
            class="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-emerald-500/5 blur-[70px] -z-10 pointer-events-none">
        </div>

        <div class="max-w-5xl mx-auto px-6">
            <!-- Badge -->
            <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-200/60 dark:border-green-900/40 bg-green-500/5 dark:bg-green-500/10 text-green-700 dark:text-green-400 font-mono-custom text-xs uppercase tracking-wider mb-6">
                &gt; skills --list
            </div>

            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">What I work
                with</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <div v-for="group in skills" :key="group.category"
                    class="p-6 rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-none transition-all duration-300 group flex flex-col justify-between">

                    <div>
                        <div class="flex items-center gap-3 mb-6">
                            <div
                                class="flex items-center justify-center p-2 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400">
                                <!-- Dynamic Inline Icon representing category -->
                                <svg v-if="group.category === 'Frontend'" xmlns="http://www.w3.org/2000/svg" width="16"
                                    height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="14" x="2" y="3" rx="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                                <svg v-else-if="group.category === 'Backend'" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                                    <line x1="6" y1="6" x2="6.01" y2="6" />
                                    <line x1="6" y1="18" x2="6.01" y2="18" />
                                </svg>
                                <svg v-else-if="group.category === 'CMS'" xmlns="http://www.w3.org/2000/svg" width="16"
                                    height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                                    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                                    <path d="M3 12A9 3 0 0 0 21 12" />
                                </svg>
                                <svg v-else-if="group.category === 'Design'" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.35467 19.5128 5.41944 20.3168 5.01094 20.9018C4.69363 21.3562 4.17983 21.6882 3.60674 21.8491C3.21008 21.9605 3 22 3 22H12Z" />
                                    <circle cx="7.5" cy="10.5" r="1.5" />
                                    <circle cx="11.5" cy="7.5" r="1.5" />
                                    <circle cx="16.5" cy="9.5" r="1.5" />
                                </svg>
                            </div>
                            <h3
                                class="font-mono-custom text-gray-900 dark:text-white text-sm font-bold uppercase tracking-widest">
                                {{ group.category }}
                            </h3>
                        </div>

                        <div class="flex flex-wrap gap-2">
                            <span v-for="item in group.items" :key="item"
                                class="text-xs px-3 py-1.5 rounded-xl bg-gray-100/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/5 text-gray-700 dark:text-gray-300 font-mono-custom hover:scale-105 hover:bg-green-500/10 hover:border-green-500/20 dark:hover:bg-green-500/10 dark:hover:border-green-500/30 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200 cursor-default">
                                {{ item }}
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>