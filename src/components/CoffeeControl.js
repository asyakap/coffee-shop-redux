import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CartList from './CartList';
import EditCoffeeForm from './EditCoffeeForm';
import CoffeeDetail from './CoffeeDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
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
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null
    });
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedCoffee = (id) => {
    let selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }


  handleBuyClick = (id, cartList) => {
    let selectedCoffee = this.state.mainCoffeeList.find(coffee => coffee.id === id);
    selectedCoffee.weight -= 1;
    const newMainCoffeeList = this.state.mainCoffeeList.map((coffee) => { return coffee.id === id ? selectedCoffee : coffee});
    this.setState({mainCoffeeList: newMainCoffeeList});
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
      coffeeList={this.state.mainCoffeeList}
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

export default CoffeeControl;