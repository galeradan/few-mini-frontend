import { User } from "generated/graphql";
import { createContext, Dispatch, SetStateAction } from "react";

interface UserProvider {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export const initialState: UserProvider = {
  user: {
    id: "",
    username: "",
    role: "",
  },
  setUser: (): void => {
    throw new Error("setUser function must be overridden");
  },
};

export const UserContext = createContext<UserProvider>(initialState);
