<script setup>
import { ref } from 'vue'

const email = 'vladimirborja013@gmail.com'
const socials = [
    { label: 'github', url: 'https://github.com/vladimirborja' },
    { label: 'linkedin', url: 'https://www.linkedin.com/in/vladimir-borja-03935533b/' },
]

const form = ref({ name: '', email: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
    submitted.value = true
    setTimeout(() => { submitted.value = false }, 4000)
    form.value = { name: '', email: '', message: '' }
}
</script>

<template>
    <section id="contact" class="py-24 border-t border-green-200/50 dark:border-green-900/40 relative">
        <!-- Ambient background glow bubble -->
        <div
            class="absolute bottom-12 right-12 w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[90px] -z-10 pointer-events-none">
        </div>

        <div v-scroll-reveal="{ stagger: 150 }" class="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div class="reveal-item">
                <!-- Badge -->
                <div
                    class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200/80 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 font-mono-custom text-xs uppercase tracking-wider mb-6">
                    <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Contact
                </div>

                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Let's work
                    together</h2>
                <p class="text-gray-600 dark:text-gray-400 max-w-md mb-10 leading-relaxed text-sm">
                    I'm currently open to junior developer roles, remote contract positions, and freelance projects.
                    Let's discuss how we can build something amazing.
                </p>

                <div class="flex gap-4 mt-12">
                    <a v-for="social in socials" :key="social.label" :href="social.url" target="_blank"
                        class="p-2.5 rounded-xl bg-gray-100 hover:bg-green-500/10 dark:bg-white/5 dark:hover:bg-green-500/10 text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 hover:scale-105 transition-all duration-300 flex items-center justify-center"
                        aria-label="Social Link">
                        <svg v-if="social.label === 'github'" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github">
                            <path
                                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <svg v-else-if="social.label === 'linkedin'" xmlns="http://www.w3.org/2000/svg" width="16"
                            height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vladimirborja013@gmail.com" target="_blank"
                        class="p-2.5 rounded-xl bg-gray-100 hover:bg-green-500/10 dark:bg-white/5 dark:hover:bg-green-500/10 text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 hover:scale-105 transition-all duration-300 flex items-center justify-center"
                        aria-label="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-mail">
                            <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9" />
                            <path d="m22 17-5-4-5 4" />
                            <path d="m2 17 5-4 5 4" />
                            <path d="m2 6 10 7 10-7" />
                        </svg>
                    </a>
                </div>
            </div>

            <form @submit.prevent="handleSubmit" v-card-spotlight
                class="card-spotlight rounded-2xl shadow-xl shadow-gray-100/50 dark:shadow-none reveal-item">
                
                <div class="card-spotlight-content p-6 md:p-8 rounded-2xl bg-white/50 dark:bg-black/40 backdrop-blur-md flex flex-col gap-5">
                    <div class="relative group/input">
                        <label
                            class="font-mono-custom text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest block mb-2 transition-colors group-focus-within/input:text-green-600 dark:group-focus-within/input:text-green-400">Name</label>
                        <input v-model="form.name" type="text" required
                            class="w-full bg-gray-50/50 dark:bg-[#080808]/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300" />
                    </div>
                    <div class="relative group/input">
                        <label
                            class="font-mono-custom text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest block mb-2 transition-colors group-focus-within/input:text-green-600 dark:group-focus-within/input:text-green-400">Email</label>
                        <input v-model="form.email" type="email" required
                            class="w-full bg-gray-50/50 dark:bg-[#080808]/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300" />
                    </div>
                    <div class="relative group/input">
                        <label
                            class="font-mono-custom text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest block mb-2 transition-colors group-focus-within/input:text-green-600 dark:group-focus-within/input:text-green-400">Message</label>
                        <textarea v-model="form.message" rows="4" required
                            class="w-full bg-gray-50/50 dark:bg-[#080808]/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 resize-none"></textarea>
                    </div>
                    <button type="submit"
                        class="group font-mono-custom text-xs uppercase tracking-widest px-6 py-3.5 bg-green-600 hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-400 text-white dark:text-black font-bold transition-all duration-300 rounded-xl shadow-lg shadow-green-600/10 dark:shadow-green-500/10 hover:shadow-green-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                        send message
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                            class="transition-transform duration-300 group-hover:translate-x-0.5">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polyline points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                    </button>
                    <p v-if="submitted" class="font-mono-custom text-[10px] text-green-600 dark:text-green-400 text-center animate-fade-in">
                        Message noted — since this is a frontend-only form, please also reach out via email above.
                    </p>
                </div>
            </form>
        </div>
    </section>

    <footer class="border-t border-green-200/50 dark:border-green-900/40 py-6">
        <div class="max-w-5xl mx-auto px-6">
            <p class="font-mono-custom text-xs text-gray-600 dark:text-gray-500 text-center">
                &#169; Karl Vladimir B. Borja. All Rights Reserved. — {{ new Date().getFullYear() }}
            </p>
        </div>
    </footer>
</template>