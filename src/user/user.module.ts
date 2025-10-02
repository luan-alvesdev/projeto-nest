import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  imports: [], //módulos que deseja importar
  controllers: [UserController], //controlleres que deseja usar
  providers: [], // providers que serão injetados que possuem decorator @Injectable()
  exports: [], // recursos/providers que deseja exportar para outros módulos
})
export class UserModule {}
