import { Column } from './column';

export class Row {
    constructor(private _columns: Column[], private _source?: any) { }
    get source(): any {
        return this._source;
    }
    get columns(): Column[] {
        return this._columns;
    }
}