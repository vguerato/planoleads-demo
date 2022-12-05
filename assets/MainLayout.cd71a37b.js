import { Q as QLayout, a as QPageContainer } from "./QLayout.cbc1e69a.js";
import { A as AppBar } from "./AppBar.944f93e5.js";
import { _ as _export_sfc, j as defineComponent, r as ref, k as openBlock, l as createBlock, m as withCtx, n as resolveComponent, f as createVNode } from "./index.cf036711.js";
import "./render.ebc3bf11.js";
import "./scroll.195f9007.js";
import "./dom.6171126e.js";
import "./QResizeObserver.86c4f40e.js";
import "./QImg.c6a2d2e4.js";
import "./QBtn.a17df556.js";
import "./QToolbar.bcc41272.js";
import "./QList.1f9c1576.js";
import "./use-dark.8fb57865.js";
import "./QBadge.6e5318d9.js";
import "./QLinearProgress.1753826d.js";
import "./QMenu.b44e60d8.js";
import "./selection.b5404565.js";
import "./use-model-toggle.01aba15e.js";
import "./focusout.5290e48a.js";
import "./focus-manager.d6507951.js";
import "./QCard.848bd264.js";
import "./QAvatar.840f1c75.js";
import "./vguerato.76f2042f.js";
const links = [
  {
    icon: "search",
    to: "/dashboard"
  },
  {
    icon: "group",
    to: "/group"
  },
  {
    icon: "timeline",
    to: "/group"
  }
];
const mobileBreakpoint = 1024;
const _sfc_main = defineComponent({
  name: "MainLayout",
  components: { AppBar },
  setup() {
    const mobileState = ref(window.outerWidth <= mobileBreakpoint);
    const profileMenuState = ref(false);
    return {
      menuLinks: links,
      curLeads: 0,
      maxLeads: 50,
      mobileState,
      profileMenuState
    };
  },
  created() {
    window.onresize = () => {
      this.mobileState = window.outerWidth <= mobileBreakpoint;
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppBar = resolveComponent("AppBar");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(QLayout, {
    view: "lHh Lpr lFf",
    class: "bg-layout"
  }, {
    default: withCtx(() => [
      createVNode(_component_AppBar),
      createVNode(QPageContainer, { class: "full-width full-height py-25" }, {
        default: withCtx(() => [
          createVNode(_component_router_view)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { MainLayout as default };
