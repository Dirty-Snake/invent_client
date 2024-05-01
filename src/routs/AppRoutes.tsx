import React, { FC, useEffect } from 'react';
import PublicRoutes from "./PublicRoutes";
import { useUnit } from "effector-react";
import SecureRoutes from "./SecureRoutes";
import { $user } from "../entities/user/model/index";

const AppRoutes: FC = () => {

  const [user] = useUnit([$user])

  useEffect(() =>{

  },[user])

  return user?.user?.phone ? <SecureRoutes /> : <PublicRoutes />;
  // return <SecureRoutes />;
};

export default AppRoutes;
