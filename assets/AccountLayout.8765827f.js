import { a as QList, Q as QItem } from "./QList.1f9c1576.js";
import { Q as QCard } from "./QCard.848bd264.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.cbc1e69a.js";
import { A as AppBar } from "./AppBar.944f93e5.js";
import { _ as _export_sfc, k as openBlock, l as createBlock, m as withCtx, n as resolveComponent, f as createVNode, C as createBaseVNode, E as toDisplayString, B as createElementBlock, I as renderList, F as Fragment, D as createTextVNode } from "./index.cf036711.js";
import "./use-dark.8fb57865.js";
import "./QBtn.a17df556.js";
import "./render.ebc3bf11.js";
import "./dom.6171126e.js";
import "./scroll.195f9007.js";
import "./QResizeObserver.86c4f40e.js";
import "./QImg.c6a2d2e4.js";
import "./QToolbar.bcc41272.js";
import "./QBadge.6e5318d9.js";
import "./QLinearProgress.1753826d.js";
import "./QMenu.b44e60d8.js";
import "./selection.b5404565.js";
import "./use-model-toggle.01aba15e.js";
import "./focusout.5290e48a.js";
import "./focus-manager.d6507951.js";
import "./QAvatar.840f1c75.js";
import "./vguerato.76f2042f.js";
const _sfc_main = {
  name: "AccountLayout",
  components: { AppBar },
  setup() {
    return {
      links: [
        {
          id: "profile",
          to: "/account"
        },
        {
          id: "orders",
          to: "/account/orders"
        },
        {
          id: "preferences",
          to: "/account/preferences"
        },
        {
          id: "team",
          to: "/account/team"
        },
        {
          id: "integrations",
          to: "/account/integrations"
        }
      ]
    };
  }
};
const _hoisted_1 = { class: "row justify-center items-start" };
const _hoisted_2 = { class: "col-10 col-md-10 q-mt-xl sm-no-margin" };
const _hoisted_3 = { class: "row items-start q-col-gutter-lg" };
const _hoisted_4 = { class: "text-h6 q-mt-none" };
const _hoisted_5 = { class: "col q-pt-none" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppBar = resolveComponent("AppBar");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(QLayout, {
    view: "hHh Lpr fFf",
    class: "bg-layout"
  }, {
    default: withCtx(() => [
      createVNode(_component_AppBar),
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createVNode(QCard, {
                  bordered: "",
                  flat: "",
                  class: "col-3 sm-hide q-px-md"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("h1", _hoisted_4, toDisplayString(_ctx.$t("myAccount")), 1),
                    createVNode(QList, {
                      dense: "",
                      class: "text-weight-normal"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.links, (link) => {
                          return openBlock(), createBlock(QItem, {
                            key: link,
                            to: link.to,
                            replace: "",
                            exact: "",
                            "exact-active-class": "text-grey",
                            class: "no-padding text-primary q-mb-md"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t(link.id)), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_5, [
                  createVNode(_component_router_view)
                ])
              ])
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _: 1
  });
}
var AccountLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { AccountLayout as default };
