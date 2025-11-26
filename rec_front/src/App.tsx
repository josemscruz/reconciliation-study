import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import "./index.css";

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

const element = document.getElementById("root");

function App() {
  return (
    <>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </StrictMode>
    </>
  );
}

if (element) {
  createRoot(element).render(<App />);
}
