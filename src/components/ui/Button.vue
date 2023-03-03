<template>
  <div class="btn-container">
    <button
        class="btn"
        :class="theme">
      <h1 class="btn-text"
          :class="theme">{{ text }}</h1>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['text', 'theme']
}
</script>

<style scoped>
.btn-container {
  width: 100%;
  height: 100%;
}

.btn {
  cursor: pointer;
  padding: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-style: solid;
  transition: 500ms;
}

.btn.dark {
  border-color: var(--vt-c-black);
  background: var(--vt-c-black);
}

.btn.light {
  border-color: var(--vt-c-white);
  background: var(--vt-c-white);
}

.btn.accent {
  border-color: var(--vt-c-green);
  background: var(--vt-c-green);
}

.btn:hover {
  border-width: 1px;
  background: transparent;
}

.btn-text {
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  transition: 500ms;
}

.btn-text.dark {
  color: var(--vt-c-white);
}

.btn-text.light {
  color: var(--vt-c-black);
}

.btn-text.accent {
  color: var(--vt-c-black);
}

.btn:hover .btn-text.dark {
  color: var(--vt-c-black);
}

.btn:hover .btn-text.light {
  color: var(--vt-c-white);
}

.btn:hover .btn-text.accent {
  color: var(--vt-c-green);
}

</style>
