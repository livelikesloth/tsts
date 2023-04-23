"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SlothSorter = /** @class */ (function () {
    function SlothSorter(numbers) {
        this.numbers = numbers;
    }
    SlothSorter.prototype.sort = function () {
        var length = this.numbers.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.numbers[j] > this.numbers[j + 1]) {
                    //swap
                    var temp = this.numbers[j];
                    this.numbers[j] = this.numbers[j + 1];
                    this.numbers[j + 1] = temp;
                }
            }
        }
        return this.numbers;
    };
    return SlothSorter;
}());
exports.default = SlothSorter;
