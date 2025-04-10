<script setup lang="ts">
import { useHolidaysStore } from '@/stores/holidays'
import { computed } from 'vue'

const { date } = defineProps<{ date: string }>()

const { holidays } = useHolidaysStore()

const holidayInfo = computed(() => {
  return holidays.find((holiday) => {
    const holidayDate = new Date(holiday.date).toDateString()
    const currentDate = new Date(date).toDateString()
    return holidayDate === currentDate
  })
})
</script>

<template>
  <div class="calendar-date-view">
    <p class="calendar-date-view__title">
      {{ holidayInfo?.title }}
    </p>
    <p class="calendar-date-view__date">Дата: {{ new Date(date).toLocaleDateString('ru-RU') }}</p>
    <p class="calendar-date-view__text">{{ holidayInfo?.description }}</p>

  </div>
</template>

<style lang="scss">
.calendar-date-view {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  &__date {
    text-align: center;
    color: rgb(96, 96, 96);
  }

  &__text{
    margin-top: 3vh;
    font-family: 'Courier New', Courier, monospace;
  }

  &__title {
    text-align: center;
    font-size: 4vh;
    margin-top: 3vh;
  }
}
</style>
