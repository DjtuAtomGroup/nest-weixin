import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const collapse = ref(false)
  const currentChat = ref()

  return { count, doubleCount,collapse,currentChat }
})
