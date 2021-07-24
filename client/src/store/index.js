  
import { createContext, useState } from 'react';

export const ServiceContext = createContext(null);

export function StoreProvider({ children }) {
  const selectedEquipmentInStore = useState({});
  const equipmentListInStore = useState([]);
  return (
    <ServiceContext.Provider
      value={{ selectedEquipmentInStore, equipmentListInStore }}>
        { children }
    </ServiceContext.Provider>
  )
}
