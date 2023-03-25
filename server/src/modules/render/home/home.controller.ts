import {Controller, Get} from "@nestjs/common";

@Controller({ host: 'localhost' })
export class HomeController {

    @Get()
    index () {
        return 'Home Page'
    }

}