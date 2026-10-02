
const esquemasET1 = {
  // 1. PERSONA
  persona: {
    entidad: "persona",
    campos: [
      {
        campo: "dni",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "dni_min_size_KO", desc: "cumple tamaño minimo dni", msgError: "DNI demasiado corto (min 9)", valorInvalido: { "dni": "1234" }, valorValido: { "dni": "12345678Z" } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "dni_max_size_KO", desc: "cumple tamaño maximo dni", msgError: "DNI demasiado largo (max 9)", valorInvalido: { "dni": "1234567890" }, valorValido: { "dni": "12345678Z" } },
          { tipo: "format", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "dni_format_KO", desc: "cumple formato dni", msgError: "Formato DNI inválido", valorInvalido: { "dni": "12345678A" }, valorValido: { "dni": "12345678Z" } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto dni", msgExito: "DNI correcto", valorValido: { "dni": "80423097D" } }
      },
      {
        campo: "nombre_persona",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "nombre_persona_min_size_KO", desc: "cumple tamaño minimo nombre_persona", msgError: "Nombre muy corto (min 2)", valorInvalido: { "nombre_persona": "A" }, valorValido: { "nombre_persona": "Iñaqui" } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "nombre_persona_max_size_KO", desc: "cumple tamaño maximo nombre_persona", msgError: "Nombre muy largo (max 45)", valorInvalido: { "nombre_persona": "A".repeat(46) }, valorValido: { "nombre_persona": "María-José" } },
          { tipo: "format", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "nombre_persona_format_KO", desc: "cumple formato nombre con ñ y acentos", msgError: "Formato de nombre inválido", valorInvalido: { "nombre_persona": "Juan123" }, valorValido: { "nombre_persona": "Begoña" } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto nombre_persona", msgExito: "Nombre correcto", valorValido: { "nombre_persona": "Ángela M.ª" } }
      },
      {
        campo: "apellidos_persona",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "apellidos_persona_min_size_KO", desc: "cumple tamaño minimo apellidos_persona", msgError: "Apellidos muy cortos (min 3)", valorInvalido: { "apellidos_persona": "Oz" }, valorValido: { "apellidos_persona": "Pérez" } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "apellidos_persona_max_size_KO", desc: "cumple tamaño maximo apellidos_persona", msgError: "Apellidos muy largos (max 100)", valorInvalido: { "apellidos_persona": "A".repeat(101) }, valorValido: { "apellidos_persona": "Gómez-Núñez" } },
          { tipo: "format", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "apellidos_persona_format_KO", desc: "cumple formato apellidos", msgError: "Formato de apellidos inválido", valorInvalido: { "apellidos_persona": "Pérez_123" }, valorValido: { "apellidos_persona": "D'Arcy-Martínez Jr." } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto apellidos_persona", msgExito: "Apellidos correctos", valorValido: { "apellidos_persona": "Núñez Rodríguez" } }
      },
      {
        campo: "fechaNacimiento_persona",
        elemento: "input",
        reglas: [
          { tipo: "format", acciones: ["ADD", "EDIT"], codigoKO: "fechaNacimiento_persona_format_KO", desc: "cumple formato fecha dd/mm/aaaa", msgError: "Formato fecha inválido", valorInvalido: { "fechaNacimiento_persona": "2026-09-23" }, valorValido: { "fechaNacimiento_persona": "15/08/2000" } }
        ],
        testExito: { acciones: ["ADD", "EDIT"], desc: "es correcto fechaNacimiento_persona", msgExito: "Fecha correcta", valorValido: { "fechaNacimiento_persona": "20/11/1998" } }
      },
      {
        campo: "direccion_persona",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "direccion_persona_min_size_KO", desc: "cumple tamaño minimo direccion_persona", msgError: "Dirección muy corta (min 10)", valorInvalido: { "direccion_persona": "C/ Mayor" }, valorValido: { "direccion_persona": "Av. España, 12; 3ºB" } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "direccion_persona_max_size_KO", desc: "cumple tamaño maximo direccion_persona", msgError: "Dirección muy larga (max 200)", valorInvalido: { "direccion_persona": "D".repeat(201) }, valorValido: { "direccion_persona": "C/ Begoña n.º 4 / 2ºA" } },
          { tipo: "format", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "direccion_persona_format_KO", desc: "cumple formato direccion", msgError: "Formato dirección inválido", valorInvalido: { "direccion_persona": "C/ Mayor @ #" }, valorValido: { "direccion_persona": "C/ Pi y Margall, 45; 1º - Pza. España / Rúa Begoña" } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto direccion_persona", msgExito: "Dirección correcta", valorValido: { "direccion_persona": "Rúa das Aflitas, 12; 4ºA / Vigo" } }
      },
      {
        campo: "telefono_persona",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "telefono_persona_min_size_KO", desc: "cumple tamaño minimo telefono_persona", msgError: "Teléfono muy corto (min 9)", valorInvalido: { "telefono_persona": "6001122" }, valorValido: { "telefono_persona": "986123456" } },
          { tipo: "format", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "telefono_persona_format_KO", desc: "cumple formato telefono valido", msgError: "Formato teléfono inválido", valorInvalido: { "telefono_persona": "98612345A" }, valorValido: { "telefono_persona": "612345678" } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto telefono_persona", msgExito: "Teléfono correcto", valorValido: { "telefono_persona": "988112233" } }
      },
      {
        campo: "email_persona",
        elemento: "input",
        reglas: [
          { tipo: "format", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "email_persona_format_KO", desc: "cumple formato email valido", msgError: "Formato email inválido", valorInvalido: { "email_persona": "correo_invalido.com" }, valorValido: { "email_persona": "usuario@uvigo.es" } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto email_persona", msgExito: "Email correcto", valorValido: { "email_persona": "alumno.proyectos@esei.uvigo.gal" } }
      },
      {
        campo: "foto_persona",
        elemento: "file",
        reglas: [
          { tipo: "exist_file", acciones: ["ADD"], codigoKO: "foto_persona_exist_file_KO", desc: "existe fichero foto_persona", msgError: "Debe seleccionar un fichero jpg o jpeg", valorInvalido: {}, valorValido: { "foto_persona": "foto.jpg" } },
          { tipo: "format_name_file", acciones: ["ADD", "EDIT"], codigoKO: "foto_persona_format_name_file_KO", desc: "cumple formato nombre foto_persona", msgError: "Nombre de archivo de foto inválido", valorInvalido: { "foto_persona": "foto*.jpg" }, valorValido: { "foto_persona": "miFoto.jpg" } }
        ],
        testExito: { acciones: ["ADD", "EDIT"], desc: "es correcto foto_persona", msgExito: "Foto correcta", valorValido: { "foto_persona": "perfil.jpg" } }
      }
    ]
  },

  // 2. USUARIO
  usuario: {
    entidad: "usuario",
    campos: [
      {
        campo: "dni",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "dni_min_size_KO", desc: "cumple tamaño minimo dni", msgError: "DNI demasiado corto (min 9)", valorInvalido: { "dni": "1234" }, valorValido: { "dni": "12345678Z" } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "dni_max_size_KO", desc: "cumple tamaño maximo dni", msgError: "DNI demasiado largo (max 9)", valorInvalido: { "dni": "1234567890" }, valorValido: { "dni": "12345678Z" } },
          { tipo: "format", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "dni_format_KO", desc: "cumple formato dni", msgError: "Formato DNI inválido", valorInvalido: { "dni": "12345678A" }, valorValido: { "dni": "12345678Z" } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto dni", msgExito: "DNI correcto", valorValido: { "dni": "80423097D" } }
      },
      {
        campo: "usuario",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "usuario_min_size_KO", desc: "cumple tamaño minimo usuario", msgError: "Usuario muy corto (min 5)", valorInvalido: { "usuario": "user" }, valorValido: { "usuario": "adminuser" } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "usuario_max_size_KO", desc: "cumple tamaño maximo usuario", msgError: "Usuario muy largo (max 45)", valorInvalido: { "usuario": "u".repeat(46) }, valorValido: { "usuario": "adminuser" } },
          { tipo: "format", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "usuario_format_KO", desc: "cumple formato usuario sin ñ ni acentos", msgError: "Formato inválido (solo caracteres alfabéticos sin ñ ni acentos)", valorInvalido: { "usuario": "niño_user" }, valorValido: { "usuario": "adminuser" } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto usuario", msgExito: "Usuario correcto", valorValido: { "usuario": "johndoe" } }
      },
      {
        campo: "contrasena",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "contrasena_min_size_KO", desc: "cumple tamaño minimo contrasena", msgError: "Contraseña muy corta (min 8)", valorInvalido: { "contrasena": "pass" }, valorValido: { "contrasena": "password123" } },
          { tipo: "max_size", acciones: ["ADD", "EDIT"], codigoKO: "contrasena_max_size_KO", desc: "cumple tamaño maximo contrasena", msgError: "Contraseña muy larga (max 45)", valorInvalido: { "contrasena": "p".repeat(46) }, valorValido: { "contrasena": "password123" } },
          { tipo: "format", acciones: ["ADD", "EDIT"], codigoKO: "contrasena_format_KO", desc: "cumple formato contrasena sin ñ ni acentos", msgError: "Formato inválido (sin ñ ni acentos)", valorInvalido: { "contrasena": "contraseña12" }, valorValido: { "contrasena": "secretPass123" } }
        ],
        testExito: { acciones: ["ADD", "EDIT"], desc: "es correcto contrasena", msgExito: "Contraseña correcta", valorValido: { "contrasena": "securePass2026" } }
      },
      {
        campo: "id_rol",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "id_rol_min_size_KO", desc: "cumple tamaño numerico minimo id_rol", msgError: "Mínimo 1", valorInvalido: { "id_rol": 0 }, valorValido: { "id_rol": 1 } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "id_rol_max_size_KO", desc: "cumple tamaño numerico maximo id_rol", msgError: "Máximo 11", valorInvalido: { "id_rol": 12 }, valorValido: { "id_rol": 10 } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto id_rol", msgExito: "ID rol correcto", valorValido: { "id_rol": 5 } }
      }
    ]
  },

  // 3. ROL
  rol: {
    entidad: "rol",
    campos: [
      {
        campo: "id_rol",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "id_rol_min_size_KO", desc: "cumple tamaño numerico minimo id_rol", msgError: "Mínimo 1", valorInvalido: { "id_rol": 0 }, valorValido: { "id_rol": 1 } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO:    "id_rol_max_size_KO", desc: "cumple tamaño numerico maximo id_rol", msgError: "Máximo 11", valorInvalido: { "id_rol": 12 }, valorValido: { "id_rol": 10 } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto id_rol", msgExito: "ID rol correcto", valorValido: { "id_rol": 5 } }
      },
      {
        campo: "rol_name",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "rol_name_min_size_KO", desc: "cumple tamaño minimo rol_name", msgError: "Nombre muy corto (min 5)", valorInvalido: { "rol_name": "rol" }, valorValido: { "rol_name": "Admin" } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "rol_name_max_size_KO", desc: "cumple tamaño maximo rol_name", msgError: "Nombre muy largo (max 48)", valorInvalido: { "rol_name": "r".repeat(49) }, valorValido: { "rol_name": "Administrator" } },
          { tipo: "format", acciones: ["ADD", "EDIT"], codigoKO: "rol_name_format_KO", desc: "cumple formato alfabetico", msgError: "Formato inválido", valorInvalido: { "rol_name": "Admin123" }, valorValido: { "rol_name": "Manager" } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto rol_name", msgExito: "Rol name correcto", valorValido: { "rol_name": "Supervisor" } }
      },
      {
        campo: "rol_description",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "rol_description_min_size_KO", desc: "cumple tamaño minimo rol_description", msgError: "Descripción muy corta (min 5)", valorInvalido: { "rol_description": "desc" }, valorValido: { "rol_description": "Rol de administración" } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "rol_description_max_size_KO", desc: "cumple tamaño maximo rol_description", msgError: "Descripción muy larga (max 200)", valorInvalido: { "rol_description": "d".repeat(201) }, valorValido: { "rol_description": "Acceso total a la gestión del sistema." } },
          { tipo: "format", acciones: ["ADD", "EDIT"], codigoKO: "rol_description_format_KO", desc: "cumple formato alfabetico con ñ, espacio y puntuacion", msgError: "Formato inválido", valorInvalido: { "rol_description": "Rol_123_invalid" }, valorValido: { "rol_description": "Gestión de usuarios y contraseñas." } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto rol_description", msgExito: "Descripción correcta", valorValido: { "rol_description": "Permisos de edición y consulta." } }
      }
    ]
  },

  // 4. ACCION
  accion: {
    entidad: "accion",
    campos: [
      {
        campo: "id_accion",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "id_accion_min_size_KO", desc: "cumple tamaño numerico minimo id_accion", msgError: "Mínimo 1", valorInvalido: { "id_accion": 0 }, valorValido: { "id_accion": 1 } },
          { tipo: "max_size", acciones: ["ADD", "EDIT"], codigoKO: "id_accion_max_size_KO", desc: "cumple tamaño numerico maximo id_accion", msgError: "Máximo 11", valorInvalido: { "id_accion": 12 }, valorValido: { "id_accion": 11 } }
        ],
        testExito: { acciones: ["ADD", "EDIT"], desc: "es correcto id_accion", msgExito: "ID acción correcto", valorValido: { "id_accion": 3 } }
      },
      {
        campo: "nombre_accion",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "nombre_accion_min_size_KO", desc: "cumple tamaño minimo nombre_accion", msgError: "Nombre muy corto (min 5)", valorInvalido: { "nombre_accion": "act" }, valorValido: { "nombre_accion": "Añadir" } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "nombre_accion_max_size_KO", desc: "cumple tamaño maximo nombre_accion", msgError: "Nombre muy largo (max 48)", valorInvalido: { "nombre_accion": "a".repeat(49) }, valorValido: { "nombre_accion": "Modificación" } },
          { tipo: "format", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "nombre_accion_format_KO", desc: "cumple formato alfabetico con ñ", msgError: "Formato inválido", valorInvalido: { "nombre_accion": "Añadir123" }, valorValido: { "nombre_accion": "Diseñar" } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto nombre_accion", msgExito: "Acción correcta", valorValido: { "nombre_accion": "Consultar" } }
      },
      {
        campo: "descrip_accion",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "descrip_accion_min_size_KO", desc: "cumple tamaño minimo descrip_accion", msgError: "Descripción muy corta (min 5)", valorInvalido: { "descrip_accion": "desc" }, valorValido: { "descrip_accion": "Permite añadir registros." } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "descrip_accion_max_size_KO", desc: "cumple tamaño maximo descrip_accion", msgError: "Descripción muy larga (max 200)", valorInvalido: { "descrip_accion": "d".repeat(201) }, valorValido: { "descrip_accion": "Acción que ejecuta el alta de nuevos datos." } },
          { tipo: "format", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "descrip_accion_format_KO", desc: "cumple formato alfabetico con ñ, espacio y puntuacion", msgError: "Formato inválido", valorInvalido: { "descrip_accion": "Accion_123_fail" }, valorValido: { "descrip_accion": "Permite buscar, editar y borrar elementos." } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto descrip_accion", msgExito: "Descripción correcta", valorValido: { "descrip_accion": "Ejecuta la validación y guardado." } }
      }
    ]
  },

  // 5. FUNCIONALIDAD
  funcionalidad: {
    entidad: "funcionalidad",
    campos: [
      {
        campo: "id_funcionalidad",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "id_funcionalidad_min_size_KO", desc: "cumple tamaño numerico minimo id_funcionalidad", msgError: "Mínimo 1", valorInvalido: { "id_funcionalidad": 0 }, valorValido: { "id_funcionalidad": 1 } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "id_funcionalidad_max_size_KO", desc: "cumple tamaño numerico maximo id_funcionalidad", msgError: "Máximo 11", valorInvalido: { "id_funcionalidad": 12 }, valorValido: { "id_funcionalidad": 10 } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto id_funcionalidad", msgExito: "ID funcionalidad correcto", valorValido: { "id_funcionalidad": 2 } }
      },
      {
        campo: "nombre_funcionalidad",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "nombre_funcionalidad_min_size_KO", desc: "cumple tamaño minimo nombre_funcionalidad", msgError: "Nombre muy corto (min 5)", valorInvalido: { "nombre_funcionalidad": "func" }, valorValido: { "nombre_funcionalidad": "Gestión" } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "nombre_funcionalidad_max_size_KO", desc: "cumple tamaño maximo nombre_funcionalidad", msgError: "Nombre muy largo (max 48)", valorInvalido: { "nombre_funcionalidad": "f".repeat(49) }, valorValido: { "nombre_funcionalidad": "Administración" } },
          { tipo: "format", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "nombre_funcionalidad_format_KO", desc: "cumple formato alfabetico con ñ", msgError: "Formato inválido", valorInvalido: { "nombre_funcionalidad": "Gestion123" }, valorValido: { "nombre_funcionalidad": "Mantenimiento" } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto nombre_funcionalidad", msgExito: "Funcionalidad correcta", valorValido: { "nombre_funcionalidad": "Estadísticas" } }
      },
      {
        campo: "descrip_funcionalidad",
        elemento: "input",
        reglas: [
          { tipo: "min_size", acciones: ["ADD", "EDIT"], codigoKO: "descrip_funcionalidad_min_size_KO", desc: "cumple tamaño minimo descrip_funcionalidad", msgError: "Descripción muy corta (min 5)", valorInvalido: { "descrip_funcionalidad": "desc" }, valorValido: { "descrip_funcionalidad": "Módulo de gestión general." } },
          { tipo: "max_size", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "descrip_funcionalidad_max_size_KO", desc: "cumple tamaño maximo descrip_funcionalidad", msgError: "Descripción muy larga (max 200)", valorInvalido: { "descrip_funcionalidad": "f".repeat(201) }, valorValido: { "descrip_funcionalidad": "Módulo encargado del seguimiento." } },
          { tipo: "format", acciones: ["ADD", "EDIT", "SEARCH"], codigoKO: "descrip_funcionalidad_format_KO", desc: "cumple formato alfabetico con ñ, espacio y puntuacion", msgError: "Formato inválido", valorInvalido: { "descrip_funcionalidad": "Modulo_123_bad" }, valorValido: { "descrip_funcionalidad": "Configuración de parámetros." } }
        ],
        testExito: { acciones: ["ADD", "EDIT", "SEARCH"], desc: "es correcto descrip_funcionalidad", msgExito: "Descripción correcta", valorValido: { "descrip_funcionalidad": "Control de acceso y permisos." } }
      }
    ]
  }
};


