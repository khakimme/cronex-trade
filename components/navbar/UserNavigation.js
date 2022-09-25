import Link from "next/link";
import Button from "../Button";

export default function UserNavigation() {
  return (
    <nav>
      <ul className="flex gap-3">
        <li>
          <Link href="/login">
            <Button label="Log in" />
          </Link>
        </li>
        <li>
          <Link href="/register">
            <Button label="Register" />
          </Link>
        </li>
        <li>
          <button>
            @
            {/* <svg
              className="h-5 w-5 text-ct-grayish-light hover:text-white"
              data-v-022eb934=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
            >
              <path
                data-v-022eb934=""
                d="M6 8a2 2 0 1 1 2-2 2 2 0 0 1-2 2m5-2.91-1.3-.62.51-1.39a1 1 0 0 0-1.29-1.29l-1.39.51L6.91 1a1 1 0 0 0-1.82 0l-.62 1.3-1.39-.51a1 1 0 0 0-1.29 1.29l.52 1.39L1 5.09a1 1 0 0 0 0 1.82l1.35.62-.56 1.39a1 1 0 0 0 1.29 1.29l1.39-.52.62 1.31a1 1 0 0 0 1.82 0l.62-1.35 1.39.52a1 1 0 0 0 1.29-1.29L9.7 7.53l1.3-.62a1 1 0 0 0 0-1.82"
                fill-rule="evenodd"
                fill="currentColor"
              ></path>
            </svg> */}
          </button>
        </li>
      </ul>
    </nav>
  );
}
