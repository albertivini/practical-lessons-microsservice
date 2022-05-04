import {ICodeMessages} from '../interfaces/ICodeMessages';

import {HTTP_STATUS_CODE} from '../constants/httpStatusCode';

export class StudentAlreadyExistsError extends Error {
    statusCode: number;
    code: string;

    constructor(code_messages_interface: ICodeMessages) {
      super(`Student Already Exists: ${code_messages_interface.message}`);
      this.name = 'Student Already Exists';
      this.code = code_messages_interface.code;
      this.message = code_messages_interface.message;
      this.statusCode = HTTP_STATUS_CODE.FORBIDDEN;
    }
}


