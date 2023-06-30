/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { UserController } from './Controller/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './services/user.service';
import { UserSchema } from './Mongo/Schemas/user.schema';
import { UserRepository } from './Mongo/Repository/user.repository';
import { PermissionController } from './Controller/permission.controller';
import { PermissionService } from './services/permission.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/ProjectA',
      { useNewUrlParser: true, useUnifiedTopology: true }
    ),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }
    ])

  ],
  controllers: [UserController, PermissionController]
  providers: [UserService, UserRepository,
    PermissionService, UserRepository],
})
export class AppModule { }
