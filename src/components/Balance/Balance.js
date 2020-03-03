import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { numberWithCommas } from "../../utils/format";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <Fragment>
      <div className="w-full h-24 bg-gray-200 mt-8">
        <div className="flex justify-start">
          <div className="w-40 h-24 px-6">
            <div className="block text-sm mt-4">Your Balance</div>
            <div className="block text-lg mt-2 font-semibold">
              ${numberWithCommas(total)}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Balance;
