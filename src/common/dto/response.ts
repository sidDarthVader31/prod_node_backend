class Response<T>{
  data: T;
  status: number;
  message: string;

  constructor(status: number, message: string, data: T){
    this.data= data;
    this.status = status;
    this.message = message;
  }
}
export default Response;
