import Link from "next/link";
import styles from "../styles/CardDestino.module.css";
type Props = {
  id: number;
  nome: string;
  imagem: string;
};

export default function CardDestino({ id, nome, imagem }: Props) {
  return (
    <Link href={`/destinos/${id}`} className={styles.card}>
      <img src={imagem} alt={nome} className={styles.image} />
      <h2 className={styles.name}>{nome}</h2>
    </Link>
  );
}
