/**
 * Copy text and announce status for screen readers.
 * Usage: copyToClipboard(button, 'text to copy', statusEl);
 */
export async function copyToClipboard(trigger, text, statusEl) {
  if (!trigger || !text) return false;
  try {
    await navigator.clipboard.writeText(text);
    if (statusEl) {
      statusEl.textContent = 'Copied';
      statusEl.setAttribute('role', 'status');
    }
    trigger.setAttribute('aria-label', 'Copied to clipboard');
    return true;
  } catch {
    if (statusEl) statusEl.textContent = 'Copy failed';
    return false;
  }
}
