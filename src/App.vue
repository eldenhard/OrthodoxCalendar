<script setup lang="ts">
import { onMounted } from 'vue'
import { useApiFetch } from '@/composables/useApiFetch'
import { API_ROUTES } from '@/api/apiPath'
import { useHolidaysStore } from '@/stores/holidays'
import type { holidayItem } from '@/types/holidayTypes'

const holidaysStore = useHolidaysStore()

const { data, fetchData } = useApiFetch<holidayItem[]>(API_ROUTES.items)

onMounted(async () => {
  await fetchData()
  holidaysStore.setHolidays(data.value ?? [])
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
