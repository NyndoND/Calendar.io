export interface Imonitor {
  id: string;
  name: string;
  senha: string;
  allLessons: IWeekLessons[];
}

export interface IWeekLessons {
  day: string;
  lessons: ILessons[]
}

export interface ILessons {
  id: string;
  lessonDate: string;
  lessonHour: string;
  studentName: string;
  lessonDescription: string;
  status: string;
}

export interface Ialunos {
  id: string;
  nome: string;
}