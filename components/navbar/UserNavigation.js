import Link from "next/link";

export default function UserNavigation() {
  return (
    <nav>
      <ul className="flex gap-3">
        <li>
          <Link href="/login">
            <button type="button" className="btn btn-outline">
              Log in
            </button>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
