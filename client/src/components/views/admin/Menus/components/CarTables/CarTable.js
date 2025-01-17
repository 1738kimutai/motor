import React from "react";
import PropTypes from 'prop-types';
import Paginator from 'src/components/common/Paginator';
import { flattenObject, paginationInfo } from 'src/utils';

import Table from 'src/components/common/Table';
import { EntryType } from 'src/constants';

class CarItemsTable extends React.Component {

    render(){
        const { car_items = []} = this.props.data;
        let rows = car_item.map((row)=> flattenObject(row));
        const tableData = {
            columns: [
                { key: 'id', title: 'ID', type: EntryType.NUMBER },
                { key: 'meal.img_url', title: 'Meal Image', type: EntryType.IMAGE },
                { key: 'meal.name', title: 'Meal Name', type: EntryType.TEXT },
                { key: 'quantity', title: 'Quantity', type: EntryType.NUMBER },
                { key: 'car.name', title: 'Car', type: EntryType.TEXT },
                { key: 'created_at', title: 'Created On', type: EntryType.DATE } 
            ],
            rows,
        };
        const pageInfo = paginationInfo(this.props.data);
        const { toggleEdit, toggleDelete } = this.props;
        return(
            <div>
                <Table data ={tableData} onedit={toggleEdit} ondelete={toggleDelete} />
                <Paginator {...this.props} pageInfo={pageInfo} />
            </div>
        );
    }
}

CarItemsTable.propTypes ={
    data: PropTypes.object.isRequired,
}

export default CarItemsTable;