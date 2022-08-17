import React from 'react'
import './MainTable.css';
import datas from './Mock-data.json';
import sort_icon from './Icons/sort.png'
import TableFooter from './tableFooter';
import TableHeader from './TableHeader';

function MainTable() {
  return (
    <div className='table-container relative'>
        <TableHeader/>
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>Product Name <img src={sort_icon} alt="sort-icon"/></th>
                    <th>Status <img src={sort_icon} alt="sort-icon"/></th>
                    <th>Qty <img src={sort_icon} alt="sort-icon"/></th>
                    <th>Category <img src={sort_icon} alt="sort-icon"/></th>
                    <th>On Sale <img src={sort_icon} alt="sort-icon"/></th>
                    <th>Vendor <img src={sort_icon} alt="sort-icon"/></th>
                </tr>
            </thead>
            <tbody>
                {datas.map(data=>{
                    let status_cn = "pending";
                    data.status==="Acknowledged"? status_cn = "acknowledged":data.status==="Pending"? status_cn = "pending": status_cn = "active"
                    return(<tr key={data.id}>                        
                        <td><input type="checkbox"/></td>
                        <td className='product-cell'>
                            <img src={data.img} alt="altttt"/>
                            {data.productName}
                            {/* <p className='small'>SKU:{data.sku}</p> */}
                        </td>
                        <td><span className={status_cn}>{data.status} </span></td>
                        <td>{data.Qty}</td>
                        <td>{data.Category}</td>
                        <td>{data.Sale}</td>
                        <td className='vendor'>{data.Vendor}</td>
                    </tr>)
                })}
            </tbody>
        </table>
        <TableFooter/>
    </div>
  )
}
export default MainTable