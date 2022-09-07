import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Coffe } from 'src/database/models';
import { CoffesController } from './coffes.controller';
import { CoffesService } from './coffes.service';

@Module({
    imports: [SequelizeModule.forFeature([Coffe])],
    controllers: [CoffesController],
    providers: [CoffesService]
})
export class CoffesModule {}
