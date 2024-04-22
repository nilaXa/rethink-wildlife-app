import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function HACTable(data: any[]) {
  const items = JSON.parse(data.data);
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
        {items.map((item) => (
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
}
