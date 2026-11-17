'use strict';
/* ApkStart - Splash Screen Script */

const api = window.apkstartSplash;
if (!api) { /* preload não injetado */ }

const $ = (id) => document.getElementById(id);

// Versão
api?.version?.().then((v) => { if ($('ver')) $('ver').textContent = v || ''; }).catch(() => {});

// Primeira execução e pacote embutido
Promise.all([
  api?.isFirstRun?.().catch(() => false),
  api?.bundled?.().catch(() => false),
]).then(([first, bundled]) => {
  if (!first || !$('firstRun')) return;
  $('firstRun').hidden = false;
  if (bundled) {
    if ($('firstRunTitle')) $('firstRunTitle').textContent = 'Primeira Inicialização · Preparação Local';
    if ($('firstRunList')) {
      $('firstRunList').innerHTML = [
        '<li>Componentes do Android já inclusos no pacote</li>',
        '<li>Extraindo imagem do sistema para o diretório de dados</li>',
        '<li>Configurando aceleração de hardware e rede</li>',
        '<li>Pronto para abrir APKs com dois cliques</li>',
      ].join('');
    }
  }
}).catch(() => {});

// Progresso
api?.onProgress?.((p) => {
  if (!p) return;
  if (p.percent != null && $('progressBar')) {
    $('progressBar').style.width = Math.min(100, Math.max(0, p.percent)) + '%';
  }
  if (p.message && $('status')) {
    $('status').textContent = p.message;
  }
});

// Concluído -> Fade out
api?.onDone?.(() => {
  const splash = $('splash');
  if (splash) {
    splash.classList.add('out');
    setTimeout(() => { api?.close?.(); }, 520);
  }
});
