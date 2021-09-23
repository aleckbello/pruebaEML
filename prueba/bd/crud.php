<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$nombres = (isset($_POST['nombres'])) ? $_POST['nombres'] : '';
$apellidos = (isset($_POST['apellidos'])) ? $_POST['apellidos'] : '';
$email = (isset($_POST['email'])) ? $_POST['email'] : '';
$telefono = (isset($_POST['telefono'])) ? $_POST['telefono'] : '';
$fecha_registro = (isset($_POST['fecha_registro'])) ? $_POST['fecha_registro'] : '';
$fecha_modificacion = (isset($_POST['fecha_modificacion'])) ? $_POST['fecha_modificacion'] : '';

switch($opcion){
    case 1:
        $consulta = "INSERT INTO usuarios (nombres, apellidos, email, telefono) VALUES('$nombres', '$apellidos', '$email', '$telefono');";	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                
        break;
    case 2:
        $consulta = "UPDATE usuarios SET nombres='$nombres', apellidos='$apellidos', email='$email', telefono='$telefono' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;        
    case 3:
        $consulta = "DELETE FROM usuarios WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;         
    case 4:
        $consulta = "SELECT id, nombres, apellidos, email, telefono,fecha_registro,fecha_modificacion FROM usuarios ORDER BY nombres ASC";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}
print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = NULL;
?>
