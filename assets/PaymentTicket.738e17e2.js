import { Q as QSeparator } from "./QSeparator.05e99626.js";
import { Q as QBtn } from "./QBtn.a17df556.js";
import { Q as QPage } from "./QPage.d17d76d8.js";
import { O as OrderDetails } from "./OrderDetails.a97c0569.js";
import { u as useOrderStore } from "./order-store.945621b5.js";
import { _ as _export_sfc, j as defineComponent, k as openBlock, l as createBlock, m as withCtx, n as resolveComponent, C as createBaseVNode, f as createVNode, D as createTextVNode } from "./index.cf036711.js";
import "./use-dark.8fb57865.js";
import "./render.ebc3bf11.js";
import "./dom.6171126e.js";
import "./QCard.848bd264.js";
import "./index.2c9b47bb.js";
const _sfc_main = defineComponent({
  name: "PaymentTicket",
  components: { OrderDetails },
  setup() {
    const orderStore = useOrderStore();
    console.log("orders", orderStore.mock());
    return {
      id: 1
    };
  }
});
const _hoisted_1 = { class: "row justify-center q-py-lg" };
const _hoisted_2 = { class: "col-12 col-md-6" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", { class: "text-primary text-uppercase text-center" }, "Vamos Decolar!", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h1", { class: "text-h4 text-center text-weight-bold q-mt-none q-mb-xl" }, " Obrigado. Seu pedido foi confirmado! ", -1);
const _hoisted_5 = { class: "text-center q-py-lg text-legend" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", { class: "text-red text-weight-bold" }, [
  /* @__PURE__ */ createTextVNode(" ATEN\xC7\xC3O: o boleto demora at\xE9 3 horas para ser registrado com todos os bancos."),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" Ap\xF3s este prazo, voc\xEA poder\xE1 pag\xE1-lo via internet banking, ag\xEAncias banc\xE1rias ou lot\xE9ricas. ")
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, ' Por favor, clique no bot\xE3o "Baixar boleto" para realizar o download do Bol\xE9to Banc\xE1rio ', -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, " Ap\xF3s recebermos a confirma\xE7\xE3o do pagamento, seu pedido ser\xE1 processado. ", -1);
const _hoisted_9 = { class: "row justify-between q-ma-lg" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "col-12 col-md-6" }, [
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
const _hoisted_11 = { class: "col-12 col-md-auto" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_OrderDetails = resolveComponent("OrderDetails");
  return openBlock(), createBlock(QPage, { padding: "" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          _hoisted_4,
          createVNode(_component_OrderDetails, {
            id: "1",
            class: "q-mx-lg"
          }, {
            payment: withCtx(() => [
              createVNode(QSeparator),
              createBaseVNode("div", _hoisted_5, [
                _hoisted_6,
                _hoisted_7,
                createVNode(QBtn, {
                  label: "Baixar Boleto",
                  unelevated: "",
                  color: "primary",
                  class: "q-mx-auto q-my-lg"
                }),
                _hoisted_8
              ])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_9, [
            _hoisted_10,
            createBaseVNode("div", _hoisted_11, [
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
var PaymentTicket = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PaymentTicket as default };
