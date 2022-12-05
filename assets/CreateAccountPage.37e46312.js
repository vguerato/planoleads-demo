import { Q as QInput } from "./QInput.f7213602.js";
import { Q as QBtn } from "./QBtn.a17df556.js";
import { Q as QForm } from "./QForm.10b7ef36.js";
import { Q as QPage } from "./QPage.d17d76d8.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.557dca74.js";
import { _ as _export_sfc, r as ref, k as openBlock, l as createBlock, m as withCtx, C as createBaseVNode, f as createVNode, E as toDisplayString, D as createTextVNode, G as pushScopeId, H as popScopeId } from "./index.cf036711.js";
import "./use-key-composition.e6149e28.js";
import "./use-dark.8fb57865.js";
import "./render.ebc3bf11.js";
import "./use-form.e9a257fc.js";
import "./focus-manager.d6507951.js";
import "./dom.6171126e.js";
var CreateAccountPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "CreateAccountPage",
  setup() {
    const data = ref({
      name: null,
      phone: null,
      email: null,
      password: null
    });
    const { t } = useI18n();
    return {
      t,
      data
    };
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-6673f205"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "row items-center justify-center window-height" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col-0 col-md-8 sm-hide full-height bg-create-acccount" }, null, -1));
const _hoisted_3 = { class: "col-12 col-md-4 q-px-xl row justify-center items-center full-height" };
const _hoisted_4 = { class: "text-bold text-h5 q-mb-xl" };
const _hoisted_5 = { class: "q-mb-xl" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, null, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createVNode(QForm, {
            autofocus: "",
            greedy: "",
            class: "col-12 col-md-11 col-lg-8"
          }, {
            default: withCtx(() => [
              createBaseVNode("h1", _hoisted_4, toDisplayString(_ctx.$t("createAccountPage.title")), 1),
              createVNode(QInput, {
                modelValue: $setup.data.name,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.data.name = $event),
                outlined: "",
                label: $setup.t("name"),
                class: "q-mb-md"
              }, null, 8, ["modelValue", "label"]),
              createVNode(QInput, {
                modelValue: $setup.data.phone,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.data.phone = $event),
                outlined: "",
                label: $setup.t("phone"),
                class: "q-mb-md"
              }, null, 8, ["modelValue", "label"]),
              createVNode(QInput, {
                modelValue: $setup.data.email,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.data.email = $event),
                outlined: "",
                label: "Email",
                class: "q-mb-md"
              }, null, 8, ["modelValue"]),
              createVNode(QInput, {
                modelValue: $setup.data.password,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.data.password = $event),
                outlined: "",
                label: $setup.t("password"),
                class: "q-mb-md"
              }, null, 8, ["modelValue", "label"]),
              createVNode(QInput, {
                outlined: "",
                label: $setup.t("createAccountPage.confirmPassword"),
                class: "q-mb-md"
              }, null, 8, ["label"]),
              createVNode(QBtn, {
                flat: "",
                "text-color": "white",
                label: $setup.t("createAccountPage.register"),
                class: "bg-primary full-width q-mb-lg"
              }, null, 8, ["label"]),
              createBaseVNode("p", _hoisted_5, [
                createTextVNode(toDisplayString(_ctx.$t("createAccountPage.alreadyRegistered")) + " ", 1),
                createBaseVNode("a", {
                  role: "button",
                  class: "text-bold text-primary",
                  onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$router.push("login"))
                }, toDisplayString(_ctx.$t("createAccountPage.register")), 1)
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
var CreateAccountPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6673f205"]]);
export { CreateAccountPage as default };
