import { LoginForm } from "@/client-components/login-form/login-form";

export default function Login() {
  return (
    <div className="flex flex-col items-center w-full p-4 sm:p-8">
      <main className="flex flex-col lg:flex-row items-center w-full max-w-4xl shadow-lg rounded-3xl overflow-hidden">
        <div className="w-full lg:w-1/2 p-6 sm:p-8 bg-white">
          <LoginForm />
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col items-start gap-4 p-6 sm:p-8">
          <span className="text-sm sm:text-base">
            Vítejte v našem klientském portálu. Přihlášením můžete sledovat své žádosti, spravovat osobní údaje a být stále v obraze. Jsme tu pro vás.
          </span>
        </div>
      </main>
    </div>
  );
}
