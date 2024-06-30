import { Body, Get, JsonController, Post } from "routing-controllers";
import { getUsersDTO, SignUpDto } from "./user.dto";
import Response from '../../common/dto/response'
@JsonController('/users')
class UserController {


  @Get('/')
  async getUsers(){
    return 'returning all users'
  }

  @Post('/')
  async addUser(@Body() body: SignUpDto): Promise< Response< getUsersDTO>>{
    const user = new getUsersDTO(body.name, body.userName, 'sadfsdf');
    return new Response(200, 'fetched successfully', user);
  }
}

export default UserController
