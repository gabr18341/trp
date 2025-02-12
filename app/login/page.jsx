import { LoginForm } from "@/components/login-form"
import "../(home-page)/responsive-home.css"
export default function Page() {
  return (
    (<section className="flex min-h-svh w-full items-center justify-start md:p-10 main-section">
      <div className="px-8 container">
        <div className="w-full max-w-[500px] mt-6">
          <LoginForm  />
        </div>
      </div>
    </section>)
  );
}
