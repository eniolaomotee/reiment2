import React from 'react'
import datas from './Mock-data.json';
import './MainTable.css';
import TableFooter from './tableFooter';


const TableFilterHeader =()=> {
  return (
    <div className='table-container relative'>
      <div className='filter-settings'>
      <div>
        <input type="search" placeholder="Product Name or SKU"/>
      </div>
      <div>
        <input type="search" placeholder="Product Name or SKU"/>
    </div>
    <div>
        <select class="form-control" name="" id="">
            <option>On Sale</option>
            <option></option>
            <option></option>
        </select>
    </div>
    <div>
    <select class="form-control" name="" id="">
            <option>Product Status</option>
            <option></option>
            <option></option>
        </select>
    </div>
    <div>
        <input type="date"/>
    </div>
    <div className="apply-button">
        <input type="submit" value="Apply"/>
    </div>
</div>
<table>
    <thead>
        <tr style={{width:'100%'}}>
            <th><input type="checkbox"/></th>
            <th>
                <span style={{paddingRight: '10px'}}>1 item Selected</span>
                <select class="form-control" name="" id="">
                    <option>Selct Action</option>
                    <option></option>
                    <option></option>
                </select>
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {datas.map(data=>{
            let status_cn = "pending";
            data.status==="Acknowledged"? status_cn = "acknowledged":data.status==="Pending"? status_cn = "pending": status_cn = "active"
            return(<tr key={data.id}>                        
                <td><input type="checkbox"/></td>
                <td className='product-cell'>
                    <img src={data.img} alt="altt"/>
                    {data.productName}
                </td>
                <td><span className={status_cn}>{data.status} </span></td>
                <td>{data.Qty}</td>
                <td>{data.Category}</td>
                <td>{data.Sale}</td>
                <td className='vendor'>{data.Vendor}</td>
            </tr>)
        })}
           {/* <TableFooter/> */}
       
    </tbody>
</table>

</div>

  )
}

export default TableFilterHeader