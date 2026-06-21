import { ref } from 'vue'

const isDark = ref(true)

function applyTheme() {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function initTheme() {
  const saved = localStorage.getItem('theme')
  isDark.value = saved ? saved === 'dark' : true
  applyTheme()
}

function toggleTheme() {
  isDark.value = !isDark.value
  applyTheme()
}

export function useTheme() {
  return { isDark, toggleTheme, initTheme }
}