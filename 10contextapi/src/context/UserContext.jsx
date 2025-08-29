import React from 'react'
import { createContext } from 'react'


export const DataContext= createContext()


const UserContext = ({children}) => {

    const name = "Shantanu"

  return (
    <div>
        <h1>User Context</h1>
        <DataContext.Provider value={name}>
             {children}
        </DataContext.Provider>
       
    </div>
  )
}

export default UserContext
