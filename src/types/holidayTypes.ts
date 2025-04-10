export interface holidayItem {
  id: number
  date: string
  title: string
  description?: string
}

export type holidayAttributes = {
  dates: Date[]
  highlight: {
    color: string
    fillMode: 'solid' | 'light' | 'outline'
  }
}
