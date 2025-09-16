import Layout from "./components/layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="p-6">
        <Layout >
          <h1 className="flex flex-col items-center justify-center text-center">Tale of R8 Bot</h1>
          <p className="flex flex-col items-center justify-center text-center">
            He plays with R8 Revolver in every CS2 match.
          </p>

          <p className="flex flex-col items-center justify-center text-center">He is bot in every game</p>
        <nav>
          <Link href="/about">About</Link>
        </nav>
        </Layout>

      </main>
    </>
  )
}
