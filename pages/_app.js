import React from "react";
import App, { Container as NextContainer } from "next/app";

const makeStore = (initialState, options) => {
  const store = initializeStore(initialState, options);
  global.store = store;
  return store;
};

class MyApp extends App {
  static async getInitialProps({ Component, _, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <NextContainer>
        <Component {...pageProps} />
      </NextContainer>
    );
  }
}

export default MyApp;
