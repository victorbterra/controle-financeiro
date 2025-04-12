async function getData() {

  const res = await fetch('http://localhost:3333/transactions');
  return res.json();
}

export default async function RecentTransactions() {

  const data = await getData();

  return (
    <section className="bg-[#1D232F] mt-4 mx-8 p-4 rounded-md max-w-4xl">
      <h2 className="text-xl">Recent Transactions</h2>
      <ul className="flex flex-col mt-4">
        {data.map((transaction: any) => (
          <li key={transaction._id} className="flex justify-between p-3 items-center bg-slate-800 mb-4 rounded-md">
            <div className="flex flex-col">
                <span className="font-semibold text-xl">{transaction.description}</span>
                <span className="text-gray-400 text-sm">{transaction.date.split('T')[0]}</span>
            </div>
            <span className="font-medium text-xl">R$ {transaction.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
