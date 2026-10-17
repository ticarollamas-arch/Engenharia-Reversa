export interface ArchitectureAnalysis {
  overview: string;
  techStack: Array<{ name: string; category: string; role: string; necessity: string }>;
  architectureBreakdown: { pattern: string; dataFlow: string; modules: Array<{ name: string; purpose: string; responsibility: string }> };
  stepByStepLogic: Array<{ stepNumber: number; title: string; objective: string; keyTasks: string[]; pitfallsToAvoid: string }>;
  masterPrompt: string;
  visualDifferentiationTips: string;
}

export async function analyzeProjectArchitecture(
  projectName: string,
  file: File,
  
): Promise<ArchitectureAnalysis> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('projectName', projectName);

  // O provedor e as credenciais ficam no servidor; nenhuma chave é lida do navegador.
  formData.append('provider', 'gemini');

  const response = await fetch('/api/analyze-architecture', {
    method: 'POST',
    body: formData, // Enviando o arquivo físico
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({ error: 'Falha na resposta do servidor' }));
    throw new Error(err.error || 'Erro desconhecido na análise');
  }

  const data = await response.json();
  return data.analysis;
}
