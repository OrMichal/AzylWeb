import { IUserDTO } from "@/interfaces/user/user.dto";
import { IUser } from "@/models/User/user-model";

export function GetUserDTO(user: IUser): IUserDTO {
  return { ...user } as IUserDTO;
}
