import {forwardRef, Module} from "@nestjs/common";
import {AudioController} from "./audio.controller";
import {AlbumsModule} from "../albums/albums.module";

@Module({
    controllers: [AudioController]
})
export class AudioModule {}