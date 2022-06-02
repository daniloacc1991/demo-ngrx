import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      applicationName: 'ngrx',
      host: 'localhost',
      username: 'postgres',
      password: 'POSTGRES',
      database: 'ngrx',
      entities: [User],
      synchronize: true,
      schema: 'public',
      logging: true,
    }),
  ],
})
export class AppModule {}
