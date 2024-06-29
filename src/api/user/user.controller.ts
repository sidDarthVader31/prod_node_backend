import { Body, Get, JsonController, Post } from "routing-controllers";
import { getUsersDTO, SignUpDto } from "./user.dto";

@JsonController('/users')
class UserController {


  @Get('/')
  async getUsers(){
    return 'returning all users'
  }

  @Post('/')
  async addUser(@Body() body: SignUpDto): Promise<getUsersDTO>{
    const user = new getUsersDTO(body.name, body.userName, 'sadfsdf');
    return user;
  }
}

export default UserController
