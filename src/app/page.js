import Image from "next/image";
import Menu from "../components/menu/Menu.js";
import "./globals.css";
import Cart from "@/components/cart/Cart.js";

export default function Home() {
  return (
    <div>
      <Menu />
      <Cart />
    </div>
  );
}
