
/**
 * @export
 * @interface IUserService
 */
export interface IUserService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    findAll(): Promise<any[]>;
    create(ID:number,NAME:String):Promise<any[]>;
    update(ID:number,NAME:String):Promise<any[]>;
    destroy(ID:number):Promise<any[]>;
    findAllbyID(ID:number):Promise<any[]>;


}