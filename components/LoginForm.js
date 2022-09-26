import Button from "./Button";

export default function LoginForm() {
  return (
    <div className="bg-grayish-blue-89 h-full p-4">
      <div className="mb-4">
        <Button label="Login" /> <Button label="Register" />
      </div>
      <div>
        <h3 className="text-white bold text-xs">Welcome to Bitstamp</h3>
        <div className="text-grayish-blue-36 text-xs">
          <p>The world's longest-standing crypto exchange.</p>
          <p>
            We provide premium access to cryptocurrency trading for both
            individuals and institutional clients through:
          </p>
          <ul>
            <li>Volume-based fee structure</li>
            <li>High performance matching engine</li>
            <li>FIX, Websocket and HTTP API connectivity</li>
            <li>24/7 service and dedicated premium support</li>
            <li>Industry-leading security practices</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
