import { nanoid } from "nanoid";

export interface model {
  id: string;
  name: string;
  country: string;
  size1: number[];
  size2: number[];
  stock: number;
  img: string;
  price: number;
}

export const cardDetails = {
  0: {
    imgUrl: "https://picsum.photos/id/237/200/300",
    title: "Text 1",
  },

  1: {
    imgUrl: "https://picsum.photos/id/238/200/300",
    title: "Text 2",
  },

  2: {
    imgUrl: "https://picsum.photos/id/239/200/300",
    title: "Text 3",
  },

  3: {
    imgUrl: "https://picsum.photos/id/240/200/300",
    title: "Text 4",
  },

  4: {
    imgUrl: "https://picsum.photos/id/241/200/300",
    title: "Text 5",
  },

  5: {
    imgUrl: "https://picsum.photos/id/42/200/300",
    title: "Text 6",
  },

  6: {
    imgUrl: "https://picsum.photos/id/243/200/300",
    title: "Text 7",
  },
};

export const modelsArr: model[] = [
  {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    img: "/mobila.jpg",
    price: 29,
  },
  {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    img: "/mobila2.jpg",
    price: 29,
  },
  {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    img: "/mobila3.jpg",
    price: 29,
  },
  {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    img: "/mobila.jpg",
    price: 29,
  },
  {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    img: "/mobila2.jpg",
    price: 29,
  },
  {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    img: "/mobila3.jpg",
    price: 29,
  },
];

export const modelsObj: any = {
  0: {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    imgUrl: "/mobila.jpg",
    price: 29,
  },
  1: {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    imgUrl: "/mobila2.jpg",
    price: 29,
  },
  2: {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    imgUrl: "/mobila3.jpg",
    price: 29,
  },
  3: {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    imgUrl: "/mobila.jpg",
    price: 29,
  },
  4: {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 29,
    imgUrl: "/mobila2.jpg",
    price: 29000,
  },
  5: {
    id: nanoid(),
    name: "Bremen",
    country: "Italia",
    size1: [234, 232, 23],
    size2: [180, 200],
    stock: 2,
    imgUrl: "/mobila3.jpg",
    price: 29,
  },
};
