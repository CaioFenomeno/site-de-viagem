import Layout from "./components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <h2>Bem-vindo ao Portal de Viagens!</h2>
      <p>
        Explore os destinos mais incríveis do mundo e descubra novas experiências.
      </p>
      <Link href="/destinos">Ver Destinos</Link>
    </Layout>
  );
}
