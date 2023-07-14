import Cart from "@/components/cart";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="overflow-y-auto">
        <Menu />
      </div>

      <div className="overflow-y-auto ">
        <Cart />
      </div>
    </main>
  );
}
