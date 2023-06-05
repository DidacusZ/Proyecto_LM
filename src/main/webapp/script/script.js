class Paciente{	
	constructor(nombre,telefonoDuenio,fechaAlta,fechaSalida){		
		this.nombre=nombre;
		this.telefonoDuenio=telefonoDuenio;
		this.fechaAlta=fechaAlta;
		this.fechaSalida=fechaSalida;		
	}	
}
	
function MostrarListado(){	
	
	var objP;	
	
	id = localStorage.getItem("id");//accede al espacio en memoria para esa opcion (string)
	nId = parseInt(id);//lo pasamos a int

	for(let i=1;i<=nId;i++)
	{		
		
		objP=JSON.parse(localStorage.getItem(i));
		
		if(localStorage.getItem(i)!=null){
			
			document.write(" Paciente id = "+i);
			document.write("<br> Nombre: "+objP.nombre);
			document.write("<br> Telefono: "+objP.telefonoDuenio);
			document.write("<br> Fecha de alta: "+objP.fechaAlta);
			document.write("<br> Fecha de salida: "+objP.fechaSalida+"<br><br>");			
		}
	}
	
	//boton en la esquina derecha
	document.write("<a style='position: absolute;  top: 10px; right: 10px;' href='formularioIngreso.html'><button>Nuevo ingreso</button></a>");	
}

function GuardarDatos(form){
	
	let nombre = form.nombre.value;
	let telefono = form.telefono.value;
	let fechaAlta = form.fechaAlta.value;
	let fechaSalida = form.fechaSalida.value;
	
	var objPaciente = new Paciente(nombre,telefono,fechaAlta,fechaSalida);
	
	var id = CalculoId()
	//guardamos objeto
	localStorage.setItem(id, JSON.stringify(objPaciente));

	window.open("index.html");	
}


function BuscarPaciente(form){
	
		let telefono = form.telefono.value;
		
		id = localStorage.getItem("id");//accede al espacio en memoria para esa opcion (string)
		nId = parseInt(id);//lo pasamos a int
	
		for(let i=1;i<=nId;i++)
		{		
			
			//objP=JSON.parse(localStorage.getItem(i));
			
			//if(objP.telefonoDuenio==telefono){				
				
			//}
		}
		
		
		Prueba();
		
}

function CalculoId(){
	
	var id;
	
	if(localStorage.getItem("id")==null)	
		id = localStorage.setItem("id",0);
		
	id = localStorage.getItem("id");//accede al espacio en memoria para esa opcion (string)
	numero = parseInt(id);//lo pasamos a int
	numero = numero + 1;//lo incrementamos en 1
	localStorage.setItem("id", numero);// lo guardamos en su espacio en memoria correspondiente	

console.log(id)
	return id;		
}


function Prueba(){
// Crea un nuevo elemento <p>
var nuevoParrafo = document.createElement("p");

// Crea un nodo de texto con el contenido que deseas imprimir

var contenido = document.createTextNode(
	"Hola, mundo "+" cccccccccccccccccccHola, mundo"+"Hola, mundo"	
	);

// Añade el nodo de texto al elemento <p>
nuevoParrafo.appendChild(contenido);

// Busca un elemento existente en el DOM donde deseas agregar el nuevo contenido
var contenedor = document.getElementById("miContenedor");

// Agrega el nuevo elemento <p> al contenedor existente
contenedor.appendChild(nuevoParrafo);

}



