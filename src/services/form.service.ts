import { CustomError } from '../utils/customError';
import { HTTP_STATUS } from '../utils/statusCodes';
import { IForm } from '../models/Form';
import { FormRepository } from '../repository/form.repository';
import { msg } from '../helper/messages';
import logger from '../utils/logger';

export class FormService {
  private formRepository: FormRepository;

  constructor() {
    this.formRepository = new FormRepository();
  }

  saveForm = async (formData: IForm) => {
    try {
      const savedForm = await this.formRepository.createForm(formData);
      return savedForm;
    } catch (error) {
      logger.error(`Form save error: ${error instanceof Error ? error.message : String(error)}`);
      throw new CustomError(msg.form.saveError, HTTP_STATUS.BAD_REQUEST);
    }
  };
}
