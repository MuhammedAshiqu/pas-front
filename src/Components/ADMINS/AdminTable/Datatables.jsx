import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Name',
    selector: 'Name',
    sortable: true,
  },
  {
    name: 'Category',
    selector: 'Category',
    sortable: true,
  },
  {
    name: 'Price',
    selector: 'Price',
    sortable: true,
  },
  {
    name: 'Description',
    selector: 'Description',
  },
  {
    name: 'CreatedBy',
    selector: 'CreatedBy',
  },
];

function Datatable({items}) {
   const spreaderd= JSON.stringify(items)
    console.log('items are',spreaderd);
  return (
    <div className="App">
      <DataTable
        title="ALL PRODUCTS"
        columns={columns}
        data={items}
        pagination
        highlightOnHover/>
        
    </div>
  );
}

export default Datatable;