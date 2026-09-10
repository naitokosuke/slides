import { useNav, useSlideContext } from "@slidev/client";
import { nextTick, ref, watch } from "vue";

export function useStage() {
  const { $clicks, $page, $renderContext } = useSlideContext();
  const { currentSlideNo } = useNav();
  const stage = ref($clicks.value);

  watch($clicks, (to) => {
    const apply = () => {
      stage.value = to;
      return nextTick();
    };

    const onScreen =
      $renderContext.value === "slide" && $page.value === currentSlideNo.value;

    if (onScreen && document.startViewTransition) {
      document.startViewTransition(apply).ready.catch(() => {});
    } else {
      apply();
    }
  });

  return stage;
}
