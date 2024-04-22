import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar brandLabel="Rethink Wildlife" />
      <div className="flex flex-col">
        <Header brandLabel="Rethink Wildlife" />
        <Main title="Dashboard" />
      </div>
    </div>
  );
}
