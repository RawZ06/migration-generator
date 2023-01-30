import { Schema } from './Schema';

export abstract class Migration {
    schema: Schema;

    constructor() {
        this.schema = new Schema();
    }

    abstract up();
    abstract down();
}
