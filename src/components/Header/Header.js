import React from "react";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="w-full h-16 bg-gray-200">
        <div className="flex justify-start bg-gray-200 mt-12">
          <div className="text-gray-700 text-start bg-gray-900 px-4 py-2 m-2">
            <span className="font-bold text-white"> Expense Tracker</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
