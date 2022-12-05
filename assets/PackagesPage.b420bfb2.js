import { n as getBtnDesignAttr, Q as QBtn, u as useRouterLinkProps, a as QIcon } from "./QBtn.a17df556.js";
import { Q as QBtnGroup } from "./QBtnGroup.9b23c582.js";
import { c as createComponent, a as hMergeSlot, h as hSlot, f as hDir } from "./render.ebc3bf11.js";
import { u as useFormProps, c as useFormInject, b as uid } from "./use-form.e9a257fc.js";
import { c as computed, h, w as watch, o as onMounted, u as onBeforeUnmount, aa as isNumber, g as getCurrentInstance, J as Transition, as as shallowReactive, r as ref, M as withDirectives, at as vShow, U as stopAndPrevent, _ as _export_sfc, k as openBlock, l as createBlock, m as withCtx, C as createBaseVNode, B as createElementBlock, F as Fragment, I as renderList, K as createCommentVNode, f as createVNode, E as toDisplayString, G as pushScopeId, H as popScopeId, D as createTextVNode } from "./index.cf036711.js";
import { Q as QCard, a as QCardSection } from "./QCard.848bd264.js";
import { u as usePanelChildProps, a as usePanelProps, b as usePanelEmits, c as usePanel } from "./use-panel.a9e9c493.js";
import { u as useDarkProps, a as useDark } from "./use-dark.8fb57865.js";
import { u as useFullscreenProps, a as useFullscreenEmits, b as useFullscreen } from "./use-fullscreen.afb20d4f.js";
import { Q as QItem, a as QList } from "./QList.1f9c1576.js";
import { Q as QItemSection } from "./QItemSection.1a39d5f6.js";
import { Q as QItemLabel } from "./QItemLabel.68b53514.js";
import { Q as QSeparator } from "./QSeparator.05e99626.js";
import { u as useModelToggleProps, a as useModelToggleEmits, b as useModelToggle } from "./use-model-toggle.01aba15e.js";
import { Q as QPage } from "./QPage.d17d76d8.js";
import "./dom.6171126e.js";
import "./selection.b5404565.js";
import "./use-cache.b0833c75.js";
var QBtnToggle = createComponent({
  name: "QBtnToggle",
  props: {
    ...useFormProps,
    modelValue: {
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator: (v) => v.every(
        (opt) => ("label" in opt || "icon" in opt || "slot" in opt) && "value" in opt
      )
    },
    color: String,
    textColor: String,
    toggleColor: {
      type: String,
      default: "primary"
    },
    toggleTextColor: String,
    outline: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    rounded: Boolean,
    push: Boolean,
    glossy: Boolean,
    size: String,
    padding: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    readonly: Boolean,
    disable: Boolean,
    stack: Boolean,
    stretch: Boolean,
    spread: Boolean,
    clearable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:modelValue", "clear", "click"],
  setup(props, { slots, emit }) {
    const hasActiveValue = computed(
      () => props.options.find((opt) => opt.value === props.modelValue) !== void 0
    );
    const formAttrs = computed(() => ({
      type: "hidden",
      name: props.name,
      value: props.modelValue
    }));
    const injectFormInput = useFormInject(formAttrs);
    const btnDesignAttr = computed(() => getBtnDesignAttr(props));
    const btnOptionDesign = computed(() => ({
      rounded: props.rounded,
      dense: props.dense,
      ...btnDesignAttr.value
    }));
    const btnOptions = computed(() => props.options.map((item, i) => {
      const { attrs, value, slot, ...opt } = item;
      return {
        slot,
        props: {
          key: i,
          "aria-pressed": value === props.modelValue ? "true" : "false",
          ...attrs,
          ...opt,
          ...btnOptionDesign.value,
          disable: props.disable === true || opt.disable === true,
          color: value === props.modelValue ? mergeOpt(opt, "toggleColor") : mergeOpt(opt, "color"),
          textColor: value === props.modelValue ? mergeOpt(opt, "toggleTextColor") : mergeOpt(opt, "textColor"),
          noCaps: mergeOpt(opt, "noCaps") === true,
          noWrap: mergeOpt(opt, "noWrap") === true,
          size: mergeOpt(opt, "size"),
          padding: mergeOpt(opt, "padding"),
          ripple: mergeOpt(opt, "ripple"),
          stack: mergeOpt(opt, "stack") === true,
          stretch: mergeOpt(opt, "stretch") === true,
          onClick(e) {
            set(value, item, e);
          }
        }
      };
    }));
    function set(value, opt, e) {
      if (props.readonly !== true) {
        if (props.modelValue === value) {
          if (props.clearable === true) {
            emit("update:modelValue", null, null);
            emit("clear");
          }
        } else {
          emit("update:modelValue", value, opt);
        }
        emit("click", e);
      }
    }
    function mergeOpt(opt, key) {
      return opt[key] === void 0 ? props[key] : opt[key];
    }
    function getContent() {
      const child = btnOptions.value.map((opt) => {
        return h(QBtn, opt.props, opt.slot !== void 0 ? slots[opt.slot] : void 0);
      });
      if (props.name !== void 0 && props.disable !== true && hasActiveValue.value === true) {
        injectFormInput(child, "push");
      }
      return hMergeSlot(slots.default, child);
    }
    return () => h(QBtnGroup, {
      class: "q-btn-toggle",
      ...btnDesignAttr.value,
      rounded: props.rounded,
      stretch: props.stretch,
      glossy: props.glossy,
      spread: props.spread
    }, getContent);
  }
});
var QCarouselSlide = createComponent({
  name: "QCarouselSlide",
  props: {
    ...usePanelChildProps,
    imgSrc: String
  },
  setup(props, { slots }) {
    const style = computed(() => props.imgSrc ? { backgroundImage: `url("${props.imgSrc}")` } : {});
    return () => h("div", {
      class: "q-carousel__slide",
      style: style.value
    }, hSlot(slots.default));
  }
});
const navigationPositionOptions = ["top", "right", "bottom", "left"];
const controlTypeOptions = ["regular", "flat", "outline", "push", "unelevated"];
var QCarousel = createComponent({
  name: "QCarousel",
  props: {
    ...useDarkProps,
    ...usePanelProps,
    ...useFullscreenProps,
    transitionPrev: {
      type: String,
      default: "fade"
    },
    transitionNext: {
      type: String,
      default: "fade"
    },
    height: String,
    padding: Boolean,
    controlColor: String,
    controlTextColor: String,
    controlType: {
      type: String,
      validator: (v) => controlTypeOptions.includes(v),
      default: "flat"
    },
    autoplay: [Number, Boolean],
    arrows: Boolean,
    prevIcon: String,
    nextIcon: String,
    navigation: Boolean,
    navigationPosition: {
      type: String,
      validator: (v) => navigationPositionOptions.includes(v)
    },
    navigationIcon: String,
    navigationActiveIcon: String,
    thumbnails: Boolean
  },
  emits: [
    ...useFullscreenEmits,
    ...usePanelEmits
  ],
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    let timer, panelsLen;
    const {
      updatePanelsList,
      getPanelContent,
      panelDirectives,
      goToPanel,
      previousPanel,
      nextPanel,
      getEnabledPanels,
      panelIndex
    } = usePanel();
    const { inFullscreen } = useFullscreen();
    const style = computed(() => inFullscreen.value !== true && props.height !== void 0 ? { height: props.height } : {});
    const direction = computed(() => props.vertical === true ? "vertical" : "horizontal");
    const classes = computed(
      () => `q-carousel q-panel-parent q-carousel--with${props.padding === true ? "" : "out"}-padding` + (inFullscreen.value === true ? " fullscreen" : "") + (isDark.value === true ? " q-carousel--dark q-dark" : "") + (props.arrows === true ? ` q-carousel--arrows-${direction.value}` : "") + (props.navigation === true ? ` q-carousel--navigation-${navigationPosition.value}` : "")
    );
    const arrowIcons = computed(() => {
      const ico = [
        props.prevIcon || $q.iconSet.carousel[props.vertical === true ? "up" : "left"],
        props.nextIcon || $q.iconSet.carousel[props.vertical === true ? "down" : "right"]
      ];
      return props.vertical === false && $q.lang.rtl === true ? ico.reverse() : ico;
    });
    const navIcon = computed(() => props.navigationIcon || $q.iconSet.carousel.navigationIcon);
    const navActiveIcon = computed(() => props.navigationActiveIcon || navIcon.value);
    const navigationPosition = computed(
      () => props.navigationPosition || (props.vertical === true ? "right" : "bottom")
    );
    const controlProps = computed(() => ({
      color: props.controlColor,
      textColor: props.controlTextColor,
      round: true,
      [props.controlType]: true,
      dense: true
    }));
    watch(() => props.modelValue, () => {
      if (props.autoplay) {
        clearInterval(timer);
        startTimer();
      }
    });
    watch(() => props.autoplay, (val) => {
      if (val) {
        startTimer();
      } else {
        clearInterval(timer);
      }
    });
    function startTimer() {
      const duration = isNumber(props.autoplay) === true ? props.autoplay : 5e3;
      timer = setTimeout(
        duration >= 0 ? nextPanel : previousPanel,
        Math.abs(duration)
      );
    }
    onMounted(() => {
      props.autoplay && startTimer();
    });
    onBeforeUnmount(() => {
      clearInterval(timer);
    });
    function getNavigationContainer(type, mapping) {
      return h("div", {
        class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${type} q-carousel__navigation--${navigationPosition.value}` + (props.controlColor !== void 0 ? ` text-${props.controlColor}` : "")
      }, [
        h("div", {
          class: "q-carousel__navigation-inner flex flex-center no-wrap"
        }, getEnabledPanels().map(mapping))
      ]);
    }
    function getContent() {
      const node = [];
      if (props.navigation === true) {
        const fn = slots["navigation-icon"] !== void 0 ? slots["navigation-icon"] : (opts) => h(QBtn, {
          key: "nav" + opts.name,
          class: `q-carousel__navigation-icon q-carousel__navigation-icon--${opts.active === true ? "" : "in"}active`,
          ...opts.btnProps,
          onClick: opts.onClick
        });
        const maxIndex = panelsLen - 1;
        node.push(
          getNavigationContainer("buttons", (panel, index) => {
            const name = panel.props.name;
            const active = panelIndex.value === index;
            return fn({
              index,
              maxIndex,
              name,
              active,
              btnProps: {
                icon: active === true ? navActiveIcon.value : navIcon.value,
                size: "sm",
                ...controlProps.value
              },
              onClick: () => {
                goToPanel(name);
              }
            });
          })
        );
      } else if (props.thumbnails === true) {
        const color = props.controlColor !== void 0 ? ` text-${props.controlColor}` : "";
        node.push(getNavigationContainer("thumbnails", (panel) => {
          const slide = panel.props;
          return h("img", {
            key: "tmb#" + slide.name,
            class: `q-carousel__thumbnail q-carousel__thumbnail--${slide.name === props.modelValue ? "" : "in"}active` + color,
            src: slide.imgSrc || slide["img-src"],
            onClick: () => {
              goToPanel(slide.name);
            }
          });
        }));
      }
      if (props.arrows === true && panelIndex.value >= 0) {
        if (props.infinite === true || panelIndex.value > 0) {
          node.push(
            h("div", {
              key: "prev",
              class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${direction.value} absolute flex flex-center`
            }, [
              h(QBtn, {
                icon: arrowIcons.value[0],
                ...controlProps.value,
                onClick: previousPanel
              })
            ])
          );
        }
        if (props.infinite === true || panelIndex.value < panelsLen - 1) {
          node.push(
            h("div", {
              key: "next",
              class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${direction.value} absolute flex flex-center`
            }, [
              h(QBtn, {
                icon: arrowIcons.value[1],
                ...controlProps.value,
                onClick: nextPanel
              })
            ])
          );
        }
      }
      return hMergeSlot(slots.control, node);
    }
    return () => {
      panelsLen = updatePanelsList(slots);
      return h("div", {
        class: classes.value,
        style: style.value
      }, [
        hDir(
          "div",
          { class: "q-carousel__slides-container" },
          getPanelContent(),
          "sl-cont",
          props.swipeable,
          () => panelDirectives.value
        )
      ].concat(getContent()));
    };
  }
});
var QSlideTransition = createComponent({
  name: "QSlideTransition",
  props: {
    appear: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit }) {
    let animating = false, doneFn, element;
    let timer, timerFallback, animListener, lastEvent;
    function cleanup() {
      doneFn && doneFn();
      doneFn = null;
      animating = false;
      clearTimeout(timer);
      clearTimeout(timerFallback);
      element !== void 0 && element.removeEventListener("transitionend", animListener);
      animListener = null;
    }
    function begin(el, height, done) {
      el.style.overflowY = "hidden";
      if (height !== void 0) {
        el.style.height = `${height}px`;
      }
      el.style.transition = `height ${props.duration}ms cubic-bezier(.25, .8, .50, 1)`;
      animating = true;
      doneFn = done;
    }
    function end(el, event) {
      el.style.overflowY = null;
      el.style.height = null;
      el.style.transition = null;
      cleanup();
      event !== lastEvent && emit(event);
    }
    function onEnter(el, done) {
      let pos = 0;
      element = el;
      if (animating === true) {
        cleanup();
        pos = el.offsetHeight === el.scrollHeight ? 0 : void 0;
      } else {
        lastEvent = "hide";
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        el.style.height = `${el.scrollHeight}px`;
        animListener = (evt) => {
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "show");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    function onLeave(el, done) {
      let pos;
      element = el;
      if (animating === true) {
        cleanup();
      } else {
        lastEvent = "show";
        pos = el.scrollHeight;
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        el.style.height = 0;
        animListener = (evt) => {
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "hide");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    onBeforeUnmount(() => {
      animating === true && cleanup();
    });
    return () => h(Transition, {
      css: false,
      appear: props.appear,
      onEnter,
      onLeave
    }, slots.default);
  }
});
const itemGroups = shallowReactive({});
const LINK_PROPS = Object.keys(useRouterLinkProps);
var QExpansionItem = createComponent({
  name: "QExpansionItem",
  props: {
    ...useRouterLinkProps,
    ...useModelToggleProps,
    ...useDarkProps,
    icon: String,
    label: String,
    labelLines: [Number, String],
    caption: String,
    captionLines: [Number, String],
    dense: Boolean,
    toggleAriaLabel: String,
    expandIcon: String,
    expandedIcon: String,
    expandIconClass: [Array, String, Object],
    duration: Number,
    headerInsetLevel: Number,
    contentInsetLevel: Number,
    expandSeparator: Boolean,
    defaultOpened: Boolean,
    hideExpandIcon: Boolean,
    expandIconToggle: Boolean,
    switchToggleSide: Boolean,
    denseToggle: Boolean,
    group: String,
    popup: Boolean,
    headerStyle: [Array, String, Object],
    headerClass: [Array, String, Object]
  },
  emits: [
    ...useModelToggleEmits,
    "click",
    "afterShow",
    "afterHide"
  ],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const showing = ref(
      props.modelValue !== null ? props.modelValue : props.defaultOpened
    );
    const blurTargetRef = ref(null);
    const targetUid = uid();
    const { show, hide, toggle } = useModelToggle({ showing });
    let uniqueId, exitGroup;
    const classes = computed(
      () => `q-expansion-item q-item-type q-expansion-item--${showing.value === true ? "expanded" : "collapsed"} q-expansion-item--${props.popup === true ? "popup" : "standard"}`
    );
    const contentStyle = computed(() => {
      if (props.contentInsetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: props.contentInsetLevel * 56 + "px"
      };
    });
    const hasLink = computed(
      () => props.disable !== true && (props.href !== void 0 || props.to !== void 0 && props.to !== null && props.to !== "")
    );
    const linkProps = computed(() => {
      const acc = {};
      LINK_PROPS.forEach((key) => {
        acc[key] = props[key];
      });
      return acc;
    });
    const isClickable = computed(
      () => hasLink.value === true || props.expandIconToggle !== true
    );
    const expansionIcon = computed(() => props.expandedIcon !== void 0 && showing.value === true ? props.expandedIcon : props.expandIcon || $q.iconSet.expansionItem[props.denseToggle === true ? "denseIcon" : "icon"]);
    const activeToggleIcon = computed(
      () => props.disable !== true && (hasLink.value === true || props.expandIconToggle === true)
    );
    const headerSlotScope = computed(() => ({
      expanded: showing.value === true,
      detailsId: props.targetUid,
      toggle,
      show,
      hide
    }));
    const toggleAriaAttrs = computed(() => {
      const toggleAriaLabel = props.toggleAriaLabel !== void 0 ? props.toggleAriaLabel : $q.lang.label[showing.value === true ? "collapse" : "expand"](props.label);
      return {
        role: "button",
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-owns": targetUid,
        "aria-controls": targetUid,
        "aria-label": toggleAriaLabel
      };
    });
    watch(() => props.group, (name) => {
      exitGroup !== void 0 && exitGroup();
      name !== void 0 && enterGroup();
    });
    function onHeaderClick(e) {
      hasLink.value !== true && toggle(e);
      emit("click", e);
    }
    function toggleIconKeyboard(e) {
      e.keyCode === 13 && toggleIcon(e, true);
    }
    function toggleIcon(e, keyboard) {
      keyboard !== true && blurTargetRef.value !== null && blurTargetRef.value.focus();
      toggle(e);
      stopAndPrevent(e);
    }
    function onShow() {
      emit("afterShow");
    }
    function onHide() {
      emit("afterHide");
    }
    function enterGroup() {
      if (uniqueId === void 0) {
        uniqueId = uid();
      }
      if (showing.value === true) {
        itemGroups[props.group] = uniqueId;
      }
      const show2 = watch(showing, (val) => {
        if (val === true) {
          itemGroups[props.group] = uniqueId;
        } else if (itemGroups[props.group] === uniqueId) {
          delete itemGroups[props.group];
        }
      });
      const group = watch(
        () => itemGroups[props.group],
        (val, oldVal) => {
          if (oldVal === uniqueId && val !== void 0 && val !== uniqueId) {
            hide();
          }
        }
      );
      exitGroup = () => {
        show2();
        group();
        if (itemGroups[props.group] === uniqueId) {
          delete itemGroups[props.group];
        }
        exitGroup = void 0;
      };
    }
    function getToggleIcon() {
      const data = {
        class: [
          `q-focusable relative-position cursor-pointer${props.denseToggle === true && props.switchToggleSide === true ? " items-end" : ""}`,
          props.expandIconClass
        ],
        side: props.switchToggleSide !== true,
        avatar: props.switchToggleSide
      };
      const child = [
        h(QIcon, {
          class: "q-expansion-item__toggle-icon" + (props.expandedIcon === void 0 && showing.value === true ? " q-expansion-item__toggle-icon--rotated" : ""),
          name: expansionIcon.value
        })
      ];
      if (activeToggleIcon.value === true) {
        Object.assign(data, {
          tabindex: 0,
          ...toggleAriaAttrs.value,
          onClick: toggleIcon,
          onKeyup: toggleIconKeyboard
        });
        child.unshift(
          h("div", {
            ref: blurTargetRef,
            class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",
            tabindex: -1
          })
        );
      }
      return h(QItemSection, data, () => child);
    }
    function getHeaderChild() {
      let child;
      if (slots.header !== void 0) {
        child = [].concat(slots.header(headerSlotScope.value));
      } else {
        child = [
          h(QItemSection, () => [
            h(QItemLabel, { lines: props.labelLines }, () => props.label || ""),
            props.caption ? h(QItemLabel, { lines: props.captionLines, caption: true }, () => props.caption) : null
          ])
        ];
        props.icon && child[props.switchToggleSide === true ? "push" : "unshift"](
          h(QItemSection, {
            side: props.switchToggleSide === true,
            avatar: props.switchToggleSide !== true
          }, () => h(QIcon, { name: props.icon }))
        );
      }
      if (props.disable !== true && props.hideExpandIcon !== true) {
        child[props.switchToggleSide === true ? "unshift" : "push"](
          getToggleIcon()
        );
      }
      return child;
    }
    function getHeader() {
      const data = {
        ref: "item",
        style: props.headerStyle,
        class: props.headerClass,
        dark: isDark.value,
        disable: props.disable,
        dense: props.dense,
        insetLevel: props.headerInsetLevel
      };
      if (isClickable.value === true) {
        data.clickable = true;
        data.onClick = onHeaderClick;
        Object.assign(
          data,
          hasLink.value === true ? linkProps.value : toggleAriaAttrs.value
        );
      }
      return h(QItem, data, getHeaderChild);
    }
    function getTransitionChild() {
      return withDirectives(
        h("div", {
          key: "e-content",
          class: "q-expansion-item__content relative-position",
          style: contentStyle.value,
          id: targetUid
        }, hSlot(slots.default)),
        [[
          vShow,
          showing.value
        ]]
      );
    }
    function getContent() {
      const node = [
        getHeader(),
        h(QSlideTransition, {
          duration: props.duration,
          onShow,
          onHide
        }, getTransitionChild)
      ];
      if (props.expandSeparator === true) {
        node.push(
          h(QSeparator, {
            class: "q-expansion-item__border q-expansion-item__border--top absolute-top",
            dark: isDark.value
          }),
          h(QSeparator, {
            class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",
            dark: isDark.value
          })
        );
      }
      return node;
    }
    props.group !== void 0 && enterGroup();
    onBeforeUnmount(() => {
      exitGroup !== void 0 && exitGroup();
    });
    return () => h("div", { class: classes.value }, [
      h("div", { class: "q-expansion-item__container relative-position" }, getContent())
    ]);
  }
});
var PackagesPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const cards = [
  {
    name: "B\xE1sico",
    about: "Encontre e fa\xE7a a gest\xE3o dos seus leads de forma f\xE1cil",
    values: [15, 30],
    value: 15,
    unitPrice: 21,
    featured: false
  },
  {
    name: "Equipe PRO",
    about: "Dashboard completo e relat\xF3rios da equipe e individual",
    values: [200, 350, 500, 600],
    value: 200,
    unitPrice: 17,
    featured: true
  },
  {
    name: "Equipe",
    about: "Adicione membros a sua equipe e compartilhe seus leads",
    values: [50, 80, 110, 140],
    value: 50,
    unitPrice: 19,
    featured: false
  }
];
const specs = [
  {
    label: "At\xE9 20% leads Pessoa Jur\xEDdica",
    checks: [true, true, true]
  },
  {
    label: "Buscador de Leads",
    checks: [true, true, true]
  },
  {
    label: "Suporte via Chat",
    checks: [true, true, true]
  },
  {
    label: "Suporte via Telefone",
    checks: [false, true, true]
  },
  {
    label: "Negativa\xE7\xE3o de Leads",
    checks: [true, true, true]
  },
  {
    label: "Qualifica\xE7\xE3o de Leads",
    checks: [true, true, true]
  },
  {
    label: "Bot\xE3o WhatsApp",
    checks: [true, true, true]
  },
  {
    label: "Exporta\xE7\xE3o de Contatos",
    checks: [true, true, true]
  },
  {
    label: "Importa\xE7\xE3o de Contatos",
    checks: [false, true, true]
  },
  {
    label: "Integra\xE7\xE3o com outros CRMs",
    checks: [false, true, true]
  },
  {
    label: "Compartilhar Lead com Equipe",
    checks: [false, true, true]
  },
  {
    label: "Dashboard Equipe e Individual",
    checks: [false, true, false]
  }
];
const _sfc_main = {
  name: "PackagesPage",
  setup() {
    const model = ref("");
    const carousel = ref("B\xE1sico");
    return {
      model,
      carousel,
      cards: ref(cards),
      specs
    };
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-69895619"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "row justify-center" };
const _hoisted_2 = { class: "col-12 col-md-11" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-center q-py-xl q-px-lg" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "text-uppercase text-primary" }, " Sem mensalidade, sem contrato, compre sob demanda "),
  /* @__PURE__ */ createBaseVNode("h1", { class: "text-h4" }, [
    /* @__PURE__ */ createTextVNode(" Pacotes de "),
    /* @__PURE__ */ createBaseVNode("b", null, "leads"),
    /* @__PURE__ */ createTextVNode(" para "),
    /* @__PURE__ */ createBaseVNode("b", null, "Plano de Sa\xFAde")
  ])
], -1));
const _hoisted_4 = {
  key: 0,
  cellpadding: "0",
  cellspacing: "0",
  class: "text-legend"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("td", { width: "20%" }, null, -1));
const _hoisted_6 = {
  key: 0,
  class: "text-red text-weight-medium"
};
const _hoisted_7 = { class: "text-h6" };
const _hoisted_8 = { class: "q-px-sm" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-weight-bold" }, "Quantidade de Leads", -1));
const _hoisted_10 = { class: "flex items-center q-mt-md" };
const _hoisted_11 = { class: "text-h4 text-weight-bold" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "bar-separator" }, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "por lead", -1));
const _hoisted_14 = { class: "q-gutter-sm" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Total:", -1));
const _hoisted_16 = { class: "text-title2 text-weight-bold" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("td", { width: "20%" }, null, -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", {
    width: "20%",
    height: "50px"
  }, [
    /* @__PURE__ */ createBaseVNode("b", null, "Recursos")
  ]),
  /* @__PURE__ */ createBaseVNode("td", {
    width: "20%",
    class: "bg-white"
  }),
  /* @__PURE__ */ createBaseVNode("td", {
    width: "20%",
    class: "bg-white"
  }),
  /* @__PURE__ */ createBaseVNode("td", {
    width: "20%",
    class: "bg-white"
  }),
  /* @__PURE__ */ createBaseVNode("td", { width: "20%" })
], -1));
const _hoisted_19 = {
  width: "20%",
  height: "40px",
  class: "text-underline"
};
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("td", { width: "20%" }, null, -1));
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("td", { width: "20%" }, null, -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("td", { width: "20%" }, null, -1));
const _hoisted_23 = { class: "text-h6" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-weight-bold" }, "Quantidade de Leads", -1));
const _hoisted_25 = { class: "flex items-center q-mt-md" };
const _hoisted_26 = { class: "text-h4 text-weight-bold" };
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "bar-separator" }, null, -1));
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "por lead", -1));
const _hoisted_29 = { class: "q-gutter-sm" };
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Total:", -1));
const _hoisted_31 = { class: "text-title2 text-weight-bold" };
const _hoisted_32 = { class: "col" };
const _hoisted_33 = { class: "col-2 text-right" };
const _hoisted_34 = { class: "row justify-center q-py-xl" };
const _hoisted_35 = { class: "col-11 col-md-10" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, {
    padding: "",
    class: "bg-pedidos"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          _ctx.$q.screen.width > 768 ? (openBlock(), createElementBlock("table", _hoisted_4, [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                _hoisted_5,
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.cards, (card) => {
                  return openBlock(), createElementBlock("td", {
                    key: card.name
                  }, [
                    createVNode(QCard, { class: "table-shadow text-legend" }, {
                      default: withCtx(() => [
                        createVNode(QCardSection, { class: "q-pa-lg text-center column items-center" }, {
                          default: withCtx(() => [
                            card.featured ? (openBlock(), createElementBlock("p", _hoisted_6, " Melhor valor por lead ")) : createCommentVNode("", true),
                            createBaseVNode("p", _hoisted_7, toDisplayString(card.name), 1),
                            createBaseVNode("p", _hoisted_8, toDisplayString(card.about), 1),
                            _hoisted_9,
                            createVNode(QBtnToggle, {
                              modelValue: card.value,
                              "onUpdate:modelValue": ($event) => card.value = $event,
                              unelevated: "",
                              rounded: "",
                              color: "white",
                              "text-color": "dark",
                              "toggle-color": "dark",
                              "no-caps": "",
                              ripple: false,
                              options: card.values.map((item) => ({
                                label: item.toString(),
                                value: item
                              }))
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                            createBaseVNode("p", _hoisted_10, [
                              createBaseVNode("span", _hoisted_11, "R$ " + toDisplayString(card.unitPrice), 1),
                              _hoisted_12,
                              _hoisted_13
                            ]),
                            createBaseVNode("p", _hoisted_14, [
                              _hoisted_15,
                              createBaseVNode("span", _hoisted_16, "R$ " + toDisplayString(card.value * card.unitPrice), 1)
                            ]),
                            createVNode(QBtn, {
                              to: "/checkout",
                              outline: "",
                              label: "Comprar agora",
                              "no-caps": "",
                              class: "full-width"
                            })
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]);
                }), 128)),
                _hoisted_17
              ])
            ]),
            createBaseVNode("tbody", null, [
              _hoisted_18,
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.specs, (item) => {
                return openBlock(), createElementBlock("tr", {
                  key: item.label
                }, [
                  createBaseVNode("td", _hoisted_19, toDisplayString(item.label), 1),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.checks, (check) => {
                    return openBlock(), createElementBlock("td", {
                      key: check,
                      width: "20%",
                      class: "bg-white text-center"
                    }, [
                      check ? (openBlock(), createBlock(QIcon, {
                        key: 0,
                        name: "check",
                        size: "20px"
                      })) : createCommentVNode("", true)
                    ]);
                  }), 128)),
                  _hoisted_20
                ]);
              }), 128)),
              createBaseVNode("tr", null, [
                _hoisted_21,
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.cards, (card) => {
                  return openBlock(), createElementBlock("td", {
                    key: card.name,
                    width: "20%",
                    class: "bg-white text-center"
                  }, [
                    createVNode(QBtn, {
                      outline: !card.featured,
                      unelevated: card.featured,
                      color: card.featured ? "primary" : "dark",
                      label: "Comprar agora",
                      class: "q-my-lg"
                    }, null, 8, ["outline", "unelevated", "color"])
                  ]);
                }), 128)),
                _hoisted_22
              ])
            ])
          ])) : createCommentVNode("", true),
          _ctx.$q.screen.width < 768 ? (openBlock(), createBlock(QCarousel, {
            key: 1,
            modelValue: $setup.carousel,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.carousel = $event),
            "transition-prev": "scale",
            "transition-next": "scale",
            swipeable: "",
            animated: "",
            "control-color": "primary",
            arrows: ""
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.cards, (card, index) => {
                return openBlock(), createBlock(QCarouselSlide, {
                  key: card.name,
                  name: card.name
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, { class: "table-shadow" }, {
                      default: withCtx(() => [
                        createVNode(QCardSection, { class: "q-pa-lg text-center column items-center" }, {
                          default: withCtx(() => [
                            createBaseVNode("p", _hoisted_23, toDisplayString(card.name), 1),
                            createBaseVNode("p", null, toDisplayString(card.about), 1),
                            _hoisted_24,
                            createVNode(QBtnToggle, {
                              modelValue: card.value,
                              "onUpdate:modelValue": ($event) => card.value = $event,
                              unelevated: "",
                              rounded: "",
                              color: "white",
                              "text-color": "dark",
                              "toggle-color": "dark",
                              "no-caps": "",
                              ripple: false,
                              options: card.values.map((item) => ({
                                label: item.toString(),
                                value: item
                              }))
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                            createBaseVNode("p", _hoisted_25, [
                              createBaseVNode("span", _hoisted_26, "R$ " + toDisplayString(card.unitPrice), 1),
                              _hoisted_27,
                              _hoisted_28
                            ]),
                            createBaseVNode("p", _hoisted_29, [
                              _hoisted_30,
                              createBaseVNode("span", _hoisted_31, "R$ " + toDisplayString(card.value * card.unitPrice), 1)
                            ]),
                            createVNode(QBtn, {
                              outline: "",
                              label: "Comprar agora",
                              "no-caps": "",
                              class: "full-width"
                            })
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.specs, (item) => {
                              return openBlock(), createElementBlock("div", {
                                key: item.label,
                                class: "full-width row justify-between items-center q-mb-md"
                              }, [
                                createBaseVNode("div", _hoisted_32, toDisplayString(item.label), 1),
                                createBaseVNode("div", _hoisted_33, [
                                  item.checks[index] === true ? (openBlock(), createBlock(QIcon, {
                                    key: 0,
                                    name: "check",
                                    size: "20px"
                                  })) : createCommentVNode("", true)
                                ])
                              ]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["name"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_34, [
            createBaseVNode("div", _hoisted_35, [
              createVNode(QList, { padding: "" }, {
                default: withCtx(() => [
                  createVNode(QExpansionItem, { label: "Qual \xE9 a diferen\xE7a entre as Licen\xE7as Padr\xE3o e Ampliada?" }),
                  createVNode(QExpansionItem, { label: "Como funcionam os planos de assinatura Shutterstock?" }),
                  createVNode(QExpansionItem, { label: "Qual \xE9 a diferen\xE7a entre os planos FLEX de v\xE1rios recursos e as outras assinaturas do Shutterstock?" }),
                  createVNode(QExpansionItem, { label: "Como funcionam os cr\xE9ditos dos planos FLEX?" }),
                  createVNode(QExpansionItem, { label: "Eu devo comprar um plano de assinatura ou um pacote sob demanda?" }),
                  createVNode(QExpansionItem, { label: "Como funciona a renova\xE7\xE3o autom\xE1tica?" }),
                  createVNode(QExpansionItem, { label: "Qual \xE9 a diferen\xE7a entre a conta individual e a Enterprise ou Equipe" }),
                  createVNode(QExpansionItem, { label: "Posso fazer o upgrade ou downgrade para outro plano?" }),
                  createVNode(QExpansionItem, { label: "Posso cancelar meu plano se n\xE3o precisar mais dele?" }),
                  createVNode(QExpansionItem, { label: "Posso receber um reembolso se cancelar meu plano?" })
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _: 1
  });
}
var PackagesPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-69895619"]]);
export { PackagesPage as default };
