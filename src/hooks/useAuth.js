import { createContext,useContext } from 'react'
//import AuthContext from 'app/contexts/JWTAuthContext'
const AuthContext = createContext({
    isAuthenticated:true,
    user:{name:'ali',avatar:null},
    method: 'JWT',
    login: () => Promise.resolve(),
    logout: () => { },
    register: () => Promise.resolve(),
})
const useAuth = () => useContext(AuthContext)

export default useAuth
