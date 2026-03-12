export interface Keyword {
  id: number;
  keyword: string;
}

export interface RiskFactor {
  id: number;
  text: string;
}

export interface Symptom {
  id: number;
  text: string;
}

export interface ImmediateAction {
  id: number;
  text: string;
}

export interface Source {
  id: number;
  source_name: string;
  link: string;
}


export interface Question {
  id: number;
  question: string;
  options: string[];
  correct_index: number;
  explanation: string;
}
export interface QuizType {
  id: number;
  title: string;
  questions: Question[];
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: number[];
  score: number;
  completed: boolean;
}

export interface DurstData {
  id: number;

  definition: string;
  ursachen: string;

  ursache_keywords: Keyword[];

  risk_factors: RiskFactor[];

  symptoms: Symptom[];

  red_flags: string;

  immediate_actions: ImmediateAction[];

  diagnostic_gold_standard: string;

  guideline_link: string;
}

export interface Disease {
  id: number;
  disease_id: string;
  name: string;
  image: string;
  category: string;

  durst_data: DurstData;

  quizzes: QuizType[];
  sources: Source[];

  created_at: string;
  updated_at: string;
}