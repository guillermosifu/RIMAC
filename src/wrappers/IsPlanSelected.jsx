import PropTypes from 'prop-types'
import { Navigate } from "react-router-dom"
import { useUserStore } from "@/stores/user.store"

export const IsPlanSelected = ({ children }) => {
  const user = useUserStore(state => state.user)
  
  return user.selectedPlan ? children : <Navigate to="/plans" />
}

IsPlanSelected.propTypes = {
  children: PropTypes.node
}