import { IsString, MaxLength, MinLength } from 'class-validator'

export class SignUpDto{

  @IsString()
  @MaxLength(30)
  @MinLength(10)
  name: string;

  @IsString()
  @MaxLength(30)
  @MinLength(10)
  userName: string;

  constructor(name: string, userName: string){
    this.name = name;
    this.userName = userName;
  }
}


export class GetUsersDTO{
  name: string;
  userName: string;
  id: string// or int if using rdbms

  constructor(name: string, userName: string, id: string){
    this.name = name;
    this.userName = userName;
    this.id = id
  }
}



