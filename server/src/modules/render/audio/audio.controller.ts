import {Controller, Get} from "@nestjs/common";
import {Host} from "../../../enums/host.enum";

@Controller({ host: Host.DEFAULT, path: 'audio'})
export class AudioController {

    @Get()
    getAll () {
        return 'Audio Page';
    }

}