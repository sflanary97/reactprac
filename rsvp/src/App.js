import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';
import Counter from './Counter';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'name',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'conf',
        isConfirmed: true,
        isEditing: true
      }
    ]
  }


  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange){
          return{
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest
      })
    });

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  removeGuestAt = index =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0,index),
        ...this.state.guests.slice(index+1)
      ]
    })

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt("isEditing", index);

  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange){
          return{
            ...guest,
            name
          };
        }
        return guest
      })
    });

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered});

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
    );

  handleNameInput = e =>
    this.setState({ pendingGuest: e.target.value});

  addGuestHandler = e => {
      e.preventDefault();
      this.setState({
        guests: [
          {
            name: this.state.pendingGuest,
            isConfirmed: false,
            isEditing: false
          },
          ...this.state.guests
        ],
        pendingGuest: ''
      });
    }

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUncomfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form onSubmit = {this.addGuestHandler}>
              <input type="text"
              value={this.state.pendingGuest}
              placeholder="Invite Someone"
              onChange = {this.handleNameInput}
              />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox"
              onChange = {this.toggleFilter}
              checked = {this.state.isFiltered}
              /> Hide those who haven''t responded
            </label>
          </div>
          <Counter
            totalInvited = {totalInvited}
            numberAttending = {numberAttending}
            numberUncomfirmed = {numberUncomfirmed}
          />
          <GuestList
            guests = {this.state.guests}
            toggleConfirmationAt = {this.toggleConfirmationAt}
            toggleEditingAt = {this.toggleEditingAt}
            removeGuestAt = {this.removeGuestAt}
            setNameAt = {this.setNameAt}
            isFiltered = {this.state.isFiltered}
            pendingGuest = {this.state.pendingGuest}
            />
        </div>
      </div>
    );
  }
}

export default App;
