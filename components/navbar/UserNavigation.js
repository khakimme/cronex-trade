import Link from "next/link";

export default function UserNavigation() {
  return (
    <nav>
      <ul className="flex gap-3">
        <li>
          <Link href="/login">
            <button>Login</button>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <button>Register</button>
          </Link>
        </li>
        <li>
          <button>
            <span>@</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
