import { Provider } from "react-redux";
import "../styles/globals.css";
import { store, persister } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Header } from "../componant";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <Header title={"Home"} />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default MyApp;
