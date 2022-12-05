import { Q as QTr, a as QTd, b as QTable } from "./QTable.22fe7f0a.js";
import { Q as QItemLabel } from "./QItemLabel.68b53514.js";
import { Q as QItemSection } from "./QItemSection.1a39d5f6.js";
import { a as QList, Q as QItem } from "./QList.1f9c1576.js";
import { Q as QBtn } from "./QBtn.a17df556.js";
import { Q as QCard } from "./QCard.848bd264.js";
import { Q as QDialog } from "./QDialog.d0e28515.js";
import { Q as QPage } from "./QPage.d17d76d8.js";
import { u as useOrderStore } from "./order-store.945621b5.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.557dca74.js";
import { O as OrderDetails } from "./OrderDetails.a97c0569.js";
import { _ as _export_sfc, r as ref, k as openBlock, l as createBlock, m as withCtx, n as resolveComponent, C as createBaseVNode, E as toDisplayString, f as createVNode, B as createElementBlock, I as renderList, F as Fragment, K as createCommentVNode, au as normalizeClass, D as createTextVNode } from "./index.cf036711.js";
import "./render.ebc3bf11.js";
import "./QSeparator.05e99626.js";
import "./use-dark.8fb57865.js";
import "./QSelect.ad12804a.js";
import "./use-key-composition.e6149e28.js";
import "./use-form.e9a257fc.js";
import "./focus-manager.d6507951.js";
import "./QMenu.b44e60d8.js";
import "./selection.b5404565.js";
import "./use-model-toggle.01aba15e.js";
import "./focusout.5290e48a.js";
import "./scroll.195f9007.js";
import "./dom.6171126e.js";
import "./QLinearProgress.1753826d.js";
import "./QCheckbox.26d27338.js";
import "./use-fullscreen.afb20d4f.js";
import "./index.2c9b47bb.js";
const _sfc_main = {
  name: "OrdersPage",
  components: { OrderDetails },
  setup() {
    const { t } = useI18n();
    const orderStore = useOrderStore();
    const orders = orderStore.mock();
    const columns = [
      {
        name: "id",
        field: "id",
        format: (val) => `#${val}`,
        align: "left",
        slot: true
      },
      {
        name: "plan",
        field: "plan",
        align: "left",
        classes: "text-weight-medium"
      },
      {
        name: "price",
        field: "price",
        format: (val) => `R$ ${val}`,
        align: "left"
      },
      {
        name: "paymentMethod",
        field: "paymentMethod",
        align: "left",
        format: (val) => t(val)
      },
      {
        name: "status",
        field: "status",
        align: "left",
        classes: (col) => col.value === "complete" ? "text-positive" : "text-negative"
      },
      {
        name: "orderDate",
        field: "orderDate",
        align: "left"
      }
    ];
    const orderDetails = ref(false);
    return {
      columns,
      orders,
      selectedOrder: null,
      orderDetails
    };
  },
  methods: {
    getClasses(col) {
      if (col.classes === void 0) {
        return;
      }
      if (col.classes instanceof Function) {
        return col.classes(col);
      }
      return col.classes;
    },
    showOrderDetails(orderId) {
      this.selectedOrder = orderId;
      this.orderDetails = true;
    }
  }
};
const _hoisted_1 = { class: "text-h6 q-my-none q-mb-md" };
const _hoisted_2 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_OrderDetails = resolveComponent("OrderDetails");
  return openBlock(), createBlock(QPage, null, {
    default: withCtx(() => [
      createBaseVNode("h1", _hoisted_1, toDisplayString($setup.orders.length) + " " + toDisplayString(_ctx.$t("orders")), 1),
      createVNode(QTable, {
        "hide-header": "",
        flat: "",
        columns: $setup.columns,
        rows: $setup.orders,
        grid: _ctx.$q.screen.width < 768,
        class: "c__table"
      }, {
        body: withCtx((props) => [
          createVNode(QTr, {
            props,
            class: "q-my-sm q-py-lg"
          }, {
            default: withCtx(() => [
              createVNode(QTd, {
                key: "id",
                props,
                class: "text-weight-medium"
              }, {
                default: withCtx(() => [
                  createBaseVNode("a", {
                    role: "button",
                    class: "text-primary",
                    onClick: ($event) => $options.showOrderDetails(props.row.id)
                  }, "#" + toDisplayString(props.row.id), 9, _hoisted_2)
                ]),
                _: 2
              }, 1032, ["props"]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.cols.filter((col) => col.slot === void 0), (col) => {
                return openBlock(), createBlock(QTd, {
                  key: col.name,
                  class: normalizeClass($options.getClasses(col))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(col.value), 1)
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
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
              createVNode(QList, { dense: "" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(props.cols.filter((col) => col.slot === void 0), (col) => {
                    return openBlock(), createBlock(QItem, {
                      key: col.name,
                      class: "q-my-sm"
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createVNode(QItemLabel, { caption: "" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(col.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QItemLabel, {
                              class: normalizeClass($options.getClasses(col) + " text-capitalize")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(col.value), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 2
              }, 1024),
              createVNode(QBtn, {
                label: _ctx.$t("details"),
                flat: "",
                "text-color": "primary",
                class: "full-width bg-blue-1",
                onClick: ($event) => $options.showOrderDetails(props.row.id)
              }, null, 8, ["label", "onClick"])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      }, 8, ["columns", "rows", "grid"]),
      createVNode(QDialog, {
        modelValue: $setup.orderDetails,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.orderDetails = $event)
      }, {
        default: withCtx(() => [
          $setup.selectedOrder !== null ? (openBlock(), createBlock(_component_OrderDetails, {
            key: 0,
            id: $setup.selectedOrder,
            class: "order-details-dialog"
          }, null, 8, ["id"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  });
}
var OrdersPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { OrdersPage as default };
