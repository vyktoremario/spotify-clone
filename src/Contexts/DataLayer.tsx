import React, { createContext, useReducer } from "react";


interface Props {
    // any props that come into the component
    initialState: any,
    reducer:any
}
const context: any = {}
export const DataLayerContext = createContext(context);

export const DataLayer: React.FC<Props> = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

