'use client'

import * as React from 'react'
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { contactFormAction } from '@/lib/actions'
import { Check, Plus, Minus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

const FOOD_OPTIONS = [
  { value: "떡볶이", label: "떡볶이" },
  { value: "라면", label: "라면" },
  { value: "닭가슴살", label: "닭가슴살" },
  { value: "당근주스", label: "당근주스" },
  { value: "짬뽕", label: "짬뽕" },
]

export function ContactForm({ className }: React.ComponentProps<typeof Card>) {
  const [selectedFood, setSelectedFood] = React.useState("")
  const [quantity, setQuantity] = React.useState(1)
  const [orderNumber, setOrderNumber] = React.useState<number | null>(null)
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const [state, formAction, pending] = React.useActionState(contactFormAction, {
    defaultValues: {
      name: '',
      count: '',      
    },
    success: false,
    errors: null,
  })

  React.useEffect(() => {
    if (state.success) {
      setOrderNumber(Math.floor(Math.random() * 1000) + 1)
      setDialogOpen(true)
    }
  }, [state.success])

  const handleIncrement = () => {
    setQuantity(prev => Math.min(prev + 1, 10))
  }

  const handleDecrement = () => {
    setQuantity(prev => Math.max(prev - 1, 1))
  }

  return (
    <>
      <Card className={cn('w-full max-w-md', className)}>
        <CardHeader>
          <CardTitle>주문하기</CardTitle>
          <CardDescription>
            원하시는 음식을 선택 후 '주문' 버튼을 눌러주세요
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="flex flex-col gap-6">
            {state.success ? (
              <p className="text-muted-foreground flex items-center gap-2 text-sm">
                <Check className="size-4" />
                주문이 완료되었습니다.
              </p>
            ) : null}
            <div
              className="group/field grid gap-2"
              data-invalid={!!state.errors?.name}
            >
              <Label
                htmlFor="name"
                className="group-data-[invalid=true]/field:text-destructive"
              >
                음식 <span aria-hidden="true">*</span>
              </Label>
              <Select 
                name="name" 
                value={selectedFood} 
                onValueChange={setSelectedFood}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="메뉴를 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  {FOOD_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {state.errors?.name && (
                <p id="error-name" className="text-destructive text-sm">
                  {state.errors.name}
                </p>
              )}
            </div>
            <div
              className="group/field grid gap-2"
              data-invalid={!!state.errors?.email}
            >
              <Label
                htmlFor="quantity"
                className="group-data-[invalid=true]/field:text-destructive"
              >
                수량 <span aria-hidden="true">*</span>
              </Label>
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleIncrement}
                  disabled={quantity >= 10}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <input 
                  type="hidden" 
                  name="email" 
                  value={quantity} 
                />
              </div>
              {state.errors?.email && (
                <p id="error-email" className="text-destructive text-sm">
                  {state.errors.email}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              size="sm" 
              disabled={pending || !selectedFood}
            >
              {pending ? '주문 접수중...' : '주문'}
            </Button>
          </CardFooter>
        </form>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle className="sr-only">주문 완료</DialogTitle>
          <div className="flex flex-col items-center gap-4 py-4">
            <Check className="h-12 w-12 text-green-500" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">주문이 완료되었습니다</h3>
              <p className="text-3xl font-bold mt-2 text-primary">
                {orderNumber}번
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

