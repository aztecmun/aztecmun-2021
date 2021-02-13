// React and Next imports
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Firebase imports
import { onAuthStateChanged } from 'firebase/client'

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

  // useEffect(() => {
  //   user === USER_STATES.NOT_LOGGED && router.push('/login')
  // }, [user])

  return user
}
