"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const roles_guard_1 = require("../Guards/roles.guard");
const jwt_auth_guard_1 = require("./../auth/auth/jwt-auth.guard");
const roles_decorator_1 = require("./roles.decorator");
const common_1 = require("@nestjs/common");
function Auth(role) {
    return (0, common_1.applyDecorators)((0, roles_decorator_1.Roles)(role), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard));
}
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map