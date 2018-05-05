class Empleado {
    constructor(pcedula, pnombre, pfoto, pfecha, pedad, pcorreo, pcontrasenna, pestado) {
        this.cedula = pcedula;
        this.nombre = pnombre;
        this.foto = pfoto;
        this.fecha = pfecha;
        this.edad = pedad;
        this.correo = pcorreo;
        this.contrasenna = pcontrasenna;
        this.estado = pestado;
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

    getFoto(){
        return this.foto;
    }
    

    getEdad() {
        return this.edad;
    }

    getnombre(){
        return this.nombre;
    }

    getEstado(){
        return this.estado;
    }

    getFecha(){
        return this.fecha;
    }

    setnombre(pnuevoNombre) {
        this.nombre = pnuevoNombre;
    }

    setContrasenna(pnuevoContrasenna){
        this.contrasenna = pnuevoContrasenna;
    }
    setEdad() {
        this.edad = pnuevoEdad;
    }
}

class Hotel {
    constructor(pid, pnombreTarea, pdescripcion, pfechaAsignacion, pprioridad, pestadoTarea, pcosto, pnombreProyecto) {
        this._id = pid;
        this.nombreTarea = pnombreTarea;
        this.descripcion = pdescripcion;
        this.fechaAsignacion = pfechaAsignacion;
        this.prioridad = pprioridad;
        this.estadoTarea = pestado;
        this.costo = pcosto;
        this.nombreProyecto = pnombreProyecto;
    }

    getId() {
        return this._id;
    }

    getnombreTarea() {
        return this.nombreTarea;
    }

    getestadoTarea() {
        return this.estadoTarea;
    }

    getCosto(){
        return this.costo;
    }

    getNombreProyecto (){
        return this.nombreProyecto;
    }

    setNombreTarea(pnuevoNombreTarea) {
        this.name = pNuevoNombreHotel;
    }

    
}