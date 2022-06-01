"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultException = void 0;
const common_1 = require("@nestjs/common");
class DefaultException extends common_1.HttpException {
    constructor() {
        super("Default", common_1.HttpStatus.I_AM_A_TEAPOT);
    }
}
exports.DefaultException = DefaultException;
//# sourceMappingURL=default.exception.js.map