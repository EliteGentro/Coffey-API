import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validate } from './env.validation';

import { OrganizationModule } from './organization/organization.module';
import { UserModule } from './user/user.module';
import { ContentModule } from './content/content.module';
import { SyncModule } from './sync/sync.module';
import { FinanceModule } from './finance/finance.module';
import { ProgressModule } from './progress/progress.module';
import { PreferenceModule } from './preference/preference.module';
import { CooperativaModule } from './cooperativa/cooperativa.module';

@Module({
  imports: [
    // Config modules
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT', '5432'), 10),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: true,
        ssl: {
          rejectUnauthorized: true,
        }
      }),
    }),

    // App modules
    OrganizationModule,

    UserModule,

    ContentModule,

    SyncModule,

    FinanceModule,

    ProgressModule,

    PreferenceModule,

    CooperativaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
