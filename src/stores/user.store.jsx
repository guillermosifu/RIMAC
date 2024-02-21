import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      user: {
        plan: "",
        isLogged: false,
      },
      setUser: (value) =>
        set((state) => ({ user: { ...state.user, ...value } })),
      resetUser: () => set({ user: { plan: "", isLogged: false } }),
      computed: {
        get age() {
          const { birthDay } = get().user;
          const birthdayYear = new Date(birthDay).getFullYear();
          const actualYear = new Date().getFullYear();

          return actualYear - birthdayYear;
        },
      },
    }),
    {
      name: "user-storage",
    }
  )
);
