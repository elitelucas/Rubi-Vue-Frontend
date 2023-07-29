import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    requiredAuth?: boolean
    action?: string
    subject?: string
    layoutWrapperClasses?: string
    navActiveLink?: RouteLocationRaw
  }
}
