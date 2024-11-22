import { Router } from "express";
import {getClients, postClients, deleteClient, getOneClient, updateClient} from '../controllers/clients.controller.js'

const router = Router()

router.get('/', getClients);
router.post('/', postClients);

router.get('/:id', getOneClient);
router.delete('/:id', deleteClient);
router.put('/:id', updateClient);

export default router
