import Head from "next/head";
import React from "react";

export default function Layout({ pageTitle, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>{children}</main>
    </React.Fragment>
  );
}
