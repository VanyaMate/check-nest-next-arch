import {Controller, Get} from "@nestjs/common";
import {Host} from "../../enums/host.enum";

@Controller({ host: Host.API, path: '/users' })
export class UsersApiController {

    @Get()
    getAll () {
        return 'get users';
    }

}