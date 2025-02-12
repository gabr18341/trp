import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function LoginForm({
  className,
  ...props
}) {
  return (
    (<div className={cn("flex flex-col gap-6 md:p-4", className)} {...props}>
      <Card className={"bg-white border-none md:p-6"}>
        <CardHeader >
          <CardTitle className=" text-3xl md:text-4xl text-[#869006]">تسجيل الدخول
          </CardTitle>
          <CardDescription className=" text-sm md:text-lg" >
          اهلاُ بعودتك عزيزنا العميل
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label className="text-[#909090]" htmlFor="email">البريد الإلكترونى</Label>
                <Input className="bg-[#F0F3F5] border-none rounded" id="email" type="email" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label className="text-[#909090]" htmlFor="password">كلمة المرور</Label>
                  
                </div>
                <Input className="bg-[#F0F3F5] border-none rounded" id="password" type="password" required />
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                نسيت كلمة المرور?
              </a>
              </div>
              <Button type="submit" className="w-full bg-[#869006] main-btn hover:bg-[#869006]/90 h-10">
              تسجيل الدخول
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
            ليس لديك حساب؟ {" "}
              <Link href="/register" className="underline underline-offset-4 text-[#869006]">
                 إنشاء حساب جديد
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>)
  );
}
