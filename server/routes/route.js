import Express  from "express";
import { editUser,addUser,viewUser,getUser , DeleteUser} from "../controller/user-controller.js";

const router = Express.Router();

router.post('/entry', addUser)
router.get('/view', viewUser)
router.get('/:id', getUser)
router.post('/:id',editUser)
router.delete('/:id',DeleteUser)



export default router ;