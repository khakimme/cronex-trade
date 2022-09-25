export default function OrderBook({ list }) {
  return (
    <section className="h-full">
      <header className="h-9">
        <h2>OrderBook</h2>
      </header>

      <div className="h-table">
        <div className="flex flex-col h-full">
          <header className="flex justify-between">
            <span>Sum</span>
            <span>Value</span>
            <span>Amount</span>
            <span>Bid</span>
            <span>Ask</span>
            <span>Amount</span>
            <span>Value</span>
            <span>Sum</span>
          </header>

          <main class="flex-[1_1_auto] overflow-y-auto h-0">
            {list.map((trade, index) => {
              return (
                <div className="flex flex-row justify-between" key={index}>
                  <span>{trade.sumBid}</span>
                  <span>{trade.valueBid}</span>
                  <span>{trade.amountBid}</span>
                  <span>{trade.bid}</span>
                  <span>{trade.ask}</span>
                  <span>{trade.amountAsk}</span>
                  <span>{trade.valueAsk}</span>
                  <span>{trade.sumAsk}</span>
                </div>
              );
            })}
          </main>
        </div>
      </div>
    </section>
  );
}
