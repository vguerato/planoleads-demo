import { a as QCardSection, Q as QCard } from "./QCard.848bd264.js";
import { Q as QSeparator } from "./QSeparator.05e99626.js";
import { Q as QSelect } from "./QSelect.ad12804a.js";
import { Q as QInput } from "./QInput.f7213602.js";
import { a as QIcon } from "./QBtn.a17df556.js";
import { a as useCheckboxProps, b as useCheckboxEmits, c as useCheckbox } from "./QCheckbox.26d27338.js";
import { c as createComponent } from "./render.ebc3bf11.js";
import { c as computed, h, _ as _export_sfc, r as ref, k as openBlock, l as createBlock, m as withCtx, f as createVNode, C as createBaseVNode, av as normalizeStyle, M as withDirectives, aw as vModelText } from "./index.cf036711.js";
import { b as QTable, Q as QTr, a as QTd } from "./QTable.22fe7f0a.js";
import { Q as QPage } from "./QPage.d17d76d8.js";
import "./use-dark.8fb57865.js";
import "./use-key-composition.e6149e28.js";
import "./use-form.e9a257fc.js";
import "./focus-manager.d6507951.js";
import "./QList.1f9c1576.js";
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
import "./use-fullscreen.afb20d4f.js";
var QToggle = createComponent({
  name: "QToggle",
  props: {
    ...useCheckboxProps,
    icon: String,
    iconColor: String
  },
  emits: useCheckboxEmits,
  setup(props) {
    function getInner(isTrue, isIndeterminate) {
      const icon = computed(
        () => (isTrue.value === true ? props.checkedIcon : isIndeterminate.value === true ? props.indeterminateIcon : props.uncheckedIcon) || props.icon
      );
      const color = computed(() => isTrue.value === true ? props.iconColor : null);
      return () => [
        h("div", { class: "q-toggle__track" }),
        h(
          "div",
          {
            class: "q-toggle__thumb absolute flex flex-center no-wrap"
          },
          icon.value !== void 0 ? [
            h(QIcon, {
              name: icon.value,
              color: color.value
            })
          ] : void 0
        )
      ];
    }
    return useCheckbox("toggle", getInner);
  }
});
var PreferencesPage_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "PreferencesPage",
  setup() {
    const filters = ref({
      segments: [],
      state: ""
    });
    const autopilot = ref({
      active: false,
      quantity: 0,
      regions: []
    });
    const apearence = ref({
      shortcuts: []
    });
    const business = ref({
      labels: []
    });
    const segments = ref(["Plano de Sa\xFAde"]);
    const columns = [
      {
        name: "tag",
        label: "R\xF3tulo",
        align: "left"
      },
      {
        name: "color",
        label: "Cor",
        align: "left"
      },
      {
        name: "dashboard",
        label: "Exibir no Dashboard",
        align: "left"
      },
      {
        name: "active",
        label: "Ativo",
        align: "left"
      }
    ];
    const rows = ref([
      {
        tag: "Rotulo",
        color: "#FF3030",
        dashboard: false,
        active: true
      }
    ]);
    return {
      filters,
      autopilot,
      apearence,
      business,
      segments,
      columns,
      rows
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", { class: "text-h5" }, "Prefer\xEAncias", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-h6" }, "Filtros", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Defina a pr\xE9-visualiza\xE7\xE3o quando for buscar por algum Lead", -1);
const _hoisted_4 = { class: "row q-col-gutter-md" };
const _hoisted_5 = { class: "col-12 col-md-5" };
const _hoisted_6 = { class: "col-12 col-md -auto" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-h6" }, "Piloto Autom\xE1tico", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, " Com o piloto autom\xE1tico ligado, voc\xEA n\xE3o precisa mais ter o trabalho de escolher os seus leads, nossa plataforma, escolhe os leads para voc\xEA com base nas suas defini\xE7\xF5es ", -1);
const _hoisted_9 = { class: "row items-center q-col-gutter-md q-my-lg" };
const _hoisted_10 = { class: "col" };
const _hoisted_11 = { class: "col-auto" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-h6" }, "Apar\xEAncia", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-h6" }, "Momento do Neg\xF3cio", -1);
const _hoisted_14 = { class: "row" };
const _hoisted_15 = { class: "col-6" };
const _hoisted_16 = { class: "col-6" };
const _hoisted_17 = ["onUpdate:modelValue"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, null, {
    default: withCtx(() => [
      createVNode(QCard, {
        flat: "",
        bordered: "",
        class: "q-px-md"
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, { class: "q-py-sm" }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }),
          createVNode(QSeparator),
          createVNode(QCardSection, { class: "q-pa-lg text-grey-7" }, {
            default: withCtx(() => [
              _hoisted_2,
              _hoisted_3,
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createVNode(QSelect, {
                    modelValue: $setup.filters.segments,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.filters.segments = $event),
                    label: "Segmento",
                    options: $setup.segments,
                    dense: "",
                    outlined: ""
                  }, null, 8, ["modelValue", "options"])
                ]),
                createBaseVNode("div", _hoisted_6, [
                  createVNode(QInput, {
                    modelValue: $setup.filters.state,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.filters.state = $event),
                    label: "Estado",
                    dense: "",
                    outlined: ""
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(QSeparator),
          createVNode(QCardSection, { class: "q-pa-lg text-grey-8" }, {
            default: withCtx(() => [
              _hoisted_7,
              _hoisted_8,
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createVNode(QToggle, {
                    modelValue: $setup.autopilot.active,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.autopilot.active = $event),
                    label: "Receber leads no piloto autom\xE1tico",
                    "left-label": ""
                  }, null, 8, ["modelValue"])
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createVNode(QInput, {
                    modelValue: $setup.autopilot.quantity,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.autopilot.quantity = $event),
                    label: "Quantidade m\xE9dia de Leads por dia",
                    type: "number",
                    dense: "",
                    outlined: ""
                  }, null, 8, ["modelValue"])
                ])
              ]),
              createVNode(QSelect, {
                modelValue: $setup.autopilot.regions,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.autopilot.regions = $event),
                label: "Regi\xF5es de Interesse",
                "use-chips": "",
                class: "full-width",
                outlined: "",
                "stack-label": ""
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(QSeparator),
          createVNode(QCardSection, { class: "q-py-lg" }, {
            default: withCtx(() => [
              _hoisted_12,
              createVNode(QSelect, {
                modelValue: $setup.apearence.shortcuts,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.apearence.shortcuts = $event),
                label: "Regi\xF5es de Interesse",
                "use-chips": "",
                outlined: "",
                "stack-label": "",
                class: "full-width"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(QSeparator),
          createVNode(QCardSection, { class: "q-py-lg" }, {
            default: withCtx(() => [
              _hoisted_13,
              createVNode(QTable, {
                columns: $setup.columns,
                rows: $setup.rows,
                "hide-bottom": "",
                "hide-pagination": "",
                flat: "",
                class: "c__table"
              }, {
                body: withCtx((props) => [
                  createVNode(QTr, { props }, {
                    default: withCtx(() => [
                      createVNode(QTd, {
                        key: "tag",
                        props
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_14, [
                            createBaseVNode("div", _hoisted_15, [
                              createVNode(QInput, {
                                modelValue: props.row.tag,
                                "onUpdate:modelValue": ($event) => props.row.tag = $event,
                                dense: "",
                                outlined: "",
                                readonly: "",
                                style: normalizeStyle("background-color:" + props.row.color)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "style"])
                            ]),
                            createBaseVNode("div", _hoisted_16, [
                              createVNode(QInput, {
                                modelValue: props.row.tag,
                                "onUpdate:modelValue": ($event) => props.row.tag = $event,
                                label: "Alterar R\xF3tulo",
                                dense: "",
                                outlined: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(QTd, { key: "color" }, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": ($event) => props.row.color = $event,
                            type: "color",
                            class: "border-0"
                          }, null, 8, _hoisted_17), [
                            [vModelText, props.row.color]
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(QTd, { key: "dashboard" }, {
                        default: withCtx(() => [
                          createVNode(QToggle, {
                            modelValue: props.row.dashboard,
                            "onUpdate:modelValue": ($event) => props.row.dashboard = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(QTd, { key: "active" }, {
                        default: withCtx(() => [
                          createVNode(QToggle, {
                            modelValue: props.row.active,
                            "onUpdate:modelValue": ($event) => props.row.active = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                _: 1
              }, 8, ["columns", "rows"])
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
var PreferencesPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { PreferencesPage as default };
