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
  getReservation(id: string): Observable<Reservation>{
    return this.http.get<Reservation>(this.apiUrl + "/reservation/" + id)
  }

// Creating a Reservation
  addReservation(reservation: Reservation): Observable<void> {
       return this.http.post<void>(this.apiUrl + "/reservation", reservation)
  }

// Deleting a Reservation
  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservation/" +id)
  }

// Updating a Reservation
  updateReservation(id:string, updatedReservation: Reservation): Observable<void> {
      return this.http.put<void>(this.apiUrl + "/reservation/" +id, updatedReservation)
  }

}
