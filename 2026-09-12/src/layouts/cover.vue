<template>
  <div class="slidev-layout win98-desktop win98-scope" data-variant="cover">
    <main>
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-text">Disk Cleanup Wizard</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div class="window-body">
          <slot />
          <p><small>Calculating free disk space...</small></p>
          <div class="progress-indicator segmented">
            <span class="progress-indicator-bar" style="width: 62%" />
          </div>
        </div>
      </div>
    </main>
    <Win98Taskbar />
  </div>
</template>
