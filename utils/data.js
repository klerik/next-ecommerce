import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      id: "br1",
      name: "Chalcedony Shambhala-style Bracelet",
      slug: "eternal-harmony",
      category: "Bracelets",
      image: "/images/bracelet1.jpg",
      price: 140,
      brand: "Viktoria Handmade",
      rating: 4.5,
      numReviews: 8,
      countInStock: 2,
      description:
        "Knotted by hand, this adjustable macramé bracelet by Rituu features the charisma of soothing blue chalcedony. ",
    },
    {
      id: "br2",
      name: "Macrame Jasper Wristband Bracelet",
      slug: "boho-spirit",
      category: "Bracelets",
      image: "/images/bracelet2.jpg",
      price: 1660,
      brand: "Viktoria Handmade",
      rating: 3.5,
      numReviews: 12,
      countInStock: 20,
      description:
        "A panel of bright red gemstones provide a beautiful pop of color on Kanjana's macrame wristband bracelet.",
    },
    {
      id: "br3",
      name: "Yellow and Black God's Eye Huichol",
      slug: "wixarika-eye",
      category: "Bracelets",
      image: "/images/bracelet3.jpg",
      price: 2500,
      brand: "Viktoria Handmade",
      rating: 3.9,
      numReviews: 2,
      countInStock: 20,
      description:
        "If you are of a certain age, you might remember making God's eyes with two sticks and some yarn in school. ",
    },
    {
      id: "br4",
      name: "Rose Quartz Bead Charm Bracelet Sterling",
      slug: "moonlight-dragonfly",
      category: "Bracelets",
      image: "/images/bracelet4.jpg",
      price: 2350,
      brand: "Viktoria Handmade",
      rating: 4.9,
      numReviews: 10,
      countInStock: 80,
      description:
        "Asmara Putra of Indonesia creates this rose quartz beaded bracelet with sterling silver accent beads and a sterling silver dragonfly charm. ",
    },
    {
      id: "br5",
      name: "Sodalite and Tiger's Eye Beaded",
      slug: "bohemian-melange",
      category: "Bracelets",
      image: "/images/bracelet5.jpg",
      price: 1350,
      brand: "Viktoria Handmade",
      rating: 4.4,
      numReviews: 20,
      countInStock: 30,
      description:
        "With a knack for creating bohemian-chic jewelry, Tiraphan Hasub in Thailand designs this stylish bracelet. ",
    },
    {
      id: "br6",
      name: "Brown Crocheted Cuff Bracelet",
      slug: "violet-twilight",
      category: "Bracelets",
      image: "/images/bracelet6.jpg",
      price: 4350,
      brand: "Viktoria Handmade",
      rating: 4.5,
      numReviews: 1,
      countInStock: 2,
      description:
        "Amethysts cast a cool twilight glow in a bracelet designed by Tiraphan Hasub.",
    },
  ],
};

export default data;
