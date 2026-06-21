<script setup>
const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Vue', 'TailwindCSS'] },
    { category: 'Backend', items: ['PHP', 'Laravel', 'MySQL'] },
    { category: 'CMS', items: ['WordPress'] },
    { category: 'Design', items: ['Figma', 'Canva'] },
]
</script>

<template>
    <section id="skills" v-scroll-reveal class="py-24 border-t border-green-200/50 dark:border-green-900/40">
        <div class="max-w-5xl mx-auto px-6">

            <h2 class="font-mono-custom text-green-600 dark:text-green-500 text-2xl mb-5 tracking-widest">What I work
                with</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div v-for="group in skills" :key="group.category"
                    class="border border-green-200/60 dark:border-green-900/60 bg-green-50/10 dark:bg-green-950/10 rounded-lg p-5 hover:border-green-600/50 dark:hover:border-green-500 transition-colors duration-300">
                    <h3
                        class="font-mono-custom text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
                        {{ group.category }}
                    </h3>
                    <ul class="space-y-2">
                        <li v-for="item in group.items" :key="item"
                            class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                            <span class="text-green-600 dark:text-green-500 text-xs">▸</span>
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
</template>