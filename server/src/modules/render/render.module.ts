import {Module} from "@nestjs/common";
import {AudioModule} from "./audio/audio.module";
import {HomeModule} from "./home/home.module";
import {AlbumsModule} from "./albums/albums.module";

@Module({
    imports: [AudioModule, HomeModule, AlbumsModule],
    providers: []
})
export class RenderModule {}
