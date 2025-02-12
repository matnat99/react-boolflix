import Header from "./components/Header";
import Main from "./components/Main";

// Contexts
import { DataContextProvider } from "./contexts/DataContext";

export default function App() {
  return (
    <DataContextProvider>
      <Header />
      <Main />
    </DataContextProvider>
  );
}
