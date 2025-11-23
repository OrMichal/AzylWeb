import { RegistrationForm } from "@/client-components/registration-form/registration-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <div className="w-full flex lg:flex-row sm:flex-col gap-3 shadow rounded-3xl p-3">
        <RegistrationForm />
        <section className="flex flex-col gap-5 p-7 w-full">
          <span>
            Založte si účet a staňte se součástí našeho klientského portálu.
            Po registraci můžete sledovat své žádosti, upravovat informace a využívat naše služby naplno.
          </span>
        </section>
      </div>
    </div>
  );
}
