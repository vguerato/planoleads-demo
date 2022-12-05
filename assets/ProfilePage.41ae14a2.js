import { Q as QAvatar } from "./QAvatar.840f1c75.js";
import { Q as QBtn, a as QIcon } from "./QBtn.a17df556.js";
import { a as QCardSection, Q as QCard } from "./QCard.848bd264.js";
import { Q as QInput } from "./QInput.f7213602.js";
import { Q as QCardActions } from "./QCardActions.b033486c.js";
import { Q as QDialog } from "./QDialog.d0e28515.js";
import { Q as QPage } from "./QPage.d17d76d8.js";
import { Q as QForm } from "./QForm.10b7ef36.js";
import { _ as _export_sfc, r as ref, k as openBlock, l as createBlock, m as withCtx, f as createVNode, C as createBaseVNode, E as toDisplayString, n as resolveComponent, A as useAuthStore } from "./index.cf036711.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.557dca74.js";
import { _ as _imports_0 } from "./vguerato.76f2042f.js";
import "./render.ebc3bf11.js";
import "./dom.6171126e.js";
import "./use-dark.8fb57865.js";
import "./use-key-composition.e6149e28.js";
import "./use-form.e9a257fc.js";
import "./focus-manager.d6507951.js";
import "./focusout.5290e48a.js";
import "./use-model-toggle.01aba15e.js";
import "./scroll.195f9007.js";
const _sfc_main$3 = {
  name: "ChangeEmail",
  setup() {
    const email = ref("");
    return {
      email
    };
  }
};
const _hoisted_1$2 = { class: "text-h6" };
const _hoisted_2$1 = { class: "q-mt-lg" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QCard, {
    flat: "",
    class: "q-pa-md"
  }, {
    default: withCtx(() => [
      createVNode(QForm, {
        greedy: "",
        autofocus: ""
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, { class: "q-py-none" }, {
            default: withCtx(() => [
              createBaseVNode("h2", _hoisted_1$2, toDisplayString(_ctx.$t("changeEmailDialog.title")), 1),
              createVNode(QInput, {
                modelValue: $setup.email,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.email = $event),
                label: _ctx.$t("changeEmailDialog.newEmail"),
                "stack-label": ""
              }, null, 8, ["modelValue", "label"]),
              createBaseVNode("p", _hoisted_2$1, toDisplayString(_ctx.$t("changeEmailDialog.instructions")), 1)
            ]),
            _: 1
          }),
          createVNode(QCardActions, { class: "justify-end" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                label: _ctx.$t("changeEmailDialog.changeEmail"),
                flat: "",
                "text-color": "white",
                class: "bg-primary"
              }, null, 8, ["label"])
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
var ChangeEmail = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  name: "PasswordInput",
  props: ["value", "label", "validation"],
  setup() {
    const showPassword = ref(false);
    return {
      showPassword
    };
  },
  methods: {
    handleInput() {
      this.$emit("input", this.value);
    },
    blurInput() {
      this.$emit("blur", this);
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QInput, {
    ref: "input",
    type: $setup.showPassword ? "text" : "password",
    label: $props.label,
    rules: $props.validation,
    "stack-label": "",
    "no-error-icon": "",
    onInput: $options.handleInput
  }, {
    append: withCtx(() => [
      createVNode(QIcon, {
        name: $setup.showPassword ? "visibility_off" : "visibility",
        size: "19px",
        color: "grey-5",
        class: "cursor-pointer",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.showPassword = !$setup.showPassword)
      }, null, 8, ["name"])
    ]),
    _: 1
  }, 8, ["type", "label", "rules", "onInput"]);
}
var PasswordInput = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var ChangePassword_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  name: "ChangePassword",
  components: { PasswordInput },
  setup() {
    const { t } = useI18n();
    const currentPassword = ref("");
    const newPassword = ref("");
    const passwordConfirmation = ref("");
    const hints = ref([]);
    const validation = ref([
      (val) => val.length >= 8 || t("changePasswordDialog.requireMinLength"),
      (val) => /[A-Z]/.test(val) || t("changePasswordDialog.requireMinorMajorLetters"),
      (val) => /[0-9]/.test(val) || t("changePasswordDialog.requireNumber")
    ]);
    return {
      t,
      currentPassword,
      newPassword,
      passwordConfirmation,
      validation,
      hints
    };
  },
  methods: {
    validateConfirmation(v) {
      if (this.passwordConfirmation !== this.newPassword) {
        console.log(v);
      }
    }
  }
};
const _hoisted_1$1 = { class: "text-h6" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PasswordInput = resolveComponent("PasswordInput");
  return openBlock(), createBlock(QCard, {
    flat: "",
    class: "q-pa-md"
  }, {
    default: withCtx(() => [
      createVNode(QCardSection, { class: "q-py-none" }, {
        default: withCtx(() => [
          createBaseVNode("h2", _hoisted_1$1, toDisplayString(_ctx.$t("changePasswordDialog.changePassword")), 1),
          createVNode(QForm, {
            greedy: "",
            autofocus: "",
            class: "column q-gutter-md"
          }, {
            default: withCtx(() => [
              createVNode(_component_PasswordInput, {
                modelValue: $setup.currentPassword,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.currentPassword = $event),
                label: _ctx.$t("changePasswordDialog.currentPassword")
              }, null, 8, ["modelValue", "label"]),
              createVNode(_component_PasswordInput, {
                modelValue: $setup.newPassword,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.newPassword = $event),
                label: _ctx.$t("changePasswordDialog.newPassword"),
                validation: $setup.validation,
                onBlur: $options.validateConfirmation
              }, null, 8, ["modelValue", "label", "validation", "onBlur"]),
              createVNode(_component_PasswordInput, {
                ref: "teste",
                modelValue: $setup.passwordConfirmation,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.passwordConfirmation = $event),
                label: _ctx.$t("changePasswordDialog.passwordConfirmation"),
                validation: [(val) => $setup.passwordConfirmation === $setup.newPassword],
                onBlur: $options.validateConfirmation
              }, null, 8, ["modelValue", "label", "validation", "onBlur"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(QCardActions, { class: "justify-end q-mt-lg" }, {
        default: withCtx(() => [
          createVNode(QBtn, {
            label: _ctx.$t("changePasswordDialog.changePassword"),
            flat: "",
            "text-color": "white",
            class: "bg-primary"
          }, null, 8, ["label"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var ChangePassword = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-4d455ba9"]]);
const _sfc_main = {
  name: "ProfilePage",
  components: {
    ChangeEmail,
    ChangePassword
  },
  setup() {
    const auth = useAuthStore();
    const changeEmail = ref(false);
    const changePassword = ref(false);
    const profile = ref({
      name: "",
      lastname: "",
      company: "",
      cpf_cnpj: "",
      postalCode: "",
      address: "",
      addressNumber: "",
      complement: "",
      neighborhood: "",
      state: "",
      city: "",
      phone: ""
    });
    return {
      user: auth.user,
      changeEmail,
      changePassword,
      profile
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h2", { class: "q-pt-none q-mt-none q-mb-lg text-h6 text-bold" }, "Perfil", -1);
const _hoisted_2 = { class: "row items-start justify-center q-gutter-lg" };
const _hoisted_3 = { class: "col-11 col-md-auto" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 }, null, -1);
const _hoisted_5 = { class: "col-11 col-md q-pb-md" };
const _hoisted_6 = { class: "q-mb-sm text-weight-bold" };
const _hoisted_7 = { class: "row q-col-gutter-md" };
const _hoisted_8 = { class: "col-12 col-md-3" };
const _hoisted_9 = { class: "block" };
const _hoisted_10 = { class: "col-12 col-md" };
const _hoisted_11 = { class: "block" };
const _hoisted_12 = { class: "col-12 col-md-3" };
const _hoisted_13 = { class: "block" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("strong", { class: "text-bold" }, "*****", -1);
const _hoisted_15 = { class: "row q-col-gutter-lg q-mb-md" };
const _hoisted_16 = { class: "col-12 col-md" };
const _hoisted_17 = { class: "col-12 col-md" };
const _hoisted_18 = { class: "row q-col-gutter-lg q-mb-md" };
const _hoisted_19 = { class: "col-12 col-md" };
const _hoisted_20 = { class: "col-12 col-md" };
const _hoisted_21 = { class: "row q-col-gutter-lg q-mb-md" };
const _hoisted_22 = { class: "col-12 col-md" };
const _hoisted_23 = { class: "col-12 col-md" };
const _hoisted_24 = { class: "row q-col-gutter-lg q-mb-md" };
const _hoisted_25 = { class: "col-12 col-md" };
const _hoisted_26 = { class: "col-12 col-md" };
const _hoisted_27 = { class: "row q-col-gutter-lg q-mb-md" };
const _hoisted_28 = { class: "col-12 col-md" };
const _hoisted_29 = { class: "col-12 col-md" };
const _hoisted_30 = { class: "row q-col-gutter-lg q-mb-md" };
const _hoisted_31 = { class: "col-12 col-md" };
const _hoisted_32 = { class: "col-12 col-md" };
const _hoisted_33 = { class: "row justify-center shadow-0" };
const _hoisted_34 = { class: "col-10" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChangeEmail = resolveComponent("ChangeEmail");
  const _component_ChangePassword = resolveComponent("ChangePassword");
  return openBlock(), createBlock(QPage, null, {
    default: withCtx(() => [
      createVNode(QCard, {
        flat: "",
        bordered: ""
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, { class: "q-py-md q-px-lg" }, {
            default: withCtx(() => [
              _hoisted_1,
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createVNode(QAvatar, { rounded: "" }, {
                    default: withCtx(() => [
                      _hoisted_4
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("p", _hoisted_6, toDisplayString($setup.user.name), 1),
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("span", _hoisted_9, toDisplayString(_ctx.$t("accountId")), 1),
                      createBaseVNode("strong", null, toDisplayString($setup.user.id), 1)
                    ]),
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("span", _hoisted_11, toDisplayString(_ctx.$t("accountEmail")), 1),
                      createBaseVNode("strong", null, toDisplayString($setup.user.email), 1),
                      createVNode(QBtn, {
                        label: _ctx.$t("edit"),
                        "text-color": "primary",
                        flat: "",
                        dense: "",
                        padding: "0px",
                        class: "q-ml-md",
                        onClick: _cache[0] || (_cache[0] = ($event) => $setup.changeEmail = true)
                      }, null, 8, ["label"])
                    ]),
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("span", _hoisted_13, toDisplayString(_ctx.$t("password")), 1),
                      _hoisted_14,
                      createVNode(QBtn, {
                        label: _ctx.$t("edit"),
                        "text-color": "primary",
                        flat: "",
                        dense: "",
                        padding: "0px",
                        class: "q-ml-md",
                        onClick: _cache[1] || (_cache[1] = ($event) => $setup.changePassword = true)
                      }, null, 8, ["label"])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(QCard, {
        flat: "",
        bordered: "",
        class: "q-mt-md q-pa-lg"
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("div", _hoisted_16, [
                  createVNode(QInput, {
                    modelValue: $setup.profile.name,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.profile.name = $event),
                    label: _ctx.$t("name"),
                    "stack-label": ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                createBaseVNode("div", _hoisted_17, [
                  createVNode(QInput, {
                    modelValue: $setup.profile.lastname,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.profile.lastname = $event),
                    label: _ctx.$t("lastname"),
                    "stack-label": ""
                  }, null, 8, ["modelValue", "label"])
                ])
              ]),
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("div", _hoisted_19, [
                  createVNode(QInput, {
                    modelValue: $setup.profile.company,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.profile.company = $event),
                    label: _ctx.$t("company"),
                    "stack-label": ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                createBaseVNode("div", _hoisted_20, [
                  createVNode(QInput, {
                    modelValue: $setup.profile.cpf_cnpj,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.profile.cpf_cnpj = $event),
                    label: _ctx.$t("doc"),
                    "stack-label": ""
                  }, null, 8, ["modelValue", "label"])
                ])
              ]),
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("div", _hoisted_22, [
                  createVNode(QInput, {
                    modelValue: $setup.profile.postalCode,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.profile.postalCode = $event),
                    label: _ctx.$t("postalCode"),
                    "stack-label": ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                createBaseVNode("div", _hoisted_23, [
                  createVNode(QInput, {
                    modelValue: $setup.profile.address,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.profile.address = $event),
                    label: _ctx.$t("address"),
                    "stack-label": ""
                  }, null, 8, ["modelValue", "label"])
                ])
              ]),
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("div", _hoisted_25, [
                  createVNode(QInput, {
                    modelValue: $setup.profile.addressNumber,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.profile.addressNumber = $event),
                    label: _ctx.$t("addressNumber"),
                    "stack-label": ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                createBaseVNode("div", _hoisted_26, [
                  createVNode(QInput, {
                    modelValue: $setup.profile.complement,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.profile.complement = $event),
                    label: _ctx.$t("complement"),
                    "stack-label": ""
                  }, null, 8, ["modelValue", "label"])
                ])
              ]),
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("div", _hoisted_28, [
                  createVNode(QInput, {
                    modelValue: $setup.profile.neighborhood,
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.profile.neighborhood = $event),
                    label: _ctx.$t("neighborhood"),
                    "stack-label": ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                createBaseVNode("div", _hoisted_29, [
                  createVNode(QInput, {
                    modelValue: $setup.profile.state,
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.profile.state = $event),
                    label: _ctx.$t("state"),
                    "stack-label": ""
                  }, null, 8, ["modelValue", "label"])
                ])
              ]),
              createBaseVNode("div", _hoisted_30, [
                createBaseVNode("div", _hoisted_31, [
                  createVNode(QInput, {
                    modelValue: $setup.profile.city,
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.profile.city = $event),
                    label: _ctx.$t("city"),
                    "stack-label": ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                createBaseVNode("div", _hoisted_32, [
                  createVNode(QInput, {
                    modelValue: $setup.profile.phone,
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.profile.phone = $event),
                    label: _ctx.$t("phone"),
                    "stack-label": ""
                  }, null, 8, ["modelValue", "label"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(QCardActions, { class: "flex justify-between" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                label: _ctx.$t("clear"),
                flat: ""
              }, null, 8, ["label"]),
              createVNode(QBtn, {
                label: _ctx.$t("save"),
                flat: "",
                "text-color": "white",
                class: "bg-primary"
              }, null, 8, ["label"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(QDialog, {
        modelValue: $setup.changeEmail,
        "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.changeEmail = $event)
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_33, [
            createBaseVNode("div", _hoisted_34, [
              createVNode(_component_ChangeEmail)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      createVNode(QDialog, {
        modelValue: $setup.changePassword,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.changePassword = $event)
      }, {
        default: withCtx(() => [
          createVNode(_component_ChangePassword)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  });
}
var ProfilePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ProfilePage as default };
