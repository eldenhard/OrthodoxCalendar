import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'

export const useZoomStore = defineStore('zoom', () => {
  const zoom = ref<number>(1)

  const MIN_ZOOM = 1
  const MAX_ZOOM = 3

  function setNewZoomValue(value: number) {
    if (value < MIN_ZOOM || value > MAX_ZOOM) {
        return
    }
    zoom.value = value
  }

  function zoomIn() {
    setNewZoomValue(zoom.value + 1)
  }

  function zoomOut() {
    setNewZoomValue(zoom.value - 1)
  }

  return { zoom: readonly(zoom), zoomIn, zoomOut }
})
