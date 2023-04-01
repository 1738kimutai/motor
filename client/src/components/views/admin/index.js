import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import Cars from './Cars/Cars';
import Orders from '../user/Orders';
import Users from './Users';
import OrdersHistory from './OrdersHistory/OrderHistory';
import CarModal from '../../common/MenuModal/MenuModal';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { authenticated } from '../../utils';
import { Role } from '../../constants';

class Admin extends React.Component {

    state = {
        loading: false
    }

    setLoading = (loading) => {
        this.setState({
            ...this.state,
            loading,
        });
    }

    toggleCar = () => {
        this.setState({
            ...this.state,
            CarIsOpen: !this.state.CarIsOpen
        });
    }

    render() {
        const { loading, CarIsOpen } = this.state;
        const user = authenticated();
        if (! user) {
            return <Redirect to="/login" />;
        }

        if (user.role === Role.USER) {
            return <Redirect to="/user/Cars" />;
        }

        const Car =  (
            <div>
                <NavLink onClick={this.toggleCar} 
                    className="btn" to="/admin/meals" activeClassName="active">Manage Orders</NavLink>
                <NavLink onClick={this.toggleCar} 
                    className="btn" to="/admin/Cars">Set Car</NavLink>
                <NavLink onClick={this.toggleCar} 
                    className="btn" to="/admin/orders">Manage Orders</NavLink>
                <NavLink onClick={this.toggleCar} 
                    className="btn" to="/admin/users">Users</NavLink>
                <NavLink onClick={this.toggleCar} 
                    className="btn" to="/admin/orders-history">Order History</NavLink>
            </div>
        );
        return (
            <main className="container-fluid">
                <Loading show={loading} color="orange" showSpinner={true}/>
                <section className="row">
                    <CarModal
                        {...this.props}
                        body={Car}
                        isOpen={CarIsOpen}
                        toggle={this.toggleCar}
                    />
                    <Sidebar {...this.props}>
                        <NavLink className="btn" to="/admin/meals" activeClassName="active">Manage Orders</NavLink>
                        <NavLink className="btn" to="/admin/Cars">Set Car</NavLink>
                        <NavLink className="btn" to="/admin/orders">Manage Orders</NavLink>
                        <NavLink className="btn" to="/admin/users">Users</NavLink>
                        <NavLink className="btn" to="/admin/orders-history">Order History</NavLink>
                    </Sidebar>
                    <Router>
                        <Switch>
                            <Route 
                                exact 
                                path="/admin/Cars" 
                                render={() => <Meals toggleCar={this.toggleCar} setLoading={this.setLoading} /> } />
                                    
                            <Route 
                                exact 
                                path="/admin/Cars" 
                                render={() => <Cars toggleCar={this.toggleCar} setLoading={this.setLoading} /> } />

                            <Route 
                                exact 
                                path="/admin/orders" 
                                render={() => <Orders toggleCar={this.toggleCar} setLoading={this.setLoading} /> } />

                            <Route 
                                exact 
                                path="/admin/users" 
                                render={() => <Users toggleCar={this.toggleCar} {...this.props} setLoading={this.setLoading} /> } />

                            <Route 
                                exact 
                                path="/admin/orders-history" 
                                render={() => <OrdersHistory toggleCar={this.toggleCar} setLoading={this.setLoading} /> } />
                        </Switch>
                    </Router>
                 </section>
             </main>
        );
    }
}

export default Admin;