import express from 'express';
import * as ideaController from '../controllers/idea.controller.js';
import { validateIdea } from '../middlewares/idea.validation.js';

const ideaRouter = express.Router();

ideaRouter.route('/')
    .get(ideaController.getAllIdeas)
    .post(validateIdea, ideaController.addIdea);

ideaRouter.route('/:id')
    .get(ideaController.getIdeaById)
    .put(ideaController.updateIdea)
    .delete(ideaController.deleteIdea);

export default ideaRouter;