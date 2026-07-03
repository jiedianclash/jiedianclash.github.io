---
layout: post
title: "Clash 新手入门教程：下载、安装到配置完整指南"
description: "从零开始学习 Clash 的完整教程，包含客户端下载、安装步骤、订阅导入、规则配置等核心内容，适合完全没接触过 Clash 的新手。"
date: 2024-01-01 10:00:00 +0800
last_modified_at: 2024-06-15 10:00:00 +0800
categories: [教程, 入门]
tags: [Clash, 新手, 配置, 入门教程]
author: Clash Node Hub
image: /assets/images/post-clash-guide.jpg
faq:
  - q: Clash 是免费的吗？
    a: Clash 本身是免费开源软件，但使用 Clash 需要有效的代理节点（可以是免费节点或付费机场订阅）。
  - q: Clash 支持哪些平台？
    a: Clash 支持 Windows、macOS、Linux、Android、OpenWrt 等主流平台。
  - q: Clash 和 V2Ray 有什么区别？
    a: Clash 是一个代理客户端，侧重规则管理和多协议支持；V2Ray 更偏向代理协议和传输层。
---

## Clash 是什么？

Clash 是一个基于规则的代理软件，使用 Go 语言开发，支持 HTTP、SOCKS5、Shadowsocks、VMess、Trojan 等多种代理协议。它的核心优势在于**灵活的规则系统**，可以精细控制哪些流量走代理、哪些直连。

## 第一步：下载 Clash 客户端

首先，根据你的操作系统选择对应的 Clash 客户端：

- **Windows**: [Clash for Windows](/downloads/clash-for-windows/) 或 [Clash Verge](/downloads/clash-verge/)
- **macOS**: [ClashX](/downloads/clashx/) 或 [Clash Verge](/downloads/clash-verge/)
- **Android**: [Clash for Android](/downloads/clash-for-android/)
- **Linux**: [Clash Verge](/downloads/clash-verge/) 或 [Clash Meta](/downloads/clash-meta/)
- **路由器**: [OpenClash](/downloads/openclash/)

## 第二步：安装客户端

各平台安装方式略有不同：

### Windows
下载安装包后直接运行，按照提示完成安装。Clash for Windows 是便携版，解压即可使用。

### macOS
将应用拖入「应用程序」文件夹即可。首次打开可能需要右键选择「打开」以绕过 Gatekeeper。

### Android
安装 APK 文件后打开，按照引导完成 VPN 权限配置。

## 第三步：获取节点订阅

Clash 需要节点才能工作。你可以：

1. **使用免费节点** — 查看 [节点页面](/nodes/) 获取每日更新的免费节点
2. **购买机场订阅** — 查看 [机场推荐](/airport/) 选择适合自己的服务商
3. **自行搭建** — 如果你有自己的服务器，可以自行搭建代理

## 第四步：导入订阅

以 Clash for Windows 为例：

1. 打开 Clash 客户端
2. 进入「Profiles」（配置）页面
3. 在输入框中粘贴订阅链接
4. 点击「Download」按钮
5. 下载完成后，配置会自动加载

## 第五步：选择节点并连接

1. 切换到「Proxies」（代理）页面
2. 选择一个可用节点测试延迟
3. 开启「System Proxy」（系统代理）开关
4. 访问浏览器测试是否成功

## 第六步：配置规则（可选）

Clash 的规则系统是其最强大的功能。你可以：

- 使用默认规则（适合大多数用户）
- 自定义规则，精细控制流量分发
- 导入第三方规则集

详细规则配置请参考 [规则设置教程](/tutorials/rules/)。

## 进阶阅读

- [DNS 配置详解](/tutorials/dns/) — 解决 DNS 泄漏问题
- [TUN 模式教程](/tutorials/tun/) — 实现全局代理
- [订阅管理技巧](/tutorials/subscription/) — 高效管理多个订阅
