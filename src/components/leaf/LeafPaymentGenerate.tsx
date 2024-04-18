import axios from "axios"
import React, { useEffect, useState } from "react"

const LeafPaymentGenerate: React.FC = () => {
  const [data, setData] = useState<any>()
  const [selectedEmployee, setSelectedEmployee] = useState<any>()

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
    <div className="flex items-center justify-center">
      <select
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        onChange={(event) => {
          setSelectedEmployee(event.target.value)
        }}
      >
        <option disabled value="">
          Selecione um employer
        </option>
        {data.map((employee: any) => (
          <option key={employee.id} value={employee.id}>
            {employee.name}
          </option>
        ))}
      </select>

      <button
        className="px-4 py-2 ml-4 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => {
          window.location.href = `https://reports-git-eleniltu-folhastech.vercel.app/pdf/LeafPayment?slug=generate-payroll/${selectedEmployee}&reportProductId=leafPay&bearer=ab`
        }}
      >
        Generate
      </button>
    </div>
  )
}

export default LeafPaymentGenerate
