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
    <section id="contact" v-scroll-reveal class="py-24 border-t border-green-900/40">
        <div class="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

            <div>
                <p class="font-mono-custom text-green-500 text-sm mb-2 tracking-widest">&gt; contact --open</p>
                <h2 class="text-3xl font-bold text-white mb-4">Let's work together</h2>
                <p class="text-gray-500 max-w-md mb-10 leading-relaxed">
                    I'm currently open to junior developer roles and freelance projects.
                    Drop me a message and I'll get back to you as soon as I can.
                </p>

                <a :href="`mailto:${email}`" class="font-mono-custom text-xl text-green-400 hover:text-green-300 transition-colors duration-200
                border-b border-green-800 pb-1">
                    {{ email }}
                </a>

                <div class="flex gap-6 mt-10">
                    <a v-for="social in socials" :key="social.label" :href="social.url" target="_blank"
                        class="font-mono-custom text-sm text-gray-600 hover:text-green-400 transition-colors duration-200">
                        / {{ social.label }}
                    </a>
                </div>
            </div>

            <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
                <div>
                    <label
                        class="font-mono-custom text-xs text-green-600 uppercase tracking-widest mb-1 block">Name</label>
                    <input v-model="form.name" type="text" required
                        class="w-full bg-green-950/10 border border-green-900/60 rounded px-3 py-2 text-gray-200 text-sm focus:outline-none focus:border-green-500 transition-colors" />
                </div>
                <div>
                    <label
                        class="font-mono-custom text-xs text-green-600 uppercase tracking-widest mb-1 block">Email</label>
                    <input v-model="form.email" type="email" required
                        class="w-full bg-green-950/10 border border-green-900/60 rounded px-3 py-2 text-gray-200 text-sm focus:outline-none focus:border-green-500 transition-colors" />
                </div>
                <div>
                    <label
                        class="font-mono-custom text-xs text-green-600 uppercase tracking-widest mb-1 block">Message</label>
                    <textarea v-model="form.message" rows="4" required
                        class="w-full bg-green-950/10 border border-green-900/60 rounded px-3 py-2 text-gray-200 text-sm focus:outline-none focus:border-green-500 transition-colors resize-none"></textarea>
                </div>
                <button type="submit"
                    class="font-mono-custom text-sm px-5 py-2.5 bg-green-500 text-black font-bold hover:bg-green-400 transition-colors duration-200 rounded self-start">
                    send message
                </button>
                <p v-if="submitted" class="font-mono-custom text-xs text-green-500">
                    Message noted — since this is a frontend-only form, please also reach out via email above.
                </p>
            </form>

        </div>
    </section>

    <footer class="border-t border-green-900/40 py-6">
        <div class="max-w-5xl mx-auto px-6">
            <p class="font-mono-custom text-xs text-gray-700 text-center">
                &gt; built with Vue 3 + TailwindCSS — {{ new Date().getFullYear() }}
            </p>
        </div>
    </footer>
</template>