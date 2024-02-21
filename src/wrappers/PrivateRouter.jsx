import PropTypes from 'prop-types'
import { Navigate } from "react-router-dom"
import { useUserStore } from "@/stores/user.store"

export const PrivateRouter = ({ children }) => {
  const user = useUserStore(state => state.user)
  
  return user.isLogged === true ? children : <Navigate to="/" />
}

PrivateRouter.propTypes = {
  children: PropTypes.node
}