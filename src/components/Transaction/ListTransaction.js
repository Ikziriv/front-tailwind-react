import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { numberWithCommas } from "../../utils/format";

const ListTransaction = ({ transaction }) => {
  const { deletedTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div className="bg-white py-4 px-4 border-r-8 border-gray-900">
      <div
        className={transaction.amount < 0 ? "text-red-500" : "text-green-500"}
      >
        <div className="clearfix">
          <div className="float-left">
            <div className="flex">
              <div
                className="bg-red-600 h-6 w-6 px-2 text-white mr-6"
                onClick={() => deletedTransaction(transaction._id)}
              >
                X
              </div>
              <div className="uppercase">{transaction.text}</div>
            </div>
          </div>
          <div className="float-right">
            {sign}${numberWithCommas(Math.abs(transaction.amount))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTransaction;
