function menu_work(){
    if (document.getElementById('IU_nav').style.display == 'none'){
	         document.getElementById('IU_nav').style.display = 'block';
	    }
    else{
	      	 document.getElementById('IU_nav').style.display = 'none';
		}
	}

var entidad = null;

/**
 * Instancia la clase seleccionada y dibuja su formulario en #IU_form
 * @param {string} nombreEntidad - Nombre de la clase a cargar
 */
function cargarEntidad(nombreEntidad) {
    switch (nombreEntidad) {
        case 'persona':
            entidad = new persona();
            break;
        case 'usuario':
            entidad = new usuario();
            break;
        case 'rol':
            entidad = new rol();
            break;
        case 'accion':
            entidad = new accion();
            break;
        case 'funcionalidad':
            entidad = new funcionalidad();
            break;
        default:
            console.error(`Entidad no reconocida: ${nombreEntidad}`);
            break;
    }
}

// Cargar la entidad 'persona' por defecto al abrir la página
window.addEventListener('DOMContentLoaded', () => {
    cargarEntidad('persona');
});