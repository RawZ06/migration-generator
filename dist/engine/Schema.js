"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
const TableGenerator_1 = require("./SqlGenerator/TableGenerator");
const Table_1 = require("./Table");
class Schema {
    create(name, action) {
        const table = new Table_1.Table(name);
        action(table);
        console.log(new TableGenerator_1.TableGenerator(table).generate());
    }
    drop(name) {
    }
}
exports.Schema = Schema;
//# sourceMappingURL=Schema.js.map