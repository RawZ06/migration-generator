import { SqlGenerator } from './SqlGenerator';
import { Schema } from '../Schema';
import { Table } from '../Table';
import { ColumnGenerator } from '../SqlGenerator/ColumnGenerator';

export class TableGenerator implements SqlGenerator {
    constructor(private table: Table) {}

    generate() {
        return (
            `CREATE TABLE ${this.table.name} (\n` +
            this.table
                .getColumns()
                .map((column) => {
                    const generator = new ColumnGenerator(column);
                    return '  ' + generator.generate();
                })
                .join(',\n') +
            '\n)'
        );
    }
}
