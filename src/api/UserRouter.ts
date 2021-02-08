import { Router } from 'express';
import { UserFacade } from '../facade';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/home/users
 * @swagger
 * /home/users/:
 *  post:
 *    description: sign up user to application
 *    tags: ["home"]
 *    requestBody:
 *      description: sign up body
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserSchema'
 *          example:
 *            email: test.user@mail.com
 *            password: test_test
 *    responses:
 *      200:
 *        description: user successfuly signed in
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              logged: true
 *              message: Sign in successfull!!
 *      400:
 *        description: sign in failed
 *        content:
 *          application/json:
 *            example:
 *              status: 400
 *              logged: false
 *              message: Email already exists
 */
router.get('/users', UserFacade.findAll);
router.post('/user', UserFacade.create);
router.put('/user',UserFacade.update);
router.delete('/user',UserFacade.destroy);
router.get('/user/:id',UserFacade.findAllbyID);

/**
 * GET method route
 * @example http://localhost:PORT/home/ping
 * @swagger
 * /home/ping/:
 *  post:
 *    description: sign up user to application
 *    tags: ["home"]
 *    requestBody:
 *      description: sign up body
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserSchema'
 *          example:
 *            email: test.user@mail.com
 *            password: test_test
 *    responses:
 *      200:
 *        description: user successfuly signed in
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              logged: true
 *              message: Sign in successfull!!
 *      400:
 *        description: sign in failed
 *        content:
 *          application/json:
 *            example:
 *              status: 400
 *              logged: false
 *              message: Email already exists
 */
router.get('/Hola', async (req, res) => {
    res.send('Hola desde Servicio manejado por Kubernetes');
});

/**
 * @export {express.Router}
 */
export default router;