---
layout: page
title: 博客
description: Clash 最新资讯、使用经验、更新日志和行业动态。
permalink: /blog/
---

## 最新文章

<div class="post-list">
  {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="post-item">
      <span class="post-item-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <div class="post-item-content">
        <h3>{{ post.title }}</h3>
        {% if post.description %}
          <p>{{ post.description | truncate: 150 }}</p>
        {% endif %}
      </div>
    </a>
  {% else %}
    <p>暂无文章，敬请期待</p>
  {% endfor %}
</div>

{% if paginator.total_pages > 1 %}
  <nav class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path | relative_url }}">← 上一页</a>
    {% endif %}
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path | relative_url }}">下一页 →</a>
    {% endif %}
  </nav>
{% endif %}
