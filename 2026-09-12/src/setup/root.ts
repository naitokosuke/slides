import { useNav } from "@slidev/client";
import { watch } from "vue";

export default function setupRoot() {
  const { currentSlideNo } = useNav();

  watch(
    currentSlideNo,
    (to, from) => {
      document.documentElement.classList.toggle(
        "win98-zooming",
        to === 1 || from === 1,
      );
    },
    { flush: "sync" },
  );
}
