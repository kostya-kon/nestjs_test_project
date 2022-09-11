import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApiKeyGuard } from 'src/common/guards/api-key.guard';
import { Coffe } from 'src/database/models';
import { CoffesController } from './coffes.controller';
import { CoffesService } from './coffes.service';

@Module({
  imports: [SequelizeModule.forFeature([Coffe])],
  controllers: [CoffesController],
  providers: [CoffesService],
})
export class CoffesModule {}
