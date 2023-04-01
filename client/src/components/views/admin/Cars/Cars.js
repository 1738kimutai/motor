import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import Filter from '../../../common/Filter/Filter';s
import CarsTable from './components/CarsTable/carsTable';
import CreateModal from './components/Create';
import EditModal from './components/Edit';
import DeleteModal from './components/Delete';
import axios from 'axios';

import { singleError, paginationInfo } from '../../../utils'

class Cars extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            data: {},
            search: '',
            toEdit: {},
            toDelete: {},
            perPage: 5,
            editIsOpen: false,
            createIsOpen: false,
            deleteIsOpen: false,
        }
    }

    componentWillMount() {
        this.fetchCars()
    }

    fetchCars = (config = {}) => {
        let { 
            page = this.state.page, 
            perPage = this.state.perPage,
            search = this.state.search, 
        } = config;
        search = (search) ? `name:${search}` : '';
        const link = `/cars?page=${page}&search=${search}&per_page=${perPage}`;

        this.setState({
            ...this.state,
        });
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

            // if we have an empty page and there's data in the previous
            // page...
            if (pageInfo.currentCount === 0 && pageInfo.currentPage !== 1) {
                this.fetchCars({
                    page: pageInfo.currentPage - 1
                })
            }

        }).catch(({ response }) => {
            this.setState({
                ...this.state,
                error: response,
            })
            this.props.setLoading(false);
        })
    }

    toggleCreate = (e) => {
        this.setState({
            ...this.state,
            createIsOpen: !this.state.createIsOpen
        });
    }

    toggleEdit = (meal) => {
        this.setState({
            ...this.state,
            toEdit: meal || {},
            editIsOpen: !this.state.editIsOpen
        });
    }


    toggleDelete = (meal) => {
        this.setState({
            ...this.state,
            toDelete: meal || {},
            deleteIsOpen: !this.state.deleteIsOpen
        });
    }


    onFilter = (text) => {
        this.setState({
            ...this.state,
            search: text,
        });
        this.fetchCars({search: text});
    }

    onPageChange = (page) => {
        this.setState({
            ...this.state,
            page,
        });

        this.fetchCars({
            page: page,
            search: this.state.search
        });
    }

    render() {
        const { 
            data,
            error,
            pageInfo,
            toEdit,
            editIsOpen,
            createIsOpen,
            toDelete,
            deleteIsOpen,
        } = this.state;


        const contentTop = (
            <div className="col-12 mb-2 pr-0 pr-sm-2">
                <h5 className="d-inline-block">Manage Cars</h5>
                <button onClick={this.toggleCreate} className="btn btn-secondary float-right">
                    Add New
                </button>
            </div>
        );

        const contentFilter = (
            <Filter onFilter={this.onFilter} />
        );

        return (
            <Content 
                {...this.props}
                contentTop={contentTop} 
                contentFilter={contentFilter}>
            
                { error && <Alert color="danger"> { singleError(error) }</Alert> }
                     <CarsTable 
                         data={data}
                         pageInfo={pageInfo}
                         onPrev={this.onPageChange}
                         onNext={this.onPageChange}
                         toggleEdit={this.toggleEdit} 
                         toggleDelete={this.toggleDelete} />
                    <CreateModal 
                        {...this.props}
                        onChange={this.fetchCars}
                        isOpen={createIsOpen} 
                        toggle={this.toggleCreate} />

                    <EditModal 
                        {...this.props}
                        meal={toEdit} 
                        onChange={this.fetchCars}
                        isOpen={editIsOpen} 
                        toggle={this.toggleEdit}/>

                    <DeleteModal 
                        {...this.props}
                        meal={toDelete} 
                        onChange={this.fetchCars}
                        isOpen={deleteIsOpen} 
                        toggle={this.toggleDelete}/>
            </Content>
        );
    }
}

Cars.propTypes = {
    setLoading: PropTypes.func.isRequired,
};

export default Cars;