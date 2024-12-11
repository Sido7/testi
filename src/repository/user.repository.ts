import { IUserRepository } from "../interface/repository.interface";

export class UserRepository implements IUserRepository{
    create(data:any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id:number): Promise<{}> {
        throw new Error("Method not implemented.");
    }
    find(data:any): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id:number): Promise<any | null> {
        throw new Error("Method not implemented.");
    }
    update(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}