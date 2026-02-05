export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    title: "Algoritmos Escaláveis",
    issuer: "DIO",
    date: "2024",
    credentialId: "DIO-ALG-2024",
    url: "https://www.dio.me/",
    image: "/projects/atlas.svg",
  },
  {
    title: ".NET MAUI",
    issuer: "Microsoft Learn",
    date: "2025",
    credentialId: "MS-MAUI-2025",
    url: "https://learn.microsoft.com/",
    image: "/projects/swiftpay.svg",
  },
];
