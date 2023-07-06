export interface RootModuleGroup {
    title: string
    icon: string
    color: string | null,
    bgColor: string;
    show: boolean;
    modules: ModuleGroup[]
  }
  
  export interface ModuleGroup {
    title: string
    color: string
    options: OptionModuleGroup[]
  }
  
  export interface OptionModuleGroup {
    title: string
    icon: string
    to: Object
    description: string
  }