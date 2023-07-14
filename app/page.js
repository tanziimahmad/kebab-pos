import Cart from "@/components/cart";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="w-8/12 overflow-y-auto">
        <Menu />
      </div>

      <div className="w-4/12 overflow-y-auto bg-primary-2">
        <Cart />
      </div>
    </main>
  );
}
