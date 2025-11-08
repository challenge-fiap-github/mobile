// src/navigation/types.ts

export type RootStackParamList = {
  // Telas principais
  Splash: undefined;
  Home: undefined;
  Game: undefined;

  // Pontos / Consulta
  Consulta: undefined | { from?: string };

  // Agendamento
  Agendamento: undefined;
  AgendamentoConsulta: undefined;
  AgendamentoBusca: undefined;
  AgendamentoResultado: undefined;
  MeusAgendamentos: undefined;

  // Funcionalidades
  Cobertura: undefined;
  FaleConosco: undefined;
  DadosPessoais: undefined;
  TokenConsulta: undefined;

  // Checklists
  ChecklistDiario: undefined;
  ChecklistSemanal: undefined;

  // Gamificação
  Quiz: undefined;
  Premios: undefined;
  TarefasDiarias: undefined;
  PontuacaoConsulta: undefined;
  Desafio: undefined;

  // Autenticação
  Login: undefined;
  Cadastro: undefined;
  PrimeiroAcesso: undefined;

  // Busca de rede / Clínicas
  BuscaRede: undefined;
  Clinica: undefined;

  // Desafio em grupo
  DesafioEmGrupo: undefined;
  CadastrarGrupo: undefined;
  MeusGrupos: undefined;
  Grupo: {
    groupId: string;
    name?: string;
  };

  // Tela de avaliação de consulta
  Avaliacao: {
    doutor?: string;
    tipo?: string;
    data?: string;
  };

  // Seleção de localização
  BuscarLocalidade: {
    estadoSelecionado?: string;
    cidadeSelecionada?: string;
    bairroSelecionado?: string;
  };
  SelecionarEstado: undefined;
  SelecionarCidade: { estadoSelecionado: string };
  SelecionarBairro: {
    estadoSelecionado: string;
    cidadeSelecionada: string;
  };
};
