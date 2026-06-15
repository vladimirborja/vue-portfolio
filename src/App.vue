<script setup>
import { ref } from 'vue'
import Desktop from './components/Desktop.vue'
import WindowFrame from './components/WindowFrame.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'

const windowConfig = {
  about: { title: 'About.txt', component: HeroSection },
  skills: { title: 'Skills.exe', component: SkillsSection },
  projects: { title: 'Projects', component: ProjectsSection },
  contact: { title: 'Contact.app', component: ContactSection },
}

const openWindows = ref([])

function openWindow(id) {
  if (!openWindows.value.includes(id)) {
    openWindows.value.push(id)
  }
}

function closeWindow(id) {
  openWindows.value = openWindows.value.filter(w => w !== id)
}
</script>

<template>
  <div class="relative">
    <Desktop :open-windows="openWindows" @open="openWindow" />

    <div class="fixed inset-0 pointer-events-none flex items-center justify-center p-6">
      <div v-for="(id, index) in openWindows" :key="id"
        class="pointer-events-auto absolute w-full max-w-2xl max-h-[80vh]"
        :style="{ top: `${10 + index * 4}%`, left: `${10 + index * 4}%`, zIndex: 10 + index }">
        <WindowFrame :title="windowConfig[id].title" @close="closeWindow(id)">
          <component :is="windowConfig[id].component" />
        </WindowFrame>
      </div>
    </div>
  </div>
</template>