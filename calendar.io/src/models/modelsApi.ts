export interface Imonitor {
  id: number;
  name: string;
  senha: string;
  aulas: Iaulas[];
}

export interface Iaulas {
  dia: string;
  aluno: string;
  horario: string;
  tema_aula: string;
}

export interface Ialunos {
  id: number;
  nome: string;
}