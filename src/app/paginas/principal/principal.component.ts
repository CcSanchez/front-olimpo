import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/servicio/principal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  firstFormGroup: FormGroup;
  SecondFormGroup: FormGroup;
  profesores;
  asignaturas;
  estudiantes;
  constructor(
    private principalService: PrincipalService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.obtenerProfesores();
    this.validaciones();
  }
  async obtenerProfesores() {
    try {
      this.profesores = await this.principalService.obtenerProfesores();
    } catch (error) {
      this.principalService.openSnackBar("Error al obtener profesores", 2, "error-class");
    }
  }

  validaciones() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.SecondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  async obtenerAsignaturas(idProfesor) {
    try {
      this.asignaturas = await this.principalService.obtenerAsignaturas(idProfesor);
    } catch (error) {
      this.principalService.openSnackBar("Error al obtener Asignaturas", 2, "error-class");
    }

  }

  async obtenerEstudiantes(idAsignatura) {
    try {
      this.estudiantes = await this.principalService.obtenerEstudiantes(idAsignatura);
    } catch (error) {
      this.principalService.openSnackBar("Error al obtener Asignaturas", 2, "error-class");
    }

  }

}
