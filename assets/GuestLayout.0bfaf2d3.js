import { Q as QLayout, a as QPageContainer } from "./QLayout.cbc1e69a.js";
import { _ as _export_sfc, k as openBlock, l as createBlock, m as withCtx, n as resolveComponent, f as createVNode } from "./index.cf036711.js";
import "./render.ebc3bf11.js";
import "./scroll.195f9007.js";
import "./dom.6171126e.js";
import "./QResizeObserver.86c4f40e.js";
const _sfc_main = {
  name: "GuestLayout"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(QLayout, { view: "hHh Lpr fFf" }, {
    default: withCtx(() => [
      createVNode(QPageContainer, { class: "full-width full-height" }, {
        default: withCtx(() => [
          createVNode(_component_router_view)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var GuestLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { GuestLayout as default };
