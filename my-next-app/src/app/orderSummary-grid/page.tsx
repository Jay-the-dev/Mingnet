"use client";

const orders = [
  {
    id: "2322356",
    customer: "Samson Adam",
    product: "Lexus RX BWD 2024 with Extra Battery & Tires.",
    amount: 2000000,
    status: "Delivered",
  },
  {
    id: "2322356",
    customer: "Samson Adam",
    product: "Lexus RX BWD 2024 with Extra Battery & Tires.",
    amount: 2000000,
    status: "Processing",
  },
  {
    id: "2322356",
    customer: "Samson Adam",
    product: "Lexus RX BWD 2024 with Extra Battery & Tires.",
    amount: 2000000,
    status: "Delivered",
  },
  {
    id: "2322356",
    customer: "Samson Adam",
    product: "Lexus RX BWD 2024 with Extra Battery & Tires.",
    amount: 2000000,
    status: "Processing",
  },
];

export default function OrdersSummary() {
  return (
    <div className="">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Orders Summary</h2>

        <div className="rounded-xl shadow p-[25px_32px_56px_32px]">
            <div className="grid grid-cols-4 gap-4 text-center text-sm font-medium text-gray-600 mb-6">
                <div>
                    <p className="font-light text-[20px]">Orders Received</p>
                    <p className="text-lg text-gray-900 text-[28px]">5000</p>
                </div>
                <div>
                    <p className="font-light text-[20px]">Orders Shipped</p>
                    <p className="text-lg text-gray-900 text-[28px]">350</p>
                </div>
                <div>
                    <p className="font-light text-[20px]">Orders Cancelled</p>
                    <p className="text-lg text-gray-900 text-[28px]">1000</p>
                </div>
                <div>
                    <p className="font-light text-[20px]">Orders Returned</p>
                    <p className="text-lg text-gray-900 text-[28px]">60</p>
                </div>
            </div>

            <div className="overflow-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700 text-sm rounded">
                            <th className="pl-3">Product ID</th>
                            <th className="p-3">Customer</th>
                            <th className="p-3">Product</th>
                            <th className="p-3">Amount</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                        <tr key={index} className={ order.status === "Processing" ? "bg-yellow-100 rounded-2xl" : "bg-white"} >
                                <td className="p-3 text-sm text-gray-800">{order.id}</td>
                                <td className="p-3 text-sm text-gray-800">{order.customer}</td>
                                <td className="p-3 text-sm text-gray-800">{order.product}</td>
                                <td className="p-3 text-sm text-gray-800">₦{order.amount.toLocaleString()}</td>
                                <td className="p-3">
                                <span className={`text-xs px-3 py-1 rounded-sm font-semibold ${ order.status === "Delivered" ? "bg-green-800 text-white" : "bg-yellow-300 text-gray-800" }`}>
                                    {order.status}
                                </span>
                                </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}
