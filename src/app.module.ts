import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TelefonosModule } from './telefonos/telefonos.module';
import { DomiciliosModule } from './domicilios/domicilios.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceConfig } from './config/orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    TypeOrmModule.forRoot({...dataSourceConfig}),
    UsuariosModule,
    TelefonosModule,
    DomiciliosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
