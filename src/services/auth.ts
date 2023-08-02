import http from '@http'

export interface LoginResponse {
  access_token: string
  token_type: string
  expires_at: string
}

export interface UserMeResponse {
  data: UserMeData
}

export interface UserMeData {
  uuid: string
  name: string
  mobile: string
  email: string
  username: string
  business_name: string | null
  role: string
  status: string
  country_id: number
  date_of_birth: string
  ip_address: string
  tin: any
  permissions: string[]
}

export default {
  async login(username: string, password: string) {
    return http.post<LoginResponse>('/v1/login', {
        username,
        password
    })
  },
  async me() {
    return http.get<UserMeResponse>('/v1/me')
  },
}
