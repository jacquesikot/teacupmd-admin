import React, { useState } from 'react';
import * as Yup from 'yup';

import firebaseFunc from '../../firebase/init';

const useLogin = () => {
  const [loading, setIsLoading] = useState<boolean>(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = async (info) => {
    setIsLoading(true);
    await firebaseFunc.signInUser(info.email, info.password);
    setIsLoading(false);
  };

  return {
    handleSubmit,
    loading,
    loginSchema,
  };
};

export default useLogin;
