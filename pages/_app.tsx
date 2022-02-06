import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const userData = useUserData();
  return (
    <>
      <UserContext.Provider value={userData}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  );
};

export default MyApp;