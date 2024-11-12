import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UsersProvider from "./providers/usersProvider.jsx";
import IngredientsProvider from "./providers/IngredientsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UsersProvider>
      <IngredientsProvider>
        <App />
      </IngredientsProvider>
    </UsersProvider>
  </BrowserRouter>
);
