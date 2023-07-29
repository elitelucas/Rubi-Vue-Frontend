import http from '@http'

export interface LoginResponse {
  access_token: string
  token_type: string
  expires_at: string
}

export default {
  async login(email: string, password: string) {
    return http.post<LoginResponse>(`/v1/login?email=${email}&password=${password}`)
  },
}
