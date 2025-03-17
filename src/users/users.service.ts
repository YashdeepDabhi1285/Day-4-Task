import { Injectable, NotFoundException } from '@nestjs/common'
import { User } from './users.model'

@Injectable()
export class UsersService {
    private users: User[] = []

    getAllUsers() : User[] {
        return this.users
    }
    getUserById(id: number): User {
        const user = this.users.find(user => user.id === id);
        if (!user) {
          throw new NotFoundException("No user found with id");
        }
        return user
    }
    createUser(name: string, email: string): User {
        const newUser: User = {
          id: Number(Date.now().toString()),
          name,
          email,
        }
        this.users.push(newUser)
        return newUser
    }
    
    updateUser(id: number, name: string, email: string): User {
        const user = this.getUserById(id)
        user.name = name
        user.email = email
        return user
    }
    
      deleteUser(id: number): void {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
          throw new NotFoundException("No user found with id")}
        this.users.splice(index, 1)
    }
    

}
