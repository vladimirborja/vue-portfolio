<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  image: { type: String, default: null },
  title: { type: String, default: '' },
})

const emit = defineEmits(['close'])

function handleKey(e) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  document.addEventListener('keydown', handleKey)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      @click.self="emit('close')"
    >
      <div class="relative max-w-3xl w-full mx-4 flex flex-col items-center gap-4">
        <button
          @click="emit('close')"
          class="absolute -top-10 right-0 font-mono-custom text-xs text-gray-400 hover:text-white transition-colors"
        >
          ✕ close
        </button>
        <img
          :src="image"
          :alt="title"
          class="w-full rounded-2xl shadow-2xl object-contain max-h-[80vh]"
        />
        <p class="font-mono-custom text-xs text-gray-400 text-center">{{ title }}</p>
      </div>
    </div>
  </Teleport>
</template>