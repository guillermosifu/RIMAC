import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/stores/user.store'

export const useIsLogged = () => {
  const { isLogged } = useUserStore(state => state.user) 
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) {
      navigate("/plans")
    }
  }, [])
}
