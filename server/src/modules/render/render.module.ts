import {Module} from "@nestjs/common";
import {AudioModule} from "./audio/audio.module";
import {HomeModule} from "./home/home.module";
import {NotFoundExceptionFilter} from "./page404/NotFoundExceptionFilter";
import {APP_FILTER} from "@nestjs/core";
import {AlbumsModule} from "./albums/albums.module";

@Module({
    imports: [AudioModule, HomeModule, AlbumsModule],
    providers: [
        {
            provide: APP_FILTER,
            useClass: NotFoundExceptionFilter,
        },
    ]
})
export class RenderModule {}
