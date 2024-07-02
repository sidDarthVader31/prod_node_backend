import { Service } from "typedi";
import { GetUsersDTO, SignUpDto } from "./user.dto";
 interface IUserService {
  getAllUsers(): Promise<GetUsersDTO[]>;
  addUser(user: SignUpDto): Promise<GetUsersDTO>;
}
@Service()
export class UserService {

  async getAllUsers(): Promise<GetUsersDTO[]>{
    return [new GetUsersDTO('sid','sid123','abcd1')]
  }
  async addUser(user: SignUpDto): Promise<GetUsersDTO>{
    return new GetUsersDTO(user.name, user.userName, 'abcd1')
  }
}

