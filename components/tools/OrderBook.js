export default function OrderBook({ list }) {
  return (
    <section className="h-full w-full border border-grayish-blue-80">
      <header className="flex flex-row items-center h-6 px-4 border-b border-grayish-blue-80 bg-ct-header">
        <h2 className="text-tiny uppercase text-ct-label-white">Order Book</h2>
      </header>

      <div className="h-table">
        <div className="flex flex-col h-full">
          <header className="flex justify-between text-tiny py-1 pr-4 text-grayish-blue-36 text-right bg-grayish-blue-87 border-b border-grayish-blue-78">
            <span className="flex-[1_1_70%] text-left pl-4 md:hidden">Sum</span>
            <span className="flex-[1_1_100%] text-right md:hidden">Value</span>
            <span className="flex-[1_1_100%] text-right">Amount</span>
            <span className="flex-[1_1_100%] text-right pr-2">Bid</span>

            <span className="flex-[1_1_70%] text-left pl-2">Ask</span>
            <span className="flex-[1_1_100%] text-right">Amount</span>
            <span className="flex-[1_1_100%] text-right md:hidden">Value</span>
            <span className="flex-[1_1_70%] text-right md:hidden">Sum</span>
          </header>

          <main className="flex-[1_1_auto] overflow-y-auto touch-auto h-0 text-xs bg-grayish-blue-89 pr-4">
            {list.map((trade, index) => {
              return (
                <div
                  className="flex flex-row justify-between relative 
                    text-xs mt-px gap-1 
                    hover:bg-tv-row-shade"
                  key={index}
                >
                  <span className="flex-[1_1_70%] text-left pl-4 text-grayish-blue-36  md:hidden">
                    {trade.sumBid}
                  </span>
                  <span className="flex-[1_1_100%] text-right text-grayish-blue-15  md:hidden">
                    {trade.valueBid}
                  </span>
                  <span className="flex-[1_1_100%] text-right text-grayish-blue-15">
                    {trade.amountBid}
                  </span>
                  <span className="flex-[1_1_100%] text-right text-buy">
                    {trade.bid}
                  </span>

                  <span className="flex-[1_1_70%] text-left text-sell">
                    {trade.ask}
                  </span>
                  <span className=" flex-[1_1_100%] text-right text-grayish-blue-15">
                    {trade.amountAsk}
                  </span>
                  <span className="flex-[1_1_100%] text-right text-grayish-blue-15  md:hidden">
                    {trade.valueAsk}
                  </span>
                  <span className="flex-[1_1_70%] text-right text-grayish-blue-36  md:hidden">
                    {trade.sumAsk}
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
