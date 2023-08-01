export const useModuleStore = defineStore('counter', {
  state: () => ({ 
    chatHistory: {}
  }),

  actions: {
    setHistory(value: string) {
      this.showModal = value
    },
  },
})
