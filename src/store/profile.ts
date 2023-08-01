import { MYUUID, MYEMAIL, MYUSERNAME } from "@/router/utils";
import profile from "@/services/profile";

export const useProfileStore = defineStore("auth", {
  state: () => ({
    uuid: localStorage.getItem(MYUUID) || "",
    username:  localStorage.getItem(MYUSERNAME) || "",
    email:  localStorage.getItem(MYEMAIL) || "",
  }),
  actions: {
    async handleGetMyInfo() {
      try {
        const { data } = await profile.getMyInfo();

        let profileData = data.data;
        console.log("fetched profile...", profileData);

        // this.uuid = profileData.uuid;
        // this.username = profileData.username;
        // this.email = profileData.email;   
      } finally {
      }
    },
  },
});
