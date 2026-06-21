<script setup>
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import BootSequence from './components/BootSequence.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import { useTheme } from './composables/useTheme'

const booted = ref(false)
const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <BootSequence v-if="!booted" @done="booted = true" />
  <div v-show="booted" class="bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>
