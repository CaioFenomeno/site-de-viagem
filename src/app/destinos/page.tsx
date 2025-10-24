import Layout from "../components/Layout";
import CardDestino from "../components/CardDestino";

type Destino = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
};

const destinos: Destino[] = [
  {
    id: 1,
    nome: "Paris",
    descricao: "A cidade do amor e da luz.",
    imagem: "/imagens/paris.jpg",
  },
  {
    id: 2,
    nome: "Tokyo",
    descricao: "Uma mistura vibrante de tradição e modernidade.",
    imagem: "/imagens/Tokyo.jpg",
  },
  {
    id: 3,
    nome: "Rio de Janeiro",
    descricao: "Famosa por suas praias e sua beleza afrodisíaca.",
    imagem: "/imagens/rio.jpg",
  },
    {
    id: 4,
    nome: "Nova York",
    descricao: "A cidade que nunca dorme.",
    imagem: "/imagens/ny.jpg",
    },
];

export default function DestinosPage() {
    return (
    <Layout>
      <h2>Destinos Turísticos</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            id={destino.id}
            nome={destino.nome}
            imagem={destino.imagem}
          />
        ))}
      </div>
    </Layout>
  );
}

