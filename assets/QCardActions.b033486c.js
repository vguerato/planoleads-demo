import { k as useAlignProps, l as useAlign } from "./QBtn.a17df556.js";
import { c as createComponent, h as hSlot } from "./render.ebc3bf11.js";
import { c as computed, h } from "./index.cf036711.js";
var QCardActions = createComponent({
  name: "QCardActions",
  props: {
    ...useAlignProps,
    vertical: Boolean
  },
  setup(props, { slots }) {
    const alignClass = useAlign(props);
    const classes = computed(
      () => `q-card__actions ${alignClass.value} q-card__actions--${props.vertical === true ? "vert column" : "horiz row"}`
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
export { QCardActions as Q };
