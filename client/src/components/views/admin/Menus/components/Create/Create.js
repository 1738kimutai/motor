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

class CreateModal extends React.Component {

    state = {
        quantity: 1,
    }

    reset = () => {
        this.setState({
            ...this.state,
            car: '',
            car: '',
        });
        setTimeout(() => {
            this.setState({
                ...this.state,
                success: false,
                error: null
            });
        }, 2000);
    }

    onOpened = () => {
        this.setState({
            ...this.state,
            error: null,
            success: false,
            cars: [],
            cars: [],
        })
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

    fetchCars = (input, callback) => {
        axios.get(`/cars?search=name:${input}&per_page=5`).then(({ data }) => {
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

    setSelectedCar = (car) => {
        this.setState({
            ...this.state,
            car
        });
    }

    setSelectedcar = (car) => {
        this.setState({
            ...this.state,
            car
        })
    }

    onCreate = () => {
        this.props.setLoading(true);

        const { Car = {}, car = {} } = this.state;
        console.log(car);
        const carItem = {
            car_id: car.value ? car.value : '',
            car_id: car.value ? car.value : '',
            quantity: this.state.quantity,
        };

        axios.post('/car-items', carItem).then(({ data }) => {
            this.props.onChange();
            this.setState({
                ...this.state,
                success: true,
                error: null,
            });
            this.reset();
            this.props.setLoading(false);
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

    render() {
        const { error, success, } = this.state;
        const body = (
            <div>
                {success &&
                    <Alert className="text-center text-small" color="success">
                        Successfully added
                    </Alert>
                }
                {error &&
                    <Alert className="text-center text-small" color="danger">
                        { singleError(error) }
                    </Alert>
                }
                <div className="pl-4 pr-4">
                    <label> car Name </label>
                    <Async 
                        name="car"
                        value={this.state.car}
                        onChange={this.setSelectedcar}
                        loadOptions={_.throttle(this.fetchcars, 500)}
                        fitlerOptions={(options) => { return options; }}
                    />
                    <label className="mt-3"> Select car </label>
                    <Async 
                        name="car"
                        value={this.state.car}
                        onChange={this.setSelectedcar}
                        loadOptions={_.throttle(this.fetchcars, 500)}
                        fitlerOptions={(options) => { return options; }}
                    />
                    <label className="mt-3">Quantity</label>
                    <Input name="quantity" value={this.state.quantity} onChange={this.onChange} type="text" />
                </div>
            </div>
        );

        const footer = (
            <Button color="primary" className="m-auto"onClick={this.onCreate}>Save Item</Button>
        )
        const { isOpen, toggle } = this.props;
        return (
            <Modal 
                title="Add car To car" 
                body={body} 
                footer={footer} 
                isOpen={isOpen}
                toggle={toggle}
                onOpened={this.onOpened}
            />
        );
    }
}

CreateModal.propTypes = {
    setLoading: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
}

export default CreateModal;