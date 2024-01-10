import React, { StrictMode} from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
// remember to remove strictmode when going to production 
// it is only need in development to provide extra debug
root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );