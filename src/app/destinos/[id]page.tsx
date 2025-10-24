import Layout from "../components/Layout";

type Params = {
    params: {
  id: string;
};

};

const destinos = [
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
    imagem: "/imagens/tokyo.jpg",
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

export default function DetalheDestino({ params }: Params) {
    const destino = destinos.find((d) => d.id === Number(params.id));

    if (!destino) return <Layout><p>Destino não encontrado</p></Layout>;

    return (
    <Layout>
      <h2>{destino.nome}</h2>
      <img src={destino.imagem} alt={destino.nome} style={{ width: "300px", borderRadius: "10px" }} />
      <p>{destino.descricao}</p>
    </Layout>
  );
}