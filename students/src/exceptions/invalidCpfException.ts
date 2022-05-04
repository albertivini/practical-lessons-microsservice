/* eslint-disable max-classes-per-file */
    import {ICodeMessages} from '../interfaces/ICodeMessages';

import {HTTP_STATUS_CODE} from '../constants/httpStatusCode';

export class InvalidCpfError extends Error {
    statusCode: number;
    code: string;

    constructor(code_messages_interface: ICodeMessages) {
      super(`Invalid Cpf Error: ${code_messages_interface.message}`);
      this.name = 'Invalid Cpf Error';
      this.code = code_messages_interface.code;
      this.message = code_messages_interface.message;
      this.statusCode = HTTP_STATUS_CODE.FORBIDDEN;
    }
}


