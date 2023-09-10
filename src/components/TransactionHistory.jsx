import BitcoinImage from "../assets/crypto/bitcoin.png";
import { FcEmptyTrash } from "react-icons/fc";

// Sample transaction data
const transactions = [
  {
    sn: 1,
    assetIcon: "https://example.com/bitcoin-icon.png",
    date: "2023-09-09",
    id: 12345,
    amount: "1000 BTC",
    status: "Completed",
    receiver: "John Doe",
    type: "Buy",
  },
  // Add more transactions to reach a total of 10
];

function TransactionTable() {
  return (
    <div className="w-full  pt-8 lg:pt-8  mt-8 flex flex-col justify-center items-start rounded overflow-auto  max-h-[500px]">
      <div className="flex flex-col justify-center items-center py-16 w-full bg-bg3">
        <p className="text-center text-white/80 text-lg py-6">
          {" "}
          No history yet
          <br />
        </p>
        <FcEmptyTrash className="text-4xl" />
      </div>

      <table className="w-full hidden bg-bg3  shadow-md rounded table">
        <thead>
          <tr>
            <th className="py-6 px-4">S/N</th>
            <th className="py-6 px-4">Asset </th>
            <th className="py-6 px-4">Date</th>
            <th className="py-6 px-4">ID</th>
            <th className="py-6 px-4">Amount</th>
            <th className="py-6 px-4">Status</th>
            <th className="py-6 px-4">Receiver</th>
            <th className="py-6 px-4">Type</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction.sn}
              className={`${
                transaction.sn % 2 === 0 ? " bg-opacity-80 " : "  "
              } border-b border-white/20`}
            >
              <td className="py-4 px-4 text-center table-cell">
                {transaction.sn}
              </td>
              <td className="py-4 px-4  text-center flex flex-col justify-center items-center ">
                <img
                  src={BitcoinImage}
                  alt="Crypto Icon"
                  className="max-w-30 max-h-30"
                />
              </td>
              <td className="py-4 px-4 text-center table-cell">
                {transaction.date}
              </td>
              <td className="py-4 px-4 text-center table-cell">
                {transaction.id}
              </td>
              <td className="py-4 px-4 text-center table-cell">
                {transaction.amount}
              </td>
              <td className="py-4 px-4 text-center table-cell">
                {transaction.status}
              </td>
              <td className="py-4 px-4 text-center table-cell">
                {transaction.receiver}
              </td>
              <td className="py-4 px-4 text-center table-cell">
                {transaction.type}
              </td>
              {/* Add more data rows as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
