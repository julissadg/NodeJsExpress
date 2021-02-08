import { create, destroy, findAllbyID, update } from ".";
import { UserService } from "../../services";
import { IUserFacade } from "./interface";


/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {

        let users = await UserService.findAll();
        return users;
    },
    async create(ID,NAME): Promise<any[]> {

        let users = await UserService.create(ID , NAME);
        return users;
    },
    async update(ID,NAME): Promise<any[]> {

        let users = await UserService.update(ID , NAME);
        return users;
    },
    async destroy(ID): Promise<any[]> {

        let users = await UserService.destroy(ID);
        return users;
    },

    async findAllbyID(ID): Promise<any[]> {

        let users = await UserService.findAllbyID(ID);
        return users;
    }
}

export default UserFacade;