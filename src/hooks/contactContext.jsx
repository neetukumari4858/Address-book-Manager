import { createContext, useContext, useReducer } from "react";
import {ContactReducer} from "./contactReducer";
const contactContext = createContext();
const useContact = () => useContext(contactContext);

const ContactProvider = ({ children }) => {
  const [data, dispatchData] = useReducer(ContactReducer, {
    addContact:[]
  });
  return <contactContext.Provider value={{data, dispatchData}}>
      {children}
  </contactContext.Provider>;
};
export { ContactProvider ,useContact};

