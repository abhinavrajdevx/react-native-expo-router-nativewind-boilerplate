import { createContext, useContext, useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const FirstBootContext = createContext<any | null>(null);

const GlobalProvider = ({ children }: { children: any }) => {
  const [firstTime, set_firstTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const first_run = async () => {
      const firstTimeStorageValue = useAsyncStorage("FirstTime");
      set_firstTime(await firstTimeStorageValue.getItem());
      setLoading(false);
    };
    first_run();
  }, []);

  return (
    <FirstBootContext.Provider value={{ firstTime, set_firstTime }}>
      {children}
    </FirstBootContext.Provider>
  );
};

export default GlobalProvider;
export const useGlobalContext = () => useContext(FirstBootContext);
