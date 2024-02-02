import { getTypeUser, store, update, delet } from "../controller/TypeUserControler.js";
import {Router} from 'express'

const router = Router();
router.get('/', getTypeUser);
router.post('/', store);
router.put('/:id', update)
router.delete('/:id', delet)
export const routerType = router;