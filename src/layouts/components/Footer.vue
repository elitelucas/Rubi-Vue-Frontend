<template>
  <div class="h-100 d-flex align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
      copyright
      <a
        href="https://bitjarlabs.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >BitJar Labs LLC.</a>
      All rights reserved.
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
        href="#"
        class="text-p"
      >Privacy Policy</a>
      <a
        href="#"
        class="text-p"
      >Terms of Use</a>
      <a
        href="#"
        class="text-p"
      >Documentation</a>
      <a
        href="#"
        class="text-p"
      >Support</a>
    </span>
  </div>
</template>
