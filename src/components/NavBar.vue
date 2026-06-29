<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import GlassDock from './ui/GlassDock.vue'
import { useTheme } from '../composables/useTheme'

const activeSection = ref('')
const { isDark, toggleTheme } = useTheme()

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const dockItems = computed(() => [
  { title: 'Home', id: 'hero', icon: 'home', onClick: () => scrollTo('hero') },
  { title: 'About', id: 'about', icon: 'about', onClick: () => scrollTo('about') },
  { title: 'Skills', id: 'skills', icon: 'skills', onClick: () => scrollTo('skills') },
  { title: 'Projects', id: 'projects', icon: 'projects', onClick: () => scrollTo('projects') },
  { title: 'Contact', id: 'contact', icon: 'contact', onClick: () => scrollTo('contact') },
  {
    title: isDark.value ? 'Light Mode' : 'Dark Mode',
    id: 'theme',
    icon: isDark.value ? 'sun' : 'moon',
    onClick: (event) => toggleTheme(event),
  },
])

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      })
    },
    { root: null, rootMargin: '-30% 0px -60% 0px', threshold: 0 },
  )

  ;['hero', 'about', 'skills', 'projects', 'contact'].forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <nav class="fixed top-18 left-1/2 -translate-x-1/2 z-50">
    <GlassDock
      :items="dockItems"
      :active-id="activeSection"
      dock-class-name="border-gray-200/50 dark:border-white/10 shadow-gray-200/20 dark:shadow-black/40"
    />
  </nav>
</template>
