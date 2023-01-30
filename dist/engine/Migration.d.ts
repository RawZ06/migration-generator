import { Schema } from './Schema';
export declare abstract class Migration {
    schema: Schema;
    constructor();
    abstract up(): any;
    abstract down(): any;
}
