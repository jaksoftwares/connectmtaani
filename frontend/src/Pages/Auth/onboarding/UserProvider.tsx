import { useState, ReactNode } from "react";
import { UserContext, UserData } from "./UserContext";

// Define Props Type for the Provider
type UserProviderProps = {
  children: ReactNode;
};

// Create Provider Component
export const UserProvider = ({ children }: UserProviderProps) => {
  const [userData, setUserData] = useState<UserData>({
    userName: null,
    accountType: null,
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
