export interface RootModuleGroup {
  title: string
  icon: string
  color: string
  bgColor: string
  show: boolean
  features: OptionModuleGroup[]
}

export interface OptionModuleGroup {
  title: string
  icon: string
  to?: object
  description: string
}
