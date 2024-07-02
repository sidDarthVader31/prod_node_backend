import { Body, Get, JsonController, Post } from "routing-controllers";
import { GetUsersDTO, SignUpDto } from "./user.dto";
import Response from '../../common/dto/response'
import { Inject, Service } from "typedi";
import {UserService}  from "./user.service";


@JsonController('/users')
@Service()
class UserController {
  constructor(
    @Inject(() => UserService) private userService: UserService
  ) {}
  @Get('/')
  async getUsers(): Promise<Response<GetUsersDTO[]>>{
    const data = await this.userService.getAllUsers();
    return new Response(200, 'fetched',  data)
  }

  @Post('/signup')
  async addUser(@Body({required: true}) body: SignUpDto ): Promise< Response< GetUsersDTO | string>>{
    try{
    const data = await this.userService.addUser(body);
    return new Response(200, 'fetched successfully', data);
    }
    catch(e){
      console.log(`error received:`, e)
      return new Response(500, 'something went wrong', e as unknown as string)
    }

  }
}

export default UserController;
