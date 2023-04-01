import React from 'react';
import PropTypes from 'prop-types';
import axios from 'src/axios';
import Modal from 'src/components/common/Modal';
import { Alert, Button, Input } from 'reactstrap';
import { singleError } from 'src/utils';
import { Async } from 'react-select';
import _ from 'lodash';

import 'react-select/dist/react-select.css';
import './styles.css';

class EditModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            quantity: 1,
        };
    }

    reset=()=>{
        setTimeout(()=>{
            this.setState({
                ...this.state,
                success: false,
                error: null
            });
        }, 2000);
    }

    onOpened=()=>{
        this.setState({
            ...this.state,
            error: null,
            success: false,
            cars: [],
            cars: [],
        });

        if(this.props){
            const { carItem ={} } = this.props;
            let defaultValues = {
                car: null,
                car: null,
            }
            if(carItem['car.id']){
                defaultValues.car ={
                    value: carItem['car.id'],
                    label: carItem['car.name']
                }
            }
            if (carItem['car.id']) {
                defaultValues.car = {
                    value: carItem['car.id'], 
                    label: carItem['car.name']
                }
            }


            this.setState({
                ...this.state,
                ...defaultValues,
                quantity: carItem.quantity,
            });
        }
    }

    onChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    fetchCars = (input, callback) => {
        axios.get(`/cars?search=${input}&per_page=5`).then(({ data }) => {
            const cars = data.cars.map((car) => {
                return { value: car.id, label: car.name }
            });
            callback(null, { options: cars });
        }).catch(({ response }) => {
            this.setState({
                ...this.state,
                error: response
            });
            callback(response, null);
        });
    }

    fetchcars = (input, callback)=>{
        axios.get('/cars?search=name:${input}&per_page=5').then(({ data}) =>{
            const cars = data.cars.map((car) => {
                return { value: car.id, label: car.name }
            });
            callback(null, { options: male});
        }).catch(({ response })=>{
            this.setState({
                ...this.state,
                error: response,
            });
            callback(response, null);
        });
    }

    setSelectedcar= (car) =>{
        this.setState({
            ...this.state,
            car
        })
    }

    onEdit = () => {
        this.props.setLoading(true);
        const { Car = {}, car = {} } = this.state;
        const carItem = {
            car_id: car.value ? car.value : '',
            car_id: car.value ? car.value : '',
            quantity: this.state.quantity,
        };

        axios.put(`/car-items/${this.props.carItem.id}`, carItem).then(({ data }) => {
            this.props.onChange();
            this.setState({
                ...this.state,
                success: true,
                error: null,
            });
            this.reset();
            this.props.setLoading(false);
            setTimeout(this.props.toggle, 1000);
        }).catch(({ response }) => {
            this.setState({
                ...this.state,
                error: response,
                success: false,
            });
            this.reset();
            this.props.setLoading(false);
        });
    }

    render(){
        const {isOpen, toggle } = this.props;
        const { error, success, car} = this.state;
        const body =(
            <div>
                {success &&
                  <Alert className="text-center text-small" color="success">
                      Successfully updated.
                  </Alert>
                }
                
                {error &&
                    <Alert className="text-center text-small" color="danger">
                        { singleError(error)}
                    </Alert>
                }
                <div className='pl-4 pr-4'>
                    <label>car Name</label>
                    <Async
                       name="car"
                       value={car}
                       onChange={this.setSelectedcar}
                       loadOptions={_.throttle(this.fetchcars, 500)}
                       filterOptions={(options) =>{ return options;}}
                    />
                    <label className='mt-3'>Select car</label>
                    <Async 
                       name="car"
                       value={car}
                       onChange={this.setSelectedcar}
                       loadOptions={_.throttle(this.fetchcars, 500)}
                       filterOptions={(options)=>{return options;}}
                    />
                    <label className='mt-3'>Quantity</label>
                    <input name="quantity" value={this.state.quantity} onChange={this.onChange} type="text" />
                </div>
            </div>
        );

        const footer = (
            <Button color="primary" className="m-auto" onClick={this.onEdit}>Update Item</Button>
        );
        return(
            <Modal 
               title="Edit car Item"
               body={body}
               footer={footer}
               isOpen={isOpen}
               toggle={toggle}
               onOpened={this.onOpened}
            />
        );
    }
}


EditModal.propTypes = {
    carItem: PropTypes.object,
    toggle: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
}

export default EditModal;