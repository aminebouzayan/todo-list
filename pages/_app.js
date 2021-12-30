// import '../styles/globals.css'
import TasksContext from "../components/dependencies/TasksContext";
import "../styles/_style.scss";
// import AppProvider from "../components/dependencies/CarouselContext";

function MyApp({ Component, pageProps }) {
  // <AppProvider>
  return (
    <TasksContext>
      <Component {...pageProps} />;
    </TasksContext>
  );

  // </AppProvider>
}

export default MyApp;
