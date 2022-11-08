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
function beolvas() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch("../users.json");
        let vals = yield response.json();
        console.log(vals.users);
        vals.users.sort(function (a, b) {
            if (a.lastName < b.lastName) {
                return -1;
            }
            if (a.lastName > b.lastName) {
                return 1;
            }
            return 0;
        });
        console.log(vals.users);
        let szuloElem = document.getElementById('namelist');
        for (let k of vals.users) {
            let listaElem = document.createElement('li');
            listaElem.textContent = k.lastName + " " + k.firstName;
            szuloElem === null || szuloElem === void 0 ? void 0 : szuloElem.appendChild(listaElem);
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    beolvas();
});
