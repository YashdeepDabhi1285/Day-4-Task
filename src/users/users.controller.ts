import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './users.model'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Get()
    getAllUsers(): User[] {
      return this.usersService.getAllUsers()
    }
  
    @Post()
    createUser(@Body('name') name: string, @Body('email') email: string): User {
      return this.usersService.createUser(name, email)
    }
  
    @Put(':id')
    updateUser(@Param('id') id: string, @Body('name') name: string, @Body('email') email: string): User {
      return this.usersService.updateUser(Number(id), name, email)
    }
  
    @Delete(':id')
    deleteUser(@Param('id') id: string): string {
      this.usersService.deleteUser(Number(id))
      return "user deleted"
    }
  }
