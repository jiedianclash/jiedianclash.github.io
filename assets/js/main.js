// =============================================================================
// Clash Node Hub — Main JS
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {

  // --- Mobile Nav Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }

  // --- Theme Toggle (Dark/Light) ---
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '🌙' : '☀️';

    themeToggle.addEventListener('click', function() {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
    });
  }

  // --- Search Toggle ---
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');

  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', function() {
      searchBar.classList.toggle('active');
      if (searchBar.classList.contains('active')) {
        setTimeout(() => {
          document.getElementById('searchInput')?.focus();
        }, 100);
      }
    });

    document.getElementById('searchClose')?.addEventListener('click', function() {
      searchBar.classList.remove('active');
    });
  }

  // --- Simple Client-side Search (via page titles) ---
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  if (searchInput && searchResults) {
    // Build search index from all links
    const pages = [];
    document.querySelectorAll('.nav-link, .footer-col a').forEach(function(link) {
      const title = link.textContent.trim();
      const url = link.getAttribute('href');
      if (title && url && !title.includes('首页')) {
        pages.push({ title: title, url: url });
      }
    });

    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      if (query.length < 1) {
        searchResults.classList.remove('active');
        return;
      }

      const matches = pages.filter(function(p) {
        return p.title.toLowerCase().includes(query);
      });

      if (matches.length > 0) {
        searchResults.innerHTML = matches.slice(0, 8).map(function(m) {
          return '<a href="' + m.url + '" class="search-result-item">' +
                 '<span class="search-result-title">' + m.title + '</span></a>';
        }).join('');
        searchResults.classList.add('active');
      } else {
        searchResults.innerHTML = '<div class="search-no-result">未找到相关内容</div>';
        searchResults.classList.add('active');
      }
    });

    document.addEventListener('click', function(e) {
      if (!searchBar.contains(e.target)) {
        searchResults.classList.remove('active');
      }
    });
  }

  // --- Auto-generate TOC from page headings ---
  const tocContainer = document.getElementById('tocContent');
  if (tocContainer) {
    const contentArea = document.querySelector('.post-content, .page-content');
    if (contentArea) {
      const headings = contentArea.querySelectorAll('h2, h3');
      if (headings.length > 0) {
        let tocHtml = '<ul>';
        headings.forEach(function(h) {
          const level = h.tagName.toLowerCase();
          const indent = level === 'h3' ? ' style="padding-left: 1rem;"' : '';
          const id = h.id || h.textContent.trim().toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g, '-');
          h.id = id;
          tocHtml += '<li' + indent + '><a href="#' + id + '">' + h.textContent + '</a></li>';
        });
        tocHtml += '</ul>';
        tocContainer.innerHTML = tocHtml;
      }
    }
  }

  // --- Smooth Scroll for TOC links ---
  document.querySelectorAll('.toc a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- FAQ Accordion (open first item) ---
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) {
    // Open first FAQ item by default
    // faqItems[0].setAttribute('open', '');
  }

  // --- Reading Progress Indicator (optional) ---
  const mainContent = document.querySelector('.post-content');
  if (mainContent) {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="progress-bar"></div>';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.querySelector('.progress-bar').style.width = progress + '%';
    });
  }
});
