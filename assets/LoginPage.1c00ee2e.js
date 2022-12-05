import { Q as QBtn } from "./QBtn.a17df556.js";
import { Q as QInput } from "./QInput.f7213602.js";
import { Q as QForm } from "./QForm.10b7ef36.js";
import { Q as QCard, a as QCardSection } from "./QCard.848bd264.js";
import { Q as QDialog } from "./QDialog.d0e28515.js";
import { Q as QPage } from "./QPage.d17d76d8.js";
import { _ as _export_sfc, r as ref, A as useAuthStore, k as openBlock, l as createBlock, m as withCtx, C as createBaseVNode, f as createVNode, E as toDisplayString, D as createTextVNode, B as createElementBlock, K as createCommentVNode, G as pushScopeId, H as popScopeId } from "./index.cf036711.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.557dca74.js";
import "./render.ebc3bf11.js";
import "./dom.6171126e.js";
import "./use-key-composition.e6149e28.js";
import "./use-dark.8fb57865.js";
import "./use-form.e9a257fc.js";
import "./focus-manager.d6507951.js";
import "./focusout.5290e48a.js";
import "./use-model-toggle.01aba15e.js";
import "./scroll.195f9007.js";
var LoginPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "LoginPage",
  setup() {
    const { t } = useI18n();
    const email = ref("");
    const password = ref("");
    const passwordHidden = ref(true);
    const validationError = ref("");
    const recoverPasswordModal = ref(false);
    const recoverPasswordEmail = ref("");
    const auth = useAuthStore();
    return {
      t,
      email,
      password,
      passwordHidden,
      validationError,
      recoverPasswordModal,
      recoverPasswordEmail,
      auth
    };
  },
  methods: {
    login() {
      this.auth.login(this.email, this.password);
      this.$router.push("/");
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-78c87acf"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "row items-center justify-center window-height" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col-0 col-md-8 sm-hide full-height bg-login" }, null, -1));
const _hoisted_3 = { class: "col-12 col-md-4 q-px-xl row justify-center items-center full-height" };
const _hoisted_4 = { class: "text-bold text-h4 q-mb-sm" };
const _hoisted_5 = { class: "q-mb-xl" };
const _hoisted_6 = {
  key: 0,
  class: "text-subtitle"
};
const _hoisted_7 = { class: "text-h4 text-bold q-ma-none q-mb-md" };
const _hoisted_8 = { class: "flex justify-end" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { class: "full-height" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createVNode(QForm, {
            autofocus: "",
            greedy: "",
            class: "col-12 col-md-11 col-lg-8",
            onSubmit: $options.login
          }, {
            default: withCtx(() => [
              createBaseVNode("h1", _hoisted_4, toDisplayString(_ctx.$t("loginPage.title")), 1),
              createBaseVNode("p", _hoisted_5, [
                createTextVNode(toDisplayString(_ctx.$t("loginPage.unregistered")) + " ", 1),
                createVNode(QBtn, {
                  label: $setup.t("loginPage.register"),
                  ripple: false,
                  flat: "",
                  dense: "",
                  "text-color": "primary",
                  class: "text-bold",
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push("create-account"))
                }, null, 8, ["label"])
              ]),
              createVNode(QInput, {
                modelValue: $setup.email,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.email = $event),
                label: $setup.t("username"),
                type: "email",
                outlined: "",
                class: "q-mb-sm"
              }, null, 8, ["modelValue", "label"]),
              createVNode(QInput, {
                modelValue: $setup.password,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.password = $event),
                label: $setup.t("password"),
                type: "password",
                outlined: "",
                class: "q-mb-sm"
              }, null, 8, ["modelValue", "label"]),
              createVNode(QBtn, {
                label: $setup.t("loginPage.missingPassword"),
                flat: "",
                dense: "",
                "text-color": "primary",
                class: "d-block q-mb-md text-light q-mb-lg",
                onClick: _cache[3] || (_cache[3] = ($event) => $setup.recoverPasswordModal = true)
              }, null, 8, ["label"]),
              createVNode(QBtn, {
                type: "submit",
                flat: "",
                "text-color": "white",
                label: $setup.t("loginPage.signIn"),
                class: "bg-primary full-width q-mb-lg"
              }, null, 8, ["label"]),
              $setup.validationError ? (openBlock(), createElementBlock("p", _hoisted_6, toDisplayString($setup.validationError), 1)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["onSubmit"])
        ])
      ]),
      createVNode(QDialog, {
        modelValue: $setup.recoverPasswordModal,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.recoverPasswordModal = $event)
      }, {
        default: withCtx(() => [
          createVNode(QCard, { flat: "" }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "q-pa-xl" }, {
                default: withCtx(() => [
                  createBaseVNode("h2", _hoisted_7, toDisplayString(_ctx.$t("loginPage.recoverPassword")), 1),
                  createVNode(QForm, {
                    autofocus: "",
                    greedy: ""
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("p", null, toDisplayString(_ctx.$t("loginPage.recoverPasswordInstructions")), 1),
                      createVNode(QInput, {
                        modelValue: $setup.recoverPasswordEmail,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.recoverPasswordEmail = $event),
                        label: "Email",
                        type: "email",
                        outlined: "",
                        class: "q-mb-lg"
                      }, null, 8, ["modelValue"]),
                      createBaseVNode("div", _hoisted_8, [
                        createVNode(QBtn, {
                          label: $setup.t("loginPage.sendInstructions"),
                          flat: "",
                          "text-color": "white",
                          class: "bg-primary"
                        }, null, 8, ["label"]),
                        createVNode(QBtn, {
                          label: $setup.t("cancel"),
                          flat: "",
                          onClick: _cache[5] || (_cache[5] = ($event) => $setup.recoverPasswordModal = false)
                        }, null, 8, ["label"])
                      ])
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
      }, 8, ["modelValue"])
    ]),
    _: 1
  });
}
var LoginPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-78c87acf"]]);
export { LoginPage as default };
