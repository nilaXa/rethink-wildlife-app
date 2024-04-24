import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Main from "@/components/Main";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Key } from "react";
import getConfig from "next/config";

const publicRuntimeConfig = getConfig();
const envConfig = process.env.API_URL ? process.env : publicRuntimeConfig;

type Incident = {
  id: Key;
  date_time_of_incident: string;
  category: string;
  type: string;
  cause: string;
  description: string;
  district: string;
  ds_div: string;
  gn_div: string;
};

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${envConfig.API_ACCESS_TOKEN}`,
};

async function getData() {
  const res = await fetch(envConfig.API_URL + "/hac/incidents", {
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

const HACTable = (data: Incident[]) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date & Time</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Cause</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>District</TableHead>
          <TableHead>DS Div</TableHead>
          <TableHead>GN Div</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: Incident) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">
              {item.date_time_of_incident}
            </TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.cause}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.district}</TableCell>
            <TableCell>{item.ds_div}</TableCell>
            <TableCell>{item.gn_div}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default async function HACPortal() {
  const data = await getData();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar brandLabel="Rethink Wildlife" />
      <div className="flex flex-col">
        <Header brandLabel="Rethink Wildlife" />
        <Main title="HAC Portal" tiles={HACTable(data.rows)} />
      </div>
    </div>
  );
}
