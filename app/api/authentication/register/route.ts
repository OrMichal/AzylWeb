import { IRegistrationData } from "@/client-components/registration-form/registration-form";
import { RegisterUser } from "@/services/user-service/user.service";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const regData: IRegistrationData = await req.json();

  try {
    await RegisterUser(regData);
    console.log(regData);

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
