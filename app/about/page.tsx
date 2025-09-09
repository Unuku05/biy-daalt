import Header from "../components/Headers";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export default function About() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Миний тухай</h2>
        <p className="mb-6">Next.js ашиглаж байна.</p>

        <section className="flex flex-col items-center justify-center text-center">
          <h1 className={styles.title}>Unutuugiin namtar</h1>
          <p className={styles.description}>
           Mandakh surguuliin oyutan
          </p>
          <p> Bi 2005 oni 9n sariin 21nd tursun </p>
          <p>Morin khuur togloh durtai</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
