"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomexepException = void 0;
const common_1 = require("@nestjs/common");
class CustomexepException extends common_1.HttpException {
    constructor(error, statuscode) {
        super(error, statuscode);
        this.error = error;
        this.statuscode = statuscode;
    }
}
exports.CustomexepException = CustomexepException;
//# sourceMappingURL=customexep.exception.js.map