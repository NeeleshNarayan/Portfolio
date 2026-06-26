import { createContext, useContext, useState } from "react";
import files from "../data/files";

const FileContext = createContext();

export function FileProvider({ children }) {

  const [openedFiles, setOpenedFiles] = useState([
    files[0]
  ]);

  const [activeFile, setActiveFile] = useState(files[0]);

  function openFile(fileType) {

    const file = files.find(
      file => file.type === fileType
    );

    if (!file) return;

    const exists = openedFiles.some(
      opened => opened.type === fileType
    );

    if (!exists) {

      setOpenedFiles(prev => [
        ...prev,
        file
      ]);

    }

    setActiveFile(file);

  }

  function closeFile(fileType) {

    const updated = openedFiles.filter(
        file => file.type !== fileType
    );

    setOpenedFiles(updated);

    if (activeFile?.type === fileType) {

        setActiveFile(updated[0]);

    }

}

  return (

    <FileContext.Provider
      value={{
        activeFile,
        openedFiles,
        openFile,
        closeFile,
        setActiveFile
      }}
    >

      {children}

    </FileContext.Provider>

  );

}

export function useFile() {
  return useContext(FileContext);
}