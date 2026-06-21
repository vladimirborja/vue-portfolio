<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import BootSequence from './components/BootSequence.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'

const booted = ref(false)
</script>

<template>
  <BootSequence v-if="!booted" @done="booted = true" />
  <div v-show="booted" class="bg-[#0a0a0a] min-h-screen">
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
