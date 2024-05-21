import { WidgetsGrid } from "@/components";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard',
};


export default function Mainpage() {
  return (
    <div className="text-black">
      <h1 className="text-4xl mt-2 font-bold">Dashboard</h1>
      <p className="text-lg mt-4">Manage your actions and activities</p>

      <WidgetsGrid />
    </div>
  )
}
