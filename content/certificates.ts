export type Certificate = {
  title: string;
  issuer: string;
  category: "certificate" | "academic";
  credentialId?: string;
  url: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    title: "PROGRAMACAO DE ALGORITMOS ESCALAVEIS",
    issuer: "Estacio",
    category: "certificate",
    credentialId: "dcb68b7730c17a9e4d5ba68",
    url: "https://certificado.estacio.br/dcb68b7730c17a9e4d5ba68",
    image: "/certificates/programacao-de-algoritmos-escalaveis.jpg",
  },
  {
    title: ".NET MAUI",
    issuer: "Udemy",
    category: "certificate",
    credentialId: "UC-8c1c38dc-51e3-43a6-b1f4-5299c76b93d3",
    url: "https://ude.my/UC-8c1c38dc-51e3-43a6-b1f4-5299c76b93d3",
    image: "/certificates/dotnet-maui-udemy.jpg",
  },
  {
    title: "DESENVOLVIMENTO RAPIDO DE APLICACOES EM PYTHON PARA CLOUD, IOT E BIGDATA",
    issuer: "Estacio",
    category: "certificate",
    credentialId: "2d91da0166a3a91f56fb1ce",
    url: "https://certificado.estacio.br/2d91da0166a3a91f56fb1ce",
    image: "/certificates/desenvolvimento-rapido-python-cloud-iot-bigdata.jpg",
  },
  {
    title:
      "Fundamentos de Linguagem Python para Analise de Dados e Data Science - Nivel Introdutorio",
    issuer: "Data Science Academy",
    category: "certificate",
    credentialId: "673215c67ae7fe5f3c03fce5",
    url: "#",
    image: "/certificates/fundamentos-python-dsa-2024.jpg",
  },
  {
    title: "PROGRAMACAO PARA INTERNET",
    issuer: "Estacio",
    category: "certificate",
    credentialId: "899f002ae2c48c0faf74772",
    url: "https://certificado.estacio.br/899f002ae2c48c0faf74772",
    image: "/certificates/programacao-para-internet.jpg",
  },
  {
    title: "PROGRAMACAO PARA DISPOSITIVOS MOVEIS",
    issuer: "Estacio",
    category: "certificate",
    credentialId: "5b05a371daeea62a840e032",
    url: "https://certificado.estacio.br/5b05a371daeea62a840e032",
    image: "/certificates/programacao-dispositivos-moveis.jpg",
  },
  {
    title: "Computacao em Nuvem",
    issuer: "Amazon Web Services (AWS)",
    category: "certificate",
    credentialId: "05053-53866",
    url: "https://www.kasolution.com.br/certificado",
    image: "/certificates/computacao-em-nuvem-aws.png",
  },
  {
    title: "ANALISE E DESENVOLVIMENTO DE SISTEMAS - FORMACAO TECNICA",
    issuer: "Formacao Academica",
    category: "academic",
    url: "#",
    image: "/projects/atlas.svg",
  },
  {
    title: "TECNOLOGO EM ANALISE E DESENVOLVIMENTO DE SISTEMAS",
    issuer: "Centro Universitario Estacio Juiz de Fora",
    category: "academic",
    credentialId: "1986.1986.9161ed4d229e",
    url: "https://consultadiploma.estacio.br/diploma/1986.1986.9161ed4d229e",
    image: "/certificates/diploma-ads-estacio-2025.jpg",
  },
];
