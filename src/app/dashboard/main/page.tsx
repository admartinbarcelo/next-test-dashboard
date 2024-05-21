import { SimpleWidget } from "@/components";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard',
};


export default function Mainpage() {
  return (
    <div className="text-black">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="text-lg mt-4">Manage your actions and activities</p>

      <div className="flex flex-wrap p-2">
        <SimpleWidget />
      </div>
    </div>
  )
}
