import Head from "next/head";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Intro } from "../components/intro";
import { Projects } from "../components/projects/projects";

const appTitle = "Martin Au-yeung";
const description = "Martin Au-yeung's cool portfolio site. Built with NextJS";

const App = () => {
  return (
    <>
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <meta name="description" content={description}></meta>
        <meta property="og:title" content={appTitle} key="ogtitle" />
+       <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:url" content="https://martinauyeung.com/" />
        <meta property="og:type" content="website" /> 
        <meta property="og:image" content="http://martinauyeung.com/martinauyeungimage.png" key="ogimage" />
      </Head>
      <div className="pb-8">
          <Header />
        </div>
        <body>
          <div className="pb-2">
            <Intro />
          </div>
          <div className="pb-8">
            <Projects />
          </div>
        </body>
        <Footer />
    </>
  );
};

export default App;
