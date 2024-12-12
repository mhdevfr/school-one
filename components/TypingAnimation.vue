<script setup lang='ts'>
import { ref, onMounted, watch } from 'vue'
import { cn } from '@/lib/utils'

interface TypingAnimationProps {
  text: string
  duration?: number
  class?: string
}

const props = withDefaults(defineProps<TypingAnimationProps>(), {
  duration: 300,
})

const displayedText = ref('')
const typingInterval = ref<number | undefined>()

function handleTypingEffect(d: number) {
  let index = 0
  typingInterval.value = window.setInterval(() => {
    if (index < props.text.length) {
      displayedText.value = props.text.substring(0, index + 1)
      index++
    } else {
      clearInterval(typingInterval.value)
    }
  }, d)
}

onMounted(() => {
  handleTypingEffect(props.duration || 300)
})

watch(() => props.duration, (newDuration) => {
  clearInterval(typingInterval.value) 
  handleTypingEffect(newDuration || 300)
})

const className = cn(
  'font-sans text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm dark:text-white',
  props.class,
)
</script>

<template>
  <h1 :class="className">
    {{ displayedText }}
  </h1>
</template>
