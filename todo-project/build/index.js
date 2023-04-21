"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToDoConsole_1 = __importDefault(require("./view/ToDoConsole"));
const todoConsole = new ToDoConsole_1.default();
todoConsole.promptUser();
