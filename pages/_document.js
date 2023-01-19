import Document, {
  Html,
  Head,
  Main,
  NextScript
} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zxx">
        <Head>
          <meta name="description" content="Description goes here"/>
          <meta name="author" content="FAME Internet Marketing"/>
          <link rel="canonical" href="https://[clientdomain]"/>
          <meta property="og:url"   content="https://[clientdomain]" />
          <meta property="og:title" content="This is a title." />
          <meta property="og:image" content="https://[clientdomain]/images/[largest image on page].jpg" />
          <meta property="og:description" content="Description goes here" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@[clientTwittername]" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
