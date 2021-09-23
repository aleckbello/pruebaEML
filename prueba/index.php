<!doctype html>
<html>
    <head>
    <link rel="shortcut icon" href="#" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Prueba Seleccion</title>   
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="plugins/sweetalert2/sweetalert2.min.css">         
    <link rel="stylesheet" href="main.css">  
    </head>

    <body>
    <header>
        <h2 class="text-center text-dark">PRUEBA SELECCION EML</h2>
    </header>    
    
    <div id="appMoviles">               
        <div class="container">                
            <div class="row">       
                <div class="col">        
                    <button @click="btnAlta" class="btn btn-warning" title="Nuevo">Nuevo</button>
                </div>
            </div>                
            <div class="row mt-5">
                <div class="col-lg-12">                    
                    <table class="table table-striped">
                        <thead>
                            <tr class="bg-primary text-light">
                                <th>ID</th>                                    
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Email</th>
                                <th>Telefono</th>
                                <th>Fecha Registro</th>
                                <th>Fecha Modificacion</th>
                                <th>Acciones</th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr v-for="(movil,indice) of moviles">                                
                                <td>{{movil.id}}</td>                                
                                <td>{{movil.nombres}}</td>
                                <td>{{movil.apellidos}}</td>
                                <td>{{movil.email}}</td>
                                <td>{{movil.telefono}}</td>
                                <td>{{movil.fecha_registro}}</td>
                                <td>{{movil.fecha_modificacion}}</td>                                
                                <td>
                                    <div class="btn-group" role="group">
                                        <button class="btn btn-success" title="Editar" @click="btnEditar(movil.id, movil.nombres, movil.apellidos, movil.email, movil.telefono, movil.fecha_registro, movil.fecha_modificacion)">Actualizar</button>    
                                        <button class="btn btn-danger" title="Eliminar" @click="btnBorrar(movil.id)">Borrar</button>      
								    </div>
                                </td>
                            </tr>    
                        </tbody>
                    </table>                    
                </div>
            </div>
        </div>        
    </div>     
    
    <script src="jquery/jquery-3.3.1.min.js"></script>
    <script src="popper/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>         
      
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>              
         
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>    
          
    <script src="plugins/sweetalert2/sweetalert2.all.min.js"></script>      
              
    <script src="main.js"></script>         
    </body>
</html>