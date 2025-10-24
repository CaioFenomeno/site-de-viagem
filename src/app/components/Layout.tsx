import Link from  "next/link";
import styles  from "../styles/Layout.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Portal de viagens</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href ="/destinos">Destinos</Link>
            </nav>
      </header>

      <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
            <p>© 2024 Portal de viagens. Todos os direitos reservados.</p>
        </footer>
    </div>
  );
}

