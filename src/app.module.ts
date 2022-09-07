import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffesModule } from './coffes/coffes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SequelizeConfigService } from './database/database.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
      load: [databaseConfig],
    }),
    CoffesModule,
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
