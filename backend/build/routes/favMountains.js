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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonschema = __importStar(require("jsonschema"));
var express_1 = __importDefault(require("express"));
var auth_1 = require("../middleware/auth");
var expressError_1 = require("../expressError");
var favMountain_1 = __importDefault(require("../models/favMountain"));
var favMountain_json_1 = __importDefault(require("../schemas/favMountain.json"));
var router = express_1.default.Router();
router.post("/api/fav-mountain", auth_1.ensureLoggedIn, auth_1.checkIfUserOrAdmin, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var validator, errors, _a, userId, skiAreaSlug, favMountain, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                validator = jsonschema.validate(req.body, favMountain_json_1.default);
                if (!validator.valid) {
                    errors = validator.errors.map(function (e) { return e.stack; });
                    throw new expressError_1.BadRequestError(errors);
                }
                _a = req.body, userId = _a.userId, skiAreaSlug = _a.skiAreaSlug;
                return [4 /*yield*/, favMountain_1.default.createFavMountain(userId, skiAreaSlug)];
            case 1:
                favMountain = _b.sent();
                return [2 /*return*/, res.status(201).json({ favMountain: favMountain })];
            case 2:
                e_1 = _b.sent();
                return [2 /*return*/, next(e_1)];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/users/:user_id/fav-mountains", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var favMountains, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, favMountain_1.default.fetchFavMountainDataByUserId(req.params.user_id)];
            case 1:
                favMountains = _a.sent();
                return [2 /*return*/, res.json({ favMountains: favMountains })];
            case 2:
                e_2 = _a.sent();
                next(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/ski-areas/:slug/users-favorited-by", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var favMountains, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, favMountain_1.default.fetchFavMountainDataBySkiAreaSlug(req.params.slug)];
            case 1:
                favMountains = _a.sent();
                return [2 /*return*/, res.json({ favMountains: favMountains })];
            case 2:
                e_3 = _a.sent();
                next(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.delete("/api/fav-mountain/:id", auth_1.ensureLoggedIn, auth_1.checkIfUserOrAdmin, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, favMountain_1.default.remove(req.params.id)];
            case 1:
                _a.sent();
                return [2 /*return*/, res.json({ deleted: "Favorite ".concat(req.params.id) })];
            case 2:
                e_4 = _a.sent();
                return [2 /*return*/, next(e_4)];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
