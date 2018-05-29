<?php
/*
aqui va todo lo de borrar usuario
solo que le cambiamos function listado(){}
en la consulta select * from usuarios order by nombre
le cambiamos en resConsulta = mysqli_query($con,$consulta);
tabla="";
if (msqli_num_rows($resConsulta)>0){
	$respuesta = true;
	$tabla.="<thead>";
	$tabla.="<tr>";
	$tabla.="<th>No.</th><th>Usuario</th><th>Nombre</th>";
	$tabla.="</tr>";
	$tabla.="</thead>";
	$tabla.="<tbody>";
	    //registros de la tabla
		while($registro=mysqli_fetch_array($resConsulta)){
			$cuenta = $cuenta+1;
			$tabla.="<tr>"
			$tabla.="<td>".$cuenta."</td>"
			$tabla.="<td>".$registro["usuario"]."</td>"
			$tabla.="<td>".$registro["nombre"]."</td>"
			$tabla.="</tr>"
		}
	$tabla.="</tbody>";
}
aqui va $salida JSON
cambia el array ('respuesta'=> $respuesta,
				 'tabla'.   => $tabla);
aqui va print json_encode
en el switch case 'listado'
*/

?>
