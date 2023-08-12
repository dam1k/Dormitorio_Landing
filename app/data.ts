import { nanoid } from "nanoid";

export interface model {
  id: string;
  name: string;
  country: string;
  size1: number[];
  size2: number[];
  stock: number;
  img: string;
}
export const models: model[] = [
  {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    img: "/mobila.jpg",
  },
  {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    img: "/mobila2.jpg",
  },
  {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    img: "/mobila3.jpg",
  },
  {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    img: "/mobila.jpg",
  },
  {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    img: "/mobila2.jpg",
  },
  {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    img: "/mobila3.jpg",
  },
];
