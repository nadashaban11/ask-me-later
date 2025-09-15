import express from 'express';
import * as ideaController from '../controllers/idea.controller.js';
import { validateIdea, validateIdeaForUpdate} from '../middlewares/idea.validation.js';
import { protect } from '../middlewares/auth.validation.js';

const ideaRouter = express.Router();

ideaRouter.route('/')
    .get(protect, ideaController.getAllIdeas)
    .post(protect, validateIdea(), ideaController.addIdea);

ideaRouter.route('/:id')
    .get(protect, ideaController.getIdeaById)
    .put(protect, validateIdeaForUpdate() ,ideaController.updateIdea)
    .delete(protect, ideaController.deleteIdea);

export default ideaRouter;