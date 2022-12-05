import { Q as QToolbarTitle, a as QToolbar } from "./QToolbar.bcc41272.js";
import { m as useBtnProps, a as QIcon, Q as QBtn, n as getBtnDesignAttr } from "./QBtn.a17df556.js";
import { Q as QCheckbox } from "./QCheckbox.26d27338.js";
import { u as useFileFormDomProps, Q as QInput } from "./QInput.f7213602.js";
import { d as QChip, h as humanStorageSize, Q as QSelect } from "./QSelect.ad12804a.js";
import { u as useConfigStore, Q as QPagination } from "./config-store.dee819a4.js";
import { Q as QTr, a as QTd, b as QTable } from "./QTable.22fe7f0a.js";
import { Q as QAvatar } from "./QAvatar.840f1c75.js";
import { Q as QItemSection } from "./QItemSection.1a39d5f6.js";
import { Q as QItem, a as QList } from "./QList.1f9c1576.js";
import { Q as QSeparator } from "./QSeparator.05e99626.js";
import { Q as QBtnGroup } from "./QBtnGroup.9b23c582.js";
import { Q as QMenu } from "./QMenu.b44e60d8.js";
import { u as useTransitionProps } from "./focusout.5290e48a.js";
import { c as createComponent, h as hSlot } from "./render.ebc3bf11.js";
import { r as ref, c as computed, w as watch, o as onMounted, h, g as getCurrentInstance, R as stop, U as stopAndPrevent, W as client, Z as injectProp, V as prevent, _ as _export_sfc, k as openBlock, l as createBlock, m as withCtx, f as createVNode, C as createBaseVNode, M as withDirectives, B as createElementBlock, I as renderList, F as Fragment, n as resolveComponent, E as toDisplayString, D as createTextVNode } from "./index.cf036711.js";
import { b as uid, u as useFormProps, a as useFormInputNameAttr } from "./use-form.e9a257fc.js";
import { a as QCardSection, Q as QCard } from "./QCard.848bd264.js";
import { Q as QDialog } from "./QDialog.d0e28515.js";
import { Q as QPage } from "./QPage.d17d76d8.js";
import { u as useLeadStore } from "./lead-store.188e34bd.js";
import { u as useFieldProps, a as useFieldEmits, b as useFieldState, c as useField, f as fieldValueIsFilled } from "./use-key-composition.e6149e28.js";
import { Q as QForm } from "./QForm.10b7ef36.js";
import { Q as QCardActions } from "./QCardActions.b033486c.js";
import { Q as QPopupProxy, a as QDate, C as ClosePopup } from "./ClosePopup.deed936c.js";
import "./dom.6171126e.js";
import "./use-dark.8fb57865.js";
import "./focus-manager.d6507951.js";
import "./QItemLabel.68b53514.js";
import "./scroll.195f9007.js";
import "./QLinearProgress.1753826d.js";
import "./use-fullscreen.afb20d4f.js";
import "./selection.b5404565.js";
import "./use-model-toggle.01aba15e.js";
import "./index.2c9b47bb.js";
import "./use-cache.b0833c75.js";
const btnPropsList = Object.keys(useBtnProps);
const passBtnProps = (props) => btnPropsList.reduce(
  (acc, key) => {
    const val = props[key];
    if (val !== void 0) {
      acc[key] = val;
    }
    return acc;
  },
  {}
);
var QBtnDropdown = createComponent({
  name: "QBtnDropdown",
  props: {
    ...useBtnProps,
    ...useTransitionProps,
    modelValue: Boolean,
    split: Boolean,
    dropdownIcon: String,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    cover: Boolean,
    persistent: Boolean,
    noRouteDismiss: Boolean,
    autoClose: Boolean,
    menuAnchor: {
      type: String,
      default: "bottom end"
    },
    menuSelf: {
      type: String,
      default: "top end"
    },
    menuOffset: Array,
    disableMainBtn: Boolean,
    disableDropdown: Boolean,
    noIconAnimation: Boolean,
    toggleAriaLabel: String
  },
  emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const showing = ref(props.modelValue);
    const menuRef = ref(null);
    const targetUid = uid();
    const ariaAttrs = computed(() => {
      const acc = {
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-haspopup": "true",
        "aria-controls": targetUid,
        "aria-owns": targetUid,
        "aria-label": props.toggleAriaLabel || proxy.$q.lang.label[showing.value === true ? "collapse" : "expand"](props.label)
      };
      if (props.disable === true || (props.split === false && props.disableMainBtn === true || props.disableDropdown === true)) {
        acc["aria-disabled"] = "true";
      }
      return acc;
    });
    const iconClass = computed(
      () => "q-btn-dropdown__arrow" + (showing.value === true && props.noIconAnimation === false ? " rotate-180" : "") + (props.split === false ? " q-btn-dropdown__arrow-container" : "")
    );
    const btnDesignAttr = computed(() => getBtnDesignAttr(props));
    const btnProps = computed(() => passBtnProps(props));
    watch(() => props.modelValue, (val) => {
      menuRef.value !== null && menuRef.value[val ? "show" : "hide"]();
    });
    watch(() => props.split, hide);
    function onBeforeShow(e) {
      showing.value = true;
      emit("beforeShow", e);
    }
    function onShow(e) {
      emit("show", e);
      emit("update:modelValue", true);
    }
    function onBeforeHide(e) {
      showing.value = false;
      emit("beforeHide", e);
    }
    function onHide(e) {
      emit("hide", e);
      emit("update:modelValue", false);
    }
    function onClick(e) {
      emit("click", e);
    }
    function onClickHide(e) {
      stop(e);
      hide();
      emit("click", e);
    }
    function toggle(evt) {
      menuRef.value !== null && menuRef.value.toggle(evt);
    }
    function show(evt) {
      menuRef.value !== null && menuRef.value.show(evt);
    }
    function hide(evt) {
      menuRef.value !== null && menuRef.value.hide(evt);
    }
    Object.assign(proxy, {
      show,
      hide,
      toggle
    });
    onMounted(() => {
      props.modelValue === true && show();
    });
    return () => {
      const Arrow = [
        h(QIcon, {
          class: iconClass.value,
          name: props.dropdownIcon || proxy.$q.iconSet.arrow.dropdown
        })
      ];
      props.disableDropdown !== true && Arrow.push(
        h(QMenu, {
          ref: menuRef,
          id: targetUid,
          class: props.contentClass,
          style: props.contentStyle,
          cover: props.cover,
          fit: true,
          persistent: props.persistent,
          noRouteDismiss: props.noRouteDismiss,
          autoClose: props.autoClose,
          anchor: props.menuAnchor,
          self: props.menuSelf,
          offset: props.menuOffset,
          separateClosePopup: true,
          transitionShow: props.transitionShow,
          transitionHide: props.transitionHide,
          transitionDuration: props.transitionDuration,
          onBeforeShow,
          onShow,
          onBeforeHide,
          onHide
        }, slots.default)
      );
      if (props.split === false) {
        return h(QBtn, {
          class: "q-btn-dropdown q-btn-dropdown--simple",
          ...btnProps.value,
          ...ariaAttrs.value,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick
        }, {
          default: () => hSlot(slots.label, []).concat(Arrow),
          loading: slots.loading
        });
      }
      return h(QBtnGroup, {
        class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
        rounded: props.rounded,
        square: props.square,
        ...btnDesignAttr.value,
        glossy: props.glossy,
        stretch: props.stretch
      }, () => [
        h(QBtn, {
          class: "q-btn-dropdown--current",
          ...btnProps.value,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick: onClickHide
        }, {
          default: slots.label,
          loading: slots.loading
        }),
        h(QBtn, {
          class: "q-btn-dropdown__arrow-container q-anchor--skip",
          ...ariaAttrs.value,
          ...btnDesignAttr.value,
          disable: props.disable === true || props.disableDropdown === true,
          rounded: props.rounded,
          color: props.color,
          textColor: props.textColor,
          dense: props.dense,
          size: props.size,
          padding: props.padding,
          ripple: props.ripple
        }, () => Arrow)
      ]);
    };
  }
});
function filterFiles(files, rejectedFiles, failedPropValidation, filterFn) {
  const acceptedFiles = [];
  files.forEach((file) => {
    if (filterFn(file) === true) {
      acceptedFiles.push(file);
    } else {
      rejectedFiles.push({ failedPropValidation, file });
    }
  });
  return acceptedFiles;
}
function stopAndPreventDrag(e) {
  e && e.dataTransfer && (e.dataTransfer.dropEffect = "copy");
  stopAndPrevent(e);
}
const useFileProps = {
  multiple: Boolean,
  accept: String,
  capture: String,
  maxFileSize: [Number, String],
  maxTotalSize: [Number, String],
  maxFiles: [Number, String],
  filter: Function
};
const useFileEmits = ["rejected"];
function useFile({
  editable,
  dnd,
  getFileInput,
  addFilesToQueue
}) {
  const { props, emit, proxy } = getCurrentInstance();
  const dndRef = ref(null);
  const extensions = computed(() => props.accept !== void 0 ? props.accept.split(",").map((ext) => {
    ext = ext.trim();
    if (ext === "*") {
      return "*/";
    } else if (ext.endsWith("/*")) {
      ext = ext.slice(0, ext.length - 1);
    }
    return ext.toUpperCase();
  }) : null);
  const maxFilesNumber = computed(() => parseInt(props.maxFiles, 10));
  const maxTotalSizeNumber = computed(() => parseInt(props.maxTotalSize, 10));
  function pickFiles(e) {
    if (editable.value) {
      if (e !== Object(e)) {
        e = { target: null };
      }
      if (e.target !== null && e.target.matches('input[type="file"]') === true) {
        e.clientX === 0 && e.clientY === 0 && stop(e);
      } else {
        const input = getFileInput();
        input && input !== e.target && input.click(e);
      }
    }
  }
  function addFiles(files) {
    if (editable.value && files) {
      addFilesToQueue(null, files);
    }
  }
  function processFiles(e, filesToProcess, currentFileList, append) {
    let files = Array.from(filesToProcess || e.target.files);
    const rejectedFiles = [];
    const done = () => {
      if (rejectedFiles.length > 0) {
        emit("rejected", rejectedFiles);
      }
    };
    if (props.accept !== void 0 && extensions.value.indexOf("*/") === -1) {
      files = filterFiles(files, rejectedFiles, "accept", (file) => {
        return extensions.value.some((ext) => file.type.toUpperCase().startsWith(ext) || file.name.toUpperCase().endsWith(ext));
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props.maxFileSize !== void 0) {
      const maxFileSize = parseInt(props.maxFileSize, 10);
      files = filterFiles(files, rejectedFiles, "max-file-size", (file) => {
        return file.size <= maxFileSize;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props.multiple !== true && files.length > 0) {
      files = [files[0]];
    }
    files.forEach((file) => {
      file.__key = file.webkitRelativePath + file.lastModified + file.name + file.size;
    });
    if (append === true) {
      const filenameMap = currentFileList.map((entry) => entry.__key);
      files = filterFiles(files, rejectedFiles, "duplicate", (file) => {
        return filenameMap.includes(file.__key) === false;
      });
    }
    if (files.length === 0) {
      return done();
    }
    if (props.maxTotalSize !== void 0) {
      let size = append === true ? currentFileList.reduce((total, file) => total + file.size, 0) : 0;
      files = filterFiles(files, rejectedFiles, "max-total-size", (file) => {
        size += file.size;
        return size <= maxTotalSizeNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (typeof props.filter === "function") {
      const filteredFiles = props.filter(files);
      files = filterFiles(files, rejectedFiles, "filter", (file) => {
        return filteredFiles.includes(file);
      });
    }
    if (props.maxFiles !== void 0) {
      let filesNumber = append === true ? currentFileList.length : 0;
      files = filterFiles(files, rejectedFiles, "max-files", () => {
        filesNumber++;
        return filesNumber <= maxFilesNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    done();
    if (files.length > 0) {
      return files;
    }
  }
  function onDragover(e) {
    stopAndPreventDrag(e);
    dnd.value !== true && (dnd.value = true);
  }
  function onDragleave(e) {
    stopAndPrevent(e);
    const gone = e.relatedTarget !== null || client.is.safari !== true ? e.relatedTarget !== dndRef.value : document.elementsFromPoint(e.clientX, e.clientY).includes(dndRef.value) === false;
    gone === true && (dnd.value = false);
  }
  function onDrop(e) {
    stopAndPreventDrag(e);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      addFilesToQueue(null, files);
    }
    dnd.value = false;
  }
  function getDndNode(type) {
    if (dnd.value === true) {
      return h("div", {
        ref: dndRef,
        class: `q-${type}__dnd absolute-full`,
        onDragenter: stopAndPreventDrag,
        onDragover: stopAndPreventDrag,
        onDragleave,
        onDrop
      });
    }
  }
  Object.assign(proxy, { pickFiles, addFiles });
  return {
    pickFiles,
    addFiles,
    onDragover,
    onDragleave,
    processFiles,
    getDndNode,
    maxFilesNumber,
    maxTotalSizeNumber
  };
}
var QFile = createComponent({
  name: "QFile",
  inheritAttrs: false,
  props: {
    ...useFieldProps,
    ...useFormProps,
    ...useFileProps,
    modelValue: [File, FileList, Array],
    append: Boolean,
    useChips: Boolean,
    displayValue: [String, Number],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    counterLabel: Function,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...useFieldEmits,
    ...useFileEmits
  ],
  setup(props, { slots, emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const state = useFieldState();
    const inputRef = ref(null);
    const dnd = ref(false);
    const nameProp = useFormInputNameAttr(props);
    const {
      pickFiles,
      onDragover,
      onDragleave,
      processFiles,
      getDndNode
    } = useFile({ editable: state.editable, dnd, getFileInput, addFilesToQueue });
    const formDomProps = useFileFormDomProps(props);
    const innerValue = computed(() => Object(props.modelValue) === props.modelValue ? "length" in props.modelValue ? Array.from(props.modelValue) : [props.modelValue] : []);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const selectedString = computed(
      () => innerValue.value.map((file) => file.name).join(", ")
    );
    const totalSize = computed(
      () => humanStorageSize(
        innerValue.value.reduce((acc, file) => acc + file.size, 0)
      )
    );
    const counterProps = computed(() => ({
      totalSize: totalSize.value,
      filesNumber: innerValue.value.length,
      maxFiles: props.maxFiles
    }));
    const inputAttrs = computed(() => ({
      tabindex: -1,
      type: "file",
      title: "",
      accept: props.accept,
      capture: props.capture,
      name: nameProp.value,
      ...attrs,
      id: state.targetUid.value,
      disabled: state.editable.value !== true
    }));
    const fieldClass = computed(
      () => "q-file q-field--auto-height" + (dnd.value === true ? " q-file--dnd" : "")
    );
    const isAppending = computed(
      () => props.multiple === true && props.append === true
    );
    function removeAtIndex(index) {
      const files = innerValue.value.slice();
      files.splice(index, 1);
      emitValue(files);
    }
    function removeFile(file) {
      const index = innerValue.value.findIndex(file);
      if (index > -1) {
        removeAtIndex(index);
      }
    }
    function emitValue(files) {
      emit("update:modelValue", props.multiple === true ? files : files[0]);
    }
    function onKeydown(e) {
      e.keyCode === 13 && prevent(e);
    }
    function onKeyup(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        pickFiles(e);
      }
    }
    function getFileInput() {
      return inputRef.value;
    }
    function addFilesToQueue(e, fileList) {
      const files = processFiles(e, fileList, innerValue.value, isAppending.value);
      const fileInput = getFileInput();
      if (fileInput !== void 0 && fileInput !== null) {
        fileInput.value = "";
      }
      if (files === void 0) {
        return;
      }
      if (props.multiple === true ? props.modelValue && files.every((f) => innerValue.value.includes(f)) : props.modelValue === files[0]) {
        return;
      }
      emitValue(
        isAppending.value === true ? innerValue.value.concat(files) : files
      );
    }
    function getFiller() {
      return [
        h("input", {
          class: [props.inputClass, "q-file__filler"],
          style: props.inputStyle
        })
      ];
    }
    function getSelection() {
      if (slots.file !== void 0) {
        return innerValue.value.length === 0 ? getFiller() : innerValue.value.map(
          (file, index) => slots.file({ index, file, ref: this })
        );
      }
      if (slots.selected !== void 0) {
        return innerValue.value.length === 0 ? getFiller() : slots.selected({ files: innerValue.value, ref: this });
      }
      if (props.useChips === true) {
        return innerValue.value.length === 0 ? getFiller() : innerValue.value.map((file, i) => h(QChip, {
          key: "file-" + i,
          removable: state.editable.value,
          dense: true,
          textColor: props.color,
          tabindex: props.tabindex,
          onRemove: () => {
            removeAtIndex(i);
          }
        }, () => h("span", {
          class: "ellipsis",
          textContent: file.name
        })));
      }
      const textContent = props.displayValue !== void 0 ? props.displayValue : selectedString.value;
      return textContent.length > 0 ? [
        h("div", {
          class: props.inputClass,
          style: props.inputStyle,
          textContent
        })
      ] : getFiller();
    }
    function getInput() {
      const data = {
        ref: inputRef,
        ...inputAttrs.value,
        ...formDomProps.value,
        class: "q-field__input fit absolute-full cursor-pointer",
        onChange: addFilesToQueue
      };
      if (props.multiple === true) {
        data.multiple = true;
      }
      return h("input", data);
    }
    Object.assign(state, {
      fieldClass,
      emitValue,
      hasValue,
      inputRef,
      innerValue,
      floatingLabel: computed(
        () => hasValue.value === true || fieldValueIsFilled(props.displayValue)
      ),
      computedCounter: computed(() => {
        if (props.counterLabel !== void 0) {
          return props.counterLabel(counterProps.value);
        }
        const max = props.maxFiles;
        return `${innerValue.value.length}${max !== void 0 ? " / " + max : ""} (${totalSize.value})`;
      }),
      getControlChild: () => getDndNode("file"),
      getControl: () => {
        const data = {
          ref: state.targetRef,
          class: "q-field__native row items-center cursor-pointer",
          tabindex: props.tabindex
        };
        if (state.editable.value === true) {
          Object.assign(data, { onDragover, onDragleave, onKeydown, onKeyup });
        }
        return h("div", data, [getInput()].concat(getSelection()));
      }
    });
    Object.assign(proxy, {
      removeAtIndex,
      removeFile,
      getNativeElement: () => inputRef.value
    });
    injectProp(proxy, "nativeEl", () => inputRef.value);
    return useField(state);
  }
});
const _sfc_main$2 = {
  name: "CreateLead",
  setup() {
    const files = ref([]);
    const data = ref({
      segment: "",
      email: "",
      name: "",
      phone: "",
      state: "",
      city: "",
      quality: "",
      share: "",
      annotations: "",
      notes: ""
    });
    return {
      files,
      data
    };
  },
  methods: {
    clear() {
      this.files = [];
      for (const key in this.data) {
        this.data[key] = "";
      }
    }
  }
};
const _hoisted_1$2 = { class: "row justify-between items-center q-mb-sm" };
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("div", { class: "col-12 col-md-auto" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "text-h6" }, "Importar CSV")
], -1);
const _hoisted_3$2 = { class: "col-12 col-md-auto" };
const _hoisted_4$2 = { class: "row items-center q-col-gutter-md" };
const _hoisted_5$2 = { class: "col-12 col-md" };
const _hoisted_6$2 = { class: "col-12 col-md-auto" };
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("h2", { class: "q-mt-none text-h6" }, "Cadastrar", -1);
const _hoisted_8$2 = { class: "column q-col-gutter-md" };
const _hoisted_9$2 = { class: "row q-col-gutter-md" };
const _hoisted_10$2 = { class: "col-12 col-md" };
const _hoisted_11$2 = { class: "col-12 col-md" };
const _hoisted_12$2 = { class: "row q-col-gutter-md" };
const _hoisted_13$2 = { class: "col-12 col-md" };
const _hoisted_14$2 = { class: "col-12 col-md" };
const _hoisted_15$2 = { class: "row q-col-gutter-md" };
const _hoisted_16$2 = { class: "col-12 col-md" };
const _hoisted_17$2 = { class: "col-12 col-md" };
const _hoisted_18$2 = { class: "row q-col-gutter-md" };
const _hoisted_19$2 = { class: "col-12 col-md" };
const _hoisted_20$1 = { class: "col-12 col-md" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QCard, {
    flat: "",
    class: "full-width q-px-lg"
  }, {
    default: withCtx(() => [
      createVNode(QCardSection, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            _hoisted_2$2,
            createBaseVNode("div", _hoisted_3$2, [
              createVNode(QBtn, {
                label: "Download do Modelo",
                icon: "task",
                color: "primary",
                flat: "",
                dense: "",
                class: "hide-label"
              })
            ])
          ]),
          createVNode(QForm, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_4$2, [
                createBaseVNode("div", _hoisted_5$2, [
                  createVNode(QFile, {
                    modelValue: $setup.files,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.files = $event),
                    label: "Selecionar arquivo",
                    borderless: "",
                    "use-chips": "",
                    clearable: "",
                    accept: ".csv",
                    "bg-color": "blue-1",
                    "text-color": "primary",
                    class: "q-file"
                  }, {
                    prepend: withCtx(() => [
                      createVNode(QIcon, {
                        name: "attach_file",
                        class: "q-px-md"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                createBaseVNode("div", _hoisted_6$2, [
                  createVNode(QBtn, {
                    label: "Importar",
                    color: "primary",
                    unelevated: "",
                    class: "full-width"
                  })
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(QSeparator, { class: "q-my-md" }),
      createVNode(QCardSection, null, {
        default: withCtx(() => [
          _hoisted_7$2,
          createVNode(QForm, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_8$2, [
                createBaseVNode("div", _hoisted_9$2, [
                  createBaseVNode("div", _hoisted_10$2, [
                    createVNode(QSelect, {
                      modelValue: $setup.data.segment,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.data.segment = $event),
                      label: "Segmento",
                      outlined: "",
                      dense: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_11$2, [
                    createVNode(QInput, {
                      modelValue: $setup.data.email,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.data.email = $event),
                      label: "E-mail",
                      type: "email",
                      outlined: "",
                      dense: ""
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_12$2, [
                  createBaseVNode("div", _hoisted_13$2, [
                    createVNode(QInput, {
                      modelValue: $setup.data.name,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.data.name = $event),
                      label: "Nome",
                      outlined: "",
                      dense: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_14$2, [
                    createVNode(QInput, {
                      modelValue: $setup.data.phone,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.data.phone = $event),
                      label: "Telefone",
                      outlined: "",
                      dense: ""
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_15$2, [
                  createBaseVNode("div", _hoisted_16$2, [
                    createVNode(QSelect, {
                      modelValue: $setup.data.state,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.data.state = $event),
                      label: "Estado",
                      outlined: "",
                      dense: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_17$2, [
                    createVNode(QSelect, {
                      modelValue: $setup.data.city,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.data.city = $event),
                      label: "Cidade",
                      outlined: "",
                      dense: ""
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_18$2, [
                  createBaseVNode("div", _hoisted_19$2, [
                    createVNode(QSelect, {
                      modelValue: $setup.data.quality,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.data.quality = $event),
                      label: "Qualidade",
                      outlined: "",
                      dense: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_20$1, [
                    createVNode(QSelect, {
                      modelValue: $setup.data.share,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.data.share = $event),
                      label: "Compartilhar",
                      outlined: "",
                      dense: ""
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                createVNode(QInput, {
                  modelValue: $setup.data.annotations,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.data.annotations = $event),
                  label: "Informa\xE7\xF5es Adicionais",
                  hint: "Ex: Pessoa Jur\xEDdica, 2 a 4 pessoas",
                  type: "textarea",
                  outlined: "",
                  dense: ""
                }, null, 8, ["modelValue"]),
                createVNode(QInput, {
                  modelValue: $setup.data.notes,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.data.notes = $event),
                  label: "Adicionar Nota",
                  hint: "Ex: J\xE1 entrei em contato com a pessoa",
                  type: "textarea",
                  outlined: "",
                  dense: ""
                }, null, 8, ["modelValue"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(QSeparator, { class: "q-my-sm" }),
      createVNode(QCardActions, { class: "justify-between q-py-md" }, {
        default: withCtx(() => [
          createVNode(QBtn, {
            label: "Limpar",
            flat: "",
            onClick: $options.clear
          }, null, 8, ["onClick"]),
          createVNode(QBtn, {
            label: "Salvar",
            color: "primary",
            unelevated: ""
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var CreateLead = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const qualities = [
  {
    label: "Neg\xF3cio Fechado",
    value: ""
  },
  {
    label: "Quase Fechado",
    value: ""
  },
  {
    label: "Em Negocia\xE7\xE3o",
    value: ""
  },
  {
    label: "Sem Interesse",
    value: ""
  },
  {
    label: "Em Contato",
    value: ""
  }
];
const statuses = [
  {
    label: "N\xE3o Negativado",
    value: ""
  },
  {
    label: "Negativado",
    value: ""
  },
  {
    label: "Em An\xE1lise",
    value: ""
  }
];
const teams = [
  {
    label: "N\xE3o Compartilhado",
    value: ""
  },
  {
    label: "Jo\xE3o Martins",
    value: ""
  },
  {
    label: "Fernando Hubert",
    value: ""
  },
  {
    label: "Marisa Monteiro",
    value: ""
  },
  {
    label: "Fernanda Matias",
    value: ""
  },
  {
    label: "Gabriela M.",
    value: ""
  }
];
const segments = [
  {
    label: "Plano de Sa\xFAde",
    value: ""
  },
  {
    label: "Est\xE9tica",
    value: ""
  },
  {
    label: "\xD3tica",
    value: ""
  },
  {
    label: "Odontologia",
    value: ""
  }
];
const _sfc_main$1 = {
  name: "LeadFilter",
  setup() {
    const date = ref("");
    return {
      date,
      qualities,
      statuses,
      teams,
      segments
    };
  }
};
const _hoisted_1$1 = { class: "row items-center q-col-gutter-sm" };
const _hoisted_2$1 = { class: "col-auto" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "text-title1 no-margin" }, "Filtrar")
], -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("p", { class: "text-title2" }, "Localiza\xE7\xE3o", -1);
const _hoisted_5$1 = { class: "row q-col-gutter-md" };
const _hoisted_6$1 = { class: "col-12 col-md-3" };
const _hoisted_7$1 = { class: "col-12 col-md-5" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("p", { class: "text-title2" }, "Datas", -1);
const _hoisted_9$1 = { class: "q-col-gutter-md q-mb-md" };
const _hoisted_10$1 = { class: "row" };
const _hoisted_11$1 = { class: "col-12 col-md-5" };
const _hoisted_12$1 = { class: "row items-center justify-end" };
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("p", { class: "text-title2" }, "Outros", -1);
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("p", { class: "text-subtitle2" }, "Qualidade:", -1);
const _hoisted_15$1 = { class: "row q-col-gutter-md" };
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("p", { class: "text-subtitle2" }, "Status:", -1);
const _hoisted_17$1 = { class: "row q-col-gutter-md" };
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("p", { class: "text-subtitle2" }, "Equpe:", -1);
const _hoisted_19$1 = { class: "row q-col-gutter-md" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("p", { class: "text-subtitle2" }, "Segmentos:", -1);
const _hoisted_21 = { class: "row q-col-gutter-md" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QCard, {
    flat: "",
    class: "full-width q-pa-md"
  }, {
    default: withCtx(() => [
      createVNode(QForm, null, {
        default: withCtx(() => [
          createVNode(QCardSection, { class: "q-pt-none" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                createBaseVNode("div", _hoisted_2$1, [
                  createVNode(QIcon, {
                    name: "filter_alt",
                    size: "22px"
                  })
                ]),
                _hoisted_3$1
              ])
            ]),
            _: 1
          }),
          createVNode(QSeparator),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              _hoisted_4$1,
              createBaseVNode("div", _hoisted_5$1, [
                createBaseVNode("div", _hoisted_6$1, [
                  createVNode(QSelect, {
                    label: "Estado",
                    outlined: "",
                    dense: ""
                  })
                ]),
                createBaseVNode("div", _hoisted_7$1, [
                  createVNode(QSelect, {
                    label: "Cidade",
                    outlined: "",
                    dense: ""
                  })
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(QSeparator),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              _hoisted_8$1,
              createBaseVNode("div", _hoisted_9$1, [
                createVNode(QCheckbox, {
                  dense: "",
                  label: "Hoje"
                }),
                createVNode(QCheckbox, {
                  dense: "",
                  label: "Ontem"
                }),
                createVNode(QCheckbox, {
                  dense: "",
                  label: "\xDAltimos 7 dias"
                }),
                createVNode(QCheckbox, {
                  dense: "",
                  label: "\xDAltimos 30 dias"
                })
              ]),
              createBaseVNode("div", _hoisted_10$1, [
                createBaseVNode("div", _hoisted_11$1, [
                  createVNode(QInput, {
                    modelValue: $setup.date,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.date = $event),
                    outlined: "",
                    dense: "",
                    mask: "date",
                    rules: ["date"],
                    label: "Data Personalizada"
                  }, {
                    append: withCtx(() => [
                      createVNode(QIcon, {
                        name: "event",
                        class: "cursor-pointer"
                      }, {
                        default: withCtx(() => [
                          createVNode(QPopupProxy, {
                            cover: "",
                            "transition-show": "scale",
                            "transition-hide": "scale"
                          }, {
                            default: withCtx(() => [
                              createVNode(QDate, {
                                modelValue: $setup.date,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.date = $event)
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_12$1, [
                                    withDirectives(createVNode(QBtn, {
                                      label: "Close",
                                      color: "primary",
                                      flat: ""
                                    }, null, 512), [
                                      [ClosePopup]
                                    ])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(QSeparator),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              _hoisted_13$1,
              _hoisted_14$1,
              createBaseVNode("div", _hoisted_15$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.qualities, (opt) => {
                  return openBlock(), createElementBlock("div", {
                    key: opt.value,
                    class: "col-12 col-md-4"
                  }, [
                    createVNode(QCheckbox, {
                      dense: "",
                      label: opt.label
                    }, null, 8, ["label"])
                  ]);
                }), 128))
              ]),
              createVNode(QSeparator, { class: "q-my-lg" }),
              _hoisted_16$1,
              createBaseVNode("div", _hoisted_17$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.statuses, (opt) => {
                  return openBlock(), createElementBlock("div", {
                    key: opt.value,
                    class: "col-12 col-md-4"
                  }, [
                    createVNode(QCheckbox, {
                      dense: "",
                      label: opt.label
                    }, null, 8, ["label"])
                  ]);
                }), 128))
              ]),
              createVNode(QSeparator, { class: "q-my-lg" }),
              _hoisted_18$1,
              createBaseVNode("div", _hoisted_19$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.teams, (opt) => {
                  return openBlock(), createElementBlock("div", {
                    key: opt.value,
                    class: "col-12 col-md-4"
                  }, [
                    createVNode(QCheckbox, {
                      dense: "",
                      label: opt.label
                    }, null, 8, ["label"])
                  ]);
                }), 128))
              ]),
              createVNode(QSeparator, { class: "q-my-lg" }),
              _hoisted_20,
              createBaseVNode("div", _hoisted_21, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.segments, (opt) => {
                  return openBlock(), createElementBlock("div", {
                    key: opt.value,
                    class: "col-12 col-md-4"
                  }, [
                    createVNode(QCheckbox, {
                      dense: "",
                      label: opt.label
                    }, null, 8, ["label"])
                  ]);
                }), 128))
              ])
            ]),
            _: 1
          }),
          createVNode(QCardActions, { class: "justify-between q-py-md" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                label: "Limpar",
                flat: "",
                onClick: _ctx.clear
              }, null, 8, ["onClick"]),
              createVNode(QBtn, {
                label: "Salvar",
                color: "primary",
                unelevated: ""
              })
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
var LeadFilter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var LeadsPage_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "LeadsPage",
  components: { CreateLead, LeadFilter },
  setup() {
    const leadStore = useLeadStore();
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
    const selectedLeads = ref([]);
    const selectionState = ref(false);
    const showImport = ref(false);
    const showFilter = ref(false);
    return {
      leads,
      configStore,
      search,
      sortOptions,
      rowsPerPageOptions,
      pages: computed(
        () => Math.ceil(leads.length / pagination.value.rowsPerPage)
      ),
      pagination,
      selectedLeads,
      selectionState,
      showImport,
      showFilter
    };
  },
  methods: {
    selection() {
      if (this.selectedLeads.length === this.leads.length) {
        this.selectedLeads = [];
        this.selectionState = false;
      } else {
        this.selectedLeads = this.leads.map((l) => l.id);
        this.selectionState = true;
      }
    }
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "flex items-center" };
const _hoisted_4 = { class: "full-width row items-center justify-end q-col-gutter-sm mb-20 px-10" };
const _hoisted_5 = {
  class: "col-auto no-padding",
  dense: ""
};
const _hoisted_6 = { class: "col-12 col-md-auto" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "col sm-hide" }, null, -1);
const _hoisted_8 = { class: "col col-md-auto" };
const _hoisted_9 = { class: "col-auto sm-hide" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", { class: "text-subitle1 sm-hide" }, "Itens por P\xE1gina:", -1);
const _hoisted_11 = { class: "col-auto sm-hide" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "text-subitle1 sm-hide" }, "Ordenar por:", -1);
const _hoisted_13 = { class: "col-auto sm-hide px-30" };
const _hoisted_14 = { class: "col-auto sm-hide" };
const _hoisted_15 = { class: "text-weight-medium text-subtitle2" };
const _hoisted_16 = { class: "flex justify-end q-col-gutter-md" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", { class: "q-px-md q-py-md no-margin text-subtitle2" }, " Outras A\xE7\xF5es ", -1);
const _hoisted_18 = { class: "q-pa-sm col-12 col-md-3 grid-style-transition" };
const _hoisted_19 = { class: "text-grey-7" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CreateLead = resolveComponent("CreateLead");
  const _component_LeadFilter = resolveComponent("LeadFilter");
  return openBlock(), createBlock(QPage, { padding: "" }, {
    default: withCtx(() => [
      createVNode(QToolbar, { class: "pb-25" }, {
        default: withCtx(() => [
          createVNode(QToolbarTitle, null, {
            default: withCtx(() => [
              $setup.selectedLeads.length === 0 ? (openBlock(), createElementBlock("span", _hoisted_1, "Voc\xEA tem " + toDisplayString($setup.leads.length) + " leads", 1)) : (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString($setup.selectedLeads.length) + " leads selecionadas", 1))
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_3, [
            createVNode(QBtn, {
              label: "Exportar",
              icon: "cloud_download",
              color: "primary",
              flat: "",
              dense: "",
              class: "hide-label"
            }),
            createVNode(QBtn, {
              label: "Adicionar",
              icon: "add",
              color: "primary",
              flat: "",
              dense: "",
              class: "hide-label",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.showImport = !$setup.showImport)
            })
          ])
        ]),
        _: 1
      }),
      createVNode(QTable, {
        pagination: $setup.pagination,
        "onUpdate:pagination": _cache[9] || (_cache[9] = ($event) => $setup.pagination = $event),
        rows: $setup.leads,
        filter: $setup.search,
        grid: _ctx.$q.screen.width < 768 || $setup.configStore.cartGrid,
        "hide-header": "",
        "hide-bottom": _ctx.$q.screen.width > 768,
        flat: "",
        class: "c__table"
      }, {
        top: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(QCheckbox, {
                modelValue: $setup.selectionState,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.selectionState = $event),
                onClick: $options.selection
              }, null, 8, ["modelValue", "onClick"])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createVNode(QInput, {
                modelValue: $setup.search,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.search = $event),
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
            _hoisted_7,
            createBaseVNode("div", _hoisted_8, [
              createVNode(QBtn, {
                label: "Filtrar",
                icon: "filter_alt",
                color: "primary",
                flat: "",
                class: "full-width pr-30",
                onClick: _cache[3] || (_cache[3] = ($event) => $setup.showFilter = !$setup.showFilter)
              })
            ]),
            createBaseVNode("div", _hoisted_9, [
              createVNode(QSelect, {
                modelValue: $setup.pagination.rowsPerPage,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.pagination.rowsPerPage = $event),
                options: $setup.rowsPerPageOptions,
                color: "primary",
                outlined: "",
                dense: ""
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, {
                    name: "unfold_more",
                    color: "primary",
                    class: "md-hide"
                  }),
                  _hoisted_10
                ]),
                _: 1
              }, 8, ["modelValue", "options"])
            ]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(QSelect, {
                modelValue: $setup.pagination.sortBy,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.pagination.sortBy = $event),
                options: $setup.sortOptions,
                outlined: "",
                dense: ""
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, {
                    name: "sort_by_alpha",
                    color: "primary",
                    class: "md-hide"
                  }),
                  _hoisted_12
                ]),
                _: 1
              }, 8, ["modelValue", "options"])
            ]),
            createBaseVNode("div", _hoisted_13, [
              createVNode(QBtn, {
                icon: $setup.configStore.cartGrid ? "view_list" : "grid_view",
                color: "primary",
                flat: "",
                dense: "",
                onClick: _cache[6] || (_cache[6] = ($event) => $setup.configStore.set("cartGrid", !$setup.configStore.cartGrid))
              }, null, 8, ["icon"])
            ]),
            createBaseVNode("div", _hoisted_14, [
              createVNode(QPagination, {
                modelValue: $setup.pagination.page,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.pagination.page = $event),
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
                "auto-width": "",
                class: "pr-10"
              }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    modelValue: $setup.selectedLeads,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.selectedLeads = $event),
                    dense: "",
                    val: props.row.id,
                    class: "no-margin no-padding"
                  }, null, 8, ["modelValue", "val"])
                ]),
                _: 2
              }, 1024),
              createVNode(QTd, {
                key: "name",
                "auto-width": ""
              }, {
                default: withCtx(() => [
                  createVNode(QItem, {
                    dense: "",
                    class: "no-padding",
                    to: "/lead"
                  }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QAvatar, { color: "grey-3" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.initials), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(QItemSection, {
                        side: "",
                        class: "text-black column"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("span", _hoisted_15, toDisplayString(props.row.name), 1)
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
                key: "phone",
                "auto-width": ""
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    label: props.row.phone,
                    "no-wrap": "",
                    dense: "",
                    flat: "",
                    icon: "img:https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png",
                    color: "green"
                  }, null, 8, ["label"])
                ]),
                _: 2
              }, 1024),
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
              createVNode(QTd, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_16, [
                    createVNode(QIcon, {
                      name: "edit",
                      color: "primary",
                      size: "20px"
                    }),
                    createVNode(QIcon, {
                      name: "mail",
                      color: "primary",
                      size: "20px"
                    }),
                    createVNode(QIcon, {
                      name: "call",
                      color: "primary",
                      size: "20px"
                    }),
                    createVNode(QBtnDropdown, {
                      "dropdown-icon": "more_horiz",
                      color: "primary",
                      flat: "",
                      ripple: false,
                      class: "item-menu"
                    }, {
                      default: withCtx(() => [
                        _hoisted_17,
                        createVNode(QSeparator),
                        createVNode(QList, {
                          dense: "",
                          class: "text-primary q-py-sm"
                        }, {
                          default: withCtx(() => [
                            createVNode(QItem, null, {
                              default: withCtx(() => [
                                createTextVNode("Qualificar")
                              ]),
                              _: 1
                            }),
                            createVNode(QItem, null, {
                              default: withCtx(() => [
                                createTextVNode("Negativar")
                              ]),
                              _: 1
                            }),
                            createVNode(QItem, null, {
                              default: withCtx(() => [
                                createTextVNode("Compartilhar")
                              ]),
                              _: 1
                            }),
                            createVNode(QItem, { to: "/lead" }, {
                              default: withCtx(() => [
                                createTextVNode("Visualizar")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
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
              })
            ]),
            _: 2
          }, 1032, ["props"])
        ]),
        item: withCtx((props) => [
          createBaseVNode("div", _hoisted_18, [
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
                            createBaseVNode("span", _hoisted_19, toDisplayString(props.row.tag), 1),
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
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        _: 1
      }, 8, ["pagination", "rows", "filter", "grid", "hide-bottom"]),
      createVNode(QDialog, {
        modelValue: $setup.showImport,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.showImport = $event)
      }, {
        default: withCtx(() => [
          createVNode(_component_CreateLead)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      createVNode(QDialog, {
        modelValue: $setup.showFilter,
        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.showFilter = $event)
      }, {
        default: withCtx(() => [
          createVNode(_component_LeadFilter)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  });
}
var LeadsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LeadsPage as default };
