import Link from "next/link";
import React, { FC, useContext } from "react";
import { UserContext } from "../../lib/context";
import HackerPng from "../../public/hacker.png";
import { routes } from "../../utils/routes";

interface IProps {
  user?: string;
  userName?: string;
}

const Navbar: FC<IProps> = () => {
  const { user, username } = useContext(UserContext);
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>

        {/* user is signed-in and has userName */}
        {username && (
          <>
            <li className="push-left">
              <Link href={routes.Admin}>
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} passHref>
                <img src={user?.photoURL || HackerPng} alt="" />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href={routes.Enter} passHref>
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
