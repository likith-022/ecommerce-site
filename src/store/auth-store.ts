
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginUser,getCurrentUser } from "../services/auth-service";

interface AuthStore {
  id: number;
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;

  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set,get ) => ({
      id: 0,
      username: "",
      email: "",
      refreshToken:"",
      accessToken:"",
      isLoggedIn: false,

      login: async (username, password) => {
        const data = await loginUser(username, password);

        set({
          id: data.id,
          username: data.username,
          email: data.email,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          isLoggedIn: true,
        });
      },
       getUser: async () => {
        const token = get().accessToken;

        const data = await getCurrentUser(token);

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
          accessToken: "",
          refreshToken: "",
          isLoggedIn: false,
        }),
    }),
    {
      name: "glk-auth",
    }
  )
);

export default useAuthStore;
