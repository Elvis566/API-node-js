import {Router} from 'express'
import { getUser } from "../controller/UserControler.js";

const router = Router();
router.get('/', getUser);

export const routerUser = router;