import { IUserService } from "./interface";
import User from "../../models/user.model";
import { response } from "express";
import { userInfo } from "os";
import { destroy, findAllbyID, update } from ".";
import { Where } from "sequelize/types/lib/utils";


/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {
        return User.findAll();
    },

    async create(ID,NAME): Promise<any> {
        return User.create({
            id: ID,
            name: NAME
        })
    },
    
    async update(ID,NAME): Promise<any[]> {
        User.update({
                name: NAME
                },{
                where:{id:ID}
            });
        return User.findAll({
                where:{id:ID}
             })
    },
    async destroy(ID): Promise<any[]> {
        User.destroy({
            where:{id:ID}
         });
         return User.findAll({
            where:{id:ID}
         })
    },
    async findAllbyID(ID): Promise<any[]> {
         return User.findAll({
            where:{id:ID}
         })
    },
    
}

export default UserService;