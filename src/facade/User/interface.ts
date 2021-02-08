
/**
 * @export
 * @interface IUserFacade
 */
export interface IUserFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    findAll(): Promise<any[]>;
    create(id:number,name:string):Promise<any[]>;
    update(id:number,name:string):Promise<any[]>;
    destroy(id:number):Promise<any[]>;
    findAllbyID(id:number):Promise<any[]>;

    
}