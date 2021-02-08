import UserService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise < any[] > {
    return await UserService.findAll();
}
export async function create(ID:number,NAME:String): Promise < any[] > {
    return await UserService.create(ID,NAME);
}

export async function update(ID:number,NAME:String): Promise < any[] > {
    return await UserService.update(ID,NAME);
}

export async function destroy(ID:number): Promise < any[] > {
    return await UserService.destroy(ID);
}

export async function findAllbyID(ID:number): Promise < any[] > {
    return await UserService.findAllbyID(ID);
}