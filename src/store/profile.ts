import { MYUUID, MYEMAIL, MYUSERNAME } from "@/router/utils";
import profile from "@/services/profile";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    uuid: localStorage.getItem(MYUUID) || "",
    username:  localStorage.getItem(MYUSERNAME) || "",
    email:  localStorage.getItem(MYEMAIL) || "",
  }),
  actions: {
    async fetchMyProfile() { //no need
      try {
        const { data } = await profile.getMyInfo();

        let profileData = data.data;
        console.log("fetchMyProfile...", profileData); 
      } finally {
      }
    },
  },
});
