import AuthProvider from "react-auth-kit/AuthProvider";
import createStore from "react-auth-kit/createStore";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});
createRoot(document.getElementById("root")!).render(
  <AuthProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
