<script setup>
const skills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
]

const certifications = [
    { name: 'Cyber Threat Management', issuer: 'Cisco', image: '/src/assets/images/cyber_threat.jpg' },
    { name: 'Cybersecurity Essentials', issuer: 'Cisco', image: '/src/assets/images/cybersec.jpg' },
    { name: 'Introduction to Networks', issuer: 'Cisco', image: '/src/assets/images/itn.jpg' },
    { name: 'Legacy JavaScript Algorithms and Data Structures V7', issuer: 'freeCodeCamp', image: '/src/assets/images/js_algo.jpg' },
    { name: 'Legacy Responsive Web Design V8', issuer: 'freeCodeCamp', image: '/src/assets/images/legacy_web_design.jpg' },
    { name: 'SEO Certified', issuer: 'HubSpot', image: '/src/assets/images/SEO.jpg' },
    { name: 'HubSpot SEO II Certified', issuer: 'HubSpot', image: '/src/assets/images/SEO2.jpg' },
]
</script>

<template>
    <section id="skills" v-scroll-reveal class="py-24 border-t border-green-200/50 dark:border-green-900/40 relative">
        <div class="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-emerald-500/5 blur-[70px] -z-10 pointer-events-none"></div>

        <div class="max-w-5xl mx-auto px-6">

            <!-- Skills -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200/80 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 font-mono-custom text-xs uppercase tracking-wider mb-6">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Skills
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">What I work with</h2>

            <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-4">
                <div v-for="skill in skills" :key="skill.name"
                    class="flex flex-col items-center gap-2 px-3 py-4 rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md hover:border-green-500/50 hover:bg-green-500/5 hover:scale-105 transition-all duration-300 cursor-default">
                    <img :src="skill.icon" :alt="skill.name" class="w-8 h-8 object-contain" />
                    <span class="font-mono-custom text-[10px] text-gray-600 dark:text-gray-400 text-center leading-tight">{{ skill.name }}</span>
                </div>
            </div>

            <!-- Certifications -->
            <div class="mt-20">
                <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200/80 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 font-mono-custom text-xs uppercase tracking-wider mb-6">
                    <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Certifications
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">What I've earned</h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="cert in certifications" :key="cert.name"
                        class="group rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md overflow-hidden hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300">
                        <div class="w-full h-48 overflow-hidden bg-gray-100 dark:bg-white/5">
                            <img
                                :src="cert.image"
                                :alt="cert.name"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div class="p-4">
                            <p class="font-mono-custom text-[10px] text-green-600 dark:text-green-400 uppercase tracking-widest mb-1">{{ cert.issuer }}</p>
                            <h3 class="text-sm font-bold text-gray-900 dark:text-white leading-snug">{{ cert.name }}</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>