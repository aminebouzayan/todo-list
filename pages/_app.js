// import '../styles/globals.css'
import "../styles/_style.scss";
// import AppProvider from "../components/dependencies/CarouselContext";

function MyApp({ Component, pageProps }) {
  // <AppProvider>
  return <Component {...pageProps} />;
  // </AppProvider>
}

export default MyApp;
