"use client";
import { IEmployee } from "@/interfaces/employee/IEmployee";

interface EmployeeCardProps {
  employee: IEmployee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div className="bg-white border border-[#e6e1d8] rounded-2xl shadow-md p-6 w-full max-w-sm hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col items-start space-y-2">
        <h2 className="text-xl font-semibold text-[#444]">
          {employee.firstname}{" "}
          {employee.middlename ? `${employee.middlename} ` : ""}
          {employee.lastname}
        </h2>
        <p className="text-sm font-medium text-[#7c756a]">{employee.role}</p>
      </div>
    </div>
  );
}
