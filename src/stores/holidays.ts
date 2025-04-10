import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { holidayItem } from '@/types/holidayTypes'

export const useHolidaysStore = defineStore('holidays', () => {
  const holidays = ref<holidayItem[]>([])

  function setHolidays(data: holidayItem[]) {
    holidays.value = data
  }

  return { holidays, setHolidays }
})
