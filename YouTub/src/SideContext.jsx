import { createContext, useContext, useState } from "react";

const SideContext = createContext(); 

export const SideProvider = ({ children }) => {
  const [isSide, setIsSide] = useState(true);

  return (
    <SideContext.Provider value={{ isSide, setIsSide }}>
      {children}
    </SideContext.Provider>
  );
};

export const useIsSide = () => useContext(SideContext); 
