import { SqlGenerator } from './SqlGenerator';
import { Column } from '../Table';
export declare class ColumnGenerator implements SqlGenerator {
    private column;
    constructor(column: Column);
    generate(): string;
    private getType;
    private nullable;
    private pk;
    private autoincrement;
}
