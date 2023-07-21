export const useAccountSettingsTabs = defineStore('accountSettingsTabs', {
  state: () => ({ breadcrumbs: [] as string[] }),

  actions: {
    add(value: string) {
      if (!this.breadcrumbs.includes(value))
        this.breadcrumbs = [...this.breadcrumbs, value]
    },
    setDefault(value: string) {
      this.breadcrumbs = [value]
    },
  },
})
