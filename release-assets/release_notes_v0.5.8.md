# 🚀 ApkStart PT-BR v0.5.8 — Atualização Principal e Autônoma

Esta versão traz a atualização completa do **ApkStart para a versão v0.5.8**, com localização profunda em Português do Brasil (PT-BR), Modo Escuro nativo com barra de rolagem e controles verde-esmeralda, supressão de popups do QEMU e um novo motor 100% autônomo.

---

### ✨ Novidades e Destaques da v0.5.8

1. **🧩 Motor 100% Autônomo e Standalone**:
   - Totalmente desacoplado de emuladores externos de terceiros (MuMu, FydeOS, etc.).
   - Utiliza exclusivamente o runtime nativo de alta performance com Android x86_64 otimizado.

2. **🩺 Diagnóstico Pré-Voo de Hardware (Preflight)**:
   - Verificação inteligente de virtualização (VT-x / AMD-V / SVM) na BIOS.
   - Diagnóstico em tempo real de Hyper-V, WHPX e integridade da imagem do sistema.
   - Detecção automática de fabricante de GPU (NVIDIA, AMD, Intel) e recomendações personalizadas.

3. **🎮 Perfis e Drivers de Compatibilidade Gráfica**:
   - Sistema nativo para gerenciar perfis de GPU para resolver falhas em placas legadas ou drivers específicos.
   - Suporte a múltiplos backends gráficos (`Host`, `ANGLE Direct3D 11`, `SwiftShader`).

4. **🧠 Alocador Dinâmico e Seguro de Recursos**:
   - Dimensionamento inteligente de vCPU, memória RAM e disco.
   - Protege o Windows contra saturação de memória ou lentidão.

5. **🌙 Modo Escuro Nativo Aprimorado**:
   - Tema escuro completo em todas as telas (`data-theme="dark"`).
   - Barra de título nativa escura com controles integrados (`#161c18` e `#2ee6a6`).
   - Barra de rolagem verde esmeralda sólida (`#12b886`) e slider de volume com preenchimento verde dinâmico.

6. **🔇 Supressão Automática de Popups do QEMU**:
   - O agente em segundo plano (`agent.ps1`) monitora e oculta automaticamente janelas indesejadas de *"Saving state..."* e *"QuickBoot"*, garantindo fechamento e suspensão silenciosos.

7. **🇧🇷 100% em Português do Brasil**:
   - Todos os menus, telas de diagnóstico, splash screen, notificações, botões e mensagens traduzidos com precisão técnica.

---

### 📦 Como Instalar a Versão Portátil

1. Baixe o arquivo `ApkStart-v0.5.8-PTBR-win64-portable.zip` abaixo.
2. Extraia o arquivo zip para uma pasta no seu computador.
3. Execute o `ApkStart.exe`.
4. Arraste qualquer `.apk` para a janela ou clique duas vezes em um arquivo `.apk` para instalar!

---

**Desenvolvido e mantido por Emerson Teles ([@Emertels](https://github.com/Emertels))**  
*Base original por RoutineMiku sob licença MIT.*
