import { Body, Get, JsonController, Post } from "routing-controllers";
import { getUsersDTO, SignUpDto } from "./user.dto";
import Response from '../../common/dto/response'
import { Service } from "typedi";


@JsonController('/users')
@Service()
class UserController {


  @Get('/')
  async getUsers(): Promise<Response<getUsersDTO>>{
    return new Response(200, 'fetched',  
     new  getUsersDTO('sid','si123', 'asdfsdf'))
  }

  @Post('/signup')
  async addUser(@Body({required: true}) body: getUsersDTO ): Promise< Response< getUsersDTO>>{
    const user = new getUsersDTO(body.name, body.userName, 'sadfsdf');
    // const user = new getUsersDTO('name','username','abcd')
    return new Response(200, 'fetched successfully', user);
  }
}

export default UserController
