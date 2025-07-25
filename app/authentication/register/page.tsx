import { RegistrationForm } from "@/client-components/registration-form/registration-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <div className="w-full flex lg:flex-row sm:flex-col gap-3 shadow rounded-3xl p-3">
        <RegistrationForm />
        <section className="flex flex-col gap-5 p-7 w-full">
          <span>haha</span>
        </section>
      </div>
    </div>
  );
}
