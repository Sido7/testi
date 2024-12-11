import { IUserRepository } from "../interface/repository.interface";

export class UserService  {
     repository : IUserRepository
     constructor(repository: IUserRepository) {this.repository = repository} 
     async createUser(data: any){
       const User = await this.repository.create(data)
       return User
     }
     updateUser(data: any){}
     deleteUser(id: number){}
     async findUser(data: any){
      const result = await this.repository.find(data)
      return result
     }
     async findUserById(id: number){
      const result = await this.repository.findOne(id)
      return result
     }
}