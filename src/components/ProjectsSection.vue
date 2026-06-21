<script setup>
const projects = [
    {
        name: 'SESE',
        desc: 'A web-based community platform highlighting pet-inclusive establishments in Angeles City, helping pet owners easily locate animal-friendly spaces. Built as a capstone project — served as lead developer for a team-built platform.',
        tags: ['PHP', 'MySQL', 'CSS', 'JavaScript'],
        repo: 'https://github.com/vladimirborja/Capstone_SESE',
        status: 'Capstone Project',
        image: '/src/assets/images/sese.png',
    },
]
</script>

<template>
    <section id="projects" v-scroll-reveal class="py-24 border-t border-green-200/50 dark:border-green-900/40">
        <div class="max-w-5xl mx-auto px-6">

            <p class="font-mono-custom text-green-600 dark:text-green-500 text-sm mb-2 tracking-widest">&gt; ls ./projects</p>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12">Things I've built</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="project in projects" :key="project.name"
                    class="border border-green-200/60 dark:border-green-900/60 bg-green-50/10 dark:bg-green-950/10 rounded-lg overflow-hidden flex flex-col justify-between hover:border-green-600/50 dark:hover:border-green-500 transition-colors duration-300">
                    <div class="w-full h-40 bg-green-50/30 dark:bg-green-950/30 border-b border-green-200/60 dark:border-green-900/60 overflow-hidden">
                        <img :src="project.image" :alt="`${project.name} landing page`"
                            class="w-full h-full object-cover"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
                        <span
                            class="hidden w-full h-full items-center justify-center font-mono-custom text-xs text-green-700 dark:text-green-400 text-center px-4">
                        </span>
                    </div>

                    <div class="p-6 flex flex-col justify-between flex-1">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="font-mono-custom text-green-600 dark:text-green-400 font-bold text-sm">{{ project.name
                                }}</span>
                                <span
                                    class="font-mono-custom text-xs px-2 py-0.5 bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900/50 rounded">
                                    {{ project.status }}
                                </span>
                            </div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{{ project.desc }}</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span v-for="tag in project.tags" :key="tag"
                                    class="font-mono-custom text-xs px-2 py-0.5 bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900/50 rounded">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                        <a :href="project.repo" target="_blank"
                            class="font-mono-custom text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                            / repo
                        </a>
                    </div>
                </div>

                <div class="border border-dashed border-green-200 dark:border-green-900/40 rounded-lg p-6 flex items-center justify-center">
                    <p class="font-mono-custom text-xs text-gray-500 dark:text-gray-500 text-center">
                        more projects<br />coming soon
                    </p>
                </div>
            </div>

        </div>
    </section>
</template>