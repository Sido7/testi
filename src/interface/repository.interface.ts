export interface IUserRepository {
    create(data:any): Promise<any>;
    update(data: any): Promise<any>;
    delete(id:number): Promise<{}>;
    find(data:any): Promise<any[]>;
    findOne(id:number): Promise<any | null>;
}