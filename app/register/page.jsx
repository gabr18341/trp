import { RegisterForm } from "@/components/register-form"
import "../(home-page)/responsive-home.css"
export default function Page() {
  return (
    (<section style={{backgroundImage: "url('/img/pages/signup/main_bg.svg')"}} className="flex min-h-svh w-full items-center justify-start pb-10 md:p-10 main-section">
      <div className="px-8 container">
        <div className="w-full max-w-[500px] mt-32">
          <RegisterForm  />
        </div>
      </div>
    </section>)
  );
}
