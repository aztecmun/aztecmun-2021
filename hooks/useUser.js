import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/client'
import { useRouter } from 'next/router'

export const USER_STATES = {
  NOT_LOGGED: null,
  UNKNOWN: undefined,
}

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.UNKNOWN)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push('/ingresar')
  }, [user])

  return user
}
