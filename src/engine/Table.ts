interface IColumn {
    name: string;
    type: 'string' | 'int';
    pk: boolean;
    autoincrement: boolean;
}

export class Column {
    name: string;
    type: 'string' | 'int';
    pk: boolean = false;
    autoincrement = false;
    nullable = true;

    constructor(column: IColumn) {
        Object.assign(this, column);
    }

    notNull() {
        this.nullable = false;
    }
}

export class Table {
    private columns: Column[] = [];

    constructor(public name: string) {}

    id() {
        const column = new Column({
            name: 'id',
            type: 'int',
            pk: true,
            autoincrement: true,
        });
        this.columns.push(column);
        return column;
    }

    string(name: string) {
        const column = new Column({
            name: name,
            type: 'string',
            pk: false,
            autoincrement: false,
        });
        this.columns.push(column);
        return column;
    }

    getColumns() {
        return this.columns;
    }
}
