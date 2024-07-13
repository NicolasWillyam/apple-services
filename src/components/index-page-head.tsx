import Head from "next/head";
import React from "react";

const IndexPageHead = () => {
  const logoImg = "/logo.png";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <title>Apple Entertainment - Services</title>
      <meta
        name="Description"
        content="Enjoy the best content and experiences on Apple TV+, Apple Music, Apple Arcade, Apple Fitness+, Apple News+, Apple Podcasts, and Apple Books."
      />
      <meta
        property="og:image"
        content="https://www.apple.com/v/services/h/images/meta/services__6piyx6yonia2_og.png?202403281007"
      />
      <meta property="og:title" content="Entertainment - Services" />
      <meta
        name="og:description"
        content="Enjoy the best content and experiences on Apple TV+, Apple Music, Apple Arcade, Apple Fitness+, Apple News+, Apple Podcasts, and Apple Books."
      />
      <meta property="og:url" content="https://www.apple.com/services/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Apple" />
      <meta property="og:type" content="website" />
      <meta name="twitter:site" content="@Apple" />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="icon" href={logoImg} />
      <link rel="shortcut icon" href={logoImg} />
      <link rel="apple-touch-icon" href={logoImg} />
    </Head>
  );
};

export default IndexPageHead;
