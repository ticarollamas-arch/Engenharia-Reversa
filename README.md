# ⚡ ZipToGit & Clean-Room Reverse Engineering Architect

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Security Hardened](https://img.shields.io/badge/Security-ZipSlip%20%26%20ZipBomb%20Defended-22C55E?logo=security)](https://owasp.org/)
[![Mobile Responsive](https://img.shields.io/badge/Mobile-320px--4K%20Compliant-purple)](https://developer.mozilla.org/)

Plataforma full-stack de alto desempenho para **publicação instantânea no GitHub** e **desconstrução limpa de arquitetura (Clean-Room Reverse Engineering)**. Analisa pacotes compilados (`.apk`), arquivos compactados (`.zip`, `.tar.gz`, `.tgz`, `.rar`, `.7z`), executáveis (`.exe`, `.elf`, `.so`, `.dex`) e sintetiza o **Prompt Mestre** e a especificação técnica para reconstrução do zero com 100% de originalidade, sem plagiar código, design ou marcas de terceiros.

---

## 🏛️ Visão Geral da Arquitetura

```text
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │                           CLIENTE (Vite + React SPA)                        │
 │  ┌───────────────────┐  ┌───────────────────────┐  ┌─────────────────────┐  │
 │  │ Universal Uploader│  │ Magic Byte Inspector  │  │ Local Tree Shaking  │  │
 │  │ (Drag & Drop)     │  │ (PKZip, GZ, RAR, PE)  │  │ (node_modules, etc) │  │
 │  └─────────┬─────────┘  └───────────┬───────────┘  └──────────┬──────────┘  │
 └────────────┼────────────────────────┼─────────────────────────┼─────────────┘
              ▼                        ▼                         ▼
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │                         BACKEND SERVICE (Express Node.js)                   │
 │                                                                             │
 │  ┌───────────────────────────────────────────────────────────────────────┐  │
 │  │  🛡️ Camada de Segurança                                                │  │
 │  │  • Zip Slip Defesa: Sanitização estrita de path traversal (../ e abs) │  │
 │  │  • Zip Bomb Defesa: Cota rígida de 500 MB descompactados              │  │
 │  │  • Isolamento: Sandbox em fs.mkdtempSync(os.tmpdir())                 │  │
 │  │  • Recursão Aninhada: Descompactação controlada até nível 3           │  │
 │  └───────────────────────────────────┬───────────────────────────────────┘  │
 │                                      ▼                                      │
 │  ┌───────────────────────────────────────────────────────────────────────┐  │
 │  │  🧠 Universal AI Provider Hub (OpenAI-Compatible Dispatcher)          │  │
 │  │                                                                       │  │
 │  │  [NVIDIA NIM Free Tier] ──► integrate.api.nvidia.com (Llama 3.3 70B)   │  │
 │  │  [DeepSeek Official]   ──► api.deepseek.com (deepseek-chat / R1)      │  │
 │  │  [OpenAI API]          ──► api.openai.com (gpt-4o / gpt-4o-mini)      │  │
 │  │  [Meta Llama / Groq]   ──► api.groq.com (llama-3.3-70b-versatile)     │  │
 │  │  [Google Gemini API] ──► generativelanguage.googleapis.com             │  │
 │  │  [Custom Endpoint]     ──► Base URL personalizada + modelo custom     │  │
 │  └───────────────────────────────────┬───────────────────────────────────┘  │
 └──────────────────────────────────────┼──────────────────────────────────────┘
                                        ▼
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │                       SAÍDAS E INTEGRAÇÕES EXTERNAS                         │
 │  ┌───────────────────────────────────┐  ┌────────────────────────────────┐  │
 │  │  GitHub REST & Git Database API   │  │  Clean-Room Specification &    │  │
 │  │  (Blobs, Trees, Commits, Refs)    │  │  Master Prompt Copiável (.md)  │  │
 │  └───────────────────────────────────┘  └────────────────────────────────┘  │
 └─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🤖 Hub Universal de Motores de IA (Multi-Provider)

A plataforma integra nativamente qualquer provedor compatível com a especificação **OpenAI Chat Completions API**, suportando tanto computação em nuvem gratuita quanto inferência local offline:

| Provedor | Endpoint Base | Modelo Recomendado | Custo / Obtenção |
| :--- | :--- | :--- | :--- |
| **NVIDIA NIM** | `https://integrate.api.nvidia.com/v1` | `meta/llama-3.3-70b-instruct` | **Free Tier Oficial** via [build.nvidia.com](https://build.nvidia.com) |
| **DeepSeek** | `https://api.deepseek.com/v1` | `deepseek-chat` / `deepseek-reasoner` | [platform.deepseek.com](https://platform.deepseek.com) |
| **OpenAI** | `https://api.openai.com/v1` | `gpt-4o-mini` / `gpt-4o` | [platform.openai.com](https://platform.openai.com) |
| **Meta Llama (Groq)** | `https://api.groq.com/openai/v1` | `llama-3.3-70b-versatile` | [console.groq.com](https://console.groq.com) |
| **Google Gemini** | `https://generativelanguage.googleapis.com/v1beta/openai/` | Configurado em `GEMINI_MODEL` | Requer chave de API |
| **Personalizado** | `http://...` ou `https://...` | Qualquer modelo instruído | vLLM, LM Studio, TGI, OpenRouter |

### 🔑 Como Obter a Chave Gratuita da NVIDIA (Free Tier):
1. Acesse o catálogo da NVIDIA: [https://build.nvidia.com](https://build.nvidia.com).
2. Entre com sua conta gratuita de desenvolvedor.
3. Selecione o modelo `meta/llama-3.3-70b-instruct` ou `deepseek-ai/deepseek-r1`.
4. Clique em **"Get API Key"** e copie sua chave `nvapi-...`.
5. Cole na interface do app (fica salva no seu `localStorage`) ou defina no arquivo `.env`.

### Configuração da API Gemini

Configure `GEMINI_API_KEY`, `GEMINI_BASE_URL` e `GEMINI_MODEL` no arquivo `.env` do servidor. Não publique o arquivo `.env` nem compartilhe sua chave.

### Critérios de Conformidade Atendidos:
- `*, *::before, *::after { box-sizing: border-box; }` global.
- `html, body { max-width: 100%; overflow-x: hidden; }`
- Substituição total de larguras fixas por `max-w-full`, `w-full` e `clamp()`.
- Botões e barras de ações empilham responsivamente (`flex-col sm:flex-row`).
- Verificação técnica: `document.documentElement.scrollWidth === document.documentElement.clientWidth` retorna **true** em todos os breakpoints.

---

## 🛠️ Endpoints da API REST

### 1. `POST /api/analyze-architecture`
Desconstrói a arquitetura técnica e sintetiza o Prompt Mestre de recriação do zero.
- **Headers Opcionais:**
  - `provider`: `gemini`
  - `x-ai-api-key`: Chave da API do provedor escolhido
  - `x-ai-base-url`: URL base customizada (ex: `http://localhost:11434/v1`)
  - `x-ai-model`: Nome do modelo (ex: `llama3.3`, `gpt-4o-mini`, `deepseek-chat`)
- **Body:**
  ```json
  {
    "projectName": "meu-app.apk",
    "projectType": "Android APK",
    "fileTree": ["AndroidManifest.xml", "classes.dex", "..."],
    "keyFiles": { "AndroidManifest.xml": "..." },
    "apkAnalysis": { "dexFiles": ["classes.dex"], "nativeLibs": [] }
  }
  ```
- **Retorno:** JSON com `overview`, `techStack`, `architectureBreakdown`, `stepByStepLogic`, `masterPrompt` e `visualDifferentiationTips`.

### 2. `POST /api/validate-package`
Validação de pacotes de arquivo com proteção Zip Slip e Zip Bomb em ambiente temporário isolado.

---

## 🚀 Como Executar

### Pré-requisitos:
- Node.js 18+ ou 20+
- npm ou pnpm

### Instalação & Execução:
```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/ziptogit.git
cd ziptogit

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente (opcional, todas têm suporte via UI)
cp .env.example .env

# 4. Iniciar em desenvolvimento full-stack
npm run dev

# 5. Build de produção
npm run build
npm start
```

Acesse em: `http://localhost:3000`

---

## 📄 Metodologia Clean-Room Reverse Engineering

A engenharia reversa em "sala limpa" separa a especificação funcional da implementação do código:
1. **Fase de Análise:** O aplicativo decompõe o binário ou arquivo compactado para mapear dependências, rotas, contratos de dados e arquitetura necessária.
2. **Fase de Purificação:** Nenhum trecho de código legado, imagem proprietária, logotipo ou marca registrada é copiado ou reutilizado.
3. **Fase de Geração:** Um **Prompt Mestre** é sintetizado para que o desenvolvedor instrua sua IA favorita a reescrever o sistema com design autoral, boas práticas modernas e código 100% autêntico.

---

## 📜 Licença

Distribuído sob a licença MIT. Consulte `LICENSE` para mais informações.
