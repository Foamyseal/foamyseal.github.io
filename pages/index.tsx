import Head from "next/head";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Intro } from "../components/intro";
import { Projects } from "../components/projects/projects";

const App = () => {
  return (
    <>
      <Head>
        <title>Martin Au-yeung</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
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
