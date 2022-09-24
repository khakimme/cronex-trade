import mock from "../../mocks/markets.json";

export default function Markets() {
  return (
    <div className="flex items-center gap-4">
      <div className="text-base font-bold">$19,172</div>
      <ul className="flex gap-3">
        {mock.map((item, index) => {
          return (
            <li className="flex flex-col" key={index}>
              <span className="text-xs">{item.time}</span>
              <span className="text-sm leading-[1.1]">{item.amount}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
