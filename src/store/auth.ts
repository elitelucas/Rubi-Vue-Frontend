import { TOKEN_KEY, TOKEN_TYPE } from '@/router/utils'
import auth from '@services/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({ auth: {}, loading_login: false }),
  actions: {
    async handleLogin(email: string, password: string) {
      try {
        this.loading_login = true

        const { data } = await auth.login(email, password)

        localStorage.setItem(TOKEN_KEY, data.access_token)
        localStorage.setItem(TOKEN_TYPE, data.token_type)
        console.log(data)
      }
      finally {
        this.loading_login = false
      }
    },

    handleLogout() {
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(TOKEN_TYPE)
      this.auth = {}
    },
  },
})
