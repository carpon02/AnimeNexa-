import { createContext} from "react";
import { nfts } from "../assets/assets";


export const AppContext = createContext();

const AppContextProvider = (props) => {
   
    const value = {
        nfts
    }
    
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export default AppContextProvider;