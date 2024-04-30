/* eslint-disable react-refresh/only-export-components */
import Row1 from "../components/Home/Row1";
import Deal from "../components/Home/Deal";
import FlashSale from "../components/Home/FlashSale";
import BestSelling from "../components/Home/BestSelling";
import Categories from "../components/Home/Categories";
import Services from "../components/common/Services";
import AllProducts from "../components/Home/AllProducts";
import Featured from "../components/Home/Featured";
let idCounter = 0;
export const ITEMS = [
  {
    id: String(idCounter++),
    imageSrc: "./assets/car.svg",
    title: "Kids Electric Car",
    price: 960,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/camera.svg",
    title: "CANON EOS DSLR Camera",
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/dogfood.svg",
    title: "Breed Dry Dog Food",
    price: 100,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/labtop.svg",
    title: "ASUS FHD Gaming Laptop",
    price: 700,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/cream.svg",
    title: "Curology Product Set",
    price: 500,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/g-black.svg",
    title: "GP11 Shooter USB Gamepad",
    price: 660,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/jacket.svg",
    title: "Quilted Satin Jacket",
    price: 660,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/bookself.svg",
    title: "Small BookSelf",
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/headphones.svg",
    title: "RGB liquid CPU Cooler",
    price: 160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/bag.svg",
    title: "Gucci duffle bag",
    price: 1160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/coat.svg",
    title: "The north coat",
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/g-colored.svg",
    title: "HAVIT HV-G92 Gamepad",
    price: 160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/keyboard.svg",
    title: "AK-900 Wired Keyboard",
    price: 1160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 35,
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/tv.svg",
    title: "IPS LCD Gaming Monitor",
    price: 400,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 30,
    quantity: 1,
  },
  {
    id: String(idCounter++),
    imageSrc: "./assets/chair.svg",
    title: "S-Series Comfort Chair ",
    price: 400,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 25,
    quantity: 1,
  },
];
const Home = () => {
  return (
    <div className="flex flex-col md:mx-32 mt-28">
      <Row1 />
      <FlashSale items={ITEMS} />
      <Categories />
      <BestSelling items={ITEMS} />
      <Deal />
      <AllProducts items={ITEMS} />
      <Featured />
      <Services />
    </div>
  );
};
export default Home;
