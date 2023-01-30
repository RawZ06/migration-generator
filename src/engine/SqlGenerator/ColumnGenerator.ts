import { SqlGenerator } from './SqlGenerator';
import { Column } from '../Table';

export class ColumnGenerator implements SqlGenerator {
    constructor(private column: Column) {}

    generate() {
        return [
            this.column.name,
            this.getType(),
            this.pk(),
            this.nullable(),
            this.autoincrement(),
        ].join(' ');
    }

    private getType() {
        switch (this.column.type) {
            case 'string':
                return 'VARCHAR(255)';
            case 'int':
                return 'INT';
        }
        return '';
    }

    private nullable() {
        if (this.column.nullable) {
            return '';
        } else {
            return 'NOT NULL';
        }
    }

    private pk() {
        if (this.column.pk) {
            return 'PRIMARY KEY';
        } else {
            return '';
        }
    }

    private autoincrement() {
        if (this.column.autoincrement) {
            return 'AUTO_INCREMENT';
        } else {
            return '';
        }
    }
}
