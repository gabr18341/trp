import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea"

export function ContactForm({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-6 md:p-2", className)} {...props}>
      <Card className={"bg-white border-none md:p-4"}>
        <CardHeader>
          <CardTitle className="text-2xl md:text-4xl text-[#869006]"> تواصل معنا</CardTitle>
          <CardDescription className=" text-sm md:text-lg">
            لا تتردد في التواصل معنا إذا كان لديك أي استفسار متعلق بشركتنا أو
            خدماتنا، سوف نبذل قصارى جهدنا للتواصل معك في أقرب وقت ممكن.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-2">
                <div className="grid gap-2">
                  <Label className="text-[#909090]" htmlFor="fullName">
                    {" "}
                    الاسم كاملًا
                  </Label>
                  <Input
                    className="bg-[#F0F3F5] border-none rounded"
                    id="fullName"
                    type="text"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-[#909090]" htmlFor="companyName">
                    {" "}
                    اسم الشركة
                  </Label>
                  <Input
                    className="bg-[#F0F3F5] border-none rounded"
                    id="companyName"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-2">
                <div className="grid gap-2">
                  <Label className="text-[#909090]" htmlFor="phone">
                    رقم الجوال{" "}
                  </Label>
                  <Input
                    className="bg-[#F0F3F5] border-none rounded"
                    id="phone"
                    type="text"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-[#909090]" htmlFor="email">
                    البريد الإلكترونى{" "}
                  </Label>
                  <Input
                    className="bg-[#F0F3F5] border-none rounded"
                    id="email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="grid ">
                <Textarea placeholder="الموضوع ." />
              </div>
              <div className="grid ">
                <Textarea placeholder="سؤال ." />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#869006] main-btn hover:bg-[#869006]/90 h-10"
              >
                 إرسال
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
