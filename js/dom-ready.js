/**
 * Run fn when the DOM is ready. Usage: domReady(() => { ... });
 */
export function domReady(fn) {
  if (typeof document === 'undefined') return;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
}

/* CommonJS: module.exports = { domReady }; */
