export const useModuleStore = defineStore('counter', {
  state: () => ({ 
    showModal: false,
    ModuleItems: [] as { name: string; icon: string; color: string; colorIcon: string }[],
    selectedItem: {},
    selected: false
  }),

  actions: {
    setModal(value: boolean) {
      this.showModal = value
    },
  },
})
