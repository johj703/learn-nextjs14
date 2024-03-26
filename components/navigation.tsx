import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <Link href="/">Home</Link>
      </ul>
      <ul>
        <Link href="/about-us">About Us</Link>
      </ul>
    </nav>
  );
}
