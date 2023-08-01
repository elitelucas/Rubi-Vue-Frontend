import { TOKEN_KEY, TOKEN_TYPE } from "@/router/utils";
import profile from "@/services/profile";

export const useProfileStore = defineStore("auth", {
  state: () => ({ uuid: "", name: "", username: "", email: "" }),
  actions: {
    async handleGetMyInfo() {
      try {
        const { data } = await profile.getMyInfo();

        let profileData = data.data;
        this.uuid = profileData.uuid;
        this.name = profileData.name;
        this.username = profileData.username;
        this.email = profileData.email;
        console.log('getMyInfo', this.uuid)
      } finally {
      }
    },
  },
});
