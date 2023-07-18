import { useSession, signIn, signOut, getSession } from "next-auth/react"
import {Helmet} from "react-helmet";
import React from "react";
// 
import MasterFooter from "../components/footers/common/MasterFooter";
import HeaderOne from "../components/header/header-one";
// 
export default function Page() {
    const { data: session } = useSession()

    if(session) {

        return (
            <>
                <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/1.png"} />
                </Helmet>

                {/*<ModalComponent />*/}
                <HeaderOne logoName={"logo.png"} topClass="top-header" />

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 style={{textAlign:"center"}}>Welcome {session?.user?.name} to our website</h3>
                <button onClick={() => signOut()}>Sign out</button>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <MasterFooter
                    footerClass={`footer-light`}
                    footerLayOut={"light-layout upper-footer"}
                    footerSection={"small-section border-section border-top-0"}
                    belowSection={"section-b-space light-layout"}
                    newLatter={true}
                    logoName={"logo.png"}
                />
            </>
        );
    }else{
        return (
            <>
                <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/1.png"} />
                </Helmet>
                {/*<ModalComponent />*/}
                <HeaderOne logoName={"logo.png"} topClass="top-header" />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 style={{textAlign:"center"}}>Not Signed in</h3>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <MasterFooter
                    footerClass={`footer-light`}
                    footerLayOut={"light-layout upper-footer"}
                    footerSection={"small-section border-section border-top-0"}
                    belowSection={"section-b-space light-layout"}
                    newLatter={true}
                    logoName={"logo.png"}
                />
            </>
        );
    }
}

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
        props:{}
    };
  }
  return {
    props: { session },
  };
};