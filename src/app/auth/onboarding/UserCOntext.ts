import { createContext } from "react";

// Define the Shape of User Data
export type UserData = {
  userName: string | null;
  accountType: string | null;
};

// Define Context Type
export type UserContextType = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

// Create Context with Default Value as null
export const UserContext = createContext<UserContextType | null>(null);
