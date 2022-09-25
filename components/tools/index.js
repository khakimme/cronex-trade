import DepthChart from "./DepthChart";
import OrderBook from "./OrderBook";
import Chart from "./Chart";
import Trades from "./Trades";

import tradesData from "../../mocks/trades.json";
import ordersData from "../../mocks/orders.json";

export default function Index() {
  return (
    <div className="grid grid-cols-[250px_auto_auto_250px] grid-rows-[auto_300px] w-screen h-home">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2">
        <Trades list={tradesData} />
      </div>
      <div className="col-start-2 col-end-5 row-start-1 row-end-2">
        <Chart />
      </div>
      <div className="col-start-1 col-end-3 row-start-2 row-end-3">
        <DepthChart />
      </div>
      <div className="col-start-3 col-end-5 row-start-2 row-end-3">
        <OrderBook list={ordersData} />
      </div>
    </div>
  );
}
