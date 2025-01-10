import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Order {
  orderNumber: string;
  status: string;
  food: string;
  quantity: number;
}

const orders: Order[] = [
  { orderNumber: "A001", status: "배달 중", food: "불고기", quantity: 2 },
  { orderNumber: "A002", status: "주문 접수", food: "비빔밥", quantity: 1 },
  { orderNumber: "A003", status: "배달 완료", food: "김치찌개", quantity: 3 },
  { orderNumber: "A004", status: "조리 중", food: "떡볶이", quantity: 2 },
  { orderNumber: "A005", status: "주문 접수", food: "삼겹살", quantity: 4 },
]

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10 max-w-2xl">
      <Table className="w-full">
        <TableCaption>현재 주문 목록</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">주문번호</TableHead>
            <TableHead className="w-[120px]">주문상태</TableHead>
            <TableHead className="w-[100px]">음식</TableHead>
            <TableHead className="w-[80px] text-right">수량</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderNumber}>
              <TableCell className="font-medium">{order.orderNumber}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.food}</TableCell>
              <TableCell className="text-right">{order.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}





// export default function DashboardPage() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">주문 현황</h1>
//       <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
//         {/* 주문 현황 관련 컨텐츠를 여기에 추가 */}
//         <p>주문 현황 페이지 내용이 여기에 표시됩니다.</p>
//       </div>
//     </div>
//   );
// } 