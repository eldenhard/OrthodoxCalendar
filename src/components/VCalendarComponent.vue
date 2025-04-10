<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useHolidaysStore } from '@/stores/holidays'
import { onMounted, ref } from 'vue'
import type { holidayItem, holidayAttributes } from '@/types/holidayTypes'

const { holidays } = useHolidaysStore()
const router = useRouter()

const attributes = ref<holidayAttributes[]>([])

onMounted(() => {
  if (holidays) {
    attributes.value = holidays.map((holiday: holidayItem) => ({
      highlight: {
        color: 'gray',
        fillMode: 'solid',
      },
      dates: [new Date(holiday.date)],
    }))
  }
})

function handleDayClick(date: { id: string }) {
  const isActiveDate = holidays.find((holiday) => {
    const holidayDate = new Date(holiday.date).toDateString()
    const currentDate = new Date(date.id).toDateString()
    return holidayDate === currentDate
  })

  if (isActiveDate) {
    router.push({ name: 'calendar-date', params: { date: date.id } }).catch((err) => {
      console.error('Ошибка перехода:', err)
    })
  }
}
</script>

<template>
  <VCalendar
    transparent
    borderless
    :rows="2"
    expanded
    :attributes="attributes"
    @dayclick="handleDayClick"
    class="v-calendar-component"
  />
</template>

<style lang="scss">
.v-calendar-component {
  margin-top: 10%;
}
</style>
