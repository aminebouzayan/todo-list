// import '../styles/globals.css'
import "../styles/_style.scss";
import AppProvider from "../components/CarouselContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />;
    </AppProvider>
  );
}

export default MyApp;
