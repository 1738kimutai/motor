import React from 'react';
import PropTypes from 'prop-types';
import { Alert, 
    ButtonDropdown,  
    DropdownToggle,
    DropdownCar,
    DropdownItem
} from 'reactstrap';
import Filter from 'src/components/common/Filter';
import Content from 'src/components/common/Content';
import CarsTable from './components/CarsTable';
import CreateModal from './components/Create';
import EditModal from './components/Edit';
import DeleteModal from './components/Delete';
import CarTypes from './components/CarTypes';
import axios from 'src/axios';
import './styles.css';

import { singleError, paginationInfo } from 'src/utils';

class Cars extends React.Component {

    bubbleBlocked = false;

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            data: {},
            search: '',
            perPage: 5,
            deleteIsOpen: false,
            editIsOpen: false,
            CarTypesIsOpen: false,
            toDelete: {},
            toEdit: {}
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
        const link = `/Car-items?page=${page}&search=${search}&per_page=${perPage}&time=today`;
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

    blockBubbling = () => {
        /** 
         * workaround e.stopPropagation()
         * @see https://github.com/facebook/react/issues/1691
         */
        this.bubbleBlocked = true;
        setTimeout(() => {
            this.bubbleBlocked = false;
        }, 500);

    }

    toggleCarTypes = (e) => {
        this.blockBubbling();
        this.setState({
            ...this.state,
            manageIsOpen: false,
            CarTypesIsOpen: !this.state.CarTypesIsOpen
        });
    }

    toggleManage = (e) => {
        if (this.bubbleBlocked) 
            return;
        this.setState({
            ...this.state,
            manageIsOpen: !this.state.manageIsOpen,
        });
    }
    
    toggleCreate = (e) => {
        this.blockBubbling();
        this.setState({
            ...this.state,
            manageIsOpen: false,
            createIsOpen: !this.state.createIsOpen,
        });
    }

    toggleEdit = (CarItem) => {
        this.setState({
            ...this.state,
            toEdit: CarItem || {},
            editIsOpen: !this.state.editIsOpen
        });
    }

    toggleDelete = (CarItem) => {
        this.setState({
            ...this.state,
            toDelete: CarItem || {},
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
            manageIsOpen,
            CarTypesIsOpen,
        } = this.state;

        const contentTop = (
            <div className="col-12 mb-2 pr-0 pr-sm-2">
                <h5 className="d-inline-block">Today's Car</h5>
                <ButtonDropdown className="float-right" isOpen={manageIsOpen} toggle={this.toggleManage}>
                    <DropdownToggle className="btn-secondary" caret>
                        Manage
                    </DropdownToggle>
                    <DropdownCar>
                        <DropdownItem onClick={this.toggleCarTypes}>Manage Cars</DropdownItem>
                        <DropdownItem onClick={this.toggleCreate}>Add To Car</DropdownItem>
                    </DropdownCar>
                </ButtonDropdown>

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
                        CarItem={toEdit} 
                        onChange={this.fetchCars}
                        isOpen={editIsOpen} 
                        toggle={this.toggleEdit}/>

                    <DeleteModal 
                        {...this.props}
                        CarItem={toDelete} 
                        onChange={this.fetchCars}
                        isOpen={deleteIsOpen} 
                        toggle={this.toggleDelete}/>

                    <CarTypes
                        {...this.props}
                        isOpen={CarTypesIsOpen}
                        toggle={this.toggleCarTypes}/>
            </Content>
        );
    }
}

Cars.propTypes = {
    setLoading: PropTypes.func.isRequired
}

export default Cars;