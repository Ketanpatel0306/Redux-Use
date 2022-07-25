import { Provider } from "react-redux";
import "../styles/globals.css";
import { store, persister } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default MyApp;
