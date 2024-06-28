import UserController from "api/user/user.controller";
import { Application } from "express";
import { useExpressServer } from "routing-controllers";

function initRoute(app: Application){
  useExpressServer(app, {
    controllers:[UserController],
    routePrefix: '/api/v1',
    defaultErrorHandler: false
  })
}
export default initRoute;
