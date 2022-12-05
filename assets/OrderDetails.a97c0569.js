import { a as QCardSection, Q as QCard } from "./QCard.848bd264.js";
import { Q as QSeparator } from "./QSeparator.05e99626.js";
import { u as useOrderStore } from "./order-store.945621b5.js";
import { _ as _export_sfc, k as openBlock, l as createBlock, m as withCtx, f as createVNode, C as createBaseVNode, D as createTextVNode, E as toDisplayString, am as renderSlot } from "./index.cf036711.js";
const _sfc_main = {
  name: "OrderDetails",
  props: ["id"],
  setup(props, context) {
    const orderStore = useOrderStore();
    const order = orderStore.orders.find((o) => o.id === parseInt(props.id));
    if (!order) {
      context.emit("close-dialog");
    }
    return {
      order
    };
  }
};
const _hoisted_1 = { class: "text-subtitle1" };
const _hoisted_2 = { class: "row justify-between text-grey-8" };
const _hoisted_3 = { class: "col-12 col-md" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_5 = { class: "col-12 col-md-5" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_7 = { class: "row justify-between text-grey-8" };
const _hoisted_8 = { class: "col-12 col-md" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_10 = { class: "col-12 col-md-5" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_12 = { class: "text-h6" };
const _hoisted_13 = { class: "row justify-between q-mb-md" };
const _hoisted_14 = { class: "col-auto" };
const _hoisted_15 = { class: "col-auto" };
const _hoisted_16 = { class: "text-grey-8" };
const _hoisted_17 = { class: "row justify-between items-center q-mb-md" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "col-auto" }, [
  /* @__PURE__ */ createBaseVNode("strong", null, "CRM Plano Leads")
], -1);
const _hoisted_19 = { class: "col-auto" };
const _hoisted_20 = { class: "row justify-between items-center q-mb-md" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "col-auto" }, [
  /* @__PURE__ */ createBaseVNode("strong", null, "Total")
], -1);
const _hoisted_22 = { class: "col-auto" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QCard, {
    flat: "",
    class: "q-px-md"
  }, {
    default: withCtx(() => [
      createVNode(QCardSection, null, {
        default: withCtx(() => [
          createBaseVNode("h2", _hoisted_1, [
            createTextVNode(toDisplayString(_ctx.$t("order")) + " ", 1),
            createBaseVNode("b", null, "#" + toDisplayString($setup.order.id), 1)
          ]),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("p", null, [
                createTextVNode(toDisplayString(_ctx.$t("paymentMethod")) + ":", 1),
                _hoisted_4,
                createBaseVNode("b", null, toDisplayString($setup.order.paymentMethod), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("p", null, [
                createTextVNode(toDisplayString(_ctx.$t("orderDate")) + ":", 1),
                _hoisted_6,
                createBaseVNode("b", null, toDisplayString($setup.order.orderDate), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("p", null, [
                createTextVNode(" E-mail:"),
                createBaseVNode("b", null, [
                  _hoisted_9,
                  createTextVNode(toDisplayString($setup.order.origin), 1)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("p", null, [
                createTextVNode(toDisplayString(_ctx.$t("status")) + ":", 1),
                _hoisted_11,
                createBaseVNode("b", null, toDisplayString($setup.order.status), 1)
              ])
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(QCardSection, { class: "no-padding no-margin" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "payment")
        ]),
        _: 3
      }),
      createVNode(QSeparator),
      createVNode(QCardSection, null, {
        default: withCtx(() => [
          createBaseVNode("h3", _hoisted_12, toDisplayString(_ctx.$t("orderResume")), 1),
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("strong", null, toDisplayString($setup.order.plan), 1)
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("strong", null, "R$ " + toDisplayString($setup.order.price), 1)
            ])
          ]),
          createBaseVNode("p", _hoisted_16, toDisplayString($setup.order.description), 1),
          createBaseVNode("div", _hoisted_17, [
            _hoisted_18,
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("strong", null, toDisplayString($setup.order.crm > 0 ? `R$ ${$setup.order.crm}` : "Gr\xE1tis"), 1)
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(QSeparator, { class: "q-my-sm" }),
      createVNode(QCardSection, { class: "q-py-sm" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_20, [
            _hoisted_21,
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("strong", null, "R$ " + toDisplayString($setup.order.price), 1)
            ])
          ])
        ]),
        _: 1
      })
    ]),
    _: 3
  });
}
var OrderDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { OrderDetails as O };
