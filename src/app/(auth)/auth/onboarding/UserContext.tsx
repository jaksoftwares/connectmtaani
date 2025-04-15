import React, { createContext, useState, ReactNode } from "react";

// Define Props Type for the Provider
type UserProviderProps = {
  children: ReactNode;
};

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
