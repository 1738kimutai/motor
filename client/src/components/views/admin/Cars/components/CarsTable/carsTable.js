import React from 'react';
import PropTypes from 'prop-types';
import { paginationInfo } from '../../../../../utils'

import Table from '../../../../../common/Table';
import { EntryType } from '../../../../../constants';

class CarsTable extends React.Component {

    render() {
        const { cars } = this.props.data;
        const tableData = {
            columns: [
                { key: 'id', title: 'ID', type: EntryType.NUMBER },
                { key: 'img_url', title: 'Image', type: EntryType.IMAGE },
                { key: 'name', title: 'Name', type: EntryType.TEXT },
                { key: 'cost', title: 'Cost', type: EntryType.NUMBER },
                { key: 'created_at', title: 'Created On', type: EntryType.DATE }
            ],
            rows: (cars) ? cars : []
        };
        const pageInfo = paginationInfo(this.props.data);
        const { toggleEdit, toggleDelete } = this.props;
        return (
            <div>
                <Table data={tableData} onEdit={toggleEdit} onDelete={toggleDelete} />
                <Paginator {...this.props} pageInfo={pageInfo} />
            </div>
        );
    }
}

CarsTable.propTypes = {
    data: PropTypes.object.isRequired,
}

export default CarsTable;