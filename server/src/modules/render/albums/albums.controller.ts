import {Controller, Get} from "@nestjs/common";
import {Host} from "../../../enums/host.enum";

@Controller({ host: Host.DEFAULT, path: 'albums'})
export class AlbumsController {

    @Get()
    getAll () {
        return 'Albums Page';
    }

}