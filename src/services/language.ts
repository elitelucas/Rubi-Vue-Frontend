import http from '@http'

export interface ResponseLanguages {
  data: Languages[]
}

export interface Languages {
  id: number
  name: string
  iso: string
}

export default {
  async languages() {
    return http.get<ResponseLanguages>('/v1/languages')
  },
}
