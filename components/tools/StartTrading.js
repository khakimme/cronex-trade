import LoginForm from "../LoginForm";

export default function StartTrading() {
  return (
    <section className="h-full w-full border border-grayish-blue-80">
      <header className="flex flex-row items-center h-6 px-4 border-b border-grayish-blue-80 bg-ct-header">
        <h2 className="text-xs font-bold uppercase text-grayish-blue-36">
          Start trading
        </h2>
      </header>
      <div className="h-table">
        <LoginForm />
      </div>
    </section>
  );
}
