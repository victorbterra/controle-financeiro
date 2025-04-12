import DataValues from "./components/datavalues";
import RecentTransactions from "./components/Recenttransactions";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto h-screen w-screen">
      <DataValues />
      <RecentTransactions />
    </main>
  );
}
