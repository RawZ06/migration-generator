"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnGenerator = void 0;
class ColumnGenerator {
    constructor(column) {
        this.column = column;
    }
    generate() {
        return [
            this.column.name,
            this.getType(),
            this.pk(),
            this.nullable(),
            this.autoincrement(),
        ].join(' ');
    }
    getType() {
        switch (this.column.type) {
            case 'string':
                return 'VARCHAR(255)';
            case 'int':
                return 'INT';
        }
        return '';
    }
    nullable() {
        if (this.column.nullable) {
            return '';
        }
        else {
            return 'NOT NULL';
        }
    }
    pk() {
        if (this.column.pk) {
            return 'PRIMARY KEY';
        }
        else {
            return '';
        }
    }
    autoincrement() {
        if (this.column.autoincrement) {
            return 'AUTO_INCREMENT';
        }
        else {
            return '';
        }
    }
}
exports.ColumnGenerator = ColumnGenerator;
//# sourceMappingURL=ColumnGenerator.js.map