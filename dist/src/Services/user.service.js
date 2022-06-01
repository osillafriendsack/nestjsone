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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const teacher_entity_1 = require("./../Models/teacher.entity");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./../Models/user.entity");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = __importStar(require("bcrypt"));
let UserService = class UserService {
    constructor(userRepository, teacherRepository) {
        this.userRepository = userRepository;
        this.teacherRepository = teacherRepository;
    }
    async createSudent(obj) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(obj.password, salt);
        obj.password = hash;
        const teacher = this.userRepository.create(obj);
        this.userRepository.save(teacher);
        return teacher;
    }
    async createTeacher(obj) {
        let body = obj.body;
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(body.password, salt);
        body.password = hash;
        let teacher = new teacher_entity_1.Teacher();
        teacher = body;
        let user = new user_entity_1.User();
        let authuser = obj.user;
        let dbuser = await this.findOne(authuser.id);
        user = dbuser;
        const teacherinstance = this.teacherRepository.create(teacher);
        teacherinstance.user = user;
        this.teacherRepository.save(teacherinstance);
        return teacherinstance;
    }
    findAll() {
        return this.userRepository.find();
    }
    async findOne(id) {
        const user = await this.userRepository.findOne({
            where: { id: id },
        });
        if (user) {
            return user;
        }
        throw new common_1.NotFoundException();
    }
    async remove(id) {
        await this.userRepository.delete(id);
    }
};
UserService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(teacher_entity_1.Teacher)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map