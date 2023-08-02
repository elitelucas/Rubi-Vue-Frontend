import axios from 'axios'
import { TOKEN_KEY, TOKEN_TYPE } from '@/router/utils'

const BASE_URL = `${location.protocol}//api.${location.host}/api`

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
instancia.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401 && localStorage.getItem(TOKEN_KEY)) {
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(TOKEN_TYPE)
      window.location.href = '/'
    }

    return Promise.reject(error)
  },
)

instancia.defaults.withCredentials = true

export default instancia
