export class Usuario {
  constructor(
    public id: string,
    public nombreCompleto: string,
    public rol: 'Presidente' | 'Revisor',
  ) {}
}
