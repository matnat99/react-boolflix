import { createContext, useContext, useState } from "react";

// Creazione di un contesto
const DataContext = createContext();

// Definizione di un custom provider (trasmette i dati da condividere)
const DataContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <DataContext.Provider value={{ movies, setMovies }}>
      {children}
    </DataContext.Provider>
  );
};

// Creazione di un custom hook per consumare il contesto (serve per recuperare i dati dal contesto)
const useDataContext = () => {
  return useContext(DataContext);
};

export { useDataContext, DataContextProvider };
