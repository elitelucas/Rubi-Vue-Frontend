import { userSubscriptionList } from "@/services/usersubscription";
import navItems from "@/navigation/horizontal";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    navItems: navItems,
  }),
  actions: {
    async updateNavItems() {
      try {
        const { data } = await userSubscriptionList();
        let resdata = data?.data;
        console.log('updateNavItems...', resdata);

        let newsubitems:any = [];
        resdata.map((item) =>
          newsubitems.push({
            title: item.nickname,
            to: {
              name: "account-settings",
              params: {
                id: item.id,
              },
            },
          })
        );

        const foundItem = this.navItems.find((item) => item.title === "My Accounts");
        if (foundItem) {
          foundItem.children = newsubitems;
        }
      } finally {
      }
    },
  },
});
