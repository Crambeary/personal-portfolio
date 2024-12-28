import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-full flex-col justify-center">
        <div className="justify-center text-left mx-4 sm:ml-24">
          <h1 className="text-4xl font-bold motion-preset-blur-right bg-gradient-to-r from-black dark:from-primary dark:to-gray-400 bg-clip-text text-transparent">
            Crafting Intuitive Front-End Experiences with React and Tailwind
          </h1>
          <div>
            <h2 className="text-2xl mt-4 font-bold motion-delay-200 motion-preset-blur-right bg-gradient-to-r from-black dark:from-primary dark:to-gray-400 bg-clip-text text-transparent">
              <span className="text-3xl text-border font-serif font-normal">
                I&apos;m Marc
              </span>
              , a Front-End Developer passionate about building engaging web
              experiences. Currently trasitioning from software testing to web
              development.
            </h2>
          </div>
          <Button
            className="mt-4 text-lg motion-delay-300 -motion-translate-x-in-150 motion-preset-blur-right"
            asChild
          >
            <Link href="/projects">View My Projects</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
