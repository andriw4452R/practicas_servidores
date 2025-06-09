export class Estudiante {
  constructor(
    public id: string,
    public nombreCompleto: string,
    public notaDocumento: number,     // Ej: 7.5
    public notaPropuesta: number,     // Ej: 8.0
    public documentacionCompleta: boolean,
    public aprobadoRevisor1: boolean,
    public aprobadoRevisor2: boolean,
    public listoParaDefensa: boolean,
  ) {}
}
