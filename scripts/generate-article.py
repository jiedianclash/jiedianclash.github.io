"""
Clash Node Hub — Article Generator

Usage:
    python scripts/generate-article.py --keyword "Clash配置教程" --count 5

Generates SEO-optimized articles using an AI API.
Reads prompt template from ../prompts/article-generator.md
"""

import os
import sys
import json
import time
from pathlib import Path

# Placeholder — implement with your preferred AI API
def generate_article(keyword: str) -> dict:
    """Generate a single article for the given keyword."""
    article = {
        "title": f"{keyword} 完整指南",
        "description": f"本文详细介绍{keyword}的相关知识和操作步骤。",
        "content": f"# {keyword}\n\n## 简介\n\n{keyword}的相关内容。\n\n（自动生成内容占位）\n",
        "tags": [keyword, "Clash", "教程"],
        "slug": keyword.lower().replace(" ", "-")
    }
    return article

def main():
    if len(sys.argv) < 2:
        print("Usage: python generate-article.py --keyword <keyword> [--count N]")
        sys.exit(1)

    keyword = sys.argv[2] if len(sys.argv) > 2 else "Clash教程"
    count = int(sys.argv[4]) if len(sys.argv) > 4 else 1

    posts_dir = Path(__file__).parent.parent / "_posts"

    for i in range(count):
        article = generate_article(keyword)
        slug = article["slug"]
        filename = f"{time.strftime('%Y-%m-%d')}-{slug}.md"
        filepath = posts_dir / filename

        with open(filepath, "w", encoding="utf-8") as f:
            f.write("---\n")
            f.write(f'title: "{article["title"]}"\n')
            f.write(f'description: "{article["description"]}"\n')
            f.write(f'date: {time.strftime("%Y-%m-%d %H:%M:%S")} +0800\n')
            f.write(f'tags: {json.dumps(article["tags"], ensure_ascii=False)}\n')
            f.write("---\n\n")
            f.write(article["content"])

        print(f"Generated: {filepath}")

if __name__ == "__main__":
    main()
