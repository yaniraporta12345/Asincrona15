import { Component } from '@angular/core';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent {
  
  // datos = new Array;
  
  // nom = "";
  // ape = "";
  // car = "";
  
  // Agregar(){
  //   if(this.nom!=''){
  //   this.datos.push({'Nombre': this.nom, 'Apellido': this.ape, 'Carrera': this.car});
  //   this.nom = "";
  //   this.ape = "";
  //   this.car = "";
  //   }else{
  //   console.log("Debe ingresar nombre");
  //   }
  //   }

  //   Eliminar(indice:number){
  //     var opcion = confirm('¿Seguro que quieres eliminarlo?');
  //       if (opcion == true) {
  //         this.datos.splice(indice, 1)
  //       }else{
  //         return
  //       }
  //   }
  constructor() { }

ngOnInit(): void {}

  datos: Array<any> = [];
  estudiante: any[] = [];
  nombre: string = "";
  apellido: string = "";
  carrera: string = "";
  model: any;

insertarDatos() {
  let estudiante = {
  nombre: this.nombre,
  apellidos: this.apellido,
  carrera: this.carrera
};

  this.estudiante.push(estudiante);

  this.nombre = "";
  this.apellido = "";
  this.carrera = "";
}

  eliminarEstudiante(index: number) {
      if (confirm("Estás seguro de que deseas eliminar?")) {
        this.estudiante.splice(index, 1);
        let alertSection = document.createElement("section");
        alertSection.innerHTML = "Estudiante eliminado";
        alertSection.style.fontSize = "25px";
        alertSection.style.color = "blue";
        let alertContainer = document.querySelector("#alert-container");
      if(alertContainer){
        alertContainer.appendChild(alertSection);
      }
      setTimeout(() => {
      alertSection.remove();
      },3500);
  }}
}
