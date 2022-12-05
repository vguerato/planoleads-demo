import { Q as QAvatar } from "./QAvatar.840f1c75.js";
import { b as QTable, Q as QTr, a as QTd } from "./QTable.22fe7f0a.js";
import { Q as QBtn } from "./QBtn.a17df556.js";
import { a as QCardSection, Q as QCard } from "./QCard.848bd264.js";
import { Q as QInput } from "./QInput.f7213602.js";
import { Q as QForm } from "./QForm.10b7ef36.js";
import { Q as QPage } from "./QPage.d17d76d8.js";
import { _ as _imports_0 } from "./vguerato.76f2042f.js";
import { _ as _export_sfc, k as openBlock, l as createBlock, m as withCtx, f as createVNode, C as createBaseVNode, E as toDisplayString, B as createElementBlock, K as createCommentVNode, F as Fragment } from "./index.cf036711.js";
import "./render.ebc3bf11.js";
import "./QSeparator.05e99626.js";
import "./use-dark.8fb57865.js";
import "./QList.1f9c1576.js";
import "./QSelect.ad12804a.js";
import "./use-key-composition.e6149e28.js";
import "./use-form.e9a257fc.js";
import "./focus-manager.d6507951.js";
import "./QItemSection.1a39d5f6.js";
import "./QItemLabel.68b53514.js";
import "./QMenu.b44e60d8.js";
import "./selection.b5404565.js";
import "./use-model-toggle.01aba15e.js";
import "./focusout.5290e48a.js";
import "./scroll.195f9007.js";
import "./dom.6171126e.js";
import "./QDialog.d0e28515.js";
import "./QLinearProgress.1753826d.js";
import "./QCheckbox.26d27338.js";
import "./use-fullscreen.afb20d4f.js";
const _sfc_main = {
  name: "TeamPage",
  setup() {
    const rows = [
      {
        name: "Junior Rosa",
        email: "juniorrosa@hotmail.com",
        phone: "51999033300",
        city: "Porto Alegre",
        status: "confirmed"
      },
      {
        name: "Junior Rosa",
        email: "juniorrosa@hotmail.com",
        phone: "51999033300",
        city: "Porto Alegre",
        status: "invite"
      }
    ];
    return {
      rows
    };
  }
};
const _hoisted_1 = { class: "text-h6 q-my-none q-mb-md" };
const _hoisted_2 = { class: "row items-center q-col-gutter-md" };
const _hoisted_3 = { class: "col-auto" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 }, null, -1);
const _hoisted_5 = { class: "col column" };
const _hoisted_6 = { class: "row items-center text-center q-col-gutter-md" };
const _hoisted_7 = { class: "col-12" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 }, null, -1);
const _hoisted_9 = { class: "col column" };
const _hoisted_10 = {
  key: 0,
  class: "flex justify-center q-my-md"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", { class: "text-subtitle text-weight-bold" }, "Convidar", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, null, {
    default: withCtx(() => [
      createVNode(QCard, {
        flat: "",
        bordered: ""
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("h1", _hoisted_1, toDisplayString(_ctx.$t("team")), 1),
              createVNode(QTable, {
                rows: $setup.rows,
                "hide-header": "",
                "hide-bottom": "",
                flat: "",
                grid: _ctx.$q.screen.width < 768
              }, {
                body: withCtx((props) => [
                  createVNode(QTr, { props }, {
                    default: withCtx(() => [
                      createVNode(QTd, {
                        key: "name",
                        props
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_2, [
                            createBaseVNode("div", _hoisted_3, [
                              createVNode(QAvatar, null, {
                                default: withCtx(() => [
                                  _hoisted_4
                                ]),
                                _: 1
                              })
                            ]),
                            createBaseVNode("div", _hoisted_5, [
                              createBaseVNode("strong", null, toDisplayString(props.row.name), 1),
                              createBaseVNode("span", null, toDisplayString(props.row.email), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      props.row.status === "confirmed" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        props.row.status === "confirmed" ? (openBlock(), createBlock(QTd, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              label: props.row.phone,
                              dense: "",
                              flat: "",
                              icon: "img:https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png",
                              color: "green"
                            }, null, 8, ["label"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createVNode(QTd, null, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              label: props.row.city,
                              icon: "location_city",
                              flat: "",
                              dense: "",
                              color: "grey-7"
                            }, null, 8, ["label"])
                          ]),
                          _: 2
                        }, 1024)
                      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createVNode(QTd, null, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              label: "Convidar",
                              icon: "person_add",
                              flat: "",
                              dense: "",
                              color: "primary"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QTd)
                      ], 64)),
                      createVNode(QTd, null, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            icon: "person_remove",
                            flat: "",
                            dense: "",
                            color: "grey-5"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                item: withCtx((props) => [
                  createVNode(QCard, {
                    flat: "",
                    bordered: "",
                    class: "full-width q-pa-md q-my-sm"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_6, [
                        createBaseVNode("div", _hoisted_7, [
                          createVNode(QAvatar, null, {
                            default: withCtx(() => [
                              _hoisted_8
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_9, [
                          createBaseVNode("strong", null, toDisplayString(props.row.name), 1),
                          createBaseVNode("span", null, toDisplayString(props.row.email), 1)
                        ])
                      ]),
                      props.row.status === "confirmed" ? (openBlock(), createElementBlock("div", _hoisted_10, [
                        createVNode(QBtn, {
                          icon: "message",
                          dense: "",
                          flat: "",
                          color: "green"
                        }),
                        createVNode(QBtn, {
                          label: props.row.city,
                          icon: "location_city",
                          flat: "",
                          dense: "",
                          color: "grey-7"
                        }, null, 8, ["label"])
                      ])) : (openBlock(), createBlock(QBtn, {
                        key: 1,
                        label: "Convidar",
                        icon: "person_add",
                        outline: "",
                        dense: "",
                        color: "primary",
                        class: "full-width q-mt-md"
                      })),
                      createVNode(QBtn, {
                        icon: "person_remove",
                        flat: "",
                        dense: "",
                        color: "grey-5",
                        class: "q-mt-md absolute-top-right"
                      })
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }, 8, ["rows", "grid"])
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "q-pa-lg bg-grey-2" }, {
            default: withCtx(() => [
              _hoisted_11,
              createVNode(QForm, {
                greedy: "",
                class: "flex items-center q-gutter-lg"
              }, {
                default: withCtx(() => [
                  createVNode(QInput, {
                    label: "Nome",
                    dense: "",
                    filled: "",
                    "bg-color": "white"
                  }),
                  createVNode(QInput, {
                    label: "E-mail",
                    type: "email",
                    dense: "",
                    filled: "",
                    "bg-color": "white"
                  }),
                  createVNode(QBtn, {
                    label: "Enviar",
                    "text-color": "white",
                    flat: "",
                    class: "bg-primary"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var TeamPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { TeamPage as default };
