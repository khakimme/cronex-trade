export default function LoginForm() {
  return (
    <div className="bg-grayish-blue-89 h-full p-4">
      <div className="flex flex-row justify-between mb-4 gap-4 sm:gap-3">
        <button type="button" className="flex-1 btn btn-primary btn-large">
          Log in
        </button>
        <button type="button" className="flex-1 btn btn-outline btn-large">
          Register
        </button>
      </div>
      <div>
        <h3 className="text-white bold text-xs">Welcome to Bitstamp</h3>
        <div className="text-grayish-blue-36 text-xs">
          <p>The world&apos;s longest-standing crypto exchange.</p>
          <p>
            We provide premium access to cryptocurrency trading for both
            individuals and institutional clients through:
          </p>
          <ul className="list-disc ml-5 mt-1">
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
