import express from 'express';
import * as formController from '../controllers/form.controller';
import { validateFormData } from '../validator/form.validator';

const formRouter = express.Router();

formRouter.post('/', validateFormData, formController.saveForm);

export default formRouter;
