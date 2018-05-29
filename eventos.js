var inicioApp = function(){
	var Aceptar = function(){
		var usuario=$("#txtUsuario").val();
		var clave=$("#txtContra").val();
		var parametros ="opc=validaentrada"+"&usuario="+usuario+"&clave="+clave+"&aleatorio="+Math.random();

		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url:"php/validaentrada.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					//alert("Bienvenido");
					//ocultamos el inicio
					$("#secInicio").hide("slow");
					//Aparecemos usuarios
					$("#frmUsuarios").show("slow");
					//cursor en el primer cuadro de texto
					$("#txtNombreUsuario").focus();
				}else{
					alert("usuario o clave incorrecta(s)");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				
			}
		});
	}
var buscarUsuario=function(){
	var usuario = $("#txtNombreUsuario").val();
	var parametros = "opc=buscarUsuario"+
					 "&usuario="+usuario+
					 "&aleatorio="+Math.random();
	if(usuario != ""){
		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url:"php/buscarUsuario.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					
					$("#txtNombre").val(response.nombre);
					
					$("#txtClaveUsuario").val(response.clave);
				}else{
					$("#txtNombre").focus();
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				
			}
		});
	}
}

	var teclaNombreUsuario = function(tecla){
		if(tecla.wich == 13){
			//Enter
			buscarUsuario();
		}
	}
	var Guardar = function(){
		var usuario=$("#txtNombreUsuario").val();
		var nombre=$("#txtNombre").val();
		var clave=$("#txtClaveUsuario").val();
		if(usuario!="" && nombre!="" && clave!=""){
			$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url:"php/guardarUsuario.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					alert("Datos guardados correctamente");
					$("#frmUsuarios > input").val("");
				}else{
					alert("Ocurrio un problema, intente de nuevo mas tarde");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				
			}
		});
		}else{
			alert("Llene todos los campos");
		}
	}

	var Listado = function(){
		$("main > section").hide("slow");
		$("#frmListado").show("slow");
		var parametros = "opc=listado"+
						 "&aleatorio="+Math.random();
		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url:"php/listado.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					$("#tblListado").append(response.tabla);
				}else{
					alert("Ocurrio un problema, intente de nuevo mas tarde");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				
			}
		});
	}

	$("#btnAceptar").on("click",Aceptar);
	$("#txtNombreUsuario").on("keypress", teclaNombreUsuario);
	$("#btnGuardar").on("click",Guardar);
	$("#btnListado").on("click", Listado);
}


$(document).ready(inicioApp);






