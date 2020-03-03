import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { numberWithCommas } from "../../utils/format";

const Income = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <Fragment>
      <div className="w-full h-24 bg-gray-200 mt-8">
        <div className="flex justify-center bg-gray-200">
          <div className="text-gray-700 text-center px-4 py-2 m-2">
            <div className="block uppercase font-semibold text-xs">Income</div>
            <div className="block uppercase font-semibold text-green-500 text-sm">
              ${numberWithCommas(income)}
            </div>
          </div>
          <div className="text-gray-700 text-center px-4 py-2 m-2">
            <div className="block uppercase font-semibold text-xs">Expense</div>
            <div className="block uppercase font-semibold text-red-500 text-sm">
              ${numberWithCommas(expense)}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Income;
