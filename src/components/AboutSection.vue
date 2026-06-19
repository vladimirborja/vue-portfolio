<script setup>
</script>

<template>
    <section id="about" class="py-24 border-t border-green-900/40">
        <div class="max-w-5xl mx-auto px-6">

            <p class="font-mono-custom text-green-500 text-sm mb-2 tracking-widest">&gt; about --me</p>
            <h2 class="text-3xl font-bold text-white mb-12">Who I am</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div class="flex justify-center md:justify-start">
                    <div
                        class="w-64 h-64 rounded-lg border-2 border-green-700/50 bg-green-950/20 flex items-center justify-center overflow-hidden">
                        <img src="/src/assets/profile.jpg" alt="Karl Vladimir B. Borja"
                            class="w-full h-full object-cover"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
                        <span class="hidden font-mono-custom text-xs text-green-700 text-center px-4">
                            [ profile photo placeholder ]<br />add to src/assets/profile.jpg
                        </span>
                    </div>
                </div>

                <div>
                    <h3 class="font-mono-custom text-green-400 text-sm font-bold uppercase tracking-widest mb-3">
                        Background
                    </h3>
                    <p class="text-gray-400 leading-relaxed mb-6">
                        I'm a fresh graduate with a Bachelor of Science in Information Technology,
                        majoring in Web Development. During my studies, I served as lead developer on
                        my capstone project, working with a team to design and build a real-world
                        web platform from the ground up.
                    </p>
                    <p class="text-gray-400 leading-relaxed mb-6">
                        I'm passionate about clean code, modern frontend frameworks, and building
                        things that solve actual problems. Currently growing my skills in full-stack
                        development while working on freelance and company projects.
                    </p>

                    <div class="font-mono-custom text-xs text-gray-600 space-y-1 mt-6">
                        <p><span class="text-green-700">degree:</span> BS Information Technology — Web Development</p>
                        <p><span class="text-green-700">graduated:</span> April 2026</p>
                        <p><span class="text-green-700">status:</span> open to opportunities</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>