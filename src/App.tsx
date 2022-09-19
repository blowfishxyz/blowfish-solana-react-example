import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BlowfishEvaluation } from "./BlowfishEvaluation";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <BlowfishEvaluation />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
