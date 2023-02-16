//This Store is all about the Application Environment while the App is in use

import { defineStore } from "pinia";

export const useEnvironmentStore = defineStore("environmentStore", {
  state: () => {
    return {
      count: 0,
      sideBarMenu: {
        collapsed: false,
        logoUrl: "iGO Group",
      },
      navigationBar: {
        userName: "logged-in-user",
      },
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    switchValue() {
      this.sideBarMenu.collapsed = !this.sideBarMenu.collapsed;
    },
  },
});
