"use client";
import { IEmployeeDTO } from "@/interfaces/employee/IEmployeeDTO";
import Image from "next/image";

interface EmployeeCardProps {
  employee: IEmployeeDTO;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div
      className="bg-white border border-[#e6e1d8] rounded-4xl shadow-md p-4 sm:p-6 w-full max-w-sm 
                 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex flex-col items-start space-y-2">
        {/* Name */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#444]">
          {employee.firstname}{" "}
          {employee.middlename ? `${employee.middlename} ` : ""}
          {employee.lastname}
        </h2>

        {/* Role */}
        <p className="text-sm sm:text-base font-medium text-[#7c756a]">
          {employee.role}
        </p>

        {/* Image */}
        <div className="relative w-full h-64 sm:h-80">
          <Image
            src={`/api/employees/images/${employee.image_guid}`}
            fill
            alt={`${employee.firstname} ${employee.lastname}`}
            className="rounded-4xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
