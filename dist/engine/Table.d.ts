interface IColumn {
    name: string;
    type: 'string' | 'int';
    pk: boolean;
    autoincrement: boolean;
}
export declare class Column {
    name: string;
    type: 'string' | 'int';
    pk: boolean;
    autoincrement: boolean;
    nullable: boolean;
    constructor(column: IColumn);
    notNull(): void;
}
export declare class Table {
    name: string;
    private columns;
    constructor(name: string);
    id(): Column;
    string(name: string): Column;
    getColumns(): Column[];
}
export {};
