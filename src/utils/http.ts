import axios from 'axios'
import { TOKEN_KEY, TOKEN_TYPE } from '@/router/utils'

const BASE_URL = `${location.protocol}//${location.host}/api`

const instancia = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || BASE_URL,
})

instancia.interceptors.request.use((config: any) => {
  const token = localStorage.getItem(TOKEN_KEY)
  const tokenType = localStorage.getItem(TOKEN_TYPE) // Bearer

  if (token)
    config.headers.Authorization = `${tokenType} ${token}`

  return config
})

instancia.defaults.withCredentials = true

export default instancia
