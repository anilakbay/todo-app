import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./redux/store"; // Dosya yolu güncellendi
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
