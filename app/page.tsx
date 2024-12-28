import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Home</h1>
      <ThemeToggle />
      <Link href="/about">
        <button>About</button>
      </Link>
    </div>
  );
}
