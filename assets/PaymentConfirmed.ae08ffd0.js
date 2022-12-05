import { Q as QBtn } from "./QBtn.a17df556.js";
import { Q as QPage } from "./QPage.d17d76d8.js";
import { O as OrderDetails } from "./OrderDetails.a97c0569.js";
import { _ as _export_sfc, j as defineComponent, k as openBlock, l as createBlock, m as withCtx, n as resolveComponent, C as createBaseVNode, f as createVNode, D as createTextVNode } from "./index.cf036711.js";
import "./render.ebc3bf11.js";
import "./dom.6171126e.js";
import "./QCard.848bd264.js";
import "./use-dark.8fb57865.js";
import "./QSeparator.05e99626.js";
import "./order-store.945621b5.js";
import "./index.2c9b47bb.js";
var PaymentConfirmed_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "PaymentConfirmed",
  components: { OrderDetails },
  setup() {
    return {
      id: 1
    };
  }
});
const _hoisted_1 = { class: "row justify-center q-py-lg" };
const _hoisted_2 = { class: "col-12 col-md-6" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", { class: "text-primary text-uppercase text-center" }, "Vamos Decolar!", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h1", { class: "text-h4 text-center text-weight-bold q-mt-none q-mb-xl" }, " Obrigado. Seu pedido foi confirmado! ", -1);
const _hoisted_5 = { class: "row justify-between q-ma-lg" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "col-12 col-md-6" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "text-h6 text-weight-bold no-margin" }, " Ficou com alguma d\xFAvida? "),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" Entre em contato conosco pelo WhatsApp ou acesse "),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://suporte.planoleads.com.br",
      target: "blank",
      class: "text-primary text-weight-bold"
    }, "suporte.planoleads.com.br")
  ])
], -1);
const _hoisted_7 = { class: "col-12 col-md-auto" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_OrderDetails = resolveComponent("OrderDetails");
  return openBlock(), createBlock(QPage, {
    padding: "",
    class: "bg-order"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          _hoisted_4,
          createVNode(_component_OrderDetails, {
            id: "1",
            class: "q-mx-lg"
          }),
          createBaseVNode("div", _hoisted_5, [
            _hoisted_6,
            createBaseVNode("div", _hoisted_7, [
              createVNode(QBtn, {
                label: "Fale com a nossa equipe",
                dense: "",
                outline: "",
                icon: "img:https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png",
                color: "green"
              })
            ])
          ])
        ])
      ])
    ]),
    _: 1
  });
}
var PaymentConfirmed = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PaymentConfirmed as default };
