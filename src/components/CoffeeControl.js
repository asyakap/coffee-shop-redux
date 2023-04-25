import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CartList from './CartList';
import EditCoffeeForm from './EditCoffeeForm';
import CoffeeDetail from './CoffeeDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      cartList: [],
      selectedCoffee: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleDeletingCoffee = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_COFFEE',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedCoffee: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const { dispatch } = this.props;
    const { id, name, price, weight, origin, roast } = coffeeToEdit;
    const action = {
      type: 'ADD_COFFEE',
      id: id,
      name: name,
      price: price, 
      weight: weight,
      origin: origin, 
      roast: roast,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedCoffee: null
    });
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const { dispatch } = this.props;
    const { id, name, price, weight, origin, roast } = newCoffee;
    const action = {
      type: 'ADD_COFFEE',
      id: id,
      name: name,
      price: price, 
      weight: weight,
      origin: origin, 
      roast: roast,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedCoffee = (id) => {
    let selectedCoffee = this.props.mainCoffeeList[id];
    this.setState({selectedCoffee: selectedCoffee});
  }


  handleBuyClick = (id, cartList) => {
    const { dispatch } = this.props;
    let selectedCoffee = this.props.mainCoffeeList[id];
    selectedCoffee.weight -= 1;
    const action = {
      type: 'BUY_COFFEE',
      id: id,
      name: selectedCoffee.name,
      price: selectedCoffee.price, 
      weight: selectedCoffee.weight,
      origin: selectedCoffee.origin, 
      roast: selectedCoffee.roast,
    }
    dispatch(action);
    this.setState({cartList: this.state.cartList.concat(selectedCoffee)});
  }


  render() {
    let currentlyVisibleState = null;
    let currentlyVisibleState1 = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee} onEditCoffee = {this.handleEditingCoffeeInList} />
      buttonText = "Return to List of Coffees";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail 
      coffee={this.state.selectedCoffee} 
      onClickingDelete={this.handleDeletingCoffee}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>;
      buttonText = "Return to Coffee List"; 
    } else {
      currentlyVisibleState = <CoffeeList 
      coffee={this.state.selectedCoffee} 
      coffeeList={this.props.mainCoffeeList}
      onBuyCoffee = { this.handleBuyClick}
      onCoffeeSelect={this.handleChangingSelectedCoffee}   />;
      buttonText = "Add Coffee"; 
      currentlyVisibleState1 = <CartList
      cartList={this.state.cartList} />;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-block btn-lg btn-dark" onClick={this.handleClick}>{buttonText}</button> 
        {currentlyVisibleState1}
      </React.Fragment>
    );
  }

}

CoffeeControl.propTypes = {
  mainCoffeeList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainCoffeeList: state
  }
}

CoffeeControl = connect(mapStateToProps)(CoffeeControl);

export default CoffeeControl;