function generarCodigoEntidad(esquema) {
  if (!esquema || !esquema.campos) return "";

  let defTests = [];
  let pruebas = [];
  let idTestSecuencial = 1;
  let idPruebaSecuencial = 1;

  esquema.campos.forEach(c => {
    c.reglas.forEach(regla => {
      regla.acciones.forEach(accion => {
        const numTest = idTestSecuencial++;
        let elementoActual = c.elemento;

        // Si es un archivo y la acción es SEARCH, en la UI de búsqueda se trata como input de texto
        if (c.elemento === "file" && accion === "SEARCH") {
          elementoActual = "input";
        }

        // Si es regla de tamaño en SEARCH, el resultado esperado de error debe ser true (sin fallo de tamaño)
        const isSearchSizeRule = accion === "SEARCH" && (regla.tipo === "min_size" || regla.tipo === "max_size");
        const codigoResultado = isSearchSizeRule ? true : regla.codigoKO;

        defTests.push([
          esquema.entidad,
          c.campo,
          elementoActual,
          numTest,
          `${regla.desc} en ${accion}`,
          regla.tipo,
          accion,
          codigoResultado,
          regla.msgError
        ]);

        pruebas.push([
          esquema.entidad,
          c.campo,
          numTest,
          idPruebaSecuencial++,
          accion,
          regla.valorInvalido,
          codigoResultado
        ]);

        pruebas.push([
          esquema.entidad,
          c.campo,
          numTest,
          idPruebaSecuencial++,
          accion,
          regla.valorValido,
          true
        ]);
      });
    });

    if (c.testExito) {
      c.testExito.acciones.forEach(accion => {
        const numTest = idTestSecuencial++;
        let elementoActual = c.elemento;

        if (c.elemento === "file" && accion === "SEARCH") {
          elementoActual = "input";
        }

        defTests.push([
          esquema.entidad,
          c.campo,
          elementoActual,
          numTest,
          `${c.testExito.desc} en ${accion}`,
          "valid",
          accion,
          true,
          c.testExito.msgExito
        ]);

        pruebas.push([
          esquema.entidad,
          c.campo,
          numTest,
          idPruebaSecuencial++,
          accion,
          c.testExito.valorValido,
          true
        ]);
      });
    }
  });

  const defTestsFormatted = `let ${esquema.entidad}_def_tests = Array(\n` +
    defTests.map(row => `   Array(${row.map(val => JSON.stringify(val)).join(', ')})`).join(',\n') +
    `\n);\n`;

  const pruebasFormatted = `let ${esquema.entidad}_pruebas = Array(\n` +
    pruebas.map(row => `   Array(${row.map(val => JSON.stringify(val)).join(', ')})`).join(',\n') +
    `\n);\n`;

  return defTestsFormatted + `\n` + pruebasFormatted;
}

function executeAndDownload() {
  const selectElem = document.getElementById('entidadSelect');
  if (!selectElem) return;

  const entidadKey = selectElem.value;
  const esquema = esquemasET1[entidadKey];

  if (!esquema) {
    alert("Selecciona una entidad válida.");
    return;
  }

  const resultText = generarCodigoEntidad(esquema);

  const demoElem = document.getElementById('demo');
  if (demoElem) demoElem.textContent = resultText;

  const fileName = `${entidadKey}_tests.js`;
  const blob = new Blob([resultText], { type: 'text/javascript;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');

  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}