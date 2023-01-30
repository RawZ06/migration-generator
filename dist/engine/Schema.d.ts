import { Table } from './Table';
export declare class Schema {
    create(name: string, action: (table: Table) => void): void;
    drop(name: string): void;
}
