var url = "bd/crud.php";

var appMoviles = new Vue({    
el: "#appMoviles",   
data:{     
     moviles:[],          
     nombres:"",
     apellidos:"",
     email:"",
     telefono:"",
     fecha_registro:""  
 },    
methods:{  
    //BOTONES        
    btnAlta:async function(){                    
        const {value: formValues} = await Swal.fire({
        title: 'NUEVO',
        html:
        '<div class="row"><label class="col-sm-3 col-form-label">Nombres:</label><div class="col-sm-7"><input id="nombres" type="text" class="form-control"></div></div>'+
        '<div class="row"><label class="col-sm-3 col-form-label">Apellidos:</label><div class="col-sm-7"><input id="apellidos" type="text" class="form-control"></div></div>'+
        '<div class="row"><label class="col-sm-3 col-form-label">Email:</label><div class="col-sm-7"><input id="email" type="text" class="form-control"></div></div>'+
        '<div class="row"><label class="col-sm-3 col-form-label">Telefono:</label><div class="col-sm-7"><input id="telefono" type="number" min="0" class="form-control"></div></div>'+
        '<div class="row"><label class="col-sm-3 col-form-label">Fecha Registro:</label><div class="col-sm-7"><input type="datetime-local" id="fecha_registro"  class="form-control" value="<?php echo date("Y-m-d");?></div></div>', 
 
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar',          
        confirmButtonColor:'#1cc88a',          
        cancelButtonColor:'#3085d6',  
        preConfirm: () => {            
            return [
              this.nombres = document.getElementById('nombres').value,
              this.apellidos = document.getElementById('apellidos').value,
              this.email = document.getElementById('email').value,
              this.telefono = document.getElementById('telefono').value, 
              this.fecha_registro=document.getElementById('fecha_registro').value                   
            ]
          }
        })        
        if(this.nombres == "" || this.apellidos == "" || this.email == "" ||this.telefono == 0){
                Swal.fire({
                  type: 'info',
                  title: 'Datos incompletos',                                    
                }) 
        }       
        else{          
          this.altaMovil();          
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              title: '¡Producto Agregado!'
            })                
        }
    },           
    btnEditar:async function(id, nombres, apellidos, email, telefono, fecha_registro, fecha_modificacion){                            
        await Swal.fire({
        title: 'EDITAR',
        html:
        '<div class="form-group">'+
          '<div class="row"><label class="col-sm-3 col-form-label">Nombre:</label><div class="col-sm-7"><input id="nombres" value="'+nombres+'" type="text" class="form-control"></div></div>'+
          '<div class="row"><label class="col-sm-3 col-form-label">Apellido:</label><div class="col-sm-7"><input id="apellidos" value="'+apellidos+'" type="text" class="form-control"></div></div>'+
          '<div class="row"><label class="col-sm-3 col-form-label">Email:</label><div class="col-sm-7"><input id="email" value="'+email+'"  type="text" class="form-control"></div></div>'+
          '<div class="row"><label class="col-sm-3 col-form-label">Telefono:</label><div class="col-sm-7"><input id="telefono" value="'+telefono+'" type="number" min="0" class="form-control"></div></div>'+
          '<div class="row"><label class="col-sm-3 col-form-label">Fecha_modificacion:</label><div class="col-sm-7"><input id="fecha_modificacion" value="'+fecha_modificacion+'"  type="text"  readonly class="form-control"></div></div>'+
        '</div>', 
        focusConfirm: false,
        showCancelButton: true,                         
        }).then((result) => {
          if (result.value) {                                             
            nombres = document.getElementById('nombres').value,
            apellidos = document.getElementById('apellidos').value,
            email = document.getElementById('email').value,
            telefono = document.getElementById('telefono').value                     
            this.editarMovil(id, nombres, apellidos, email, telefono, fecha_registro, fecha_modificacion);
            Swal.fire(
              '¡Actualizado!',
              'El registro ha sido actualizado.',
              'success'
            )                  
          }
        });
        
    },        
    btnBorrar:function(id){        
        Swal.fire({
          title: '¿Está seguro de borrar el registro: '+id+" ?",         
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor:'#d33',
          cancelButtonColor:'#3085d6',
          confirmButtonText: 'Borrar'
        }).then((result) => {
          if (result.value) {            
            this.borrarMovil(id);             
            //y mostramos un msj sobre la eliminación  
            Swal.fire(
              '¡Eliminado!',
              'El registro ha sido borrado.',
              'success'
            )
          }
        })                
    },       
    
    //PROCEDIMIENTOS para el CRUD     
    listarMoviles:function(){
        axios.post(url, {opcion:4}).then(response =>{
           this.moviles = response.data;       
        });
    },    
    //Procedimiento CREAR.
    altaMovil:function(){
        axios.post(url, {opcion:1, nombres:this.nombres, apellidos:this.apellidos, email:this.email, telefono:this.telefono }).then(response =>{
            this.listarMoviles();
        });        
         this.marca = "",
         this.modelo = "",
         this.stock = 0
    },               
    //Procedimiento EDITAR.
    editarMovil:function(id,marca,modelo,stock){       
       axios.post(url, {opcion:2, id:id, nombres:nombres, apellidos:apellidos, email:email,telefono:telefono }).then(response =>{           
           this.listarMoviles();           
        });                              
    },    
    //Procedimiento BORRAR.
    borrarMovil:function(id){
        axios.post(url, {opcion:3, id:id}).then(response =>{           
            this.listarMoviles();
            });
    }             
},      
created: function(){            
   this.listarMoviles();            
},    
computed:{
}    
});