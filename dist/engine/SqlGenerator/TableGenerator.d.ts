import { SqlGenerator } from './SqlGenerator';
import { Table } from '../Table';
export declare class TableGenerator implements SqlGenerator {
    private table;
    constructor(table: Table);
    generate(): string;
}
