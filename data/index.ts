const extras = [
  {
    name: "Maíz",
    price: 0.5,
  },
  {
    name: "Pimentón",
    price: 0.25,
  },
  {
    name: "Champiñón",
    price: 0.25,
  },
] as const;

const sizes = ["22cm", "24cm"] as const;

export { extras, sizes };
