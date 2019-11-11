<script>
  window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    {% if not config.title_change.onmobile %}
      if (NexT.utils.hasMobileUA()) return;
    {% endif %}
    let time, hidden, visible, title = document.title;
    let favicon = document.querySelector('link[rel="icon"]');
    {% if config.title_change.random %}
      hidden = {{ config.title_change.hidden.title | json }};
      visible = {{ config.title_change.visible.title | json }};
    {% else %}
      hidden = '{{ config.title_change.hidden.title }}';
      visible = '{{ config.title_change.visible.title }}';
    {% endif %}
    let random = t => t[Math.floor(Math.random() * t.length)];
    const change = () => {
      if (document.hidden) {
        favicon.setAttribute('href', '{{ config.title_change.hidden.favicon }}');
        {% if config.title_change.random %}
          document.title = random(hidden);
        {% else %}
          document.title = hidden;
        {% endif %}
        clearTimeout(time);
      } else {
        favicon.setAttribute('href', '{{ config.title_change.visible.favicon }}');
        {% if config.title_change.random %}
          document.title = random(visible);
        {% else %}
          document.title = visible;
        {% endif %}
        time = setTimeout(() => {
          document.title = title;
        }, {{ config.title_change.timeout }});
      }
    }
    document.addEventListener('visibilitychange', change, false);
  });
</script>
