<script setup>
const skills = [
    { category: 'Frontend', items: ['Vue 3', 'React', 'TailwindCSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Vite', 'VS Code'] },
    { category: 'Learning', items: ['TypeScript', 'Docker', 'AWS', 'Next.js'] },
]
</script>

<template>
    <section id="skills" class="py-24 border-t border-green-900/40">
        <div class="max-w-5xl mx-auto px-6">

            <p class="font-mono-custom text-green-500 text-sm mb-2 tracking-widest">&gt; skills --list</p>
            <h2 class="text-3xl font-bold text-white mb-12">What I work with</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div v-for="group in skills" :key="group.category"
                    class="border border-green-900/60 bg-green-950/10 rounded-lg p-5 hover:border-green-600/50 transition-colors duration-300">
                    <h3 class="font-mono-custom text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
                        {{ group.category }}
                    </h3>
                    <ul class="space-y-2">
                        <li v-for="item in group.items" :key="item"
                            class="flex items-center gap-2 text-gray-400 text-sm">
                            <span class="text-green-600 text-xs">▸</span>
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
</template>