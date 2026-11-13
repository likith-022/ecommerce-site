
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginUser } from "../services/auth-service";

interface AuthStore {
  id: number;
  username: string;
  email: string;
  isLoggedIn: boolean;

  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      id: 0,
      username: "",
      email: "",
      isLoggedIn: false,

      login: async (username, password) => {
        const data = await loginUser(username, password);

        set({
          id: data.id,
          username: data.username,
          email: data.email,
          isLoggedIn: true,
        });
      },

      logout: () =>
        set({
          id: 0,
          username: "",
          email: "",
          isLoggedIn: false,
        }),
    }),
    {
      name: "glk-auth",
    }
  )
);

export default useAuthStore;
