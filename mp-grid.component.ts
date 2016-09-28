import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChange
} from '@angular/core';
import {
  PaginationService,
  IPaginationInstance
} from 'ng2-pagination';
import { Config } from './config';
import { Row } from './rows';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'mp-grid',
  styleUrls: [
    './mp-grid.style.css'
  ],
  templateUrl: './mp-grid.template.html'
})

export class MPGridComponent {
  currentPage: number = 1;
  total: number = 0;
  search: FormControl;
  loading: boolean;
  delay: number = 200;
  pages: Array<Array<any>>;
  rows: Array<Array<Row>>;
  @Input() config: Config;
  @Output('onSearch') onSearch: EventEmitter<any> = new EventEmitter<string>();
  private currentPageSize = 10;
  private pagination: IPaginationInstance = {
    id: 'server',
    itemsPerPage: this.currentPageSize,
    currentPage: this.currentPage
  };

  constructor(private paginationService: PaginationService) {
    this.pages = [];
  }

  ngOnInit() {
    if (!this.config) {
      throw new Error('Config is not defined');
    }
    this.paginationService.register(this.pagination);
    this.paginationService.setItemsPerPage('server', this.config.opts && this.config.opts.defaultPageSize || this.currentPageSize);
    this.paginationService.setCurrentPage('server', this.config.opts.currentPage);
    this.paginationService.setTotalItems('server', this.config.opts.total);

    this.search = new FormControl();
    const searchStream = this.search.valueChanges.debounceTime(this.delay);
    searchStream.subscribe(input => this.onSearch.emit(input));
  }

  pageChange(page: number) {
    if (page === this.pagination.currentPage) {
      return;
    }
    this.pagination.currentPage = page;
    if (this.config.opts.pageChangeEvent)
      this.config.opts.pageChangeEvent(this.pagination.currentPage, this.pagination.itemsPerPage);
  }

  changePageSize(event) {
    if (+event.target.value === this.pagination.itemsPerPage) {
      return;
    }
    this.pagination.itemsPerPage = +event.target.value;
    this.pagination.currentPage = 1;
    this.config.opts.pageChangeEvent(this.pagination.currentPage, this.pagination.itemsPerPage);
  }

 /* ngOnChanges(change: { [propertyName: string]: SimpleChange }) {
    this.paginationService.setCurrentPage('server', change.config.currentValue.opts.currentPage);
    this.paginationService.setTotalItems('server', change.config.currentValue.opts.total);
  }*/

  onInputCmpClick(event, item, index) {
    let page = this.config.opts.data;
    let dataItem = page[index];
    dataItem.mpGridData = {
      type: item.type,
      checked: event.event.target.checked
    };
    let isAllChecked = _.filter(page, i => i.mpGridData && i.mpGridData.checked).length === page.length;
    _.first(_.filter(this.config.headers, { type: 'checkbox' })).component.isChecked = isAllChecked;
    if (item.onClick)
      item.onClick(event);
  }

  onHeaderCheckBoxClick(event) {
    let check = event.event.target.checked;
    let dataItems = this.config.opts.data;
    dataItems = dataItems.map(i => {
      i.mpGridData = {
        type: 'checkbox',
        checked: event.event.target.checked
      };
      return i;
    });
    let inputElems = _.flatten([].concat(this.config.rows.map(i => i.columns)));
    inputElems = _.filter(inputElems, { type: 'checkbox' });
    _.each(inputElems, item => {
      item.component.isChecked = check;
    });
  }

  onClickForHeaderSorting(event, header) {
    _.each(this.config.headers, item => {
      if (item.sortKey !== header.sortKey) {
        item.sort = null;
      }
    });
    header.sort = {
      key: header.sortKey,
      direction: (header.sort && header.sort.direction) ? header.sort.direction * -1 : 1
    };
    header.onSort(header.sort);
  }

  get isAnySelected(): boolean {
    return !!_.filter(this.config.opts.data, i => i.mpGridData && i.mpGridData.checked).length;
  }
}
