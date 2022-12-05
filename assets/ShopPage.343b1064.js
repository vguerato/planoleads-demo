import { Q as QToolbarTitle, a as QToolbar } from "./QToolbar.bcc41272.js";
import { Q as QBadge } from "./QBadge.6e5318d9.js";
import { Q as QBtn, a as QIcon } from "./QBtn.a17df556.js";
import { Q as QInput } from "./QInput.f7213602.js";
import { Q as QSelect } from "./QSelect.ad12804a.js";
import { u as useConfigStore, Q as QPagination } from "./config-store.dee819a4.js";
import { Q as QAvatar } from "./QAvatar.840f1c75.js";
import { Q as QItemSection } from "./QItemSection.1a39d5f6.js";
import { Q as QItem } from "./QList.1f9c1576.js";
import { Q as QTr, a as QTd, b as QTable } from "./QTable.22fe7f0a.js";
import { Q as QCard, a as QCardSection } from "./QCard.848bd264.js";
import { Q as QSeparator } from "./QSeparator.05e99626.js";
import { Q as QCardActions } from "./QCardActions.b033486c.js";
import { Q as QDialog } from "./QDialog.d0e28515.js";
import { Q as QPage } from "./QPage.d17d76d8.js";
import { A as useAuthStore, a2 as defineStore, _ as _export_sfc, r as ref, c as computed, k as openBlock, l as createBlock, m as withCtx, f as createVNode, D as createTextVNode, E as toDisplayString, K as createCommentVNode, C as createBaseVNode } from "./index.cf036711.js";
import { u as useLeadStore } from "./lead-store.188e34bd.js";
import "./render.ebc3bf11.js";
import "./dom.6171126e.js";
import "./use-key-composition.e6149e28.js";
import "./use-dark.8fb57865.js";
import "./use-form.e9a257fc.js";
import "./focus-manager.d6507951.js";
import "./QItemLabel.68b53514.js";
import "./QMenu.b44e60d8.js";
import "./selection.b5404565.js";
import "./use-model-toggle.01aba15e.js";
import "./focusout.5290e48a.js";
import "./scroll.195f9007.js";
import "./QLinearProgress.1753826d.js";
import "./QCheckbox.26d27338.js";
import "./use-fullscreen.afb20d4f.js";
import "./index.2c9b47bb.js";
const authStore = useAuthStore();
const user = authStore.user;
const cartKey = `${user.id}_cart`;
const useCartStore = defineStore("cart", {
  state: () => {
    var _a;
    return {
      cart: (_a = JSON.parse(window.localStorage.getItem(cartKey))) != null ? _a : []
    };
  },
  getters: {
    size(state) {
      return state.cart.length;
    },
    isEmpty(state) {
      return state.cart.length === 0;
    }
  },
  actions: {
    commit() {
      window.localStorage.setItem(cartKey, JSON.stringify(this.cart));
    },
    has(item) {
      return this.cart.includes(item);
    },
    add(item) {
      if (!this.has(item)) {
        this.cart.push(item);
        this.commit();
      }
    },
    remove(item) {
      if (this.has(item)) {
        this.cart.splice(this.cart.indexOf(item), 1);
        this.commit();
      }
    },
    clear() {
      this.cart = [];
      this.commit();
    }
  }
});
const _sfc_main = {
  name: "ShopPage",
  setup() {
    const leadStore = useLeadStore();
    const cartStore = useCartStore();
    const configStore = useConfigStore();
    const leads = leadStore.mock();
    const search = ref("");
    const sortOptions = ["id"];
    const rowsPerPageOptions = [4, 12, 24, 48, 100];
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 12
    });
    const showCart = ref(false);
    return {
      leads,
      cartStore,
      configStore,
      search,
      sortOptions,
      rowsPerPageOptions,
      pages: computed(
        () => Math.ceil(leads.length / pagination.value.rowsPerPage)
      ),
      pagination,
      showCart
    };
  },
  methods: {
    shop(id) {
      if (!this.cartStore.has(id)) {
        this.cartStore.add(id);
      } else {
        this.cartStore.remove(id);
      }
    },
    removeItem(id) {
      this.cartStore.remove(id);
    },
    clearCart() {
      this.cartStore.clear();
      this.showCart = false;
    },
    getCart() {
      return this.leads.filter((lead) => this.cartStore.has(lead.id));
    }
  }
};
const _hoisted_1 = { class: "full-width row items-center justify-end q-col-gutter-sm q-mb-md" };
const _hoisted_2 = { class: "col-12 col-md-auto" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "col sm-hide" }, null, -1);
const _hoisted_4 = { class: "col col-md-auto" };
const _hoisted_5 = { class: "col-auto sm-hide" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "text-subitle1 sm-hide" }, "Itens por P\xE1gina:", -1);
const _hoisted_7 = { class: "col-auto sm-hide" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", { class: "text-subitle1 sm-hide" }, "Ordenar por:", -1);
const _hoisted_9 = { class: "col-auto sm-hide px-30" };
const _hoisted_10 = { class: "col-auto sm-hide" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "text-weight-medium" }, "Nome:... Tel:... Email:...", -1);
const _hoisted_12 = { class: "q-pa-sm col-12 col-md-3 grid-style-transition" };
const _hoisted_13 = { class: "text-grey-7" };
const _hoisted_14 = { class: "text-h6" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", { class: "bar-separator" }, null, -1);
const _hoisted_16 = { class: "text-primary" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { padding: "" }, {
    default: withCtx(() => [
      createVNode(QToolbar, { class: "pb-25" }, {
        default: withCtx(() => [
          createVNode(QToolbarTitle, null, {
            default: withCtx(() => [
              createTextVNode("Encontre os melhores leads " + toDisplayString($setup.leads.length), 1)
            ]),
            _: 1
          }),
          createVNode(QBtn, {
            label: "Finalizar pedido",
            icon: "shopping_cart",
            color: "primary",
            flat: "",
            dense: "",
            class: "hide-label",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.showCart = !$setup.showCart)
          }, {
            default: withCtx(() => [
              $setup.cartStore.size > 0 ? (openBlock(), createBlock(QBadge, {
                key: 0,
                label: $setup.cartStore.size,
                color: "red",
                class: "q-ml-sm"
              }, null, 8, ["label"])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(QTable, {
        pagination: $setup.pagination,
        "onUpdate:pagination": _cache[6] || (_cache[6] = ($event) => $setup.pagination = $event),
        rows: $setup.leads,
        filter: $setup.search,
        grid: _ctx.$q.screen.width < 768 || $setup.configStore.cartGrid,
        "hide-header": "",
        "hide-bottom": _ctx.$q.screen.width > 768,
        flat: "",
        class: "c__table"
      }, {
        top: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QInput, {
                modelValue: $setup.search,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.search = $event),
                label: "Pesquise",
                outlined: "",
                dense: ""
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, { name: "search" })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _hoisted_3,
            createBaseVNode("div", _hoisted_4, [
              createVNode(QBtn, {
                label: "Filtrar",
                icon: "filter_alt",
                color: "primary",
                flat: "",
                class: "full-width pr-30"
              })
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(QSelect, {
                modelValue: $setup.pagination.rowsPerPage,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.pagination.rowsPerPage = $event),
                options: $setup.rowsPerPageOptions,
                color: "primary",
                outlined: "",
                dense: "",
                class: "bg-white"
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, {
                    name: "unfold_more",
                    color: "primary",
                    class: "md-hide"
                  }),
                  _hoisted_6
                ]),
                _: 1
              }, 8, ["modelValue", "options"])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(QSelect, {
                modelValue: $setup.pagination.sortBy,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.pagination.sortBy = $event),
                options: $setup.sortOptions,
                dense: "",
                class: "bg-white"
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, {
                    name: "sort_by_alpha",
                    color: "primary",
                    class: "md-hide"
                  }),
                  _hoisted_8
                ]),
                _: 1
              }, 8, ["modelValue", "options"])
            ]),
            createBaseVNode("div", _hoisted_9, [
              createVNode(QBtn, {
                icon: $setup.configStore.cartGrid ? "view_list" : "grid_view",
                color: "primary",
                flat: "",
                dense: "",
                onClick: _cache[4] || (_cache[4] = ($event) => $setup.configStore.set("cartGrid", !$setup.configStore.cartGrid))
              }, null, 8, ["icon"])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createVNode(QPagination, {
                modelValue: $setup.pagination.page,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.pagination.page = $event),
                max: $setup.pages,
                flat: "",
                "active-design": "flat",
                "active-color": "grey",
                "direction-links": "",
                "boundary-links": ""
              }, null, 8, ["modelValue", "max"])
            ])
          ])
        ]),
        body: withCtx((props) => [
          createVNode(QTr, { props }, {
            default: withCtx(() => [
              createVNode(QTd, {
                key: "name",
                "auto-width": ""
              }, {
                default: withCtx(() => [
                  createVNode(QItem, { dense: "" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QAvatar, { color: "grey-3" }, {
                            default: withCtx(() => [
                              createTextVNode("JR")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, {
                        side: "",
                        class: "text-dark column"
                      }, {
                        default: withCtx(() => [
                          _hoisted_11
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(QTd, {
                key: "phone",
                "auto-width": ""
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    label: "...",
                    "no-wrap": "",
                    dense: "",
                    outline: "",
                    icon: "img:https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png",
                    color: "green"
                  })
                ]),
                _: 1
              }),
              createVNode(QTd, {
                key: "address",
                "auto-width": ""
              }, {
                default: withCtx(() => [
                  createVNode(QItem, null, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          createVNode(QIcon, {
                            color: "grey-7",
                            name: "location_city"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.address), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              createVNode(QTd, { key: "type" }, {
                default: withCtx(() => [
                  createVNode(QItem, { dense: "" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          createVNode(QIcon, {
                            color: "grey-7",
                            name: "description"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.type), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              createVNode(QTd, {
                key: "createdAt",
                "auto-width": ""
              }, {
                default: withCtx(() => [
                  createVNode(QItem, { dense: "" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          createVNode(QIcon, {
                            color: "grey-5",
                            name: "timer"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, {
                        side: "",
                        class: "text-grey-6"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("H\xE1 10min atr\xE1s")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(QTd, { "auto-width": "" }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    color: $setup.cartStore.has(props.row.id) ? "red-1" : "green-1",
                    unelevated: "",
                    round: "",
                    dense: "",
                    padding: "10px",
                    class: "full-width",
                    onClick: ($event) => $options.shop(props.row.id)
                  }, {
                    default: withCtx(() => [
                      createVNode(QIcon, {
                        name: $setup.cartStore.has(props.row.id) ? "delete" : "shopping_cart",
                        color: $setup.cartStore.has(props.row.id) ? "red-5" : "green"
                      }, null, 8, ["name", "color"])
                    ]),
                    _: 2
                  }, 1032, ["color", "onClick"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["props"])
        ]),
        item: withCtx((props) => [
          createBaseVNode("div", _hoisted_12, [
            createVNode(QCard, { flat: "" }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "q-py-sm" }, {
                  default: withCtx(() => [
                    createVNode(QItem, { dense: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QIcon, {
                              color: "grey-5",
                              name: "timer"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, {
                          side: "",
                          class: "text-grey-6"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("H\xE1 10min atr\xE1s")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(QSeparator),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QItem, { dense: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { avatar: "" }, {
                          default: withCtx(() => [
                            createVNode(QAvatar, { color: "grey-3" }, {
                              default: withCtx(() => [
                                createTextVNode("JR")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, {
                          side: "",
                          class: "text-dark column"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_13, toDisplayString(props.row.tag), 1),
                            createBaseVNode("strong", null, toDisplayString(props.row.email), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(QItem, null, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QIcon, {
                              color: "grey-7",
                              name: "location_city"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.address), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(QItem, { dense: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QIcon, {
                              color: "grey-7",
                              name: "description"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.type), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(QCardActions, { class: "justify-end q-py-lg q-px-xl" }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      icon: $setup.cartStore.has(props.row.id) ? "delete" : "shopping_cart",
                      label: $setup.cartStore.has(props.row.id) ? "Cancelar" : "Selecionar",
                      color: $setup.cartStore.has(props.row.id) ? "red-1" : "green-1",
                      unelevated: "",
                      class: "full-width",
                      "text-color": $setup.cartStore.has(props.row.id) ? "red" : "green",
                      onClick: ($event) => $options.shop(props.row.id)
                    }, null, 8, ["icon", "label", "color", "text-color", "onClick"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        _: 1
      }, 8, ["pagination", "rows", "filter", "grid", "hide-bottom"]),
      createVNode(QDialog, {
        modelValue: $setup.showCart,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.showCart = $event)
      }, {
        default: withCtx(() => [
          createVNode(QCard, {
            flat: "",
            class: "full-width"
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("h2", _hoisted_14, [
                    createTextVNode(" Pedido "),
                    _hoisted_15,
                    createBaseVNode("span", _hoisted_16, toDisplayString($setup.cartStore.size) + " leads", 1)
                  ]),
                  createVNode(QTable, {
                    rows: $options.getCart(),
                    flat: "",
                    "hide-header": "",
                    "hide-bottom": ""
                  }, {
                    body: withCtx((props) => [
                      createVNode(QTr, { props }, {
                        default: withCtx(() => [
                          createVNode(QTd, { "auto-width": "" }, {
                            default: withCtx(() => [
                              createVNode(QAvatar, {
                                color: "grey-3",
                                class: "no-margin"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("JR")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(QTd, { "auto-width": "" }, {
                            default: withCtx(() => [
                              createVNode(QItem, { dense: "" }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { side: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QIcon, {
                                        color: "grey-7",
                                        name: "location_city"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QItemSection, { side: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(props.row.address), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QTd, { "auto-width": "" }, {
                            default: withCtx(() => [
                              createVNode(QIcon, {
                                color: "grey-7",
                                size: "20px",
                                name: "description"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(QTd, { "auto-width": "" }, {
                            default: withCtx(() => [
                              createVNode(QItem, null, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { side: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QIcon, {
                                        color: "grey-5",
                                        name: "timer"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QItemSection, {
                                    side: "",
                                    class: "text-grey-6"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("H\xE1 10min atr\xE1s")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QItemSection, { side: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("em " + toDisplayString(props.row.tag), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QTd, { "auto-width": "" }, {
                            default: withCtx(() => [
                              createVNode(QBtn, {
                                icon: "delete",
                                color: "grey",
                                dense: "",
                                flat: "",
                                onClick: ($event) => $options.removeItem(props.row.id)
                              }, null, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    _: 1
                  }, 8, ["rows"])
                ]),
                _: 1
              }),
              createVNode(QCardActions, { class: "justify-between q-pa-lg" }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    label: "Cancelar",
                    flat: "",
                    onClick: $options.clearCart
                  }, null, 8, ["onClick"]),
                  createVNode(QBtn, {
                    label: "Confirmar Pedido",
                    color: "green",
                    unelevated: "",
                    to: "/checkout"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  });
}
var ShopPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ShopPage as default };
