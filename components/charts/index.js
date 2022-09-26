import DepthChart from "./DepthChart";
import OrderBook from "./OrderBook";
import Charting from "./Charting";
import Trades from "./Trades";
import StartTrading from "../StartTrading";

import tradesData from "../../mocks/trades.json";
import ordersData from "../../mocks/orders.json";

export default function Index() {
  return (
    <div
      className="grid 
                    grid-cols-[250px_repeat(2,_1fr)_250px] 
                    grid-rows-[1fr_300px] 
                    grid-cols
                    w-screen 
                    h-homePage
    
                    lg:grid-cols-[auto_250px_250px]
                    md:grid-cols-[1fr_250px]
                    md:grid-rows-[minmax(300px,_50%)_375px_minmax(250px,_33%)]
                    
                    sm:grid-cols-[1f]
                    sm:grid-rows-[1fr_265px]
                    "
    >
      <div
        className="col-start-1 
                      col-end-2 
                      row-start-1 
                      row-end-2
                      md:col-start-2
                      md:col-end-3
                      md:row-start-3
                      md:row-end-4
                      sm:hidden
                      "
      >
        <Trades list={tradesData} />
      </div>
      <div
        className="col-start-2 
                    col-end-5 
                    row-start-1 
                    row-end-2
                    md:col-start-1
                    md:col-end-3
                    md:row-start-1
                    md:row-end-2
                    "
      >
        <Charting />
      </div>
      <div
        className="col-start-1 
                      col-end-3 
                      row-start-2 
                      row-end-3
                      lg:col-end-2
                      md:col-start-1
                      md:col-end-2
                      md:row-start-3
                      md:row-end-4
                      sm:hidden
                      "
      >
        <DepthChart />
      </div>
      <div
        className="col-start-3 
                      col-end-5 
                      row-start-2 
                      row-end-3
                      lg:col-start-2
                      md:col-start-1
                      md:col-end-2
                      md:row-start-2
                      md:row-end-3
                      sm:hidden
                      "
      >
        <OrderBook list={ordersData} />
      </div>
      <div
        className="md:block 
                      hidden
                      col-start-2
                      col-end-3
                      row-start-2
                      row-end-3
                      sm:col-start-1
      "
      >
        <StartTrading />
      </div>
    </div>
  );
}
