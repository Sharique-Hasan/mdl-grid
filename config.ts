import { Row } from './rows';

export class Config {
    private header: any;
    private row: Row[];
    private opt: any;
    constructor(header: any, row: Row[], opt?: any) {
        this.header = header;
        this.row = row;
        this.opt = opt;
    }
    get headers(): any {
        return this.header;
    }

    get rows(): Row[] {
        return this.row;
    }

    set rows(rows: Row[]) {
        this.row = rows;
    }

    get opts(): any {
        return this.opt;
    }

    set opts(opt: any) {
        this.opt = opt;
    }

}
