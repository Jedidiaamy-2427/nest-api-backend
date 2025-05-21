import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
/**
 * Pour rendre la configuration de la base de données plus flexible,
 * vous pouvez ajouter un paramètre pour le type de base de données,
 * et adapter les options selon le type choisi.
 */

export const getDatabaseType = (
  configService: ConfigService,
): TypeOrmModuleOptions['type'] => {
  const dbType = configService.get<string>('DB_TYPE')?.toLowerCase();
  switch (dbType) {
    case 'mysql':
    case 'mariadb':
    case 'postgres':
    case 'sqlite':
    case 'mongodb':
      return dbType as TypeOrmModuleOptions['type'];
    default:
      throw new Error(`Unsupported DB_TYPE: ${dbType}`);
  }
};

export const databaseConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  const type = getDatabaseType(configService);
  const commonConfig = {
    type,
    host: configService.get<string>('DB_HOST'),
    port: parseInt(configService.get<string>('DB_PORT'), 10),
    username: configService.get<string>('DB_USER'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    autoLoadEntities: true,
    synchronize: false,
  };

  if (type === 'mongodb') {
    return {
      ...commonConfig,
      useUnifiedTopology: true,
      // D'autres options spécifiques à MongoDB ici
    } as TypeOrmModuleOptions;
  }

  return commonConfig as TypeOrmModuleOptions;
};
