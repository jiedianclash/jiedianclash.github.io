---
layout: home
title: Clash 节点资源中心
description: 提供 Clash 下载、节点、教程、客户端介绍、常见问题等一站式资源平台。
permalink: /
toc: false
---

<!-- Hero Section -->
<section class="hero-section">
  <h1 class="hero-title">Clash 节点与教程资源中心</h1>
  <p class="hero-subtitle">下载、配置、客户端、常见问题，一站式获取 Clash 生态全攻略</p>
  <div class="hero-actions">
    <a href="{{ '/downloads/' | relative_url }}" class="btn btn-primary">📥 客户端下载</a>
    <a href="{{ '/tutorials/' | relative_url }}" class="btn btn-secondary">📖 新手教程</a>
    <a href="{{ '/nodes/' | relative_url }}" class="btn btn-outline">🔗 免费节点</a>
  </div>
</section>

<div class="container">
  <!-- Quick Links -->
  <section>
    <h2 class="section-title">🔥 热门搜索</h2>
    <div class="quick-links">
      <a href="{{ '/downloads/clash-for-windows/' | relative_url }}">Clash for Windows</a>
      <a href="{{ '/downloads/clash-verge/' | relative_url }}">Clash Verge 下载</a>
      <a href="{{ '/downloads/clash-meta/' | relative_url }}">Clash Meta 下载</a>
      <a href="{{ '/downloads/clashx/' | relative_url }}">ClashX 下载</a>
      <a href="{{ '/downloads/clash-for-android/' | relative_url }}">Clash for Android</a>
      <a href="{{ '/nodes/free/' | relative_url }}">Clash 免费节点</a>
      <a href="{{ '/tutorials/config/' | relative_url }}">Clash 配置教程</a>
      <a href="{{ '/tutorials/rules/' | relative_url }}">Clash 规则设置</a>
      <a href="{{ '/tutorials/tun/' | relative_url }}">TUN 模式</a>
      <a href="{{ '/faq/' | relative_url }}">常见问题</a>
      <a href="{{ '/airport/recommend/' | relative_url }}">机场推荐</a>
      <a href="{{ '/tools/subscription-converter/' | relative_url }}">订阅转换</a>
    </div>
  </section>

  <!-- Feature Grid -->
  <section>
    <h2 class="section-title">📦 资源导航</h2>
    <div class="feature-grid">
      <a href="{{ '/downloads/' | relative_url }}" class="feature-card">
        <div class="feature-icon">📥</div>
        <h3>客户端下载</h3>
        <p>Clash for Windows、Clash Meta、Clash Verge、ClashX 等全平台客户端下载与安装指引</p>
      </a>
      <a href="{{ '/nodes/' | relative_url }}" class="feature-card">
        <div class="feature-icon">🔗</div>
        <h3>Clash 节点</h3>
        <p>免费节点、订阅链接、节点推荐，每日更新的 Clash 节点资源</p>
      </a>
      <a href="{{ '/tutorials/' | relative_url }}" class="feature-card">
        <div class="feature-icon">📖</div>
        <h3>配置教程</h3>
        <p>从入门到进阶的 Clash 配置教程，涵盖规则、DNS、TUN 模式等核心内容</p>
      </a>
      <a href="{{ '/clients/' | relative_url }}" class="feature-card">
        <div class="feature-icon">💻</div>
        <h3>客户端介绍</h3>
        <p>Clash Meta、Clash Verge、OpenClash、Mihomo 等客户端详细对比与使用指南</p>
      </a>
      <a href="{{ '/airport/' | relative_url }}" class="feature-card">
        <div class="feature-icon">✈️</div>
        <h3>机场推荐</h3>
        <p>高速机场选购攻略、机场知识科普、性价比对比</p>
      </a>
      <a href="{{ '/tools/' | relative_url }}" class="feature-card">
        <div class="feature-icon">🛠️</div>
        <h3>实用工具</h3>
        <p>订阅转换、Base64 解码、YAML 检查、配置生成器等在线工具</p>
      </a>
    </div>
  </section>

  <!-- Download Center -->
  <section>
    <h2 class="section-title">📥 下载中心</h2>
    <div class="card-grid">
      <a href="{{ '/downloads/clash-for-windows/' | relative_url }}" class="card">
        <h3 class="card-title">Clash for Windows</h3>
        <p class="card-description">Windows 平台最流行的 Clash 客户端，支持完整的规则配置和节点管理</p>
        <span class="card-meta">Windows · 免费 · 中文</span>
      </a>
      <a href="{{ '/downloads/clash-meta/' | relative_url }}" class="card">
        <h3 class="card-title">Clash Meta</h3>
        <p class="card-description">Clash 进阶分支，支持更多协议、更灵活的规则系统和更高性能</p>
        <span class="card-meta">全平台 · 免费 · 开源</span>
      </a>
      <a href="{{ '/downloads/clash-verge/' | relative_url }}" class="card">
        <h3 class="card-title">Clash Verge</h3>
        <p class="card-description">基于 Tauri 的现代化 Clash 客户端，界面美观，支持 Windows/macOS/Linux</p>
        <span class="card-meta">Windows/macOS/Linux · 免费</span>
      </a>
      <a href="{{ '/downloads/clashx/' | relative_url }}" class="card">
        <h3 class="card-title">ClashX</h3>
        <p class="card-description">macOS 平台原生 Clash 客户端，简洁易用，完美融入 macOS 菜单栏</p>
        <span class="card-meta">macOS · 免费</span>
      </a>
      <a href="{{ '/downloads/clash-for-android/' | relative_url }}" class="card">
        <h3 class="card-title">Clash for Android</h3>
        <p class="card-description">Android 平台 Clash 客户端，支持 VPN 模式、规则配置和订阅管理</p>
        <span class="card-meta">Android · 免费</span>
      </a>
    </div>
  </section>

  <!-- Latest Posts -->
  <section>
    <h2 class="section-title">📰 最新文章</h2>
    <div class="post-list">
      {% for post in site.posts limit:5 %}
        <a href="{{ post.url | relative_url }}" class="post-item">
          <span class="post-item-date">{{ post.date | date: "%Y-%m-%d" }}</span>
          <div class="post-item-content">
            <h3>{{ post.title }}</h3>
            {% if post.description %}
              <p>{{ post.description | truncate: 120 }}</p>
            {% endif %}
          </div>
        </a>
      {% else %}
        <p style="color: var(--text-muted);">暂无文章，敬请期待</p>
      {% endfor %}
    </div>
  </section>

  <!-- FAQ Preview -->
  <section>
    <h2 class="section-title">❓ 常见问题</h2>
    {% for item in site.data.faq limit:5 %}
      <details class="faq-item">
        <summary>{{ item.q }}</summary>
        <div class="faq-answer">{{ item.a | markdownify }}</div>
      </details>
    {% endfor %}
    <p style="margin-top: var(--spacing-md);">
      <a href="{{ '/faq/' | relative_url }}" class="btn btn-secondary">查看全部 FAQ →</a>
    </p>
  </section>

  <!-- CTA -->
  {% include cta.html %}
</div>
