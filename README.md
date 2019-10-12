# Hexo NexT Title

![Theme Version](https://img.shields.io/badge/NexT-v7.3.0+-blue.svg?style=flat-square)
![Package Version](https://img.shields.io/github/package-json/v/theme-next/hexo-next-title?style=flat-square)

Change to a different title when window is no longer in focus.

## Install
```bash
npm install theme-next/hexo-next-title
```

## Configure
You can config those in both **hexo** or **theme** `_config.yml`.

```yml next/_config.yml
# Change title and favicon when window is hidden and visible.
title_change:
  enable: false

  # Enabling this feature on non-desktop devices may not be a good choice, but it depends on you.
  onmobile: false

  # Enable random title or not.
  # Basically `random: true` means you have several titles to display and `random: false` means you have only one title to display.
  # When `random: true`, YOU MUST FOLLOW the format which has been commented in two title options below.
  # When `random: false`, please fill in the same line of the title option, like `title: one title`.
  random: false

  # Restore the original title after the specified time in milliseconds.
  timeout: 2019

  # Options when window is hidden.
  hidden:
    favicon: /images/favicon-32x32-next.png
    title:
      #- 404
      #- φ(*￣0￣)
      #- Waiting for you.

  # Options when window is visible.
  visible:
    favicon: /images/favicon-32x32-next.png
    title:
      #- 200
      #- (✿◡‿◡)
      #- Welcome back!
```
