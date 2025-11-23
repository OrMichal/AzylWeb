"use client";
import { IEmployeeDTO } from "@/interfaces/employee/IEmployeeDTO";
import Image from "next/image";

interface EmployeeCardProps {
  employee: IEmployeeDTO;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div
      className="bg-white border border-[#e6e1d8] rounded-4xl shadow-md p-6 max-w-sm hover:shadow-lg 
      transition-shadow duration-200 w-100"
    >
      <div className="flex flex-col items-start space-y-2">
        <h2 className="text-xl font-semibold text-[#444]">
          {employee.firstname}{" "}
          {employee.middlename ? `${employee.middlename} ` : ""}
          {employee.lastname}
        </h2>
        <p className="text-sm font-medium text-[#7c756a]">{employee.role}</p>
        <div className="relative w-full h-80">
          <Image
            src={`/api/employees/images/${employee.image_guid}`}
            fill
            alt="halal"
            className="rounded-4xl "
          />
        </div>
      </div>
    </div>
  );
}
