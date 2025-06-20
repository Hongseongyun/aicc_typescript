"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeams = void 0;
const client_1 = require("@prisma/client"); // schema에 테이블 이름으로 타입이 정의됨
const prisma = new client_1.PrismaClient();
const getTeams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teams = yield prisma.team.findMany();
        const teamsWithUsernames = yield Promise.all(
        // Promise의 값이 배열로 여러개 반환
        teams.map((team) => __awaiter(void 0, void 0, void 0, function* () {
            const productOwner = yield prisma.user.findUnique({
                where: { userId: team.productOwnerUserId }, // !는 값이 무조건 있다는 것을 보장
                select: { username: true }, // 조회할 필드 지정
            });
            const productManager = yield prisma.user.findUnique({
                where: { userId: team.projectManagerUserId }, // !는 값이 무조건 있다는 것을 보장
                select: { username: true }, // 조회할 필드 지정
            });
            return Object.assign(Object.assign({}, team), { productOwner: productOwner === null || productOwner === void 0 ? void 0 : productOwner.username, productManager: productManager === null || productManager === void 0 ? void 0 : productManager.username });
        })));
        res.json(teamsWithUsernames);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal Server Error:' + error.message });
    }
});
exports.getTeams = getTeams;
