"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SlothSorter_1 = __importDefault(require("./SlothSorter"));
var sorter = new SlothSorter_1.default([10, -7, 22, 15]);
console.log(sorter.sort());
