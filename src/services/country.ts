import http from '@http'

export interface ResponseContries {
  data: Countries[]
}

export interface Countries {
  id: number
  name: string
  iso: string
  phonecode: number
}

export default {
  async countries() {
    return http.get<ResponseContries>('/v1/countries')
  },
}
