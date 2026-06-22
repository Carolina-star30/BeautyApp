import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (email, parola) => {
    if (email === 'admin@salon.ro' && parola === 'admin123') {
      setUser({ email, rol: 'admin', nume: 'Manager Salon' })
      return 'admin'
    }
    if (email === 'ana@salon.ro' && parola === 'ana123') {
      setUser({ email, rol: 'angajat', nume: 'Ana Popescu', id: 1 })
      return 'angajat'
    }
    return null
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)