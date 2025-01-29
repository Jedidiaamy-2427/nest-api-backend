import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from 'src/config/database.config';
import { User } from 'src/modules/user/entities/user.entity';

@Module({
  imports: [
    ConfigModule, // Assurez-vous d'importer ConfigModule pour que la config fonctionne
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>
        databaseConfig(configService),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User]),
  ],
  exports: [TypeOrmModule], // Exporter pour l'utiliser ailleurs dans l'application
})
export class DatabaseModule {}
