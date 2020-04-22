<template>
  <section :class="classes">
    <div class="copy">
      <sys-header-2>Streamline your workflow</sys-header-2>

      <sys-paragraph-1>
        Pop!_OS is designed for fast navigation, easy workspace organization, and
        (dunking on demons who have foolishly invaded the Earth) fluid, convenient
        workflow. Your operating system should encourage discovery, not obstruct
        it.
      </sys-paragraph-1>
    </div>

    <div class="block">
      <sys-header-3>Auto-Tiling With Pop Shell</sys-header-3>

      <sys-paragraph-1>
        Pop!_OS uses auto-tiling for the same reason that people hire
        assistants: Organizing your work is incredibly time-consuming. Sure,
        you could still move, resize, and arrange windows yourself, but why
        spend the time when your OS does it for you? Auto-tiling helps you be
        both organized and efficient, and is especially convenient on large
        displays.
      </sys-paragraph-1>

      <div class="video" />
    </div>

    <div class="block">
      <sys-header-3>Workspaces</sys-header-3>

      <sys-paragraph-1>
        Keep relevant content together and irrelevant content out of sight.
        When the clutter overwhelms you, just toss it onto another desktop.
        Problem solved.
      </sys-paragraph-1>

      <div class="video" />
    </div>

    <div class="block">
      <sys-header-3>Keyboard Navigation</sys-header-3>

      <sys-paragraph-1>
        Arm yourself with a dark-lord level of power at your fingertips. Use
        keyboard shortcuts to:

        <ul>
          <li>move/resize windows</li>
          <li>search for anything</li>
          <li>launch applications</li>
        </ul>
      </sys-paragraph-1>

      <div class="video" />
    </div>
  </section>
</template>

<style scoped>
  section {
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(4, auto);
    margin: 4rem auto;
    max-width: 1280px;
    padding: 0 1rem;
    width: 100%;
  }

  .copy {
    grid-column: 1 / 2;
    margin: 0 auto 1rem;
    max-width: 80ch;
    text-align: center;
  }

  .copy > *:first-child {
    margin-top: 0;
  }

  .copy > *:last-child {
    margin-bottom: 0;
  }

  .block {
    border-radius: 12px;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .light-mode .block {
    background-color: #fff;
    border-color: #C8C8C8;
    color: #272727;
  }

  .dark-mode .block {
    background-color: #272727;
    border-color: #171717;
    color: #ccc;
  }

  .block h3 {
    margin: 0 auto 1rem;
    max-width: 80ch;
    text-align: center;
  }

  .block p {
    margin: 1rem auto;
    max-width: 60ch;
    text-align: center;
  }

  .block:nth-child(4) p {
    max-width: 53ch;
  }

  .block ul {
    margin: 1rem 0 0;
    padding: 0;
    list-style: none;
  }

  .block ul li::before {
    content: "- ";
  }

  .block .video {
    margin: 1rem 0 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    width: 100%;
  }

  .block img {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }

  @media (width >= 120ch) {
    section {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto auto 1fr;
    }

    .copy,
    .block:nth-child(2) {
      grid-column: 1 / 3;
    }
  }

  @media (width >= 1280px) {
    section {
      grid-template-rows: auto repeat(2, 1fr);
    }

    .block:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 4;
    }

    .block:nth-child(3),
    .block:nth-child(4) {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 1fr auto;
      grid-template-rows: auto 1fr;
    }

    .block:nth-child(3) > *,
    .block:nth-child(4) > * {
      margin: 0;
      text-align: left;
    }

    .block:nth-child(3) h3,
    .block:nth-child(4) h3 {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    .block:nth-child(3) p,
    .block:nth-child(4) p {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      width: 20ch;
    }
  }
</style>

<script>
  import color from '~/mixins/color'

  export default {
    mixins: [
      color
    ]
  }
</script>
