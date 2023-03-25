import {Module} from "@nestjs/common";
import {RenderModule} from "./modules/render/render.module";
import {APP_FILTER} from "@nestjs/core";
import {NotFoundExceptionFilter} from "./modules/render/page404/NotFoundExceptionFilter";
import {ApiModule} from "./api/api.module";

@Module({
    controllers: [],
    imports: [RenderModule, ApiModule],
})
export class AppModule {}