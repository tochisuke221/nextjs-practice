import { Suspense } from "react";
import './global.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header
          className={`
            h-16
            bg-transparent
            background-blur-md
            flex
            fixed
            w-full
            px-6
          `}
        >
          <div
            className={`
              h-auto
              my-auto
              font-bold
              text-5xl
              tracking-tighter
            `}
          >
            Search Image
          </div>
        </header>
        <main
        className="pt-20 pb-8 bg-gray-950 min-h-screen">
          <Suspense fallback={'loading...'}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  )
}
