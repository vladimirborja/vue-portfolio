<script setup>
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
  duration: {
    type: Number,
    default: 2.2,
  },
  delay: {
    type: Number,
    default: 0,
  },
  loop: {
    type: Boolean,
    default: true,
  },
  separator: {
    type: String,
    default: ' ',
  },
  together: {
    type: Boolean,
    default: false,
  },
})

const words = computed(() => props.text.split(props.separator))

function getCharIndex(wordIndex, charIndex) {
  let index = 0
  for (let i = 0; i < wordIndex; i++) {
    index += words.value[i].length + (props.separator === ' ' ? 1 : props.separator.length)
  }
  return index + charIndex
}

function getCharDelay(wordIndex, charIndex) {
  if (props.together) return props.delay
  const totalChars = props.text.length
  const currentGlobalIndex = getCharIndex(wordIndex, charIndex)
  const normalizedIndex = currentGlobalIndex / totalChars
  const sineValue = Math.sin(normalizedIndex * (Math.PI / 2))
  return sineValue * (props.duration * 0.25) + props.delay
}

function getCharStyle(wordIndex, charIndex) {
  return {
    '--flip-duration': `${props.duration}s`,
    '--flip-delay': `${getCharDelay(wordIndex, charIndex)}s`,
    '--flip-iteration': props.loop ? 'infinite' : '1',
    transformStyle: 'preserve-3d',
  }
}
</script>

<template>
  <div
    :class="cn('flip-text-wrapper inline-block leading-none', className)"
    style="perspective: 1000px"
  >
    <span
      v-for="(word, wordIndex) in words"
      :key="wordIndex"
      class="word inline-block whitespace-nowrap"
      style="transform-style: preserve-3d"
    >
      <span
        v-for="(char, charIndex) in word.split('')"
        :key="charIndex"
        class="flip-char inline-block relative"
        :data-char="char"
        :style="getCharStyle(wordIndex, charIndex)"
      >{{ char }}</span>
      <span
        v-if="separator === ' ' && wordIndex < words.length - 1"
        class="whitespace inline-block"
      >&nbsp;</span>
      <span
        v-else-if="separator !== ' ' && wordIndex < words.length - 1"
        class="separator inline-block"
      >{{ separator }}</span>
    </span>
  </div>
</template>
