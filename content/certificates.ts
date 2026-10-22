export type Certificate = {
  title: string;
  issuer?: string;
  category: "certificate" | "academic";
  period?: string;
  credentialId?: string;
  url: string;
  image?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Programação de Algoritmos Escaláveis",
    issuer: "Estácio",
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
    title:
      "Desenvolvimento Rápido de Aplicações em Python para Cloud, IoT e Big Data",
    issuer: "Estácio",
    category: "certificate",
    credentialId: "2d91da0166a3a91f56fb1ce",
    url: "https://certificado.estacio.br/2d91da0166a3a91f56fb1ce",
    image: "/certificates/desenvolvimento-rapido-python-cloud-iot-bigdata.jpg",
  },
  {
    title:
      "Fundamentos de Linguagem Python para Análise de Dados e Data Science - Nível Introdutório",
    issuer: "Data Science Academy",
    category: "certificate",
    credentialId: "673215c67ae7fe5f3c03fce5",
    url: "#",
    image: "/certificates/fundamentos-python-dsa-2024.jpg",
  },
  {
    title: "Programação para Internet",
    issuer: "Estácio",
    category: "certificate",
    credentialId: "899f002ae2c48c0faf74772",
    url: "https://certificado.estacio.br/899f002ae2c48c0faf74772",
    image: "/certificates/programacao-para-internet.jpg",
  },
  {
    title: "Programação para Dispositivos Móveis",
    issuer: "Estácio",
    category: "certificate",
    credentialId: "5b05a371daeea62a840e032",
    url: "https://certificado.estacio.br/5b05a371daeea62a840e032",
    image: "/certificates/programacao-dispositivos-moveis.jpg",
  },
  {
    title: "Computação em Nuvem | AWS Discovery Day",
    issuer: "Estácio · Ka Solution",
    category: "certificate",
    credentialId: "05053-53866",
    url: "https://www.kasolution.com.br/certificado",
    image: "/certificates/computacao-em-nuvem-aws.png",
  },
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    issuer: "SENAI",
    category: "academic",
    period: "2021 - 2023",
    url: "#",
  },
  {
    title: "Pós-graduação em Engenharia de Software",
    category: "academic",
    period: "Abr/2026 - Abr/2027 · Em andamento",
    url: "#",
  },
  {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    issuer: "Centro Universitário Estácio Juiz de Fora",
    category: "academic",
    credentialId: "1986.1986.9161ed4d229e",
    period: "Mar/2023 - Ago/2025",
    url: "https://consultadiploma.estacio.br/diploma/1986.1986.9161ed4d229e",
    image: "/certificates/diploma-ads-estacio-2025.jpg",
  },
];
