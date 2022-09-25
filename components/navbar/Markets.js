import mock from "../../mocks/markets.json";
import { currency } from "../../utils/format";

export default function Markets() {
  return (
    <div className="flex items-center gap-4">
      <div className="text-base font-bold text-white">$19,172</div>
      <ul className="flex gap-4">
        {mock.map((item, index) => {
          const color = index === 0 ? "text-ct-sell-color" : "text-white";

          return (
            <li className="flex flex-col" key={index}>
              <span className="text-tiny text-ct-grayish-10">{item.time}</span>
              <span className={"text-xs leading-[1.1] " + color}>
                {item.amount}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
