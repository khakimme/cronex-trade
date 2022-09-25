export default function Trades({ list }) {
  return (
    <section className="h-full">
      <div className="h-9">
        <h2>Trades</h2>
      </div>

      <div className="h-table">
        <div className="flex flex-col h-full">
          <header className="flex justify-between">
            <span>Amount</span>
            <span>Time</span>
            <span>Price</span>
          </header>

          <main class="flex-[1_1_auto] overflow-y-auto h-0">
            {list.map((trade, index) => {
              return (
                <div className="flex flex-row justify-between" key={index}>
                  <span>{trade.amount}</span>
                  <span>{trade.time}</span>
                  <span>{trade.price}</span>
                </div>
              );
            })}
          </main>
        </div>
      </div>
    </section>
  );
}
