import { useEffect } from "react";

/**
 * Sets the page title and description (plus Open Graph copies) for the
 * current route, so every page can be indexed and ranked on its own.
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    const setMeta = (selector, key, keyValue, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(key, keyValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
  }, [title, description]);
}
