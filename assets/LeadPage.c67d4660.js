import { Q as QAvatar } from "./QAvatar.840f1c75.js";
import { R as Ripple, a as QIcon, Q as QBtn } from "./QBtn.a17df556.js";
import { Q as QSeparator } from "./QSeparator.05e99626.js";
import { r as rtlHasScrollBug, Q as QSelect } from "./QSelect.ad12804a.js";
import { a as QCardSection, Q as QCard } from "./QCard.848bd264.js";
import { a as hMergeSlot, c as createComponent, h as hSlot, b as hUniqueSlot, f as hDir } from "./render.ebc3bf11.js";
import { i as inject, p as emptyRenderFn, r as ref, c as computed, u as onBeforeUnmount, o as onMounted, an as tabsKey, M as withDirectives, h, U as stopAndPrevent, O as isKeyCode, a3 as shouldIgnoreKey, g as getCurrentInstance, a9 as isDeepEqual, v as noop, w as watch, q as provide, a0 as onDeactivated, a6 as onActivated, ao as timelineKey, _ as _export_sfc, j as defineComponent, k as openBlock, l as createBlock, m as withCtx, C as createBaseVNode, f as createVNode, E as toDisplayString, D as createTextVNode, B as createElementBlock } from "./index.cf036711.js";
import { b as uid } from "./use-form.e9a257fc.js";
import { Q as QResizeObserver } from "./QResizeObserver.86c4f40e.js";
import { a as useTick, b as useTimeout } from "./focusout.5290e48a.js";
import { Q as QInput } from "./QInput.f7213602.js";
import { Q as QItemSection } from "./QItemSection.1a39d5f6.js";
import { a as QList, Q as QItem } from "./QList.1f9c1576.js";
import { u as useDarkProps, a as useDark } from "./use-dark.8fb57865.js";
import { u as usePanelChildProps, a as usePanelProps, b as usePanelEmits, c as usePanel } from "./use-panel.a9e9c493.js";
import { Q as QImg } from "./QImg.c6a2d2e4.js";
import { Q as QPage } from "./QPage.d17d76d8.js";
import { u as useOrderStore } from "./order-store.945621b5.js";
import { _ as _imports_0 } from "./vguerato.76f2042f.js";
import "./dom.6171126e.js";
import "./use-key-composition.e6149e28.js";
import "./focus-manager.d6507951.js";
import "./QItemLabel.68b53514.js";
import "./QMenu.b44e60d8.js";
import "./selection.b5404565.js";
import "./use-model-toggle.01aba15e.js";
import "./scroll.195f9007.js";
import "./QDialog.d0e28515.js";
import "./use-cache.b0833c75.js";
import "./index.2c9b47bb.js";
let id = 0;
const useTabEmits = ["click", "keydown"];
const useTabProps = {
  icon: String,
  label: [Number, String],
  alert: [Boolean, String],
  alertIcon: String,
  name: {
    type: [Number, String],
    default: () => `t_${id++}`
  },
  noCaps: Boolean,
  tabindex: [String, Number],
  disable: Boolean,
  contentClass: String,
  ripple: {
    type: [Boolean, Object],
    default: true
  }
};
function useTab(props, slots, emit, routeData) {
  const $tabs = inject(tabsKey, emptyRenderFn);
  if ($tabs === emptyRenderFn) {
    console.error("QTab/QRouteTab component needs to be child of QTabs");
    return emptyRenderFn;
  }
  const { proxy } = getCurrentInstance();
  const blurTargetRef = ref(null);
  const rootRef = ref(null);
  const tabIndicatorRef = ref(null);
  const ripple = computed(() => props.disable === true || props.ripple === false ? false : Object.assign(
    { keyCodes: [13, 32], early: true },
    props.ripple === true ? {} : props.ripple
  ));
  const isActive = computed(() => $tabs.currentModel.value === props.name);
  const classes = computed(
    () => "q-tab relative-position self-stretch flex flex-center text-center" + (isActive.value === true ? " q-tab--active" + ($tabs.tabProps.value.activeClass ? " " + $tabs.tabProps.value.activeClass : "") + ($tabs.tabProps.value.activeColor ? ` text-${$tabs.tabProps.value.activeColor}` : "") + ($tabs.tabProps.value.activeBgColor ? ` bg-${$tabs.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (props.icon && props.label && $tabs.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (props.noCaps === true || $tabs.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (props.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (routeData !== void 0 ? routeData.linkClass.value : "")
  );
  const innerClass = computed(
    () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + ($tabs.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
  );
  const tabIndex = computed(() => props.disable === true || $tabs.hasFocus.value === true || isActive.value === false && $tabs.hasActiveTab.value === true ? -1 : props.tabindex || 0);
  function onClick(e, keyboard) {
    if (keyboard !== true && blurTargetRef.value !== null) {
      blurTargetRef.value.focus();
    }
    if (props.disable === true) {
      if (routeData !== void 0 && routeData.hasRouterLink.value === true) {
        stopAndPrevent(e);
      }
      return;
    }
    if (routeData === void 0) {
      $tabs.updateModel({ name: props.name });
      emit("click", e);
      return;
    }
    if (routeData.hasRouterLink.value === true) {
      const go = (opts = {}) => {
        let hardError;
        const reqId = opts.to === void 0 || isDeepEqual(opts.to, props.to) === true ? $tabs.avoidRouteWatcher = uid() : null;
        return routeData.navigateToRouterLink(e, { ...opts, returnRouterError: true }).catch((err) => {
          hardError = err;
        }).then((softError) => {
          if (reqId === $tabs.avoidRouteWatcher) {
            $tabs.avoidRouteWatcher = false;
            if (hardError === void 0 && (softError === void 0 || softError.message.startsWith("Avoided redundant navigation") === true)) {
              $tabs.updateModel({ name: props.name });
            }
          }
          if (opts.returnRouterError === true) {
            return hardError !== void 0 ? Promise.reject(hardError) : softError;
          }
        });
      };
      emit("click", e, go);
      e.defaultPrevented !== true && go();
      return;
    }
    emit("click", e);
  }
  function onKeydown(e) {
    if (isKeyCode(e, [13, 32])) {
      onClick(e, true);
    } else if (shouldIgnoreKey(e) !== true && e.keyCode >= 35 && e.keyCode <= 40 && e.altKey !== true && e.metaKey !== true) {
      $tabs.onKbdNavigate(e.keyCode, proxy.$el) === true && stopAndPrevent(e);
    }
    emit("keydown", e);
  }
  function getContent() {
    const narrow = $tabs.tabProps.value.narrowIndicator, content = [], indicator = h("div", {
      ref: tabIndicatorRef,
      class: [
        "q-tab__indicator",
        $tabs.tabProps.value.indicatorClass
      ]
    });
    props.icon !== void 0 && content.push(
      h(QIcon, {
        class: "q-tab__icon",
        name: props.icon
      })
    );
    props.label !== void 0 && content.push(
      h("div", { class: "q-tab__label" }, props.label)
    );
    props.alert !== false && content.push(
      props.alertIcon !== void 0 ? h(QIcon, {
        class: "q-tab__alert-icon",
        color: props.alert !== true ? props.alert : void 0,
        name: props.alertIcon
      }) : h("div", {
        class: "q-tab__alert" + (props.alert !== true ? ` text-${props.alert}` : "")
      })
    );
    narrow === true && content.push(indicator);
    const node = [
      h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef }),
      h("div", { class: innerClass.value }, hMergeSlot(slots.default, content))
    ];
    narrow === false && node.push(indicator);
    return node;
  }
  const tabData = {
    name: computed(() => props.name),
    rootRef,
    tabIndicatorRef,
    routeData
  };
  onBeforeUnmount(() => {
    $tabs.unregisterTab(tabData);
  });
  onMounted(() => {
    $tabs.registerTab(tabData);
  });
  function renderTab(tag, customData) {
    const data = {
      ref: rootRef,
      class: classes.value,
      tabindex: tabIndex.value,
      role: "tab",
      "aria-selected": isActive.value === true ? "true" : "false",
      "aria-disabled": props.disable === true ? "true" : void 0,
      onClick,
      onKeydown,
      ...customData
    };
    return withDirectives(
      h(tag, data, getContent()),
      [[Ripple, ripple.value]]
    );
  }
  return { renderTab, $tabs };
}
var QTab = createComponent({
  name: "QTab",
  props: useTabProps,
  emits: useTabEmits,
  setup(props, { slots, emit }) {
    const { renderTab } = useTab(props, slots, emit);
    return () => renderTab("div");
  }
});
function getIndicatorClass(color, top, vertical) {
  const pos = vertical === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${top === true ? pos[0] : pos[1]}${color ? ` text-${color}` : ""}`;
}
const alignValues = ["left", "center", "right", "justify"];
var QTabs = createComponent({
  name: "QTabs",
  props: {
    modelValue: [Number, String],
    align: {
      type: String,
      default: "center",
      validator: (v) => alignValues.includes(v)
    },
    breakpoint: {
      type: [String, Number],
      default: 600
    },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String,
    "onUpdate:modelValue": [Function, Array]
  },
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const { registerTick: registerScrollTick } = useTick();
    const { registerTick: registerUpdateArrowsTick } = useTick();
    const { registerTick: registerAnimateTick } = useTick();
    const { registerTimeout: registerFocusTimeout, removeTimeout: removeFocusTimeout } = useTimeout();
    const { registerTimeout: registerScrollToTabTimeout, removeTimeout: removeScrollToTabTimeout } = useTimeout();
    const rootRef = ref(null);
    const contentRef = ref(null);
    const currentModel = ref(props.modelValue);
    const scrollable = ref(false);
    const leftArrow = ref(true);
    const rightArrow = ref(false);
    const justify = ref(false);
    const arrowsEnabled = computed(
      () => $q.platform.is.desktop === true || props.mobileArrows === true
    );
    const tabDataList = [];
    const tabDataListLen = ref(0);
    const hasFocus = ref(false);
    let animateTimer, scrollTimer, unwatchRoute;
    let localUpdateArrows = arrowsEnabled.value === true ? updateArrowsFn : noop;
    const tabProps = computed(() => ({
      activeClass: props.activeClass,
      activeColor: props.activeColor,
      activeBgColor: props.activeBgColor,
      indicatorClass: getIndicatorClass(
        props.indicatorColor,
        props.switchIndicator,
        props.vertical
      ),
      narrowIndicator: props.narrowIndicator,
      inlineLabel: props.inlineLabel,
      noCaps: props.noCaps
    }));
    const hasActiveTab = computed(() => {
      const len = tabDataListLen.value;
      const val = currentModel.value;
      for (let i = 0; i < len; i++) {
        if (tabDataList[i].name.value === val) {
          return true;
        }
      }
      return false;
    });
    const alignClass = computed(() => {
      const align = scrollable.value === true ? "left" : justify.value === true ? "justify" : props.align;
      return `q-tabs__content--align-${align}`;
    });
    const classes = computed(
      () => `q-tabs row no-wrap items-center q-tabs--${scrollable.value === true ? "" : "not-"}scrollable q-tabs--${props.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${arrowsEnabled.value === true && props.outsideArrows === true ? "outside" : "inside"}` + (props.dense === true ? " q-tabs--dense" : "") + (props.shrink === true ? " col-shrink" : "") + (props.stretch === true ? " self-stretch" : "")
    );
    const innerClass = computed(
      () => "q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position " + alignClass.value + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "") + ($q.platform.is.mobile === true ? " scroll" : "")
    );
    const domProps = computed(() => props.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" });
    const isRTL = computed(() => props.vertical !== true && $q.lang.rtl === true);
    const rtlPosCorrection = computed(() => rtlHasScrollBug === false && isRTL.value === true);
    watch(isRTL, localUpdateArrows);
    watch(() => props.modelValue, (name) => {
      updateModel({ name, setCurrent: true, skipEmit: true });
    });
    watch(() => props.outsideArrows, () => {
      recalculateScroll();
    });
    watch(arrowsEnabled, (v) => {
      localUpdateArrows = v === true ? updateArrowsFn : noop;
      recalculateScroll();
    });
    function updateModel({ name, setCurrent, skipEmit, fromRoute }) {
      if (currentModel.value !== name) {
        if (skipEmit !== true && props["onUpdate:modelValue"] !== void 0) {
          emit("update:modelValue", name);
        }
        if (setCurrent === true || props["onUpdate:modelValue"] === void 0) {
          animate(currentModel.value, name);
          currentModel.value = name;
        }
      }
    }
    function recalculateScroll() {
      registerScrollTick(() => {
        updateContainer({
          width: rootRef.value.offsetWidth,
          height: rootRef.value.offsetHeight
        });
      });
    }
    function updateContainer(domSize) {
      if (domProps.value === void 0 || contentRef.value === null) {
        return;
      }
      const size = domSize[domProps.value.container], scrollSize = Math.min(
        contentRef.value[domProps.value.scroll],
        Array.prototype.reduce.call(
          contentRef.value.children,
          (acc, el) => acc + (el[domProps.value.content] || 0),
          0
        )
      ), scroll = size > 0 && scrollSize > size;
      scrollable.value = scroll;
      scroll === true && registerUpdateArrowsTick(localUpdateArrows);
      justify.value = size < parseInt(props.breakpoint, 10);
    }
    function animate(oldName, newName) {
      const oldTab = oldName !== void 0 && oldName !== null && oldName !== "" ? tabDataList.find((tab) => tab.name.value === oldName) : null, newTab = newName !== void 0 && newName !== null && newName !== "" ? tabDataList.find((tab) => tab.name.value === newName) : null;
      if (oldTab && newTab) {
        const oldEl = oldTab.tabIndicatorRef.value, newEl = newTab.tabIndicatorRef.value;
        clearTimeout(animateTimer);
        oldEl.style.transition = "none";
        oldEl.style.transform = "none";
        newEl.style.transition = "none";
        newEl.style.transform = "none";
        const oldPos = oldEl.getBoundingClientRect(), newPos = newEl.getBoundingClientRect();
        newEl.style.transform = props.vertical === true ? `translate3d(0,${oldPos.top - newPos.top}px,0) scale3d(1,${newPos.height ? oldPos.height / newPos.height : 1},1)` : `translate3d(${oldPos.left - newPos.left}px,0,0) scale3d(${newPos.width ? oldPos.width / newPos.width : 1},1,1)`;
        registerAnimateTick(() => {
          animateTimer = setTimeout(() => {
            newEl.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)";
            newEl.style.transform = "none";
          }, 70);
        });
      }
      if (newTab && scrollable.value === true) {
        scrollToTabEl(newTab.rootRef.value);
      }
    }
    function scrollToTabEl(el) {
      const { left, width, top, height } = contentRef.value.getBoundingClientRect(), newPos = el.getBoundingClientRect();
      let offset = props.vertical === true ? newPos.top - top : newPos.left - left;
      if (offset < 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(offset);
        localUpdateArrows();
        return;
      }
      offset += props.vertical === true ? newPos.height - height : newPos.width - width;
      if (offset > 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(offset);
        localUpdateArrows();
      }
    }
    function updateArrowsFn() {
      const content = contentRef.value;
      if (content !== null) {
        const rect = content.getBoundingClientRect(), pos = props.vertical === true ? content.scrollTop : Math.abs(content.scrollLeft);
        if (isRTL.value === true) {
          leftArrow.value = Math.ceil(pos + rect.width) < content.scrollWidth - 1;
          rightArrow.value = pos > 0;
        } else {
          leftArrow.value = pos > 0;
          rightArrow.value = props.vertical === true ? Math.ceil(pos + rect.height) < content.scrollHeight : Math.ceil(pos + rect.width) < content.scrollWidth;
        }
      }
    }
    function animScrollTo(value) {
      stopAnimScroll();
      scrollTimer = setInterval(() => {
        if (scrollTowards(value) === true) {
          stopAnimScroll();
        }
      }, 5);
    }
    function scrollToStart() {
      animScrollTo(rtlPosCorrection.value === true ? Number.MAX_SAFE_INTEGER : 0);
    }
    function scrollToEnd() {
      animScrollTo(rtlPosCorrection.value === true ? 0 : Number.MAX_SAFE_INTEGER);
    }
    function stopAnimScroll() {
      clearInterval(scrollTimer);
    }
    function onKbdNavigate(keyCode, fromEl) {
      const tabs = Array.prototype.filter.call(
        contentRef.value.children,
        (el) => el === fromEl || el.matches && el.matches(".q-tab.q-focusable") === true
      );
      const len = tabs.length;
      if (len === 0) {
        return;
      }
      if (keyCode === 36) {
        scrollToTabEl(tabs[0]);
        tabs[0].focus();
        return true;
      }
      if (keyCode === 35) {
        scrollToTabEl(tabs[len - 1]);
        tabs[len - 1].focus();
        return true;
      }
      const dirPrev = keyCode === (props.vertical === true ? 38 : 37);
      const dirNext = keyCode === (props.vertical === true ? 40 : 39);
      const dir = dirPrev === true ? -1 : dirNext === true ? 1 : void 0;
      if (dir !== void 0) {
        const rtlDir = isRTL.value === true ? -1 : 1;
        const index = tabs.indexOf(fromEl) + dir * rtlDir;
        if (index >= 0 && index < len) {
          scrollToTabEl(tabs[index]);
          tabs[index].focus({ preventScroll: true });
        }
        return true;
      }
    }
    const posFn = computed(() => rtlPosCorrection.value === true ? { get: (content) => Math.abs(content.scrollLeft), set: (content, pos) => {
      content.scrollLeft = -pos;
    } } : props.vertical === true ? { get: (content) => content.scrollTop, set: (content, pos) => {
      content.scrollTop = pos;
    } } : { get: (content) => content.scrollLeft, set: (content, pos) => {
      content.scrollLeft = pos;
    } });
    function scrollTowards(value) {
      const content = contentRef.value, { get, set } = posFn.value;
      let done = false, pos = get(content);
      const direction = value < pos ? -1 : 1;
      pos += direction * 5;
      if (pos < 0) {
        done = true;
        pos = 0;
      } else if (direction === -1 && pos <= value || direction === 1 && pos >= value) {
        done = true;
        pos = value;
      }
      set(content, pos);
      localUpdateArrows();
      return done;
    }
    function hasQueryIncluded(targetQuery, matchingQuery) {
      for (const key in targetQuery) {
        if (targetQuery[key] !== matchingQuery[key]) {
          return false;
        }
      }
      return true;
    }
    function updateActiveRoute() {
      let name = null, bestScore = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
      const list = tabDataList.filter((tab) => tab.routeData !== void 0 && tab.routeData.hasRouterLink.value === true);
      const { hash: currentHash, query: currentQuery } = proxy.$route;
      const currentQueryLen = Object.keys(currentQuery).length;
      for (const tab of list) {
        const exact = tab.routeData.exact.value === true;
        if (tab.routeData[exact === true ? "linkIsExactActive" : "linkIsActive"].value !== true) {
          continue;
        }
        const { hash, query, matched, href } = tab.routeData.resolvedLink.value;
        const queryLen = Object.keys(query).length;
        if (exact === true) {
          if (hash !== currentHash) {
            continue;
          }
          if (queryLen !== currentQueryLen || hasQueryIncluded(currentQuery, query) === false) {
            continue;
          }
          name = tab.name.value;
          break;
        }
        if (hash !== "" && hash !== currentHash) {
          continue;
        }
        if (queryLen !== 0 && hasQueryIncluded(query, currentQuery) === false) {
          continue;
        }
        const newScore = {
          matchedLen: matched.length,
          queryDiff: currentQueryLen - queryLen,
          hrefLen: href.length - hash.length
        };
        if (newScore.matchedLen > bestScore.matchedLen) {
          name = tab.name.value;
          bestScore = newScore;
          continue;
        } else if (newScore.matchedLen !== bestScore.matchedLen) {
          continue;
        }
        if (newScore.queryDiff < bestScore.queryDiff) {
          name = tab.name.value;
          bestScore = newScore;
        } else if (newScore.queryDiff !== bestScore.queryDiff) {
          continue;
        }
        if (newScore.hrefLen > bestScore.hrefLen) {
          name = tab.name.value;
          bestScore = newScore;
        }
      }
      if (name === null && tabDataList.some((tab) => tab.routeData === void 0 && tab.name.value === currentModel.value) === true) {
        return;
      }
      updateModel({ name, setCurrent: true });
    }
    function onFocusin(e) {
      removeFocusTimeout();
      if (hasFocus.value !== true && rootRef.value !== null && e.target && typeof e.target.closest === "function") {
        const tab = e.target.closest(".q-tab");
        if (tab && rootRef.value.contains(tab) === true) {
          hasFocus.value = true;
          scrollable.value === true && scrollToTabEl(tab);
        }
      }
    }
    function onFocusout() {
      registerFocusTimeout(() => {
        hasFocus.value = false;
      }, 30);
    }
    function verifyRouteModel() {
      if ($tabs.avoidRouteWatcher === false) {
        registerScrollToTabTimeout(updateActiveRoute);
      } else {
        removeScrollToTabTimeout();
      }
    }
    function watchRoute() {
      if (unwatchRoute === void 0) {
        const unwatch = watch(() => proxy.$route.fullPath, verifyRouteModel);
        unwatchRoute = () => {
          unwatch();
          unwatchRoute = void 0;
        };
      }
    }
    function registerTab(tabData) {
      tabDataList.push(tabData);
      tabDataListLen.value++;
      recalculateScroll();
      if (tabData.routeData === void 0 || proxy.$route === void 0) {
        registerScrollToTabTimeout(() => {
          if (scrollable.value === true) {
            const value = currentModel.value;
            const newTab = value !== void 0 && value !== null && value !== "" ? tabDataList.find((tab) => tab.name.value === value) : null;
            newTab && scrollToTabEl(newTab.rootRef.value);
          }
        });
      } else {
        watchRoute();
        if (tabData.routeData.hasRouterLink.value === true) {
          verifyRouteModel();
        }
      }
    }
    function unregisterTab(tabData) {
      tabDataList.splice(tabDataList.indexOf(tabData), 1);
      tabDataListLen.value--;
      recalculateScroll();
      if (unwatchRoute !== void 0 && tabData.routeData !== void 0) {
        if (tabDataList.every((tab) => tab.routeData === void 0) === true) {
          unwatchRoute();
        }
        verifyRouteModel();
      }
    }
    const $tabs = {
      currentModel,
      tabProps,
      hasFocus,
      hasActiveTab,
      registerTab,
      unregisterTab,
      verifyRouteModel,
      updateModel,
      onKbdNavigate,
      avoidRouteWatcher: false
    };
    provide(tabsKey, $tabs);
    function cleanup() {
      clearTimeout(animateTimer);
      stopAnimScroll();
      unwatchRoute !== void 0 && unwatchRoute();
    }
    let hadRouteWatcher;
    onBeforeUnmount(cleanup);
    onDeactivated(() => {
      hadRouteWatcher = unwatchRoute !== void 0;
      cleanup();
    });
    onActivated(() => {
      hadRouteWatcher === true && watchRoute();
      recalculateScroll();
    });
    return () => {
      const child = [
        h(QResizeObserver, { onResize: updateContainer }),
        h("div", {
          ref: contentRef,
          class: innerClass.value,
          onScroll: localUpdateArrows
        }, hSlot(slots.default))
      ];
      arrowsEnabled.value === true && child.push(
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (leftArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.leftIcon || $q.iconSet.tabs[props.vertical === true ? "up" : "left"],
          onMousedownPassive: scrollToStart,
          onTouchstartPassive: scrollToStart,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        }),
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (rightArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.rightIcon || $q.iconSet.tabs[props.vertical === true ? "down" : "right"],
          onMousedownPassive: scrollToEnd,
          onTouchstartPassive: scrollToEnd,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        })
      );
      return h("div", {
        ref: rootRef,
        class: classes.value,
        role: "tablist",
        onFocusin,
        onFocusout
      }, child);
    };
  }
});
var QTimelineEntry = createComponent({
  name: "QTimelineEntry",
  props: {
    heading: Boolean,
    tag: {
      type: String,
      default: "h3"
    },
    side: {
      type: String,
      default: "right",
      validator: (v) => ["left", "right"].includes(v)
    },
    icon: String,
    avatar: String,
    color: String,
    title: String,
    subtitle: String,
    body: String
  },
  setup(props, { slots }) {
    const $timeline = inject(timelineKey, emptyRenderFn);
    if ($timeline === emptyRenderFn) {
      console.error("QTimelineEntry needs to be child of QTimeline");
      return emptyRenderFn;
    }
    const classes = computed(
      () => `q-timeline__entry q-timeline__entry--${props.side}` + (props.icon !== void 0 || props.avatar !== void 0 ? " q-timeline__entry--icon" : "")
    );
    const dotClass = computed(
      () => `q-timeline__dot text-${props.color || $timeline.color}`
    );
    const reverse = computed(
      () => $timeline.layout === "comfortable" && $timeline.side === "left"
    );
    return () => {
      const child = hUniqueSlot(slots.default, []);
      if (props.body !== void 0) {
        child.unshift(props.body);
      }
      if (props.heading === true) {
        const content2 = [
          h("div"),
          h("div"),
          h(
            props.tag,
            { class: "q-timeline__heading-title" },
            child
          )
        ];
        return h("div", {
          class: "q-timeline__heading"
        }, reverse.value === true ? content2.reverse() : content2);
      }
      let dot;
      if (props.icon !== void 0) {
        dot = [
          h(QIcon, {
            class: "row items-center justify-center",
            name: props.icon
          })
        ];
      } else if (props.avatar !== void 0) {
        dot = [
          h("img", {
            class: "q-timeline__dot-img",
            src: props.avatar
          })
        ];
      }
      const content = [
        h("div", { class: "q-timeline__subtitle" }, [
          h("span", {}, hSlot(slots.subtitle, [props.subtitle]))
        ]),
        h("div", { class: dotClass.value }, dot),
        h("div", { class: "q-timeline__content" }, [
          h("h6", { class: "q-timeline__title" }, hSlot(slots.title, [props.title]))
        ].concat(child))
      ];
      return h("li", {
        class: classes.value
      }, reverse.value === true ? content.reverse() : content);
    };
  }
});
var QTimeline = createComponent({
  name: "QTimeline",
  props: {
    ...useDarkProps,
    color: {
      type: String,
      default: "primary"
    },
    side: {
      type: String,
      default: "right",
      validator: (v) => ["left", "right"].includes(v)
    },
    layout: {
      type: String,
      default: "dense",
      validator: (v) => ["dense", "comfortable", "loose"].includes(v)
    }
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    provide(timelineKey, props);
    const classes = computed(
      () => `q-timeline q-timeline--${props.layout} q-timeline--${props.layout}--${props.side}` + (isDark.value === true ? " q-timeline--dark" : "")
    );
    return () => h("ul", { class: classes.value }, hSlot(slots.default));
  }
});
var QTabPanel = createComponent({
  name: "QTabPanel",
  props: usePanelChildProps,
  setup(_, { slots }) {
    return () => h("div", { class: "q-tab-panel", role: "tabpanel" }, hSlot(slots.default));
  }
});
var QTabPanels = createComponent({
  name: "QTabPanels",
  props: {
    ...usePanelProps,
    ...useDarkProps
  },
  emits: usePanelEmits,
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const { updatePanelsList, getPanelContent, panelDirectives } = usePanel();
    const classes = computed(
      () => "q-tab-panels q-panel-parent" + (isDark.value === true ? " q-tab-panels--dark q-dark" : "")
    );
    return () => {
      updatePanelsList(slots);
      return hDir(
        "div",
        { class: classes.value },
        getPanelContent(),
        "pan",
        props.swipeable,
        () => panelDirectives.value
      );
    };
  }
});
var _imports_1 = "/assets/lead-under-analysis.295f95f0.svg";
var _imports_2 = "/assets/lead-expired.0cd36c6b.svg";
var LeadPage_vue_vue_type_style_index_0_lang = "";
const statuses = [
  {
    value: "negotiation",
    label: "Em negocia\xE7\xE3o"
  }
];
const _sfc_main = defineComponent({
  name: "LeadPage",
  setup() {
    const orderStore = useOrderStore();
    const order = orderStore.mock().find((o) => o.id === 1);
    const status = ref("");
    const tab = ref("history");
    const negativeStatus = ref("");
    return {
      order,
      statuses,
      status,
      tab,
      negativeStatus
    };
  }
});
const _hoisted_1 = { class: "row justify-center items-center" };
const _hoisted_2 = { class: "col-12 col-md-11 row q-col-gutter-md" };
const _hoisted_3 = { class: "col-12 col-md-5" };
const _hoisted_4 = { class: "row items-center q-col-gutter-md" };
const _hoisted_5 = { class: "col-auto" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 }, null, -1);
const _hoisted_7 = { class: "col-12 col-md column" };
const _hoisted_8 = { class: "col-12 col-md-auto" };
const _hoisted_9 = { class: "row items-center justify-between" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "col-12 col-md-auto" }, "Qual o status desse lead?", -1);
const _hoisted_11 = { class: "col-12 col-md-6" };
const _hoisted_12 = { class: "column" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", null, "E-mail", -1);
const _hoisted_14 = { class: "text-primary" };
const _hoisted_15 = { class: "row text-legend" };
const _hoisted_16 = { class: "col-12 col-md-6 column" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("span", null, "Data", -1);
const _hoisted_18 = { class: "col-12 col-md-6 column" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", null, "Localiza\xE7\xE3o", -1);
const _hoisted_20 = { class: "row text-legend" };
const _hoisted_21 = { class: "col-12 col-md-6 column" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", null, "Operadora", -1);
const _hoisted_23 = { class: "col-12 col-md-6 column" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", null, "Canal", -1);
const _hoisted_25 = { class: "row text-legend" };
const _hoisted_26 = { class: "col-12 col-md-6 column" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("span", null, "Qtd. Vidas", -1);
const _hoisted_28 = { class: "col-12 col-md-6 column" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("span", null, "Tipo de Pessoa", -1);
const _hoisted_30 = { class: "col-12 col-md-7" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("b", { class: "block q-mb-sm" }, "Adicionar Nota:", -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("p", { class: "text-subtitle2 q-mb-lg" }, " Compartilhar com a Equipe ", -1);
const _hoisted_33 = { class: "row items-center" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "col-12 col-md-3" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Integrante")
], -1);
const _hoisted_35 = { class: "col-12 col-md-7" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("p", { class: "text-subtitle2 q-mb-lg" }, "Enviar por e-mail", -1);
const _hoisted_37 = { class: "row items-center" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "col-12 col-md-3" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "E-mail")
], -1);
const _hoisted_39 = { class: "col-12 col-md-7" };
const _hoisted_40 = { class: "row" };
const _hoisted_41 = { class: "col-12 col-md-6 flex column q-gutter-sm q-pa-lg" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("p", { class: "text-subtitle2" }, "Negativar", -1);
const _hoisted_43 = {
  key: 0,
  class: "q-gutter-sm"
};
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("p", null, " Escolha uma op\xE7\xE3o abaixo e nos ajude a fazer uma melhor an\xE1lise sobre o caso. ", -1);
const _hoisted_45 = { class: "row items-center text-left q-col-gutter-sm" };
const _hoisted_46 = { class: "col-auto" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "col" }, " N\xE3o consegui contato por liga\xE7\xE3o nem WhatsApp ", -1);
const _hoisted_48 = { class: "row items-center text-left q-col-gutter-sm" };
const _hoisted_49 = { class: "col-auto" };
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("div", { class: "col" }, " Cliente informa que n\xE3o solicitou cota\xE7\xE3o ", -1);
const _hoisted_51 = {
  key: 1,
  class: "text-center text-grey-8"
};
const _hoisted_52 = { class: "column items-center justify-center" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("p", null, "Este lead est\xE1 em analise de negativa\xE7\xE3o", -1);
const _hoisted_54 = { class: "column items-center justify-center" };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("p", null, "Este lead perdeu o prazo para negativar", -1);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("div", { class: "col-12 col-md-6 bg-grey-1 text-grey-7 q-pa-lg" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "text-weight-bold" }, "Regras de Negativa\xE7\xE3o"),
  /* @__PURE__ */ createBaseVNode("ul", { class: "text-legend q-col-gutter-md" }, [
    /* @__PURE__ */ createBaseVNode("li", null, " Ser\xE3o v\xE1lidas para An\xE1lise, apenas as Negativa\xE7\xF5es feitas em at\xE9 72h \xFAteis ap\xF3s o recebimento do lead. "),
    /* @__PURE__ */ createBaseVNode("li", null, " Nosso suporte ira realizar a an\xE1lise de pedido e retornar em at\xE9 72h \xFAteis, seja com o reembolso ou devolu\xE7\xE3o do lead. "),
    /* @__PURE__ */ createBaseVNode("li", null, " Em caso de recorr\xEAnci nos pedidos de negativa\xE7\xE3o, tal como a devolu\xE7\xE3o de leads(ocorre quando nosso suporte consegue contato imediato, confirmado por print de WhatsApp), o cliente estar\xE1 sujeito a cobran\xE7a de R$ 4.90 por cada lead devolvido. ")
  ])
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { padding: "" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(QCard, {
              bordered: "",
              flat: "",
              class: "q-pa-md"
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_4, [
                      createBaseVNode("div", _hoisted_5, [
                        createVNode(QAvatar, null, {
                          default: withCtx(() => [
                            _hoisted_6
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_7, [
                        createBaseVNode("strong", null, toDisplayString(_ctx.order.user.name), 1),
                        createBaseVNode("span", null, toDisplayString(_ctx.order.user.phone), 1)
                      ]),
                      createBaseVNode("div", _hoisted_8, [
                        createVNode(QBtn, {
                          icon: "img:/whatsapp.svg",
                          dense: "",
                          flat: "",
                          padding: "7px"
                        }),
                        createVNode(QBtn, {
                          icon: "call",
                          color: "primary",
                          dense: "",
                          flat: "",
                          padding: "7px"
                        })
                      ])
                    ]),
                    createVNode(QSeparator, { class: "q-my-lg" }),
                    createBaseVNode("div", _hoisted_9, [
                      _hoisted_10,
                      createBaseVNode("div", _hoisted_11, [
                        createVNode(QSelect, {
                          modelValue: _ctx.status,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.status = $event),
                          options: _ctx.statuses,
                          label: "Status",
                          outlined: "",
                          dense: ""
                        }, null, 8, ["modelValue", "options"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, { class: "column q-col-gutter-md q-mt-sm" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_12, [
                      _hoisted_13,
                      createBaseVNode("strong", _hoisted_14, toDisplayString(_ctx.order.origin), 1)
                    ]),
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("div", _hoisted_16, [
                        _hoisted_17,
                        createBaseVNode("strong", null, toDisplayString(_ctx.order.orderDate), 1)
                      ]),
                      createBaseVNode("div", _hoisted_18, [
                        _hoisted_19,
                        createBaseVNode("strong", null, toDisplayString(_ctx.order.locale), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_20, [
                      createBaseVNode("div", _hoisted_21, [
                        _hoisted_22,
                        createBaseVNode("strong", null, toDisplayString(_ctx.order.operator), 1)
                      ]),
                      createBaseVNode("div", _hoisted_23, [
                        _hoisted_24,
                        createBaseVNode("strong", null, toDisplayString(_ctx.order.channel), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_25, [
                      createBaseVNode("div", _hoisted_26, [
                        _hoisted_27,
                        createBaseVNode("strong", null, toDisplayString(_ctx.order.qtdVidas), 1)
                      ]),
                      createBaseVNode("div", _hoisted_28, [
                        _hoisted_29,
                        createBaseVNode("strong", null, toDisplayString(_ctx.order.personType), 1)
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_30, [
            createVNode(QTabs, {
              modelValue: _ctx.tab,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.tab = $event),
              class: "text-grey text-capitalize",
              "active-color": "primary",
              "indicator-color": "primary",
              "inline-label": _ctx.$q.screen.width > 768,
              align: "left"
            }, {
              default: withCtx(() => [
                createVNode(QTab, {
                  name: "history",
                  label: "Hist\xF3ricos",
                  icon: "history"
                }),
                createVNode(QTab, {
                  name: "share",
                  label: "Compartilhar",
                  icon: "share"
                }),
                createVNode(QTab, {
                  name: "negative",
                  label: "Negativar",
                  icon: "flag_circle"
                })
              ]),
              _: 1
            }, 8, ["modelValue", "inline-label"]),
            createVNode(QCard, {
              flat: "",
              bordered: ""
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "no-padding" }, {
                  default: withCtx(() => [
                    createVNode(QTabPanels, {
                      modelValue: _ctx.tab,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.tab = $event),
                      animated: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(QTabPanel, {
                          name: "history",
                          class: "q-pa-lg"
                        }, {
                          default: withCtx(() => [
                            _hoisted_31,
                            createVNode(QInput, {
                              modelValue: _ctx.text,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.text = $event),
                              autogrow: "",
                              outlined: "",
                              label: "Ex.: Entrei em contato com o lead e ele pediu 5 dias para fechar o neg\xF3cio.",
                              type: "textarea"
                            }, {
                              append: withCtx(() => [
                                createVNode(QBtn, {
                                  outline: "",
                                  label: "Salvar"
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue"]),
                            createVNode(QTimeline, {
                              color: "grey",
                              class: "q-mt-lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(QTimelineEntry, { subtitle: "14 de Janeiro de 2022" }, {
                                  default: withCtx(() => [
                                    createVNode(QList, null, {
                                      default: withCtx(() => [
                                        createVNode(QItem, { class: "bordered q-mb-sm" }, {
                                          default: withCtx(() => [
                                            createVNode(QItemSection, { avatar: "" }, {
                                              default: withCtx(() => [
                                                createVNode(QAvatar, { color: "grey-3" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" JR ")
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
                                                createBaseVNode("span", null, toDisplayString(_ctx.order.user.name), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(QItemSection, { class: "text-grey-7" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Definiu status do Lead como " + toDisplayString(_ctx.order.status), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(QItemSection, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.order.orderDate), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(QItem, { class: "bordered" }, {
                                          default: withCtx(() => [
                                            createVNode(QItemSection, { avatar: "" }, {
                                              default: withCtx(() => [
                                                createVNode(QAvatar, { color: "grey-3" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" JR ")
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
                                                createBaseVNode("span", null, toDisplayString(_ctx.order.user.name), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(QItemSection, { class: "text-grey-7" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Definiu status do Lead como " + toDisplayString(_ctx.order.status), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(QItemSection, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.order.orderDate), 1)
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
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(QTabPanel, {
                          name: "share",
                          class: "q-pa-lg"
                        }, {
                          default: withCtx(() => [
                            _hoisted_32,
                            createBaseVNode("div", _hoisted_33, [
                              _hoisted_34,
                              createBaseVNode("div", _hoisted_35, [
                                createVNode(QSelect, {
                                  modelValue: _ctx.status,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.status = $event),
                                  label: "Integrante",
                                  outlined: "",
                                  dense: ""
                                }, {
                                  after: withCtx(() => [
                                    createVNode(QBtn, {
                                      unelevated: "",
                                      color: "primary",
                                      label: "Salvar"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue"])
                              ])
                            ]),
                            createVNode(QSeparator, { class: "q-my-lg" }),
                            _hoisted_36,
                            createBaseVNode("div", _hoisted_37, [
                              _hoisted_38,
                              createBaseVNode("div", _hoisted_39, [
                                createVNode(QSelect, {
                                  modelValue: _ctx.status,
                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.status = $event),
                                  label: "Email",
                                  outlined: "",
                                  dense: ""
                                }, {
                                  after: withCtx(() => [
                                    createVNode(QBtn, {
                                      unelevated: "",
                                      color: "primary",
                                      label: "Salvar"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue"])
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(QTabPanel, {
                          name: "negative",
                          class: "no-padding"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_40, [
                              createBaseVNode("div", _hoisted_41, [
                                _hoisted_42,
                                _ctx.negativeStatus === "" ? (openBlock(), createElementBlock("div", _hoisted_43, [
                                  _hoisted_44,
                                  createVNode(QBtn, {
                                    color: "primary",
                                    flat: "",
                                    class: "bordered"
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_45, [
                                        createBaseVNode("div", _hoisted_46, [
                                          createVNode(QIcon, {
                                            name: "chevron_right",
                                            color: "dark"
                                          })
                                        ]),
                                        _hoisted_47
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QBtn, {
                                    color: "primary",
                                    flat: "",
                                    class: "bordered"
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_48, [
                                        createBaseVNode("div", _hoisted_49, [
                                          createVNode(QIcon, {
                                            name: "chevron_right",
                                            color: "dark"
                                          })
                                        ]),
                                        _hoisted_50
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ])) : (openBlock(), createElementBlock("div", _hoisted_51, [
                                  createBaseVNode("div", _hoisted_52, [
                                    createVNode(QImg, {
                                      src: _imports_1,
                                      width: "200px",
                                      height: "auto"
                                    }),
                                    _hoisted_53
                                  ]),
                                  createBaseVNode("div", _hoisted_54, [
                                    createVNode(QImg, {
                                      src: _imports_2,
                                      width: "150px",
                                      height: "auto"
                                    }),
                                    _hoisted_55
                                  ])
                                ]))
                              ]),
                              _hoisted_56
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]),
    _: 1
  });
}
var LeadPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LeadPage as default };
