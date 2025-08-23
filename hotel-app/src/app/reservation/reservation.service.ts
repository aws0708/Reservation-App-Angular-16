import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

private reservations : Reservation[] =[];

constructor(){
  // service's constructor is the best place, where we can get our saved data from localStorage, even before the component is initialized
  let savedReservations = localStorage.getItem("reservations");
  this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
}

// CRUD

// Reading all reservations
  getReservations(): Reservation[] {
    return this.reservations;
  }

// Reading individual reservation
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id)
  }

// Creating a Reservation
  addReservation(reservation: Reservation): void {
    // creating unique ID  -- this will be further used for routing and updating --[routerLink]="['/edit',reservation.id]"
    reservation.id=Date.now().toString();

    this.reservations.push(reservation);
    localStorage.setItem("reservations",JSON.stringify(this.reservations))    
  }

// Deleting a Reservation
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1);
    localStorage.setItem("reservations",JSON.stringify(this.reservations))    
  }

// Updating a Reservation
  updateReservation(id:string, updatedReservation: Reservation): void {
    // console.log("Update Reservation ID ",updatedReservation.id);  --undefined
    updatedReservation.id = id;
    
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations[index] = updatedReservation;
    localStorage.setItem("reservations",JSON.stringify(this.reservations))    
  }

}
