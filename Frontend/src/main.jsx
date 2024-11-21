import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import IngredientsProvider from "./providers/IngredientsProvider.jsx";
import RecipesProvider from "./providers/RecipesProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <IngredientsProvider>
        <RecipesProvider>
          <App />
        </RecipesProvider>
      </IngredientsProvider>

  </BrowserRouter>
);
