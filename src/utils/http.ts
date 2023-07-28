import axios from 'axios'

const instancia = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

instancia.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('TOKEN_NAME')
  const tokenType = localStorage.getItem('TOKEN_TYPE') // Bearer

  if (token)
    config.headers.Authorization = `${tokenType} ${token}`

  return config
})

instancia.defaults.withCredentials = true

export default instancia
