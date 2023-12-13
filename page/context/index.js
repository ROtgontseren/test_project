import { createContext, useState } from "react";
import { useRouter } from "next/router";

export const UserContext = createContext();

const userProvider = ({ children }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  return (
    <UserContext.Provider value={{ name, setName, color, setColor }}>
      {children}
    </UserContext.Provider>
  );
};

export default userProvider;
