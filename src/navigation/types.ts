export type RootStackParamList = {
  Home: undefined;
  BuscaRede: undefined;
  Game: undefined;
  Agendamento: undefined;
  Cobertura: undefined;
  FaleConosco: undefined;
  DadosPessoais: undefined;
  BuscarLocalidade: {
    estadoSelecionado?: string;
    cidadeSelecionada?: string;
  };
  SelecionarEstado: undefined;
  SelecionarCidade: {
    estadoSelecionado: string;
  };
};
