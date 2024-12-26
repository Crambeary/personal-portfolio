import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
