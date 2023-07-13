import React from "react";
import HeaderOne from "../components/header/header-one";
import {Helmet} from "react-helmet";
import MasterFooter from "../components/footers/common/MasterFooter";

export default function Page() {
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