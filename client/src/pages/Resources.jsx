import Sidebar from "../components/layout/Sidebar";

export default function Resources() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-[260px] p-10">
        <h1 className="text-4xl font-bold">
          Resources Center
        </h1>
      </div>
    </div>
  );
}