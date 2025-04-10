import { ref } from 'vue'

export function useApiFetch<T = unknown>(url: string) {
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)
  const isLoading = ref<boolean>(false)

  const fetchData = async (): Promise<void> => {
    isLoading.value = true
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Ошибка при запросе: ' + response.status)
      }

      data.value = (await response.json()) as T
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = String(err)
      }
    } finally {
      isLoading.value = false
    }
  }

  return { data, error, isLoading, fetchData }
}
