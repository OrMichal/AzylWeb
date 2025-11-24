import { RegistrationForm } from "@/client-components/registration-form/registration-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center gap-6 p-4 sm:p-8">
      <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-6 shadow-lg rounded-3xl overflow-hidden">
        <div className="w-full lg:w-2/3 p-6 sm:p-8 bg-white">
          <RegistrationForm />
        </div>
        <section className="flex flex-col gap-4 p-6 sm:p-8 w-full lg:w-1/2 bg-amber-400 text-white rounded-r-3xl lg:rounded-l-none">
          <span className="text-sm sm:text-base">
            Založte si účet a staňte se součástí našeho klientského portálu. Po registraci můžete sledovat své žádosti, upravovat informace a využívat naše služby naplno.
          </span>
        </section>
      </div>
    </div>
  );
}
