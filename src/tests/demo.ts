import { Table } from '../engine/Table';
import { Migration } from '../engine/Migration';

export class CreateUserTableMigration extends Migration {
    up() {
        this.schema.create('users', (table: Table) => {
            table.id();
            table.string('demo');
        });
    }

    down() {
        this.schema.drop('users');
    }
}
