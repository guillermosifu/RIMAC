import PropTypes from "prop-types"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// stores
import { useUserStore } from "@/stores/user.store";
// apis
import { getUser } from "@/apis/ApisGeneral";
// utils
import { findUser } from "@/utils/findUser";

export const useValidateCredentials = ({ onError = () => {} }) => {
  const [isValidating, setIsValidating] = useState(false);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const onSubmit = ({ notValid, ...values }) => {
    const user = findUser(values)

    if (user) {
      setIsValidating(true);

      getUser()
        .then((data) => {
          setUser({ ...values, ...data, isLogged: true });
          navigate("/plans");
        })
        .finally(() => setIsValidating(false));
    } else {
      onError()
    }
  };

  return {
    isValidating,
    onSubmit
  }
}

useValidateCredentials.propTypes = {
  onError: PropTypes.func.isRequired
}