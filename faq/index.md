---
layout: page
title: 常见问题 FAQ
description: Clash 使用过程中遇到的常见问题与解答，涵盖安装、配置、排错等各个方面。
permalink: /faq/
toc: false
---

## Clash 基础

{% for item in site.data.faq %}
  <details class="faq-item">
    <summary>{{ item.q }}</summary>
    <div class="faq-answer">{{ item.a | markdownify }}</div>
  </details>
{% endfor %}

## 更多问题

如果你遇到的问题不在上表中，可以：

- 浏览[教程](/tutorials/)中的相关文章
- 在[博客](/blog/)中搜索相关话题
- [联系我们](/about/)获取帮助
