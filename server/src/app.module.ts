import {Module} from "@nestjs/common";
import {ApiModule} from "./api/api.module";
import {RenderModule as NextRenderModule} from "nest-next";
import Next from 'next';
import path from 'path';

@Module({
    controllers: [],
    imports: [
        NextRenderModule.forRootAsync(Next({ dev: true, dir: path.resolve(__dirname, '..') }), { viewsDir: null }),
        ApiModule
    ],
})
export class AppModule {}