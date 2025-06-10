import Form, { IForm } from '../models/Form';

export class FormRepository {
  createForm = async (formData: IForm): Promise<IForm> => {
    const form = new Form(formData);
    return await form.save();
  };
}
