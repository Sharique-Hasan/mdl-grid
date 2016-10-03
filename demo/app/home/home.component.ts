import { Component } from '@angular/core';
import { Column, Row, Config } from '../../../index'

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {
  // Set our default values
  headers: Column[];
  config: Config;
  options: Object;
  page: Object;
  sampleData: Object[];
  constructor() {
    this.page = { number: 1, size: 10 };
    // Creating grid headers
    this.headers = [
      new Column({ colStyleClass: 'col-md-4 col-sm-12', type: 'span', content: 'Title' }),
      new Column({ type: 'span', content: 'Status'}),
      new Column({ type: 'span', content: 'Date Created'}),
      new Column({ type: 'span', content: 'Author'})
    ];

    // Sample data
    this.sampleData = [
      {
        title: 'title 1',
        createdOn: '11/11/11',
        status: 'active',
        author: 'J.k.R'
      },{
        title: 'title 2',
        createdOn: '11/11/11',
        status: 'active',
        author: 'J.k.R'
      },{
        title: 'title 3',
        createdOn: '11/11/11',
        status: 'active',
        author: 'J.k.R'
      },{
        title: 'title 4',
        createdOn: '11/11/11',
        status: 'active',
        author: 'J.k.R'
      },{
        title: 'title 5',
        createdOn: '11/11/11',
        status: 'active',
        author: 'J.k.R'
      }
    ]
  }

  ngOnInit() {
    this.prepareConfig();
  }

  pageChange(page: number, pageSize: number) {
    this.page = { number: page, size: pageSize };
    this.prepareConfig();
  }

  prepareConfig(){
    this.options = {
      sortable: true,
      currentPage: this.page.number,
      pageSizes: [10, 20, 30, 40],
      total: this.sampleData.length,
      defaultPageSize: this.page.size,
      pageChangeEvent: this.pageChange.bind(this)
    };
    // Config will be used in html directive
    this.config = new Config(this.headers, this.processData(this.sampleData), this.options);
  }

  processData(response): Row[]{
    return response.map(item => {
      let row = [];
      let { title, status, createdOn, author } = item;
      let titleOpts = { colStyleClass: 'col-md-4 col-sm-12', content: title, href: ``, type: 'anchor' };
      row.push(new Column(titleOpts));
      let statusOpts = { colStyleClass: '', content: status, type: 'span' };
      row.push(new Column(statusOpts));
      let dateOpts = { type: 'date', colStyleClass: 'col-md-2', format: 'MM/DD/YYYY', content: createdOn };
      row.push(new Column(dateOpts));
      let authorOpts = { type: 'span', colStyleClass: 'col-md-3', content: author };
      row.push(new Column(authorOpts));

      // to bind the original data with the row passing items as 2nd param
      return new Row(row, item);
    });
  }

}
