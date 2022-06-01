"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validatorpipe = void 0;
const common_1 = require("@nestjs/common");
class Validatorpipe {
    ValidationPipee() {
        return new common_1.ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            forbidUnknownValues: true,
            disableErrorMessages: false,
            validationError: {
                value: false,
            },
            transform: true,
        });
    }
}
exports.Validatorpipe = Validatorpipe;
//# sourceMappingURL=validationpipe.js.map