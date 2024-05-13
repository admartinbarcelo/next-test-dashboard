import { CartCounter } from "@/shopping-cart";


export const metadata = {
  title: "Conunter Page",
  description: "Contador de productos",
}

export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos</span>
      <CartCounter value={10}/>
      
    </div>
  );
}
