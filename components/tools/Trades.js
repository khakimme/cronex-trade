export default function Trades({ list }) {
  const priceColor = (value) => (value ? "text-buy" : "text-sell");

  return (
    <section className="h-full border border-grayish-blue-80 ">
      <div className="flex flex-row h-6 items-center justify-between px-4 border-b border-grayish-blue-80 bg-grayish-blue-86">
        <h2 className="text-tiny uppercase text-grayish-blue-15">Trades</h2>
        <span>@</span>
      </div>

      <div className="h-table">
        <div className="flex flex-col h-full">
          <header className="flex justify-between text-tiny px-2 py-1 text-grayish-blue-36 text-right bg-grayish-blue-87 border-b border-grayish-blue-78">
            <span className="flex-[1_1_120%;]">Amount</span>
            <span className="flex-[1_1_120%;]">Time</span>
            <span className="flex-[1_1_120%;]">Price</span>
          </header>

          <main className="flex-[1_1_auto] overflow-y-auto h-0 text-xs bg-grayish-blue-89">
            {list.map((trade, index) => {
              return (
                <div
                  className="flex flex-row justify-between relative text-xs text-right px-2 mt-px
                  hover:bg-tv-row-shade"
                  key={index}
                >
                  <span className="flex-[1_1_120%] text-grayish-blue-15">
                    {trade.amount}
                  </span>
                  <span className="flex-[1_1_110%] pl-2 text-grayish-blue-36">
                    {trade.time}
                  </span>
                  <span
                    className={
                      "flex-[1_1_110%] pl-2 " + priceColor(trade.isBid)
                    }
                  >
                    {trade.price}
                  </span>
                </div>
              );
            })}
          </main>
        </div>
      </div>
    </section>
  );
}
