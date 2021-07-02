  
import { createContext, useState } from 'react';

export const ServiceContext = createContext(null);

export function StoreProvider({ children }) {
  const selectedEquipment = useState({});
  return <ServiceContext.Provider value={selectedEquipment}>{children}</ServiceContext.Provider>
}
