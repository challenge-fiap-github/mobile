// src/navigation/types.ts
export type RootStackParamList = {
  // Telas principais
  Home: undefined;
  Game: undefined;       
  Consulta: undefined;

  // Agendamento
  Agendamento: undefined;
  AgendamentoConsulta: undefined;
  AgendamentoBusca: undefined;
  AgendamentoResultado: undefined;

  // Funcionalidades
  BuscaRede: undefined;
  Cobertura: undefined;
  FaleConosco: undefined;
  DadosPessoais: undefined;

  // Checklists
  ChecklistDiario: undefined;
  ChecklistSemanal: undefined;

  // Gamificação
  Quiz: undefined;
  Premios: undefined;
  TarefasDiarias: undefined;
  PontuacaoConsulta: undefined;

  // Autenticação
  Login: undefined;
  Cadastro: undefined;
  PrimeiroAcesso: undefined;

  // Seleção de localização
  BuscarLocalidade: {
    estadoSelecionado?: string;
    cidadeSelecionada?: string;
    bairroSelecionado?: string;
  };
  SelecionarEstado: undefined;
  SelecionarCidade: { estadoSelecionado: string };
  SelecionarBairro: { estadoSelecionado: string; cidadeSelecionada: string };
};
