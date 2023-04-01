import React from 'react';
import PropTypes from 'prop-types';
import Paginator from 'src/components/common/Paginator';
import { flattenObject, paginationInfo } from 'src/utils';

import Table from 'src/components/common/Table';
import { EntryType } from 'src/constants';

class OrdersTable extends React.Component {

    render() {
        const { orders = [] } = this.props.data;
        let rows = orders.map(row => flattenObject(row));
        const tableData = {
            columns: [
                { key: 'id', title: 'ID', type: EntryType.NUMBER },
                { key: 'user.email', title: 'User', type: EntryType.TEXT },
                { key: 'car_item.car.name', title: 'Car Name', type: EntryType.TEXT },
                { key: 'car_item.car.name', title: 'Car', type: EntryType.TEXT },
                { key: 'quantity', title: 'Quantity', type: EntryType.NUMBER },
                { key: 'car_item.car.cost', title: 'Cost/Car', type: EntryType.NUMBER },
                { key: 'created_at', title: 'Created On', type: EntryType.DATE },
                { key: 'status', title: 'Toggle', type: EntryType.TOGGLE }
            ],
            rows,
        };
        const { onToggle } = this.props;
        const pageInfo = paginationInfo(this.props.data);
        return (
            <div>
                <Table onToggle={onToggle} data={tableData} />
                <Paginator {...this.props} pageInfo={pageInfo} />
            </div>
        );
    }
}

OrdersTable.propTypes = {
    data: PropTypes.object,
    onToggle: PropTypes.func.isRequired,
}

export default OrdersTable;