import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Main from "@/components/Main";
import HACTable from "@/components/HACTable";
import { json } from "stream/consumers";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
};

async function getData() {
  const res = await fetch(process.env.API_URL + "/hac/incidents", {
    headers: headers,
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HACPortal() {
  const data = await getData();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar brandLabel="Rethink Wildlife" />
      <div className="flex flex-col">
        <Header brandLabel="Rethink Wildlife" />
        <Main
          title="HAC Portal"
          tiles={<HACTable data={JSON.stringify(data.rows)} />}
        />
      </div>
    </div>
  );
}
