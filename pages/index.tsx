import Head from "next/head";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Intro } from "../components/intro";
import { Projects } from "../components/projects/projects";
import { Experiences } from "../components/experiences/experiences";
import { Shows } from "../components/shows/shows";
import { SanFranFood } from "../components/food/sf";
import { VancouverFood } from "../components/food/vancouver";
import { NYCFood } from "../components/food/nyc";
import { LAFood } from "../components/food/la";

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
        <meta name="title" property="og:title" content={appTitle} key="ogtitle" />
        <meta property="og:site_name" content="Martin Au-yeung's Portfolio Site" />
        <meta name="description" property="og:description" content={description} key="ogdesc" />
        <meta property="og:url" content="https://martinauyeung.com/" />
        <meta property="og:type" content="website" />
        <meta name="image" property="og:image" content="/img.png" key="ogimage" />
        <meta name="author" content="Martin Au-yeung"></meta>
      </Head>
      <div className="pb-8">
        <Header />
      </div>
      <body>
        <div className="pb-2">
          <Intro />
        </div>
        <div className="pb-8">
          <Experiences />
        </div>
        <div className="pb-8">
          <Shows />
        </div>
        <div className="pb-8">
          <VancouverFood />
        </div>
        <div className="pb-8">
          <SanFranFood />
        </div>
        <div className="pb-8">
          <NYCFood />
        </div>
        <div className="pb-8">
          <LAFood />
        </div>
      </body>
      <Footer />
    </>
  );
};

export default App;
