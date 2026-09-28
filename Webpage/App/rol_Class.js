class rol extends Validations {

	constructor(esTest) {
		super();
		this.dom = new dom();
		this.nombreentidad = 'rol';

		if (esTest !== 'test') {
			this.dom.fillform(this.manual_form_creation(), 'IU_form');
		}
	}

	manual_form_creation() {
		return `
		<form id="form_rol" action="http://193.147.87.202/procesaform.php" method="POST" onsubmit="return entidad.ADD_submit_rol();">
			<label class="label_id_rol">id_rol</label>
			<input type="text" id="id_rol" name="id_rol" onblur="return entidad.ADD_id_rol_validation();">
			<span id="error_id_rol"></span>
			<br>

			<label class="label_rol_name">rol_name</label>
			<input type="text" id="rol_name" name="rol_name" onblur="return entidad.ADD_rol_name_validation();">
			<span id="error_rol_name"></span>
			<br>

			<label class="label_rol_description">rol_description</label>
			<textarea id="rol_description" name="rol_description" onblur="return entidad.ADD_rol_description_validation();"></textarea>
			<span id="error_rol_description"></span>
			<br>

			<input id="submit_button" type="submit" value="Submit">
		</form>
		`;
	}

	ADD_id_rol_validation() {
		if (!this.min_size('id_rol', 1)) {
			this.dom.mostrar_error_campo('id_rol', 'id_rol_min_size_ko');
			return "id_rol_min_size_ko";
		}
		if (!this.max_size('id_rol', 11)) {
			this.dom.mostrar_error_campo('id_rol', 'id_rol_max_size_ko');
			return "id_rol_max_size_ko";
		}
		if (!this.format('id_rol', '^[0-9]+$')) {
			this.dom.mostrar_error_campo('id_rol', 'id_rol_format_ko');
			return "id_rol_format_ko";
		}
		this.dom.mostrar_exito_campo('id_rol');
		return true;
	}

	ADD_rol_name_validation() {
		if (!this.min_size('rol_name', 5)) {
			this.dom.mostrar_error_campo('rol_name', 'rol_name_min_size_ko');
			return "rol_name_min_size_ko";
		}
		if (!this.max_size('rol_name', 48)) {
			this.dom.mostrar_error_campo('rol_name', 'rol_name_max_size_ko');
			return "rol_name_max_size_ko";
		}
		// Strict alphabetic without ñ/accents per PDF specs
		if (!this.format('rol_name', '^[a-zA-Z]+$')) {
			this.dom.mostrar_error_campo('rol_name', 'rol_name_format_ko');
			return "rol_name_format_ko";
		}
		this.dom.mostrar_exito_campo('rol_name');
		return true;
	}

	ADD_rol_description_validation() {
		if (!this.min_size('rol_description', 5)) {
			this.dom.mostrar_error_campo('rol_description', 'rol_description_min_size_ko');
			return "rol_description_min_size_ko";
		}
		if (!this.max_size('rol_description', 200)) {
			this.dom.mostrar_error_campo('rol_description', 'rol_description_max_size_ko');
			return "rol_description_max_size_ko";
		}
		if (!this.format('rol_description', '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s\\.,;:\\?!\\-""\'\']+$')) {
			this.dom.mostrar_error_campo('rol_description', 'rol_description_format_ko');
			return "rol_description_format_ko";
		}
		this.dom.mostrar_exito_campo('rol_description');
		return true;
	}

	ADD_submit_rol() {
		let res = {
			id_rol: this.ADD_id_rol_validation(),
			rol_name: this.ADD_rol_name_validation(),
			rol_description: this.ADD_rol_description_validation()
		};
		return Object.values(res).every(v => v === true) ? true : res;
	}

    EDIT_rol_name_validation() { return this.ADD_rol_name_validation;}
    EDIT_rol_descriptions_validation() { return this.ADD_rol_description_validation;}
    
}