import React, { createContext } from 'react'

export const userDataContext = createContext();
const [user, setUser] = useState({
    fullname: {
        firstname: '',
        lastname: ''
    },
    email: '',
    password: ''
})

function UserContext({children}) {
  return (
    <div>
        <userDataContext.Provider value={user}>
            {children}
        </userDataContext.Provider>
    </div>
  )
}

export default UserContext