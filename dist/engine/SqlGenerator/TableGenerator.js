"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableGenerator = void 0;
const ColumnGenerator_1 = require("../SqlGenerator/ColumnGenerator");
class TableGenerator {
    constructor(table) {
        this.table = table;
    }
    generate() {
        return (`CREATE TABLE ${this.table.name} (\n` +
            this.table
                .getColumns()
                .map((column) => {
                const generator = new ColumnGenerator_1.ColumnGenerator(column);
                return '  ' + generator.generate();
            })
                .join(',\n') +
            '\n)');
    }
}
exports.TableGenerator = TableGenerator;
//# sourceMappingURL=TableGenerator.js.map