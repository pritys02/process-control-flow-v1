import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext.tsx";
import { ThemeProvider } from "@ui5/webcomponents-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<SidebarProvider>
					<App />
				</SidebarProvider>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
);
