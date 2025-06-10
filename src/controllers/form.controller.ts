import { Request, Response, NextFunction } from 'express';
import { FormService } from '../services/form.service';
import { responseStatus } from '../helper/response';
import { HTTP_STATUS } from '../utils/statusCodes';
import { msg } from '../helper/messages';
import { IForm } from '../models/Form';

const formService = new FormService();

export const saveForm = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const formData: IForm = req.body;
    const result = await formService.saveForm(formData);
    return responseStatus(res, HTTP_STATUS.OK, msg.form.saved, result);
  } catch (error) {
    next(error);
  }
};
