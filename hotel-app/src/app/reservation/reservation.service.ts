import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

private reservations : Reservation[] =[];

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
    this.reservations.push(reservation)
  }

// Deleting a Reservation
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1);
  }

// Updating a Reservation
  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id = updatedReservation.id);
    this.reservations[index] = updatedReservation;
  }

}
