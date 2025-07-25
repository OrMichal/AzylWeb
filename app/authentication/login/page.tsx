import { LoginForm } from "@/client-components/login-form/login-form";

export default function Login() {
  return (
    <div className="flex flex-col items-center w-full p-8">
      <main className="flex sm:flex-col lg:flex-row items-center w-full shadow rounded-3xl">
        <LoginForm />
        <div className="flex flex-col items-start gap-5 p-8 w-full">
          <span>haha</span>
          <span>hahaha</span>
        </div>
      </main>
    </div>
  );
}
