import { ICoulmn } from './lib/icolumn';

export class Column {
    constructor(private opts: ICoulmn) {
        Object.assign(this, this.opts);
    }

    onClick(event) {
        if (this.opts.onClick)
            this.opts.onClick(event);
    }

    onSort(event) {
        if (this.opts.onSort)
            this.opts.onSort(event);
    }

}
