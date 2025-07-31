export interface User {
  id: string
  name: string
  email: string
  password: string
}

// In-memory user storage
export const users: User[] = []

export const findUserByEmail = (email: string): User | undefined => {
  return users.find(user => user.email === email)
}

export const addUser = (user: User): void => {
  users.push(user)
}

export const getUserById = (id: string): User | undefined => {
  return users.find(user => user.id === id)
} 