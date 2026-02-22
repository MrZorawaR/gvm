/** Generic helper utilities */

/**
 * Smoothly scroll to an element by its ID.
 */
export function scrollToElement(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
