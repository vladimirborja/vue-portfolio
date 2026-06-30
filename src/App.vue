<script setup>
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import BootSequence from './components/BootSequence.vue'
import AuroraBackground from './components/AuroraBackground.vue'
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
  <AuroraBackground v-show="booted" />
  <div v-show="booted" class="bg-transparent min-h-screen transition-colors duration-300 relative z-10">
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