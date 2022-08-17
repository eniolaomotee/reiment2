import React from 'react'
import './TableHeader.css';
function TableHeader() {
  return (
         <div className='filter-settings'>
            <div>
                <input type="search" placeholder="Product Name or SKU"/>
            </div>
            <div>
                <input type="search" placeholder="Vendor Name or SKU"/>
            </div>
            <div>
                <select class="form-control" name="" id="">
                    <option value="" disabled selected>On Sale</option>
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
  )
}

export default TableHeader;