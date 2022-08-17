import React from 'react'
// import TableHeader from './TableHeader'
import MainTable from './MainTable'
import './Main.css';
import TableFilterHeader from './TableFilterHeader';
function Main() {
  return (
    <div className='Main'>
            <div className='Main-header'>
                <p className='active'>Main Tab</p>
                <p>Archieved</p>
            </div>
         <MainTable/>
         <div className='spacer'></div>
         <TableFilterHeader/>
    </div>
  )
}

export default Main