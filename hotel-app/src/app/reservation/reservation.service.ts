import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl="http://localhost:3001";
  private reservations : Reservation[] =[];


// WE NEED CONSRUCTOR now for injecting the httpClient service for request operations
constructor( private http:HttpClient ){}


// CRUD


// Reading all reservations
  getReservations(): Observable<Reservation[]> {
        return this.http.get<Reservation[]>(this.apiUrl + "/reservations")
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
  }

// Deleting a Reservation
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1); 
  }

// Updating a Reservation
  updateReservation(id:string, updatedReservation: Reservation): void {
    // console.log("Update Reservation ID ",updatedReservation.id);  --undefined(so we need to assign it a value)
    updatedReservation.id = id;    //assigning this ID so that it can be editted multiple times
    
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations[index] = updatedReservation;
  }

}
