<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CertLightbox from './CertLightbox.vue'

const props = defineProps({
  items: { type: Array, required: true },
  slideWidth: { type: Number, default: 320 },
  rotationStep: { type: Number, default: 55 },
  inactiveScale: { type: Number, default: 0.82 },
  autoInterval: { type: Number, default: 3000 },
  loop: { type: Boolean, default: true },
})

const currentIndex = ref(0)
const lightboxItem = ref(null)
let timer = null

function selectSlide(index, manual = false) {
  if (props.items.length === 0) return
  currentIndex.value = (index + props.items.length) % props.items.length
  if (manual) {
    startAuto()
  }
}

function handleCardClick(item, index) {
  if (index === currentIndex.value) {
    lightboxItem.value = item
  } else {
    selectSlide(index, true)
  }
}

function startAuto() {
  stopAuto()
  timer = setInterval(() => {
    if (!lightboxItem.value) {
      selectSlide(currentIndex.value + 1)
    }
  }, props.autoInterval)
}

function stopAuto() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => startAuto())
onUnmounted(() => stopAuto())
</script>

<template>
  <div
    class="relative w-full select-none"
    style="perspective: 1200px;"
  >
    <div class="relative w-full flex items-center justify-center overflow-hidden" style="height: 420px;">
      <div
        class="flex items-center w-fit absolute left-1/2"
        :style="{
          transform: `translateX(-${currentIndex * slideWidth + slideWidth / 2}px)`,
          transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
          transformStyle: 'preserve-3d',
        }"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="shrink-0 flex flex-col items-center gap-3 cursor-pointer"
          :style="{
            width: `${slideWidth}px`,
            perspective: '1200px',
            zIndex: items.length - Math.abs(currentIndex - index),
          }"
          @click="handleCardClick(item, index)"
        >
          <div
            class="w-full flex flex-col items-center gap-3"
            :style="{
              transform: `rotateY(${(currentIndex - index) * rotationStep}deg) scale(${currentIndex === index ? 1 : inactiveScale})`,
              transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
              transformStyle: 'preserve-3d',
            }"
          >
            <div class="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl border border-white/10 group">
              <img
                :src="item.image"
                :alt="item.name"
                draggable="false"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-2xl">
                <span class="font-mono-custom text-xs text-white bg-black/60 px-3 py-1.5 rounded-full">
                  {{ currentIndex === index ? 'click to view' : 'click to focus' }}
                </span>
              </div>
            </div>

            <div
              class="text-center transition-all duration-500 px-2"
              :style="{
                opacity: currentIndex === index ? 1 : 0,
                filter: currentIndex === index ? 'blur(0px)' : 'blur(2px)',
              }"
            >
              <p class="font-mono-custom text-[10px] text-green-500 uppercase tracking-widest mb-1">{{ item.issuer }}</p>
              <p class="font-mono-custom text-xs text-gray-300 leading-snug">{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dots -->
    <div class="flex items-center justify-center gap-2 mt-4">
      <button
        v-for="(item, index) in items"
        :key="index"
        @click="selectSlide(index, true)"
        class="h-2 rounded-full bg-white transition-all duration-300 cursor-pointer"
        :style="{
          width: currentIndex === index ? '28px' : '8px',
          opacity: currentIndex === index ? 1 : 0.3,
        }"
      />
    </div>

    <CertLightbox
      v-if="lightboxItem"
      :image="lightboxItem.image"
      :title="lightboxItem.name"
      @close="lightboxItem = null"
    />
  </div>
</template>