// import{ AppProps } from 'next/app'
 
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react"

// import MessengerCustomerChat from "react-messenger-customer-chat";

import { WishlistContextProvider } from "../helpers/wishlist/WishlistContext";
import { CurrencyContextProvider } from "../helpers/Currency/CurrencyContext";
import { CompareContextProvider } from "../helpers/Compare/CompareContext";
import CartContextProvider from "../helpers/cart/CartContext";
import SettingProvider from "../helpers/theme-setting/SettingProvider";
import FilterProvider from "../helpers/filter/FilterProvider";
import ThemeSettings from "../components/customizer/theme-settings";
import { useApollo } from '../helpers/apollo';
import TapTop from "../components/common/widgets/Tap-Top";

// CSS Imports
import "../public/assets/scss/app.scss";


export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState();
  const apolloClient = useApollo(pageProps)

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const url = path[path.length - 1];
    document.body.classList.add("dark");

    let timer=setTimeout(function () {
      setIsLoading(false)
    }, 1000);
    return () => { clearTimeout(timer)}
  }, []);
  return (
    <>
    <ApolloProvider client={apolloClient}>
      {isLoading ? (
        <div className="loader-wrapper">
            <div className="loader"></div>
        </div>
      ) : (
        <>
          {/* <MessengerCustomerChat
            pageId="2123438804574660"
            appId="406252930752412"
            htmlRef="https://connect.facebook.net/en_US/sdk.js"
          /> */}
          <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            {/* <Head>
              <link rel="icon" type="image/x-icon" href={favicon} />
            </Head> */}
            <title>Desai Gold - Gold & Silver Artifacts</title>
          </Helmet>
          <div>
          <SessionProvider session={session}>
            <SettingProvider>
              <CompareContextProvider>
                <CurrencyContextProvider>
                  <CartContextProvider>
                    <WishlistContextProvider>
                      <FilterProvider>
                        <Component {...pageProps} />
                      </FilterProvider>
                    </WishlistContextProvider>
                  </CartContextProvider>
                </CurrencyContextProvider>
                <ThemeSettings /> 
              </CompareContextProvider>
            </SettingProvider>
              <ToastContainer />
              <TapTop />
            </SessionProvider>
          </div>
        </>
      )}
      </ApolloProvider>
    </>
  );
}
