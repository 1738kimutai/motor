import React from 'react';
import { Alert } from 'reactstrap';
import Filter from 'src/components/common/Filter';
import Content from 'src/components/common/Content';
import OrdersTable from './components/OrdersTable';
import axios from 'src/axios';

import { singleError, paginationInfo } from 'src/utils';

class Orders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            data: {},
            search: '',
            perPage: 5,
        }
    }

    componentWillMount() {
        this.fetchOrders()
    }

    fetchOrders = (config = {}) => {
        let { 
            page = this.state.page, 
            perPage = this.state.perPage,
            search = this.state.search, 
        } = config;
        const link = 
            `/orders?related=car_item&page=${page}&search=${search}&per_page=${perPage}&time=today`;

        this.props.setLoading(true);

        axios.auth();
        axios.get(link, this.state).then(({ data }) => {
            const pageInfo = paginationInfo(data);
            this.setState({
                ...this.state,
                page: pageInfo.currentPage,
                data,
            });
            this.props.setLoading(false);
            if (pageInfo.currentCount === 0 && pageInfo.currentPage !== 1) {
                this.fetchOrders({
                    page: pageInfo.currentPage - 1
                });
            }
        }).catch(({ response }) => {
            this.setState({
                ...this.state,
                error: response,
            })
            this.props.setLoading(false);
        })
    }

    onFilter = (text) => {
        this.setState({
            ...this.state,
            search: text,
        });
        this.fetchOrders({search: text});
    }

    onPageChange = (page) => {
        this.setState({
            ...this.state,
            page,
        });

        this.fetchOrders({
            page: page,
            search: this.state.search
        });
    }

    render() {
        const { 
            data,
            error,
            pageInfo,
        } = this.state;

        const contentTop = (
            <div className="col-12 mb-2 pr-0 pr-sm-2">
                <h5 className="d-inline-block">My Orders</h5>
            </div>
        );

        const contentFilter = (
            <Filter onFilter={this.onFilter} />
        );

        return (
            <Content 
                {...this.props}
                contentFilter={contentFilter}
                contentTop={contentTop}>
                { error && <Alert color="danger"> { singleError(error) }</Alert> }
                     <OrdersTable 
                         data={data}
                         pageInfo={pageInfo}
                         onPrev={this.onPageChange}
                         onToggle={() => {}}
                         onNext={this.onPageChange} />

            </Content>
        );
    }
}

export default Orders;