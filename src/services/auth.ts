import http from '@http'

export interface LoginResponse {
  access_token: string
  token_type: string
  expires_at: string
  uuid: string
  username: string
  email: string
}

export interface UserMeResponse {
  data: UserMeData
}

export interface UserMeData {
  uuid: string
  firstname: string
  lastname: string
  name: string
  mobile: string
  email: string
  username: string
  business_name: string | null
  role: string
  status: string
  country_id: number
  addresses: Address[]
  date_of_birth: string
  preferred_language: PreferredLanguage
  ip_address: string
  tin: any
  permissions: string[]
  avatar: string
}

export interface Address {
  id: number
  address_type_id: number
  address_type_name: string
  address_line1: string
  address_line2: string
  city: string
  state: string
  postal_code: string
  country_id: number
  country_name: string
  archived: boolean
}

export interface PreferredLanguage {
  id: number
  name: string
  iso: string
}

export interface ResponseWorkspaces {
  data: Workspace[]
  links: Links
  meta: Meta
}

export interface Workspace {
  id: number
  subscription: Subscription
  nickname: string
  short_description: string
  active: boolean
  created_at: string
  collaborators: number
  usage: number
  keywords: string[]
}

export interface Subscription {
  id: number
  nickname: string
  short_description: string
  activated_at: string
  expiration_at: string
  renewal_at: string
  primary: boolean
  active: boolean
}

export interface Links {
  first: string
  last: string
  prev: any
  next: any
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  links: Link[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface Link {
  url?: string
  label: string
  active: boolean
}

export default {
  async login(username: string, password: string) {
    return http.post<LoginResponse>('/v1/login', {
      username,
      password,
    })
  },
  async me() {
    return http.get<UserMeResponse>('/v1/me')
  },
  async workspaces(user_id: string, per_page = 20) {
    return http.get<ResponseWorkspaces>(`/v1/users/${user_id}/workspaces/?order_col=nickname&order_dir=asc&per_page=${per_page}`)
  },
  async updateAvatar(user_id: string, data: FormData) {
    return http.post(`/v1/users/${user_id}/avatars`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}
