# 🚀 ApkStart PT-BR v0.5.8

<p align="center">
  <a href="README.md">🇧🇷 Português</a> | <b>🇺🇸 English</b>
</p>

[![Release](https://img.shields.io/github/v/release/Emertels/apkstart?include_prereleases&sort=semver&style=flat-square&color=blue)](https://github.com/Emertels/apkstart/releases)
[![Platform](https://img.shields.io/badge/Platform-Windows%2010%20%2F%2011%20x64-0078D6.svg?style=flat-square)](https://www.microsoft.com/windows)
[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![Language](https://img.shields.io/badge/Language-Portuguese%20(Brazil)-success.svg?style=flat-square)](#)
[![Dark Mode](https://img.shields.io/badge/Theme-Native%20Dark%20Mode-1e2421.svg?style=flat-square)](#)

A modern, lightweight, portable, and high-performance desktop application for Windows designed to install and run Android apps in **individual and independent windows**, featuring **native Dark Mode**, real desktop shortcuts, and full system integration — **100% in Brazilian Portuguese** with zero ads or bloatware.

---

## ✨ Key Features

- **🖱️ Double-Click `.apk` Installation:** Associate `.apk` files with ApkStart to install apps with two clicks directly from Windows File Explorer, without having to launch heavy emulator dashboards.
- **🧩 100% Standalone Runtime (v0.5.8):** Version 0.5.8 removes any dependency on third-party emulators. It includes its own optimized Android x86_64 runtime, fast-boot snapshots, and complete isolation.
- **🩺 Preflight Hardware Diagnostics:** Real-time intelligent hardware and environment verification covering CPU virtualization (VT-x / SVM), Hyper-V / WHPX, OS integrity, RAM limits, and GPU vendor detection (NVIDIA / AMD / Intel).
- **🎮 GPU Driver Compatibility Profiles:** Native management of GPU driver profiles to prevent graphic anomalies and crashes, with selectable backends (Host, ANGLE Direct3D 11, SwiftShader) and secure isolation.
- **🧠 Dynamic & Conservative Resource Allocation:** Automatic vCPU, RAM, and disk allocation designed to safeguard host Windows performance.
- **📱 Real Desktop & Start Menu Shortcuts:** The original high-resolution app icon is extracted and turned into a desktop shortcut. Double-clicking it opens the app directly.
- **🪟 Individual & Resizable Windows:** Each application runs in its own window, remembers its previous dimensions, supports fullscreen mode (`F11`), and allows instant orientation toggle (`Ctrl + R`).
- **🌙 Integrated Dark Mode:** A discrete, elegant toggle located at the top center of the window allows switching between Light and Dark themes with a single click, featuring emerald green scrollbars and volume controls.
- **🔇 Automatic QEMU Popup Suppression:** The background PowerShell agent silently suppresses unwanted "Saving state..." and "QuickBoot" dialogs.
- **📁 Two-Way File Synchronization:** Continuous shared folder syncing between the host PC (`%USERPROFILE%\ApkStartShared`) and the Android VM (`/sdcard/ApkStartShared`).
- **⚡ Peak Performance & Lightweight:** The virtualization engine stays suspended in the background when not in use, freeing 100% of CPU for other Windows tasks.
- **🛡️ 100% Free of Ads & Bloatware:** Clean, transparent, open-source code without sponsored games or invasive prompts.

---

## 🚀 How to Use

1. Download the portable zip (`ApkStart-v0.5.8-PTBR-win64-portable.zip`) from the [Releases](https://github.com/Emertels/apkstart/releases) tab.
2. Extract to any directory of your choice and launch **`ApkStart.exe`**.
3. ApkStart performs an initial preflight check and automatically sets up the environment.
4. Drag and drop any `.apk` file into the ApkStart window or double-click `.apk` files in Windows Explorer.
5. A shortcut with the app's native icon will be created on your Desktop!

---

## 📐 Project Structure

```text
apkstart/
├── src/
│   ├── core/               # Virtualization, ADB, provisioning, and installer modules
│   │   ├── win/            # PowerShell background agent & dialog suppression
│   │   ├── adb.js          # Android Debug Bridge communication
│   │   ├── preflight.js    # Hardware, Hyper-V, WHPX, BIOS, and GPU preflight checks
│   │   ├── drivers.js      # GPU driver compatibility profiles
│   │   ├── resources.js    # Dynamic vCPU, RAM, and storage allocation
│   │   ├── doctor.js       # Auto-check and intelligent system diagnostics
│   │   ├── emulator.js     # VM lifecycle management
│   │   └── installer.js    # APK metadata & icon extraction and installation
│   ├── ui/                 # User Interface (Electron / HTML5 / CSS3 / Vanilla JS)
│   │   ├── index.html      # Main launcher window (100% PT-BR)
│   │   ├── app.js          # UI logic, events, and theme switcher
│   │   ├── theme.css       # Visual styles, color variables, green scrollbar, and Dark Mode
│   │   ├── splash.html     # Startup splash window with real-time progress bar
│   │   └── splash.js       # Splash loading and fade-out controller
│   ├── main.js             # Electron main process, tray menu, and global shortcuts
│   └── preload.js          # Secure IPC bridge between Node.js and Chromium
├── package.json            # Project metadata and packaging scripts
├── LICENSE                 # MIT Open-Source License
├── README.md               # Project documentation in Portuguese
└── README.en.md            # Project documentation in English
```

---

## 📄 License & Credits

Distributed under the **MIT** License. See [LICENSE](LICENSE) for more details.

* **Translation, PT-BR Localization & Dark Mode:** Developed and maintained by **Emerson Teles** ([@Emertels](https://github.com/Emertels)).
* **Original Upstream Base:** Based on the open-source project by **[RoutineMiku](https://github.com/RoutineMiku/apkstart)**.

---

## 👨‍💻 About the Author

Developed and maintained by **Emerson Teles** (known in the community as **Emertels**).

Tech enthusiast, developer, and translator specializing in Brazilian Portuguese (PT-BR) localization, smart PowerShell automation, system maintenance tools, and productivity utilities that bring modern software to Brazilian users.

### 🛠️ Projects & Contributions

- [AI-Chat-Vault](https://github.com/Emertels/AI-Chat-Vault) — Portable backup and local conversation recovery for 20+ AI tools and assistants.
- [Antigravity — Tradução PT-BR](https://github.com/Emertels/Antigravity-Traducao-PTBR) — Complete Brazilian Portuguese localization for Google Antigravity Desktop.
- [ApkStart PT-BR](https://github.com/Emertels/apkstart) — Lightweight Android app launcher for Windows with Dark Mode and Portuguese interface.
- [Codex Router — Tradução PT-BR](https://github.com/Emertels/CodexRouter-Traducao-PTBR) — PT-BR translation and localization suite for Codex Router Control Center.
- [Cursor AI — Tradução PT-BR](https://github.com/Emertels/Cursor-Traducao-PTBR) — Deep Brazilian Portuguese localization for Cursor AI.
- [Devin AI — Tradução PT-BR](https://github.com/Emertels/Devin-Traducao-PTBR) — Complete Brazilian Portuguese localization for Devin Desktop.
- [GPU Tweak III — Tradução PT-BR](https://github.com/Emertels/GPU-Tweak-III-Traducao-PTBR) — PT-BR translation and automated installer for ASUS GPU Tweak III.
- [ICSee Desktop Viewer](https://github.com/Emertels/ICSee-Desktop-Viewer) — Modern portable desktop application for viewing and controlling ICSee and ONVIF cameras on Windows.
- [Microsoft Photos Fix](https://github.com/Emertels/Microsoft-Photos-Fix) — Complete PowerShell and C# fix for fast startup and viewing in the Windows Photos app.
- [PSBBN-Translator](https://github.com/Emertels/PSBBN-Translator) — Enterprise localization suite for the PSBBN Definitive Project (PlayStation 2) across 40 languages.
- [Silent Hill: Homecoming — Tradução PT-BR](https://github.com/Emertels/Silent-Hill-Homecoming-Traducao-PTBR) — Full PT-BR translation and text overhaul for the PC release.
- [Suite-Emuladores](https://github.com/Emertels/Suite-Emuladores) — Autonomous PowerShell suite for downloading and updating 56 emulators and frontends on Windows.
- [Xbox 360 Controller Calibration Tool](https://github.com/Emertels/Xbox-360-Controller-Calibration-Tool) — Advanced calibration and diagnostics tool for Xbox 360 controllers on Windows.
- [ZCode — Tradução PT-BR](https://github.com/Emertels/ZCode-Traducao-PTBR) — Full Brazilian Portuguese localization for ZCode Desktop.

### 🌐 Connect with Me & Official Communities

<div align="left">

[![GitHub](https://img.shields.io/badge/GitHub-Emertels-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/emertels)
[![Website](https://img.shields.io/badge/Website-Emerson_Teles-0070F3?style=for-the-badge&logo=googlechrome&logoColor=white)](https://emertels.github.io)
[![Discord](https://img.shields.io/badge/Discord-Emertels%20Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://emertels.github.io/discord)
[![X / Twitter](https://img.shields.io/badge/X_Twitter-@emertels-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/emertels)
[![YouTube](https://img.shields.io/badge/YouTube-Emerson_Teles-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@emersonteles2379)
[![Telegram](https://img.shields.io/badge/Telegram-Aplicativos%20Mods-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/apksmodsandroid)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Apoiar%20Projeto-FF5E5B?style=for-the-badge&logo=kofi&logoColor=white)](https://ko-fi.com/emertels)

</div>
