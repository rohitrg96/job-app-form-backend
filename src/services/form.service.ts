import { CustomError } from "../utils/customError";
import { HTTP_STATUS } from "../utils/statusCodes";
import { IForm } from "../models/Form";
import { FormRepository } from "../repository/form.repository";
import { msg } from "../helper/messages";

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
      throw new CustomError(msg.form.saveError, HTTP_STATUS.BAD_REQUEST);
    }
  };
}
