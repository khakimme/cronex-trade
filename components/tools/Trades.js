export default function Trades({ list }) {
  return (
    <section className="h-full">
      <header className="h-9">
        <h2>Trades</h2>
      </header>
      <table className="w-full h-table">
        <thead className="table table-auto w-full">
          <tr>
            <th>Amount</th>
            <th>Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody class="block overflow-y-auto h-tbody">
          {list.map((trade, index) => {
            return (
              <tr className="w-full table table-auto" key={index}>
                <td>{trade.amount}</td>
                <td>{trade.time}</td>
                <td>{trade.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
