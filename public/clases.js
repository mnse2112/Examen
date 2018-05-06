class Empleado {
    constructor(pcedula, pnombre, pfoto, pfecha, pcorreo, pcontrasenna, pestado) {
        this.cedula = pcedula;
        this.nombre = pnombre;
        this.foto = pfoto;
        this.fecha = pfecha;
        this.correo = pcorreo;
        this.contrasenna = pcontrasenna;
        this.estado = pestado;
    }

    getEstado() {
        return this.estado;
    }

    getCorreo() {
        return this.correo;
    }

    getContrasenna() {
        return this.contrasenna;
    }

    getCedula() {
        return this.cedula;
    }

    getFoto() {
        return this.foto;
    }


    getEdad() {
        let fechaNacimiento = new Date(this.fecha);
        let fechaActual = new Date()

        let mes = fechaActual.getMonth();
        let dia = fechaActual.getDate();
        let año = fechaActual.getFullYear();

        fechaActual.setDate(dia);
        fechaActual.setMonth(mes);
        fechaActual.setFullYear(año);

        let edad = Math.floor(((fechaActual - fechaNacimiento) / (1000 * 60 * 60 * 24) / 365));

        return edad;
    }

    getnombre() {
        return this.nombre;
    }

    getFecha() {
        return this.fecha;
    }

    setnombre(pnuevoNombre) {
        this.nombre = pnuevoNombre;
    }

    setEstado(pnuevoEstado) {
        this.estado = pnuevoEstado;
    }

    setContrasenna(pnuevoContrasenna) {
        this.contrasenna = pnuevoContrasenna;
    }

    setEdad() {
        this.edad = pnuevoEdad;
    }
}

class Tarea {
    constructor(pid, pnombreTarea, pdescripcion, pfechaAsignacion, pprioridad, pestado, pcosto, pidproyecto, pidUsuario) {
        this._id = pid;
        this.nombreTarea = pnombreTarea;
        this.descripcion = pdescripcion;
        this.fechaAsignacion = pfechaAsignacion;
        this.prioridad = pprioridad;
        this.estadoTarea = pestado;
        this.costo = pcosto;
        this.idProyecto = pidproyecto;
        this.idUsuario = pidUsuario;
    }

    // Gets
    getId() {
        return this._id;
    }

    getnombreTarea() {
        return this.nombreTarea;
    }

    getdescripcionTarea() {
        return this.descripcion;
    }

    getfechaAsignacion() {
        return this.fechaAsignacion;
    }

    getprioridad() {
        return this.prioridad;
    }

    getestadoTarea() {
        return this.estadoTarea;
    }

    getCosto() {
        return this.costo;
    }

    getIdProyecto() {
        return  this.idProyecto;
    }

    getIdUsuario() {
        return this.idUsuario
    }

    getNombreUsuario() {
        let response;

        let peticion = $.ajax({
            url: 'http://localhost:4000/api/get_one_user',
            type: 'put',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            async: false,
            data: {
                'cedula': this.idUsuario
            }
        });

        peticion.done((res) => {
            response = res;
        });

        peticion.fail((error) => {
            response = error;
            console.log(response.error);
        });

        return response.nombre;
    }

    // Sets
    setnombreTarea(pnuevonombre) {
        this.nombreTarea = pnuevonombre;
    }

    setdescripcionTarea(pnuevadescripcion) {
        this.descripcion = pnuevadescripcion;
    }

    setfechaAsignacion(pnuevafecha) {
        this.fechaAsignacion = pnuevafecha;
    }

    setprioridad(pnuevaprioridad) {
        this.prioridad = pnuevaprioridad;
    }

    setestadoTarea(pnuevoestado) {
        this.estadoTarea = pnuevoestado;
    }

    setCosto(pnuevoCosto) {
        this.costo = pnuevoCosto;
    }

    setIdProyecto(pnuevoproyecto) {
        this.idProyecto = pnuevoproyecto;
    }
}