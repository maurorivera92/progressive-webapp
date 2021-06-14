import React, { FC } from "react";

import Head from "next/head";
import AppHeader from "../components/appHeader";
import AppFooter from "../components/appFooter";
const MainTemplate: FC<{}> = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>App de prueba</title>
            </Head>
            <AppHeader />
            <div className="inner-content">{children}</div>
            <AppFooter />
        </>
    );
};
export default MainTemplate;
