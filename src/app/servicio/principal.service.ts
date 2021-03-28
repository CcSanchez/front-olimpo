import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';

const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  obtenerProfesores() {
    return new Promise(async (resolve, reject) => {
      try {
        let data = await this.http.get(`${environment.urlService}/profesores/`, { 'headers': headers }).toPromise();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    })
  }
  obtenerAsignaturas(idProfesor) {
    return new Promise(async (resolve, reject) => {
      try {
        let data = await this.http.get(`${environment.urlService}/asignaturas/${idProfesor}`, { 'headers': headers }).toPromise();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    })
  }
  obtenerEstudiantes(idAsignatura) {
    return new Promise(async (resolve, reject) => {
      try {
        let data = await this.http.get(`${environment.urlService}/estudiantes/${idAsignatura}`, { 'headers': headers }).toPromise();
        console.log(data);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    })
  }

  openSnackBar(message: string, durationInSeconds: number, panelClass: string = "success-class") {
    this._snackBar.open(message, 'X', {
      duration: durationInSeconds * 1000,
      panelClass: [panelClass],
      horizontalPosition: "end",
      verticalPosition: "top",
    });
  }

}
