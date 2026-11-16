# 🚀 ApkStart PT-BR

<p align="center">
  <b>🇧🇷 Português</b> | <a href="README.en.md">🇺🇸 English</a>
</p>

[![Release](https://img.shields.io/github/v/release/Emertels/apkstart?include_prereleases&sort=semver&style=flat-square&color=blue)](https://github.com/Emertels/apkstart/releases)
[![Plataforma](https://img.shields.io/badge/Plataforma-Windows%2010%20%2F%2011%20x64-0078D6.svg?style=flat-square)](https://www.microsoft.com/windows)
[![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![Idioma](https://img.shields.io/badge/Idioma-Portugu%C3%AAs%20(Brasil)-success.svg?style=flat-square)](#)
[![Modo Escuro](https://img.shields.io/badge/Tema-Modo%20Escuro%20Nativo-1e2421.svg?style=flat-square)](#)

Um aplicativo desktop moderno, ultraleve, portátil e de alto desempenho para Windows, projetado para instalar e executar aplicativos Android em **janelas individuais e independentes**, com suporte a **Modo Escuro nativo**, atalhos reais na Área de Trabalho e integração completa com o sistema — **100% em Português do Brasil** e sem nenhum anúncio ou bloatware.

---

## ✨ Principais Funcionalidades

- **🖱️ Instalação com Dois Cliques no `.apk`:** Associe arquivos `.apk` ao ApkStart para instalar aplicativos com dois cliques direto do Explorador de Arquivos do Windows, sem necessidade de abrir interfaces de emuladores pesados.
- **📱 Atalhos Reais na Área de Trabalho e Menu Iniciar:** O ícone do aplicativo é extraído em alta definição e transformado em atalho na Área de Trabalho. Clicar nele abre diretamente o aplicativo desejado.
- **🪟 Janelas Individuais e Independentes:** Cada app é executado em uma janela própria, redimensionável, que memoriza seu tamanho anterior, suporta modo tela cheia (`F11`) e rotação instantânea entre modo retrato e paisagem (`Ctrl + R`).
- **🌙 Modo Escuro (Dark Mode) Integrado:** Botão discreto e elegante posicionado no centro do topo da janela para alternar entre tema Claro e Escuro com um único clique.
- **📁 Sincronização Bidirecional de Arquivos:** Pasta compartilhada contínua entre o computador (`%USERPROFILE%\ApkStartShared`) e a máquina Android (`/sdcard/ApkStartShared`).
- **⚡ Desempenho e Leveza Máxima:** O motor de virtualização permanece em segundo plano; ao fechar a janela, ele suspende processos para poupar 100% de CPU para suas tarefas no Windows.
- **🛡️ 100% Livre de Anúncios e Bloatware:** Código limpo e transparente, sem jogos patrocinados ou notificações invasivas.

---

## 🚀 Como Usar

1. Baixe o pacote portátil ou instalador na aba [Releases](https://github.com/Emertels/apkstart/releases).
2. Execute o **`ApkStart.exe`**.
3. No canto superior direito, acerte as **Configurações** e clique em **Instalação Automática** (ocorre apenas na primeira inicialização para preparar o ambiente Android).
4. Arraste qualquer arquivo `.apk` para a janela do ApkStart ou clique duas vezes no `.apk` no seu Windows.
5. Um atalho com o ícone do aplicativo será criado na sua Área de Trabalho para você abrir quando quiser!

---

## 📐 Estrutura do Projeto

```text
apkstart/
├── src/
│   ├── core/               # Módulos de virtualização, ADB, provisionamento e instalador
│   │   ├── backends/       # Suporte a motores (QEMU embutido, MuMu, FydeOS, ADB externo)
│   │   ├── adb.js          # Comunicação via Android Debug Bridge
│   │   ├── doctor.js       # Auto-verificação do sistema e diagnóstico inteligente
│   │   ├── emulator.js     # Gerenciamento de ciclo de vida da máquina virtual
│   │   └── installer.js    # Extração de metadados, ícones e instalação de APKs
│   ├── ui/                 # Interface do usuário (Electron / HTML5 / CSS3 / Vanilla JS)
│   │   ├── index.html      # Janela principal do inicializador
│   │   ├── app.js          # Lógica da interface, eventos e alternador de tema
│   │   ├── theme.css       # Estilos visuais, variáveis de cor e Modo Escuro
│   │   ├── shell.html      # Janela flutuante individual do aplicativo Android
│   │   └── shell.js        # Controle de janela (rotação, minimizar, fechar)
│   ├── main.js             # Processo principal do Electron, menus de bandeja e atalhos
│   └── preload.js          # Ponte de segurança IPC entre Node.js e Chromium
├── package.json            # Metadados e scripts de empacotamento do projeto
├── LICENSE                 # Licença de código aberto MIT
├── README.md               # Apresentação do projeto em Português
└── README.en.md            # Documentação em Inglês
```

---

## 📄 Licença e Créditos

Distribuído sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

* **Tradução, Localização PT-BR e Modo Escuro:** Desenvolvido por **Emerson Teles** ([@Emertels](https://github.com/Emertels)).
* **Projeto Base Original:** Baseado no projeto de código aberto desenvolvido por **[RoutineMiku](https://github.com/RoutineMiku/apkstart)**.

---

## 👨‍💻 Sobre o Autor

Desenvolvido e mantido por **Emerson Teles** (conhecido na comunidade como **Emertels**).

Entusiasta de tecnologia, informática, jogos, manutenção de sistemas e tradução/localização de softwares para Português do Brasil (PT-BR). Desenvolvedor focado em utilitários práticos, ferramentas de produtividade, automação inteligente em PowerShell e soluções completas de localização técnica que aproximam ferramentas modernas do público brasileiro.

### 🛠️ Projetos & Contribuições

- [AI-Chat-Vault](https://github.com/Emertels/AI-Chat-Vault) — Backup portátil e recuperação de conversas locais de 20+ ferramentas e assistentes de IA.
- [Antigravity — Tradução PT-BR](https://github.com/Emertels/Antigravity-Traducao-PTBR) — Localização completa do Google Antigravity Desktop para Português do Brasil.
- [ApkStart PT-BR](https://github.com/Emertels/apkstart) — Inicializador ultraleve de apps Android para Windows com Modo Escuro e interface traduzida.
- [Codex Router — Tradução PT-BR](https://github.com/Emertels/CodexRouter-Traducao-PTBR) — Pacote de tradução e localização do Codex Router Control Center em PT-BR.
- [Cursor AI — Tradução PT-BR](https://github.com/Emertels/Cursor-Traducao-PTBR) — Localização completa e profunda do Cursor AI para Português do Brasil.
- [Devin AI — Tradução PT-BR](https://github.com/Emertels/Devin-Traducao-PTBR) — Tradução e localização completa do Devin Desktop para Português do Brasil.
- [GPU Tweak III — Tradução PT-BR](https://github.com/Emertels/GPU-Tweak-III-Traducao-PTBR) — Tradução em português brasileiro e instalador automatizado para ASUS GPU Tweak III.
- [ICSee Desktop Viewer](https://github.com/Emertels/ICSee-Desktop-Viewer) — Aplicativo desktop moderno e portátil para visualização e controle de câmeras ICSee e ONVIF no Windows.
- [Microsoft Photos Fix](https://github.com/Emertels/Microsoft-Photos-Fix) — Solução definitiva em PowerShell e C# para rota de inicialização rápida e visualização no app Fotos do Windows.
- [PSBBN-Translator](https://github.com/Emertels/PSBBN-Translator) — Suíte corporativa de tradução e localização para o PSBBN Definitive Project (PlayStation 2) em 40 idiomas.
- [Silent Hill: Homecoming — Tradução PT-BR](https://github.com/Emertels/Silent-Hill-Homecoming-Traducao-PTBR) — Tradução e revisão completa do jogo para PC em português brasileiro.
- [Suite-Emuladores](https://github.com/Emertels/Suite-Emuladores) — Suíte inteligente em PowerShell para download e atualização autônoma de 56 emuladores e frontends no Windows.
- [Xbox 360 Controller Calibration Tool](https://github.com/Emertels/Xbox-360-Controller-Calibration-Tool) — Ferramenta profissional para calibração avançada de controles Xbox 360 no Windows.
- [ZCode — Tradução PT-BR](https://github.com/Emertels/ZCode-Traducao-PTBR) — Tradução e localização completa do ZCode Desktop para Português do Brasil.

### 🌐 Conecte-se comigo & Comunidades Oficiais

<div align="left">

[![GitHub](https://img.shields.io/badge/GitHub-Emertels-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/emertels)
[![Website](https://img.shields.io/badge/Website-Emerson_Teles-0070F3?style=for-the-badge&logo=googlechrome&logoColor=white)](https://emertels.github.io)
[![Discord](https://img.shields.io/badge/Discord-Emertels%20Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://emertels.github.io/discord)
[![X / Twitter](https://img.shields.io/badge/X_Twitter-@emertels-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/emertels)
[![YouTube](https://img.shields.io/badge/YouTube-Emerson_Teles-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@emersonteles2379)
[![Telegram](https://img.shields.io/badge/Telegram-Aplicativos%20Mods-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/apksmodsandroid)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Apoiar%20Projeto-FF5E5B?style=for-the-badge&logo=kofi&logoColor=white)](https://ko-fi.com/emertels)

</div>
