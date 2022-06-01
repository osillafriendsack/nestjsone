"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchexcException = void 0;
const common_1 = require("@nestjs/common");
class SwitchexcException extends common_1.HttpException {
    constructor(error, statuscode) {
        super(error, statuscode);
        this.error = error;
        this.statuscode = statuscode;
    }
}
exports.SwitchexcException = SwitchexcException;
//# sourceMappingURL=switchexc.exception.js.map