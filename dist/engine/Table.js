"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.Column = void 0;
class Column {
    constructor(column) {
        this.pk = false;
        this.autoincrement = false;
        this.nullable = true;
        Object.assign(this, column);
    }
    notNull() {
        this.nullable = false;
    }
}
exports.Column = Column;
class Table {
    constructor(name) {
        this.name = name;
        this.columns = [];
    }
    id() {
        const column = new Column({
            name: 'id',
            type: 'int',
            pk: true,
            autoincrement: true,
        });
        this.columns.push(column);
        return column;
    }
    string(name) {
        const column = new Column({
            name: name,
            type: 'string',
            pk: false,
            autoincrement: false,
        });
        this.columns.push(column);
        return column;
    }
    getColumns() {
        return this.columns;
    }
}
exports.Table = Table;
//# sourceMappingURL=Table.js.map