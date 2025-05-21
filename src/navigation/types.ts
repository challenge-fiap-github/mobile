export type RootStackParamList = {
  Home: undefined;
  BuscaRede: undefined;
  Game: undefined;
  Agendamento: undefined;
  AgendamentoConsulta: undefined;
  AgendamentoBusca: undefined;   
  AgendamentoResultado: undefined; 

  Cobertura: undefined;
  FaleConosco: undefined;
  DadosPessoais: undefined;

  ChecklistDiario: undefined;
  ChecklistSemanal: undefined;         

  Quiz: undefined;                   
  Premios: undefined;                 

  BuscarLocalidade: {
    estadoSelecionado?: string;
    cidadeSelecionada?: string;
  };
  SelecionarEstado: undefined;
  SelecionarCidade: {
    estadoSelecionado: string;
  };

  TarefasDiarias: undefined;
  PontuacaoConsulta: undefined;
  OdontoGame: undefined;
};
