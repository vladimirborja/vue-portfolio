<script setup>
const email = 'you@email.com'
const socials = [
    { label: 'github', url: 'https://github.com/yourusername' },
    { label: 'linkedin', url: 'https://linkedin.com/in/yourusername' },
]
</script>

<template>
    <section id="contact" class="py-24 border-t border-green-900/40">
        <div class="max-w-5xl mx-auto px-6">

            <p class="font-mono-custom text-green-500 text-sm mb-2 tracking-widest">&gt; contact --open</p>
            <h2 class="text-3xl font-bold text-white mb-4">Let's work together</h2>
            <p class="text-gray-500 max-w-md mb-10 leading-relaxed">
                I'm currently open to freelance projects and full-time roles.
                Drop me a message and I'll get back to you within 24 hours.
            </p>


            :href="`mailto:${email}`"
            class="font-mono-custom text-xl text-green-400 hover:text-green-300 transition-colors duration-200 border-b
            border-green-800 pb-1"
            >
            {{ email }}
            </a>

            <div class="flex gap-6 mt-10">

                v-for="social in socials"
                :key="social.label"
                :href="social.url"
                target="_blank"
                class="font-mono-custom text-sm text-gray-600 hover:text-green-400 transition-colors duration-200"
                >
                / {{ social.label }}
                </a>
            </div>

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