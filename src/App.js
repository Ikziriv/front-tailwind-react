import React, { Fragment } from "react";
import "./assets/main.css";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import Income from "./components/Income/Income";
import History from "./components/History/History";
import AddTransaction from "./components/Transaction/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <Fragment>
      <GlobalProvider>
        <div className="flex flex-wrap">
          <div className="w-full h-screen relative bg-gray-100">
            <div className="absolute inset-x-0 top-0 h-8 bg-gray-900"></div>
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gray-900"></div>

            <div className="absolute inset-x-0 bottom-0 h-48 bg-gray-900">
              <AddTransaction />
            </div>
            <div className="flex flex-wrap">
              <Header />
              <div className="w-1/2">
                <Balance />
              </div>
              <div className="w-1/2">
                <Income />
              </div>
              <div className="w-full">
                <History />
              </div>
            </div>
          </div>
        </div>
      </GlobalProvider>
    </Fragment>
  );
}

export default App;
