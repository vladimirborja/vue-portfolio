<script setup>
</script>

<template>
    <section id="about" class="py-24 border-t border-green-200/50 dark:border-green-900/40 relative">
        <!-- Ambient section glow -->
        <div
            class="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[80px] -z-10 pointer-events-none">
        </div>

        <div class="max-w-5xl mx-auto px-6">
            <!-- Badge -->
            <div
                class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200/80 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 font-mono-custom text-xs uppercase tracking-wider mb-6">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                About
            </div>

            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">Who I am</h2>

            <!-- Bento Grid Layout with Staggered Scroll Reveal -->
            <div v-scroll-reveal="{ stagger: 150 }" class="grid grid-cols-1 md:grid-cols-3 gap-6">

                <!-- Card 1: Avatar and Quick Description (Span 2 Columns on desktop) -->
                <div v-card-spotlight
                    class="card-spotlight md:col-span-2 rounded-2xl shadow-xl shadow-gray-100/50 dark:shadow-none reveal-item">
                    <div class="card-spotlight-content p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 group/card bg-white/50 dark:bg-black/40 backdrop-blur-md h-full">
                        <div v-tilt
                            class="relative w-40 h-40 rounded-full flex-shrink-0 flex items-center justify-center p-1.5 transition-all duration-500 group-hover/card:scale-105">
                            <!-- Animating spinning gradient ring around avatar -->
                            <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 dark:from-green-600 dark:to-emerald-400 animate-spin-slow"></div>
                            <div class="absolute inset-0.5 rounded-full bg-white dark:bg-[#0a0a0a]"></div>

                            <div class="relative w-full h-full rounded-full overflow-hidden bg-green-50 dark:bg-green-950/20 flex items-center justify-center border border-green-200/30">
                                <img src="../assets/images/profile.JPG" alt="Karl Vladimir B. Borja"
                                    class="w-full h-full object-cover object-top transition-transform duration-500 group-hover/card:scale-110"
                                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
                            </div>
                        </div>

                        <div class="flex-1 text-center md:text-left">
                            <span class="font-mono-custom text-xs text-green-600 dark:text-green-400 font-bold uppercase tracking-wider">Lead Capstone Dev</span>
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-1 mb-3">Karl Vladimir B. Borja</h3>
                            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                A passionate developer majoring in Web Development. I build functional, high-performance web products that solve real-world problems.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Status Indicator (Span 1 Column) -->
                <div v-card-spotlight
                    class="card-spotlight rounded-2xl shadow-xl shadow-gray-100/50 dark:shadow-none reveal-item">
                    <div class="card-spotlight-content p-6 md:p-8 rounded-2xl flex flex-col justify-between bg-white/50 dark:bg-black/40 backdrop-blur-md h-full">
                        <div>
                            <span class="font-mono-custom text-xs text-gray-400 uppercase tracking-widest block mb-4">Availability</span>
                            <div class="flex items-center gap-3">
                                <span class="relative flex h-3 w-3">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span class="text-lg font-bold text-gray-900 dark:text-white">Open to Opportunities</span>
                            </div>
                            <p class="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mt-2">
                                Ready for junior developer roles and remote freelance projects. Let's build together!
                            </p>
                        </div>

                        <div class="flex gap-4 mt-6">
                            <a href="https://github.com/vladimirborja" target="_blank"
                                class="p-2 rounded-full bg-gray-100 hover:bg-green-500/10 dark:bg-white/5 dark:hover:bg-green-500/10 text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 hover:scale-110 transition-all duration-300"
                                aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/vladimir-borja-03935533b/" target="_blank"
                                class="p-2 rounded-full bg-gray-100 hover:bg-green-500/10 dark:bg-white/5 dark:hover:bg-green-500/10 text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 hover:scale-110 transition-all duration-300"
                                aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vladimirborja013@gmail.com" target="_blank"
                                class="p-2 rounded-full bg-gray-100 hover:bg-green-500/10 dark:bg-white/5 dark:hover:bg-green-500/10 text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 hover:scale-110 transition-all duration-300"
                                aria-label="Email">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail">
                                    <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9" />
                                    <path d="m22 17-5-4-5 4" />
                                    <path d="m2 17 5-4 5 4" />
                                    <path d="m2 6 10 7 10-7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Academics (Span 1 Column) -->
                <div v-card-spotlight
                    class="card-spotlight rounded-2xl shadow-xl shadow-gray-100/50 dark:shadow-none reveal-item">
                    <div class="card-spotlight-content p-6 md:p-8 rounded-2xl flex flex-col bg-white/50 dark:bg-black/40 backdrop-blur-md h-full">
                        <span class="font-mono-custom text-xs text-gray-400 uppercase tracking-widest block mb-4">Milestones</span>

                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <div class="mt-1 flex items-center justify-center p-1.5 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap">
                                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-sm font-bold text-gray-900 dark:text-white">BSIT Degree</h4>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">Major in Web Development</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="mt-1 flex items-center justify-center p-1.5 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar">
                                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-sm font-bold text-gray-900 dark:text-white">Graduated</h4>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">April 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Story (Span 2 Columns) -->
                <div v-card-spotlight
                    class="card-spotlight md:col-span-2 rounded-2xl shadow-xl shadow-gray-100/50 dark:shadow-none reveal-item">
                    <div class="card-spotlight-content p-6 md:p-8 rounded-2xl flex flex-col bg-white/50 dark:bg-black/40 backdrop-blur-md h-full">
                        <span class="font-mono-custom text-xs text-gray-400 uppercase tracking-widest block mb-4">Background</span>
                        <div class="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            <p>
                                I'm a fresh Information Technology graduate who served as lead developer on my Capstone project, guiding my team to engineer a real-world web platform. I focus heavily on writing clean, reusable, and performant code.
                            </p>
                            <p>
                                I have a deep passion for full-stack engineering, modern frontend frameworks (such as Vue 3), and robust databases. Currently growing my capabilities through company contracts and creative freelance opportunities.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>