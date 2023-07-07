export const useModuleStore = defineStore('counter', {
  state: () => ({ showModal: false }),

  actions: {
    setModal(value: boolean) {
      this.showModal = value
    },
  },
})
