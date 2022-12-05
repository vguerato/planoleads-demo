import { Q as QImg } from "./QImg.c6a2d2e4.js";
import { Q as QToolbarTitle, a as QToolbar } from "./QToolbar.bcc41272.js";
import { Q as QBtn, a as QIcon } from "./QBtn.a17df556.js";
import { Q as QItem, a as QList } from "./QList.1f9c1576.js";
import { Q as QBadge } from "./QBadge.6e5318d9.js";
import { Q as QLinearProgress } from "./QLinearProgress.1753826d.js";
import { Q as QMenu } from "./QMenu.b44e60d8.js";
import { Q as QCard, a as QCardSection } from "./QCard.848bd264.js";
import { Q as QResizeObserver } from "./QResizeObserver.86c4f40e.js";
import { c as createComponent, b as hUniqueSlot } from "./render.ebc3bf11.js";
import { i as inject, p as emptyRenderFn, r as ref, c as computed, w as watch, u as onBeforeUnmount, h, s as layoutKey, g as getCurrentInstance, _ as _export_sfc, A as useAuthStore, k as openBlock, B as createElementBlock, C as createBaseVNode, D as createTextVNode, E as toDisplayString, f as createVNode, m as withCtx, G as pushScopeId, H as popScopeId, l as createBlock, F as Fragment, I as renderList, n as resolveComponent, J as Transition, K as createCommentVNode } from "./index.cf036711.js";
import { Q as QAvatar } from "./QAvatar.840f1c75.js";
import { _ as _imports_0$1 } from "./vguerato.76f2042f.js";
var QHeader = createComponent({
  name: "QHeader",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    },
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QHeader needs to be child of QLayout");
      return emptyRenderFn;
    }
    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);
    const fixed = computed(
      () => props.reveal === true || $layout.view.value.indexOf("H") > -1 || $q.platform.is.ios && $layout.isContainer.value === true
    );
    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0;
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0;
      }
      const offset2 = size.value - $layout.scroll.value.position;
      return offset2 > 0 ? offset2 : 0;
    });
    const hidden = computed(
      () => props.modelValue !== true || fixed.value === true && revealed.value !== true
    );
    const revealOnFocus = computed(
      () => props.modelValue === true && hidden.value === true && props.reveal === true
    );
    const classes = computed(
      () => "q-header q-layout__section--marginal " + (fixed.value === true ? "fixed" : "absolute") + "-top" + (props.bordered === true ? " q-header--bordered" : "") + (hidden.value === true ? " q-header--hidden" : "") + (props.modelValue !== true ? " q-layout--prevent-focus" : "")
    );
    const style = computed(() => {
      const view = $layout.rows.value.top, css = {};
      if (view[0] === "l" && $layout.left.space === true) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${$layout.left.size}px`;
      }
      if (view[2] === "r" && $layout.right.space === true) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${$layout.right.size}px`;
      }
      return css;
    });
    function updateLayout(prop, val) {
      $layout.update("header", prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function onResize({ height }) {
      updateLocal(size, height);
      updateLayout("size", height);
    }
    function onFocusin(evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }
      emit("focusin", evt);
    }
    watch(() => props.modelValue, (val) => {
      updateLayout("space", val);
      updateLocal(revealed, true);
      $layout.animate();
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(() => props.reveal, (val) => {
      val === false && updateLocal(revealed, props.modelValue);
    });
    watch(revealed, (val) => {
      $layout.animate();
      emit("reveal", val);
    });
    watch($layout.scroll, (scroll) => {
      props.reveal === true && updateLocal(
        revealed,
        scroll.direction === "up" || scroll.position <= props.revealOffset || scroll.position - scroll.inflectionPoint < 100
      );
    });
    const instance = {};
    $layout.instances.header = instance;
    props.modelValue === true && updateLayout("size", size.value);
    updateLayout("space", props.modelValue);
    updateLayout("offset", offset.value);
    onBeforeUnmount(() => {
      if ($layout.instances.header === instance) {
        $layout.instances.header = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = hUniqueSlot(slots.default, []);
      props.elevated === true && child.push(
        h("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      );
      child.push(
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      );
      return h("header", {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child);
    };
  }
});
var ProfileChip_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = {
  name: "ProfileChip",
  setup() {
    const authStore = useAuthStore();
    return {
      user: authStore.user
    };
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-835cfdaa"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "profile-chip flex items-center justify-between" };
const _hoisted_2$1 = { class: "q-px-sm text-right profile-name" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_0$1 }, null, -1));
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("span", _hoisted_2$1, [
      createTextVNode(toDisplayString(_ctx.$t("hello")), 1),
      _hoisted_3$1,
      createTextVNode(toDisplayString($setup.user.name), 1)
    ]),
    createVNode(QAvatar, { rounded: "" }, {
      default: withCtx(() => [
        _hoisted_4$1
      ]),
      _: 1
    })
  ]);
}
var ProfileChip = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-835cfdaa"]]);
var ProfileMenu_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  name: "ProfileMenu",
  setup() {
    const auth = useAuthStore();
    return {
      auth,
      links: [
        {
          id: "account",
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
  },
  methods: {
    logout() {
      this.auth.logout();
      this.$router.push("login");
      console.log("logout?");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QList, {
    dense: "",
    class: "text-weight-medium"
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.links, (link) => {
        return openBlock(), createBlock(QItem, {
          key: link,
          to: link.to,
          exact: "",
          "exact-active-class": "text-yellow",
          dense: "",
          replace: ""
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$t(link.id)), 1)
          ]),
          _: 2
        }, 1032, ["to"]);
      }), 128)),
      createVNode(QItem, { dense: "" }, {
        default: withCtx(() => [
          createVNode(QBtn, {
            label: _ctx.$t("logout"),
            align: "left",
            flat: "",
            dense: "",
            class: "no-padding",
            onClick: $options.logout
          }, null, 8, ["label", "onClick"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var ProfileMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-743fb685"]]);
var _imports_0 = "/assets/logo.f3598484.png";
var AppBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "AppBar",
  components: { ProfileChip, ProfileMenu },
  setup() {
    const mobileMenu = ref(false);
    return {
      menu: [],
      leads: 0,
      leadsRange: 50,
      mobileMenu
    };
  },
  created() {
    this.menu = this.$router.getRoutes().filter((r) => r.meta.icon).map((r) => ({
      path: r.path,
      ...r.meta
    }));
  }
};
const _hoisted_1 = { class: "col-12 col-md-auto flex items-center justify-sm-end justify-md-start" };
const _hoisted_2 = { class: "actions col-auto row items-center justify-end" };
const _hoisted_3 = { class: "column full-width" };
const _hoisted_4 = { class: "text-black row justify-between" };
const _hoisted_5 = { class: "col-auto pr-30" };
const _hoisted_6 = { class: "col-auto" };
const _hoisted_7 = { class: "flex no-wrap" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProfileChip = resolveComponent("ProfileChip");
  const _component_ProfileMenu = resolveComponent("ProfileMenu");
  return openBlock(), createBlock(QHeader, {
    reveal: "",
    class: "app-bar bg-primary q-px-sm-md q-px-md-lg"
  }, {
    default: withCtx(() => [
      createVNode(QToolbar, { class: "main-menu a__list justify-between items-center full-width px-30" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(QToolbarTitle, { class: "col col-md-auto no-padding" }, {
              default: withCtx(() => [
                createVNode(QImg, {
                  src: _imports_0,
                  width: "150px",
                  height: "auto",
                  class: "logo"
                })
              ]),
              _: 1
            }),
            createVNode(QList, {
              dense: "",
              class: "col-auto h__list nav items-center pl-30"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.menu, (item) => {
                  return openBlock(), createBlock(QItem, {
                    key: item,
                    dense: "",
                    replace: "",
                    to: item.path,
                    class: "no-padding mr-20"
                  }, {
                    default: withCtx(() => [
                      createVNode(QIcon, {
                        name: item.icon,
                        size: "27px",
                        color: "dark",
                        class: "icon-button"
                      }, null, 8, ["name"])
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128)),
                createVNode(QItem, { class: "md-hide lg-hide xl-hide" }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      "fab-mini": "",
                      flat: "",
                      padding: "0px",
                      icon: "menu",
                      "text-color": "black",
                      onClick: _cache[0] || (_cache[0] = ($event) => $setup.mobileMenu = !$setup.mobileMenu)
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_2, [
            createVNode(Transition, {
              "enter-active-class": "animated backInDown",
              "leave-active-class": "animated backOutUp"
            }, {
              default: withCtx(() => [
                _ctx.$q.screen.width > 768 || $setup.mobileMenu ? (openBlock(), createBlock(QList, {
                  key: 0,
                  dense: "",
                  class: "a__list"
                }, {
                  default: withCtx(() => [
                    createVNode(QItem, { class: "no-padding text-left" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          to: "/packages",
                          label: _ctx.$t("packages"),
                          ripple: false,
                          flat: "",
                          dense: "",
                          color: "black",
                          class: "no-padding"
                        }, null, 8, ["label"])
                      ]),
                      _: 1
                    }),
                    createVNode(QItem, { class: "no-padding" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          to: "/get-leads",
                          label: _ctx.$t("get_leads"),
                          ripple: false,
                          flat: "",
                          dense: "",
                          color: "black",
                          class: "no-padding"
                        }, {
                          default: withCtx(() => [
                            createVNode(QBadge, {
                              color: "red",
                              class: "q-ml-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("new")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["label"])
                      ]),
                      _: 1
                    }),
                    createVNode(QItem, { class: "leads-counter no-padding" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3, [
                          createBaseVNode("div", _hoisted_4, [
                            createBaseVNode("div", _hoisted_5, toDisplayString(_ctx.$t("my_leads")), 1),
                            createBaseVNode("div", _hoisted_6, toDisplayString($setup.leads) + " | " + toDisplayString($setup.leadsRange), 1)
                          ]),
                          createVNode(QLinearProgress, {
                            value: "0.1",
                            color: "primary",
                            rounded: "",
                            class: "block q-mt-sm q-mx-none"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(QItem, { class: "no-padding" }, {
                      default: withCtx(() => [
                        createVNode(QCard, {
                          dense: "",
                          flat: "",
                          bordered: "",
                          class: "profile-card full-width bg-transparent"
                        }, {
                          default: withCtx(() => [
                            createVNode(QCardSection, { class: "no-padding" }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_7, [
                                  createVNode(QBtn, {
                                    ripple: false,
                                    "text-color": "black",
                                    dense: "",
                                    flat: "",
                                    icon: "quiz",
                                    class: "faq-btn col-auto no-padding"
                                  }),
                                  createVNode(QBtn, {
                                    ripple: false,
                                    align: "left",
                                    flat: "",
                                    dense: "",
                                    "text-color": "black",
                                    class: "profile-menu-btn"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ProfileChip),
                                      createVNode(QMenu, {
                                        dark: "",
                                        class: "sm-hide"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ProfileMenu)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(_component_ProfileMenu, { class: "profile-menu md-hide lg-hide xl-hide q-mt-md no-padding" })
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
                })) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var AppBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d630ed38"]]);
export { AppBar as A };
