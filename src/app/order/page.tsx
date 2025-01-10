import { ContactForm } from '@/components/contact-form'

export default function OrderPage() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <ContactForm />
    </div>
  )
}

// export default function OrderPage() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">주문</h1>
//       <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
//         {/* 주문 관련 컨텐츠를 여기에 추가 */}
//         <p>주문 페이지 내용이 여기에 표시됩니다.</p>
//       </div>
//     </div>
//   );
// } 
