import { TableGenerator } from './SqlGenerator/TableGenerator';
import { Table } from './Table';

export class Schema {
    create(name: string, action: (table: Table) => void) {
        const table = new Table(name);
        action(table);
        console.log(new TableGenerator(table).generate());
    }

    drop(name: string) {
        //
    }
}
