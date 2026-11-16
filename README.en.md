# 🚀 ApkStart PT-BR

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
- **📱 Real Desktop & Start Menu Shortcuts:** The original high-resolution app icon is extracted and turned into a desktop shortcut. Double-clicking it opens the app directly.
- **🪟 Individual & Resizable Windows:** Each application runs in its own window, remembers its previous dimensions, supports fullscreen mode (`F11`), and allows instant orientation toggle (`Ctrl + R`).
- **🌙 Integrated Dark Mode:** A discrete, elegant toggle located at the top center of the window allows switching between Light and Dark themes with a single click.
- **📁 Two-Way File Synchronization:** Continuous shared folder syncing between the host PC (`%USERPROFILE%\ApkStartShared`) and the Android VM (`/sdcard/ApkStartShared`).
- **⚡ Maximum Performance & Lightweight Footprint:** The virtualization engine remains quietly in the background; closing an app window suspends its processes to free up 100% CPU for Windows tasks.
- **🛡️ 100% Free of Ads & Bloatware:** Clean, auditable code with no sponsored apps, banners, or invasive background popups.

---

## 🚀 How to Use

1. Download the portable zip or setup package from the [Releases](https://github.com/Emertels/apkstart/releases) page.
2. Launch **`ApkStart.exe`**.
3. In the top right corner, open **Settings** and click **Automatic Setup** to prepare the Android runtime (one-time setup).
4. Drag and drop any `.apk` file into the ApkStart window or double-click an `.apk` in Windows.
5. Done! A shortcut with the real app icon will be created on your Desktop.

---

## 📐 Project Structure

```text
apkstart/
├── src/
│   ├── core/               # Virtualization, ADB, provisioning, and installer modules
│   │   ├── backends/       # Engine drivers (embedded QEMU, MuMu, FydeOS, external ADB)
│   │   ├── adb.js          # Android Debug Bridge communication layer
│   │   ├── doctor.js       # System health check and diagnostic suite
│   │   ├── emulator.js     # Virtual machine lifecycle controller
│   │   └── installer.js    # APK metadata parser, icon extractor, and installer
│   ├── ui/                 # User Interface (Electron / HTML5 / CSS3 / Vanilla JS)
│   │   ├── index.html      # Main launcher window
│   │   ├── app.js          # UI logic, event listeners, and dark mode handler
│   │   ├── theme.css       # Visual styles, color tokens, and Dark Mode rules
│   │   ├── shell.html      # Individual floating app container window
│   │   └── shell.js        # Window controls (rotate, minimize, close)
│   ├── main.js             # Electron main process, tray menu, and global shortcuts
│   └── preload.js          # IPC security bridge between Node.js and Chromium
├── package.json            # Project configuration and packaging scripts
├── LICENSE                 # MIT Open Source License
├── README.md               # Documentation in Portuguese
└── README.en.md            # Documentation in English
```

---

## 📄 License and Credits

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

* **Translation, Brazilian Portuguese Localization & Dark Mode:** Developed by **Emerson Teles** ([@Emertels](https://github.com/Emertels)).
* **Original Base Project:** Based on the open-source project by **[RoutineMiku](https://github.com/RoutineMiku/apkstart)**.

---

## 👨‍💻 About the Author

Developed and maintained by **Emerson Teles** (known in the developer community as **Emertels**).

Technology, computer science, gaming, system maintenance, and software localization enthusiast focused on Portuguese (Brazil). Developer specializing in practical desktop utilities, productivity tools, intelligent automation with PowerShell, and comprehensive technical localization solutions that bring modern software closer to the Brazilian public.

### 🛠️ Projects & Contributions

- [AI-Chat-Vault](https://github.com/Emertels/AI-Chat-Vault) — Portable backup and local recovery for conversations from 20+ AI assistants.
- [Antigravity — PT-BR Translation](https://github.com/Emertels/Antigravity-Traducao-PTBR) — Full localization of Google Antigravity Desktop for Brazilian Portuguese.
- [ApkStart PT-BR](https://github.com/Emertels/apkstart) — Brazilian fork of the lightweight Android app runner for Windows with Dark Mode and localized interface.
- [Codex Router — PT-BR Translation](https://github.com/Emertels/CodexRouter-Traducao-PTBR) — Localization package for Codex Router Control Center in PT-BR.
- [Cursor AI — PT-BR Translation](https://github.com/Emertels/Cursor-Traducao-PTBR) — Complete deep localization of Cursor AI for Brazilian Portuguese.
- [Devin AI — PT-BR Translation](https://github.com/Emertels/Devin-Traducao-PTBR) — Localization package for Devin Desktop in Brazilian Portuguese.
- [GPU Tweak III — PT-BR Translation](https://github.com/Emertels/GPU-Tweak-III-Traducao-PTBR) — Brazilian Portuguese translation and automated installer for ASUS GPU Tweak III.
- [ICSee Desktop Viewer](https://github.com/Emertels/ICSee-Desktop-Viewer) — Modern portable desktop application for viewing and controlling ICSee and ONVIF dual-lens cameras on Windows.
- [Microsoft Photos Fix](https://github.com/Emertels/Microsoft-Photos-Fix) — Complete PowerShell and C# utility for fast startup routing and image viewing in the Windows Photos app.
- [PSBBN-Translator](https://github.com/Emertels/PSBBN-Translator) — Enterprise localization suite for the PSBBN Definitive Project (PlayStation 2) across 40 languages.
- [Silent Hill: Homecoming — PT-BR Translation](https://github.com/Emertels/Silent-Hill-Homecoming-Traducao-PTBR) — Complete Brazilian Portuguese translation and text revision for PC.
- [Suite-Emuladores](https://github.com/Emertels/Suite-Emuladores) — Autonomous PowerShell management suite for downloading and updating 56 emulators and frontends on Windows.
- [Xbox 360 Controller Calibration Tool](https://github.com/Emertels/Xbox-360-Controller-Calibration-Tool) — Advanced calibration utility for Xbox 360 controllers on Windows.
- [ZCode — PT-BR Translation](https://github.com/Emertels/ZCode-Traducao-PTBR) — Deep localization package for ZCode Desktop in Brazilian Portuguese.

### 🌐 Connect with Me & Official Communities

<div align="left">

[![GitHub](https://img.shields.io/badge/GitHub-Emertels-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/emertels)
[![Website](https://img.shields.io/badge/Website-Emerson_Teles-0070F3?style=for-the-badge&logo=googlechrome&logoColor=white)](https://emertels.github.io)
[![Discord](https://img.shields.io/badge/Discord-Emertels%20Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://emertels.github.io/discord)
[![X / Twitter](https://img.shields.io/badge/X_Twitter-@emertels-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/emertels)
[![YouTube](https://img.shields.io/badge/YouTube-Emerson_Teles-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@emersonteles2379)
[![Telegram](https://img.shields.io/badge/Telegram-Aplicativos%20Mods-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/apksmodsandroid)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support%20Project-FF5E5B?style=for-the-badge&logo=kofi&logoColor=white)](https://ko-fi.com/emertels)

</div>
