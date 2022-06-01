"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const customexep_exception_1 = require("../../Exceptions/customexep.exception");
const admin_service_1 = require("../../Services/admin.service");
const user_service_1 = require("../../Services/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    constructor(usersService, adminService, jwtService) {
        this.usersService = usersService;
        this.adminService = adminService;
        this.jwtService = jwtService;
    }
    async validateUser(id, pass) {
        const user = await this.usersService.findOne(id);
        if (user && user.password === pass) {
            return user;
        }
        return null;
    }
    async login(req, classname) {
        console.log(classname);
        if (classname == 'user') {
            return this.checklogin(this.usersService, req, classname);
        }
        if (classname == 'admin') {
            return this.checklogin(this.adminService, req, classname);
        }
    }
    async checklogin(usertype, req, classname) {
        const user = await usertype.findOne(req.id);
        console.log(user);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        const isMatch = await bcrypt.compare(req.password, user.password);
        if (!isMatch) {
            throw new customexep_exception_1.CustomexepException('Invalid Password', common_1.HttpStatus.BAD_REQUEST);
        }
        if (user) {
            const payload = { username: user.firstName, sub: user.id, role: classname };
            return {
                access_token: this.jwtService.sign(payload),
                user: user,
                decode: this.jwtService.decode(this.jwtService.sign(payload))
            };
        }
        return null;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        admin_service_1.AdminService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map