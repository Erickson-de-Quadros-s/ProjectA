import { Module } from '@nestjs/common';
import { UserController } from './Controller/user';
import { MongooseModule } from '@nestjs/mongoose';

import { PermissionController } from './Controller/permission';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/projects',
    {useNewUrlParser: true, useUnifiedTopology: true}
    ),
  ],
  controllers: [UserController,PermissionController],
  providers: [],
})
export class AppModule {}
