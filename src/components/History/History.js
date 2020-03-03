import React, { Fragment, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ListTransaction from "../Transaction/ListTransaction";

const History = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <div className="w-full h-24 mt-1">
        <div className="flex justify-start">
          <div className="w-full h-24 px-6">
            <div className="block text-sm mt-4 py-3 border-b border-black">
              History
            </div>
            <div className="block">
              <div className="w-full overflow-auto">
                {transactions.map(transaction => (
                  <ListTransaction
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default History;
