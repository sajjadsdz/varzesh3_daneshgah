import React from 'react';

import './Table.css';


class Table extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    {/*const tableBody = this.props.Args.bodyRow((row, i) =>
        <tr key={i} class={row.class}>
          {row.map((col, j) =>
              <td key={j} class={col.class}>{col.title}</td>
          )}
        </tr>
    )*/}



    return (

      <div class="custom-scroll-area">
        <div class="custom-scroll-area--fixtures">

          <div class="league-table fixtures-list-static" data-identity="6LjV">


            <table>
              <thead>
              <tr>
                <th class={this.props.Args.header.class} colspan={this.props.Args.header.colspan}>{this.props.Args.header.title}</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class={this.props.Args.subHeader.class} colspan={this.props.Args.subHeader.colspan}>{this.props.Args.subHeader.title}</td>
              </tr>
              {/*tableBody*/}

              <tr>
                <td class="text-left">جوانان اوکراین</td>
                <td class="text-center sm-padding text-nowrap league-table--match-result">-</td>
                <td class="text-right">جوانان ایتالیا</td>
                <td class="text-left matchtime">20:00</td>
              </tr>
              <tr>
                <td class="text-left">جوانان اکوادور</td>
                <td class="text-center sm-padding text-nowrap league-table--match-result">-</td>
                <td class="text-right">جوانان کره جنوبی</td>
                <td class="text-left matchtime">23:00</td>
              </tr>

              </tbody>
            </table>


          </div>
        </div>
        <div class="custom-scroll-area--league-table">
        </div>
      </div>

    );
  }
}
export default Table;
