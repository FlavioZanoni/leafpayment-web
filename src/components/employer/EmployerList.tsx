import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../ui/table";

interface Employer {
  id: number;
  name: string;
  position: string;
}

const employers: Employer[] = [
  { id: 1, name: "John Doe", position: "Software Engineer" },
  { id: 2, name: "Jane Smith", position: "UI/UX Designer" },
  { id: 3, name: "Mike Johnson", position: "Product Manager" },
];

const EmployerList: React.FC = () => {
  return (
    <div className="">
      <div className="flex items-start">
        <h1 className="text-4xl text-gray-700 text-center py-2">Employers</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
            <TableHead className="w-[400px]">Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead className="text-right">Salary</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employers.map((employer) => (
            <TableRow key={employer.id}>
              <TableCell className="font-medium">{employer.id}</TableCell>
              <TableCell className="font-medium">{employer.name}</TableCell>
              <TableCell>{employer.position}</TableCell>
              <TableCell>{employer.name}</TableCell>
              <TableCell className="text-right">{employer.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmployerList;
