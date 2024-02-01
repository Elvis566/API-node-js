import { getTypeUser } from "../controller/TypeUserControler.js";
import {Router} from 'express'

const router = Router();
router.get('/', getTypeUser);

export const routerType = router;