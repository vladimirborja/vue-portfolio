<script setup>
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  activeId: {
    type: String,
    default: '',
  },
  className: {
    type: String,
    default: '',
  },
  dockClassName: {
    type: String,
    default: '',
  },
})

const hoveredIndex = ref(null)
const direction = ref(0)
const itemRefs = ref([])

// How many neighbors get the magnification spread
const MAGNIFY_SPREAD = 2

// Scale values: [hovered, distance-1, distance-2]
const SCALE_MAP = [1.55, 1.25, 1.1]

function getScale(index) {
  if (hoveredIndex.value === null) return 1
  const dist = Math.abs(index - hoveredIndex.value)
  if (dist >= SCALE_MAP.length) return 1
  return SCALE_MAP[dist]
}

function getTranslateY(index) {
  if (hoveredIndex.value === null) return 0
  const dist = Math.abs(index - hoveredIndex.value)
  if (dist === 0) return -10
  if (dist === 1) return -5
  if (dist === 2) return -2
  return 0
}

const tooltipStyle = computed(() => {
  if (hoveredIndex.value === null) return {}
  const el = itemRefs.value[hoveredIndex.value]
  if (!el) return {}
  const center = el.offsetLeft + el.offsetWidth / 2
  return {
    left: `${center}px`,
    transform: 'translateX(-50%)',
  }
})

function handleMouseEnter(index) {
  if (hoveredIndex.value !== null && index !== hoveredIndex.value) {
    direction.value = index > hoveredIndex.value ? 1 : -1
  }
  hoveredIndex.value = index
}

function handleMouseLeave() {
  hoveredIndex.value = null
  direction.value = 0
}

function handleClick(item, event) {
  if (item.onClick) {
    item.onClick(event)
  } else if (item.href) {
    window.location.href = item.href
  }
}

function handleKeyDown(event, item) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleClick(item, event)
  }
}

function isActive(item) {
  if (item.id === 'theme') return false
  if (!props.activeId) return false
  if (item.id === 'hero') {
    return props.activeId === 'hero' || props.activeId === ''
  }
  return props.activeId === item.id
}

function setItemRef(el, index) {
  if (el) itemRefs.value[index] = el
}

function itemStyle(index) {
  const scale = getScale(index)
  const ty = getTranslateY(index)
  return {
    transform: `scale(${scale}) translateY(${ty}px)`,
    zIndex: hoveredIndex.value === index ? 10 : MAGNIFY_SPREAD - Math.abs(index - (hoveredIndex.value ?? index)) + 1,
  }
}
</script>

<template>
  <div :class="cn('w-max', className)">
    <div
      :class="cn(
        'glass-dock relative flex items-end justify-center gap-3 px-5 py-3 rounded-2xl',
        'glass-border bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-2xl',
        dockClassName,
      )"
      @mouseleave="handleMouseLeave"
    >
      <!-- Tooltip label -->
      <Transition
        enter-active-class="transition-all duration-200 ease-[cubic-bezier(0.34,1.3,0.64,1)]"
        leave-active-class="transition-all duration-150 ease-in"
        enter-from-class="opacity-0 scale-90 translate-y-2"
        leave-to-class="opacity-0 scale-90 translate-y-2"
      >
        <div
          v-if="hoveredIndex !== null"
          class="absolute -top-12 z-30 pointer-events-none"
          :style="tooltipStyle"
        >
          <div
            class="px-4 py-1.5 rounded-lg bg-black text-white dark:bg-white dark:text-black shadow-md border border-neutral-700 dark:border-neutral-300 flex items-center justify-center overflow-hidden"
          >
            <!-- Each character animates in with a stagger -->
            <span class="flex text-[13px] font-medium tracking-wide whitespace-nowrap">
              <span
                v-for="(char, ci) in items[hoveredIndex].title.split('')"
                :key="`${items[hoveredIndex].title}-${ci}`"
                class="inline-block char-reveal"
                :style="{ animationDelay: `${ci * 30}ms` }"
              >{{ char === ' ' ? '\u00A0' : char }}</span>
            </span>
          </div>
        </div>
      </Transition>

      <!-- Dock items -->
      <div
        v-for="(item, index) in items"
        :key="`${item.title}-${item.icon}`"
        :ref="(el) => setItemRef(el, index)"
        role="button"
        tabindex="0"
        class="dock-item relative flex items-center justify-center cursor-pointer rounded-xl"
        :style="itemStyle(index)"
        :class="isActive(item)
          ? 'text-green-600 dark:text-green-400 bg-green-500/10'
          : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'"
        :aria-label="item.title"
        :aria-current="isActive(item) ? 'page' : undefined"
        @mouseenter="handleMouseEnter(index)"
        @click="handleClick(item, $event)"
        @keydown="handleKeyDown($event, item)"
      >
        <!-- Icon wrapper — spins on hover -->
        <div class="w-10 h-10 flex items-center justify-center icon-spin">
          <!-- Home -->
          <svg v-if="item.icon === 'home'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>

          <!-- About -->
          <svg v-else-if="item.icon === 'about'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>

          <!-- Skills -->
          <svg v-else-if="item.icon === 'skills'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
          </svg>

          <!-- Projects -->
          <svg v-else-if="item.icon === 'projects'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2" />
            <path d="M16 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
            <circle cx="20" cy="19" r="1" />
            <path d="M17.5 17.5 19 19" />
          </svg>

          <!-- Contact -->
          <svg v-else-if="item.icon === 'contact'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>

          <!-- Sun -->
          <svg v-else-if="item.icon === 'sun'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" /><path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" /><path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
          </svg>

          <!-- Moon -->
          <svg v-else-if="item.icon === 'moon'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </div>

        <!-- Active dot indicator -->
        <span
          v-if="isActive(item)"
          class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-green-500 dark:bg-green-400"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth magnification transition for dock items */
.dock-item {
  transition:
    transform 300ms cubic-bezier(0.34, 1.3, 0.64, 1),
    color 200ms ease;
  transform-origin: bottom center;
  will-change: transform;
}

/* Full Y-axis spin on hover — the icon flips like a coin */
.icon-spin {
  transition: transform 400ms cubic-bezier(0.34, 1.2, 0.64, 1);
}

.icon-spin:hover {
  animation: iconFlip 400ms cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}

@keyframes iconFlip {
  0%   { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

/* Per-character label reveal */
.char-reveal {
  animation: charIn 200ms cubic-bezier(0.34, 1.4, 0.64, 1) both;
}

@keyframes charIn {
  0%   { opacity: 0; transform: translateY(6px) scale(0.8); }
  100% { opacity: 1; transform: translateY(0px) scale(1);   }
}
</style>