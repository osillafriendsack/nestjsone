"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const teachercreate_dto_1 = require("./../InputValidationPipes/teachercreate.dto");
const auth_decorator_1 = require("./../Decorators/auth.decorator");
const loginvalidate_dto_1 = require("./../InputValidationPipes/loginvalidate.dto");
const auth_service_1 = require("./../Auth/auth/auth.service");
const role_enum_1 = require("./../Helpers/role.enum");
const common_1 = require("@nestjs/common");
const user_service_1 = require("../Services/user.service");
const usercreate_dto_1 = require("../InputValidationPipes/usercreate.dto");
let UserController = class UserController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    getAllStudents() {
        return this.userService.findAll();
    }
    getaStudents(id) {
        return this.userService.findOne(id);
    }
    createStudent(student) {
        console.log(student);
        return this.userService.createSudent(student);
    }
    createTeacher(req, body) {
        return this.userService.createTeacher(req);
    }
    async login(req) {
        return this.authService.login(req, role_enum_1.Role.USER);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllStudents", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getaStudents", null);
__decorate([
    (0, auth_decorator_1.Auth)(role_enum_1.Role.USER),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usercreate_dto_1.Usercreate]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createStudent", null);
__decorate([
    (0, auth_decorator_1.Auth)(role_enum_1.Role.USER),
    (0, common_1.Post)('/createteacher'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, teachercreate_dto_1.Teachercreate]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createTeacher", null);
__decorate([
    (0, common_1.Post)('auth/login'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginvalidate_dto_1.Loginvalidate]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
UserController = __decorate([
    (0, common_1.Controller)('/api/user'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [user_service_1.UserService, auth_service_1.AuthService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map