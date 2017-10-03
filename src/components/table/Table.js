import React, { Component } from 'react';
//no braces means it's the default, braces means it's one of many
import './Table.css';


class Table extends Component {
  render() {
    return (
       <div className="text-center">
        <p className="title">Some information about the restaurants I recommend</p>
        <table>
            <tbody>
                <tr>
                    <th>Restaurant</th>
                    <th>Type of Cuisine</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Surf</td>
                    <td>Seafood</td>
                    <td>$$$</td>
                </tr>
                <tr>
                    <td>Portsmouth Brewery</td>
                    <td>Pub</td>
                    <td>$$</td>
                </tr>
                <tr>
                    <td>Martingale Wharf</td>
                    <td>American</td>
                    <td>$$$</td>
                </tr>
                <tr>
                    <td>Poco's Bow Street Cantina</td>
                    <td>Mexican</td>
                    <td>$$</td>
                </tr> 
            </tbody>
        </table>
       </div> 
    );
  }
}

export default Table;
