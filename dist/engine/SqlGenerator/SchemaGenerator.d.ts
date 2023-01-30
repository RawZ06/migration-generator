import { SqlGenerator } from './SqlGenerator';
import { Schema } from '../Schema';
export declare class SchemaGenerator implements SqlGenerator {
    private schema;
    constructor(schema: Schema);
    generate(): string;
}
