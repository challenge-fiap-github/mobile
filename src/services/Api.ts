const API_URL = "http://192.168.0.105:8080/api";

interface Usuario {
  nome: string;
  email: string;
  cpf: string;
  senha: string;
}

interface Consulta {
  dataHora: string;
  pacienteId: number;
  profissionalId: number;
  tipoConsultaId: number;
}

class Api {
  static async cadastrarUsuario(usuario: Usuario) {
    const response = await fetch(`${API_URL}/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });

    if (!response.ok) {
      throw new Error("Erro ao cadastrar usuário");
    }

    return await response.json();
  }

  static async agendarConsulta(consulta: Consulta) {
    const response = await fetch(`${API_URL}/consultas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(consulta),
    });

    if (!response.ok) {
      throw new Error("Erro ao agendar consulta");
    }

    return await response.json();
  }
}

export default Api;
