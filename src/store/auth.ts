import ability from '@/plugins/casl/ability'
import { TOKEN_KEY, TOKEN_TYPE } from '@/router/utils'
import type { UserMeData } from '@services/auth'
import auth from '@services/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({ auth: {} as UserMeData, loading_login: false, loading_auth: false }),
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
    async handleMe() {
      try {
        this.loading_auth = true

        const { data } = await auth.me()

        this.auth = data.data

        const userAbilities = [...this.auth.permissions.map(permision => ({
          action: permision,
          subject: 'User',
        })), { action: 'menu-all', subject: 'User' }]

        ability.update(userAbilities)
        localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
      }
      finally {
        this.loading_auth = false
      }
    },
    handleLogout() {
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(TOKEN_TYPE)
      this.auth = {} as any
    },
  },
})
