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

    getEmpleado(){
        return this.Empleado;
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
        let fechaNacimiento =  new Date(this.fecha);
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

    getEstado() {
        return this.estado;
    }

    getFecha() {
        return this.fecha;
    }

    setnombre(pnuevoNombre) {
        this.nombre = pnuevoNombre;
    }

    setEmpleado(pnuevoEmpleado) {
        this.empleado = pnuevoEmpleado;
    }

    setContrasenna(pnuevoContrasenna) {
        this.contrasenna = pnuevoContrasenna;
    }
    setEdad() {
        this.edad = pnuevoEdad;
    }
}

class Tarea {
    constructor(pid, pnombreTarea, pdescripcion, pfechaAsignacion, pprioridad, pestadoTarea, pcosto, pidproyecto) {
        this._id = pid;
        this.nombreTarea = pnombreTarea;
        this.descripcion = pdescripcion;
        this.fechaAsignacion = pfechaAsignacion;
        this.prioridad = pprioridad;
        this.estadoTarea = pestado;
        this.costo = pcosto;
        this.idProyecto = pidproyecto;
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
        return this.idProyecto;
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