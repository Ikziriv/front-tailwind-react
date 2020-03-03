import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = e => {
    e.preventDefault();
    const newTrans = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount,
    };

    addTransaction(newTrans);
  };
  return (
    <Fragment>
      <div className="w-full h-10 mt-1">
        <div className="flex justify-center">
          <div className="w-full px-6">
            <div className="block text-white text-sm mt-4 py-3 border-b border-black">
              Add Transcation
            </div>
            <div className="block">
              <div className="w-full">
                <div className="bg-white py-4 px-4">
                  <form className="w-full" onSubmit={onSubmit}>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-1/3 px-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Text
                        </label>
                        <input
                          className="appearance-none text-xs block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          type="text"
                          value={text}
                          onChange={e => setText(e.target.value)}
                        />
                      </div>
                      <div className="w-1/3 px-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Amount (Negative-Expense, Positive-Income)
                        </label>
                        <input
                          className="appearance-none text-xs block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          type="text"
                          value={amount}
                          onChange={e => setAmount(e.target.value)}
                        />
                      </div>

                      <div className="w-1/3 px-3 md:mb-0">
                        <div className="mt-6 py-1">
                          <button
                            className="flex-shrink-0 w-full bg-green-500 hover:bg-green-700 text-sm text-white py-2 px-2 rounded"
                            type="submit"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddTransaction;
