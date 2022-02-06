import Link from "next/link";
import React, { useContext } from "react";
import { UserContext } from "../../lib/context";
import { routes } from "../../utils/routes";

interface IProps {
  fallback?: React.ReactNode;
  children?: React.ReactNode;
}

const AuthCheck = ({ fallback, children }: IProps) => {
  const { username } = useContext(UserContext);

  return (
    <>
      {username
        ? children
        : fallback || <Link href={routes.Enter}>You must be signed in</Link>}
    </>
  );
};

export default AuthCheck;
