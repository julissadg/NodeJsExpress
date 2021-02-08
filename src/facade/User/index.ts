import UserFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {

        console.log('Query', req.query);
        console.log('body', req.body);
        const users: any[] = await UserFacade.findAll();
        res.status(HttpStatusCode.OK).json(users);
    } catch (error) {
        next(error);
    }
}

export async function create(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {

        console.log('Query', req.query);
        console.log('body', req.body);
        var ID = req.body.id;
        var NAME = req.body.name;
        const users: any[] = await UserFacade.create(ID,NAME);
        res.status(HttpStatusCode.OK).json(users);
    } catch (error) {
        next(error);
    }
}

export async function update(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {

        console.log('Query', req.query);
        console.log('body', req.body);
        var ID = req.body.id;
        var NAME = req.body.name;
        const users: any[] = await UserFacade.update(ID,NAME);
        res.status(HttpStatusCode.OK).json(users);
    } catch (error) {
        next(error);
    }
}

export async function destroy(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {

        console.log('Query', req.query);
        console.log('body', req.body);
        var ID = req.body.id;
        const users: any[] = await UserFacade.destroy(ID);
        res.status(HttpStatusCode.OK).json(users);
    } catch (error) {
        next(error);
    }
}

export async function findAllbyID(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {

        console.log('Query', req.query);
        console.log('body', req.body);
        var ID = req.body.id;
        const users: any[] = await UserFacade.findAllbyID(ID);
        res.status(HttpStatusCode.OK).json(users);
    } catch (error) {
        next(error);
    }
}