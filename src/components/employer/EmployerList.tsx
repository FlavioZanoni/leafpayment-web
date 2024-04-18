import axios from "axios"
import React, { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

const EmployerList: React.FC = () => {
  const [data, setData] = useState<any>()

  const fetchData = () => {
    axios.get("https://leafpayment.onrender.com/employees").then((res) => {
      setData(res.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!data) return <div>Loading...</div>

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
          {data.employees.map((employee: any) => (
            <TableRow key={employee.id}>
              <TableCell className="font-medium">{employee.id}</TableCell>
              <TableCell className="font-medium">{employee.name}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell className="text-right">{employee.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default EmployerList
