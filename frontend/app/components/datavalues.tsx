async function getData() {
  const res = await fetch("http://localhost:3333/transactions");
  return res.json();
}
export default async function DataValues() {
  const data = await getData();

  const receitas = data
    .filter((item: any) => item.type === "receita")
    .reduce((acc: any, item: any) => acc + item.amount, 0);

  const despesas = data
    .filter((item: any) => item.type === "despesa")
    .reduce((acc: any, item: any) => acc + item.amount, 0);

  const total = receitas - despesas;

  let performanceMsg = "";
  let performanceColor = "";

  if (total > 0) {
    performanceMsg = "Boa! Você está economizando grana! 😊";
    performanceColor = "text-green-500";
  } else if (total < 0) {
    performanceMsg = "Atenção! Suas despesas estão maiores que as receitas! 😕";
    performanceColor = "text-red-500";
  } else {
    performanceMsg = "Tudo empatado! Tá na linha. 👌";
    performanceColor = "text-yellow-500";
  }
  return (
    <>
      <div className="mt-4 mx-4 px-4">
        <p className={`text-lg font-semibold ${performanceColor}`}>
          {performanceMsg}
        </p>
      </div>
      <section className="grid grid-cols-1 gap-4 mt-4 mx-4 p-4 rounded-md md:flex-row md:grid-cols-3">
        <div className="bg-[#1D232F] p-4 rounded-xl">
          <h3 className="font-bold text-2xl">Receitas</h3>
          <span className="text-green-500 text-4xl">
            R$ {receitas.toFixed(2)}
          </span>
        </div>
        <div className="bg-[#1D232F] p-4 rounded-xl">
          <h3 className="font-bold text-2xl">Despesas</h3>
          <span className="text-red-500 text-4xl">
            R$ {despesas.toFixed(2)}
          </span>
        </div>
        <div className="bg-[#1D232F] p-4 rounded-xl">
          <h3 className="font-bold text-2xl">Total</h3>
          <span className="text-sky-500 text-4xl">R$ {total.toFixed(2)}</span>
        </div>
      </section>
    </>
  );
}
