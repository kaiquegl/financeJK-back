import Router from '@koa/router';

import * as users from './modules/users';

const router = new Router();

router.get('/users', users.list);
router.put('/users/:id', users.update);

export { router };
