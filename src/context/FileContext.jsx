import { createContext, useContext, useState } from "react";

const FileContext = createContext();

export function FileProvider({ children }) {
  const [activeFile, setActiveFile] = useState("readme");

  return (
    <FileContext.Provider value={{ activeFile, setActiveFile }}>
      {children}
    </FileContext.Provider>
  );
}

export function useFile() {
  return useContext(FileContext);
}