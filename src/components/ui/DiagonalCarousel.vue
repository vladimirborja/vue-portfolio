<script setup>
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  activeIndex: {
    type: Number,
    default: undefined,
  },
  defaultActiveIndex: {
    type: Number,
    default: 0,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  slideSize: {
    type: Number,
    default: 260,
  },
  slideHeight: {
    type: Number,
    default: undefined,
  },
  trackTop: {
    type: String,
    default: '50%',
  },
  rotationStep: {
    type: Number,
    default: 30,
  },
  verticalStep: {
    type: Number,
    default: 120,
  },
  inactiveScale: {
    type: Number,
    default: 0.6,
  },
  showControls: {
    type: Boolean,
    default: true,
  },
  showDots: {
    type: Boolean,
    default: true,
  },
  className: {
    type: String,
    default: '',
  },
  viewportClassName: {
    type: String,
    default: '',
  },
  slideClassName: {
    type: String,
    default: '',
  },
  imageClassName: {
    type: String,
    default: '',
  },
  labelClassName: {
    type: String,
    default: '',
  },
  controlsClassName: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['activeIndexChange'])

const SPRING_TRANSITION = 'transform 0.85s cubic-bezier(0.34, 1.3, 0.64, 1), opacity 0.3s ease'

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

const maxIndex = computed(() => Math.max(0, props.items.length - 1))
const safeSlideSize = computed(() => Math.max(120, props.slideSize))
const safeSlideHeight = computed(() => props.slideHeight ?? safeSlideSize.value)
const safeInactiveScale = computed(() => clamp(props.inactiveScale, 0.35, 1))

const uncontrolledIndex = ref(
  clamp(props.defaultActiveIndex, 0, maxIndex.value),
)

const currentIndex = computed(() => {
  const index = props.activeIndex ?? uncontrolledIndex.value
  return clamp(index, 0, maxIndex.value)
})

const isPreviousDisabled = computed(() => !props.loop && currentIndex.value === 0)
const isNextDisabled = computed(() => !props.loop && currentIndex.value === maxIndex.value)

function selectSlide(nextIndex) {
  if (!props.items.length) return

  const resolvedIndex = props.loop
    ? (nextIndex + props.items.length) % props.items.length
    : clamp(nextIndex, 0, maxIndex.value)

  if (props.activeIndex === undefined) {
    uncontrolledIndex.value = resolvedIndex
  }

  emit('activeIndexChange', resolvedIndex)
}

function getTrackStyle() {
  const offset = currentIndex.value * safeSlideSize.value + safeSlideSize.value / 2
  return {
    transform: `translateY(-50%) translateX(-${offset}px)`,
    transition: SPRING_TRANSITION,
  }
}

function getSlideStyle(index) {
  const isActive = currentIndex.value === index
  const distance = index - currentIndex.value

  return {
    width: `${safeSlideSize.value}px`,
    transform: `rotate(${distance * props.rotationStep}deg) scale(${isActive ? 1 : safeInactiveScale.value}) translateY(${distance * props.verticalStep}px)`,
    transition: SPRING_TRANSITION,
  }
}

function getLabelStyle(index) {
  const isActive = currentIndex.value === index
  return {
    opacity: isActive ? 1 : 0,
    transform: `scale(${isActive ? 1 : 0.7})`,
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  }
}

function handleKeyDown(event) {
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    selectSlide(currentIndex.value - 1)
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault()
    selectSlide(currentIndex.value + 1)
  }
}
</script>

<template>
  <div
    v-if="items.length"
    role="region"
    aria-roledescription="carousel"
    aria-label="Diagonal image carousel"
    tabindex="0"
    :class="cn('relative isolate w-full min-h-[360px] overflow-hidden', className)"
    @keydown="handleKeyDown"
  >
    <div :class="cn('absolute inset-0 overflow-hidden', viewportClassName)">
      <div
        class="absolute left-1/2 flex w-fit"
        :style="{ top: trackTop, ...getTrackStyle() }"
      >
        <div
          v-for="(item, index) in items"
          :key="`${item.src}-${index}`"
          :class="cn('flex shrink-0 flex-col items-center gap-2 will-change-transform', slideClassName)"
          :style="getSlideStyle(index)"
        >
          <p
            :class="cn('whitespace-nowrap text-sm', labelClassName)"
            :style="getLabelStyle(index)"
          >
            {{ item.title }}
          </p>

          <button
            type="button"
            :aria-label="`Show ${item.title}`"
            :aria-current="currentIndex === index ? 'true' : undefined"
            class="w-full cursor-pointer overflow-hidden rounded-2xl shadow-xl"
            :class="slideHeight ? '' : 'aspect-square'"
            :style="{ height: slideHeight ? `${safeSlideHeight}px` : undefined }"
            @click="selectSlide(index)"
          >
            <img
              :src="item.src"
              :alt="item.alt ?? item.title"
              draggable="false"
              :class="cn(
                'block h-full w-full select-none object-cover',
                imageClassName,
              )"
            />
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="showControls"
      :class="cn(
        'absolute inset-x-4 bottom-4 z-10 mx-auto flex w-fit items-center justify-center gap-3 rounded-full border border-neutral-300/80 bg-neutral-200/70 px-2 text-neutral-700 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/70 dark:text-neutral-100',
        controlsClassName,
      )"
    >
      <button
        type="button"
        aria-label="Show previous slide"
        :disabled="isPreviousDisabled"
        class="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/70 disabled:cursor-not-allowed disabled:opacity-35 dark:hover:bg-white/10"
        @click="selectSlide(currentIndex - 1)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <div v-if="showDots" class="flex items-center gap-1.5">
        <button
          v-for="(item, index) in items"
          :key="`${item.title}-${index}`"
          type="button"
          :aria-label="`Show slide ${index + 1}: ${item.title}`"
          :aria-current="currentIndex === index ? 'true' : undefined"
          :class="cn(
            'h-2 rounded-full bg-current transition-[width,opacity] duration-300',
            currentIndex === index ? 'w-7 opacity-100' : 'w-2 opacity-30',
          )"
          @click="selectSlide(index)"
        />
      </div>

      <button
        type="button"
        aria-label="Show next slide"
        :disabled="isNextDisabled"
        class="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/70 disabled:cursor-not-allowed disabled:opacity-35 dark:hover:bg-white/10"
        @click="selectSlide(currentIndex + 1)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  </div>
</template>
