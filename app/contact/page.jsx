import { ContactForm } from "@/components/contact-us";
import "../(home-page)/responsive-home.css"
export default function Page() {
  return (
    (<section 
    style={{backgroundImage: "url('/img/pages/contactus/main_bg.svg')"}} 
    className="flex min-h-svh w-full items-center justify-start pb-8 md:p-6 main-section">
      <div className="px-8 container">
        <div className="w-full max-w-[700px] mt-32">
          <ContactForm  />
        </div>
      </div>
    </section>)
  );
}
