import React from "react";
import HeaderOne from "../components/header/header-one";
import {Helmet} from "react-helmet";

export default function Page() {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/1.png"} />
            </Helmet>
            {/*<ModalComponent />*/}
            <HeaderOne logoName={"logo.png"} topClass="top-header" />
        </>
    );
}