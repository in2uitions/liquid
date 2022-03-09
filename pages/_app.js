import "../styles/globals.css";
//import FullScreen from "../components/FullScreen";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        {/* <FullScreen /> */}
      </div>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
