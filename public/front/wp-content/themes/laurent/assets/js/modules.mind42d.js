!(function (a) {
    "use strict";
    function e() {
        eltdf.scroll = a(window).scrollTop();
        var e =
                /Chrome/.test(navigator.userAgent) &&
                /Google Inc/.test(navigator.vendor),
            t =
                /Safari/.test(navigator.userAgent) &&
                /Apple Computer/.test(navigator.vendor),
            o = -1 < navigator.userAgent.toLowerCase().indexOf("firefox"),
            n = window.navigator.userAgent.indexOf("MSIE ");
        e && eltdf.body.addClass("eltdf-chrome"),
            t && eltdf.body.addClass("eltdf-safari"),
            o && eltdf.body.addClass("eltdf-firefox"),
            (0 < n || navigator.userAgent.match(/Trident.*rv\:11\./)) &&
                eltdf.body.addClass("eltdf-ms-explorer"),
            /Edge\/\d./i.test(navigator.userAgent) &&
                eltdf.body.addClass("eltdf-edge"),
            eltdf.body.hasClass("eltdf-dark-header") &&
                (eltdf.defaultHeaderStyle = "eltdf-dark-header"),
            eltdf.body.hasClass("eltdf-light-header") &&
                (eltdf.defaultHeaderStyle = "eltdf-light-header");
    }
    function t() {}
    function o() {
        (eltdf.windowWidth = a(window).width()),
            (eltdf.windowHeight = a(window).height());
    }
    function n() {
        eltdf.scroll = a(window).scrollTop();
    }
    switch (
        ((window.eltdf = {}),
        (eltdf.modules = {}),
        (eltdf.scroll = 0),
        (eltdf.window = a(window)),
        (eltdf.document = a(document)),
        (eltdf.windowWidth = a(window).width()),
        (eltdf.windowHeight = a(window).height()),
        (eltdf.body = a("body")),
        (eltdf.html = a("html, body")),
        (eltdf.htmlEl = a("html")),
        (eltdf.menuDropdownHeightSet = !1),
        (eltdf.defaultHeaderStyle = ""),
        (eltdf.minVideoWidth = 1500),
        (eltdf.videoWidthOriginal = 1280),
        (eltdf.videoHeightOriginal = 720),
        (eltdf.videoRatio = 1.61),
        (eltdf.eltdfOnDocumentReady = e),
        (eltdf.eltdfOnWindowLoad = t),
        (eltdf.eltdfOnWindowResize = o),
        (eltdf.eltdfOnWindowScroll = n),
        a(document).ready(e),
        a(window).on("load", t),
        a(window).resize(o),
        a(window).scroll(n),
        !0)
    ) {
        case eltdf.body.hasClass("eltdf-grid-1300"):
            eltdf.boxedLayoutWidth = 1350;
            break;
        case eltdf.body.hasClass("eltdf-grid-1200"):
            eltdf.boxedLayoutWidth = 1250;
            break;
        case eltdf.body.hasClass("eltdf-grid-1000"):
            eltdf.boxedLayoutWidth = 1050;
            break;
        case eltdf.body.hasClass("eltdf-grid-800"):
            eltdf.boxedLayoutWidth = 850;
            break;
        default:
            eltdf.boxedLayoutWidth = 1150;
    }
    (eltdf.gridWidth = function () {
        var e = 1100;
        switch (!0) {
            case eltdf.body.hasClass("eltdf-grid-1300") &&
                1400 < eltdf.windowWidth:
                e = 1300;
                break;
            case eltdf.body.hasClass("eltdf-grid-1200") &&
                1300 < eltdf.windowWidth:
            case eltdf.body.hasClass("eltdf-grid-1000") &&
                1200 < eltdf.windowWidth:
                e = 1200;
                break;
            case eltdf.body.hasClass("eltdf-grid-800") &&
                1024 < eltdf.windowWidth:
                e = 800;
        }
        return e;
    }),
        (eltdf.transitionEnd = (function () {
            var e,
                t = document.createElement("transitionDetector"),
                o = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    transition: "transitionend",
                };
            for (e in o) if (void 0 !== t.style[e]) return o[e];
        })()),
        (eltdf.animationEnd = (function () {
            var e,
                t = document.createElement("animationDetector"),
                o = {
                    animation: "animationend",
                    OAnimation: "oAnimationEnd",
                    MozAnimation: "animationend",
                    WebkitAnimation: "webkitAnimationEnd",
                };
            for (e in o) if (void 0 !== t.style[e]) return o[e];
        })());
})(jQuery),
    (function (T) {
        "use strict";
        var e = {};
        function t() {
            var n, a, d, e, t, o, l, i;
            m().init(),
                -1 < navigator.appVersion.toLowerCase().indexOf("mac") &&
                    eltdf.body.hasClass("eltdf-smooth-scroll") &&
                    eltdf.body.removeClass("eltdf-smooth-scroll"),
                s().init(),
                T("#eltdf-back-to-top").on("click", function (e) {
                    e.preventDefault(),
                        eltdf.html.animate(
                            { scrollTop: 0 },
                            eltdf.window.scrollTop() / 3,
                            "easeOutQuart"
                        );
                }),
                eltdf.window.scroll(function () {
                    var e = T(this).scrollTop(),
                        t = T(this).height(),
                        e = 0 < e ? e + t / 2 : 1;
                    r(e < 1e3 ? "off" : "on");
                }),
                f(),
                P(),
                H(),
                h(),
                (t = T(".eltdf-preload-background")).length &&
                    t.each(function () {
                        var e,
                            t,
                            o = T(this);
                        "" !== o.css("background-image") &&
                        "none" !== o.css("background-image")
                            ? (t = (t = (t = o.attr("style")).match(
                                  /url\(["']?([^'")]+)['"]?\)/
                              ))
                                  ? t[1]
                                  : "") &&
                              (((e = new Image()).src = t),
                              T(e).load(function () {
                                  o.removeClass("eltdf-preload-background");
                              }))
                            : T(window).on("load", function () {
                                  o.removeClass("eltdf-preload-background");
                              });
                    }),
                c(),
                (t = T(".eltdf-search-post-type")).length &&
                    t.each(function () {
                        var e,
                            t = T(this),
                            o = t.find(".eltdf-post-type-search-field"),
                            n = t.siblings(".eltdf-post-type-search-results"),
                            a = t.find(".eltdf-search-loading"),
                            d = t.find(".eltdf-search-icon"),
                            l =
                                (a.addClass("eltdf-hidden"),
                                t.data("post-type"));
                        o.on("keyup paste", function () {
                            var t = T(this);
                            t.attr("autocomplete", "off"),
                                a.removeClass("eltdf-hidden"),
                                d.addClass("eltdf-hidden"),
                                clearTimeout(e),
                                (e = setTimeout(function () {
                                    var e = t.val();
                                    e.length < 3
                                        ? (n.html(""),
                                          n.fadeOut(),
                                          a.addClass("eltdf-hidden"),
                                          d.removeClass("eltdf-hidden"))
                                        : ((e = {
                                              action: "laurent_elated_search_post_types",
                                              term: e,
                                              postType: l,
                                              search_post_types_nonce: T(
                                                  'input[name="eltdf_search_post_types_nonce"]'
                                              ).val(),
                                          }),
                                          T.ajax({
                                              type: "POST",
                                              data: e,
                                              url: eltdfGlobalVars.vars
                                                  .eltdfAjaxUrl,
                                              success: function (e) {
                                                  e = JSON.parse(e);
                                                  "success" === e.status &&
                                                      (a.addClass(
                                                          "eltdf-hidden"
                                                      ),
                                                      d.removeClass(
                                                          "eltdf-hidden"
                                                      ),
                                                      n.html(e.data.html),
                                                      n.fadeIn());
                                              },
                                              error: function (e, t, o) {
                                                  console.log("Status: " + t),
                                                      console.log(
                                                          "Error: " + o
                                                      ),
                                                      a.addClass(
                                                          "eltdf-hidden"
                                                      ),
                                                      d.removeClass(
                                                          "eltdf-hidden"
                                                      ),
                                                      n.fadeOut();
                                              },
                                          }));
                                }, 500));
                        }),
                            o.on("focusout", function () {
                                a.addClass("eltdf-hidden"),
                                    d.removeClass("eltdf-hidden"),
                                    n.fadeOut();
                            });
                    }),
                (t = T(".eltdf-dashboard-form")).length &&
                    t.each(function () {
                        var e = T(this),
                            o = e.find("button.eltdf-dashboard-form-button"),
                            n = o.data("updating-text"),
                            a = o.data("updated-text"),
                            d = e.data("action");
                        e.on("submit", function (e) {
                            e.preventDefault();
                            var t = o.html(),
                                e = T(this).find(
                                    ".eltdf-dashboard-gallery-upload-hidden"
                                ),
                                i = [],
                                s = (o.html(n), new FormData()),
                                e =
                                    (e.each(function () {
                                        var e,
                                            t,
                                            o = T(this),
                                            n = o.attr("name"),
                                            a = o.attr("id"),
                                            d = o[0].files;
                                        (e =
                                            -1 < n.indexOf("[")
                                                ? ((e =
                                                      n.substring(
                                                          0,
                                                          n.indexOf("[")
                                                      ) + "_eltdf_regarray_"),
                                                  (o = a.indexOf("[")),
                                                  (t = a.indexOf("]")),
                                                  (a = a.substring(o + 1, t)),
                                                  i.push(e),
                                                  e + a + "_")
                                                : n + "_eltdf_reg_"),
                                            0 === d.length &&
                                                s.append(
                                                    e,
                                                    new File(
                                                        [""],
                                                        "eltdf-dummy-file.txt",
                                                        { type: "text/plain" }
                                                    )
                                                );
                                        for (var l = 0; l < d.length; l++)
                                            1 ===
                                                d[l].name.match(/\./g).length &&
                                                -1 !==
                                                    T.inArray(d[l].type, [
                                                        "image/png",
                                                        "image/jpg",
                                                        "image/jpeg",
                                                        "application/pdf",
                                                    ]) &&
                                                s.append(e + l, d[l]);
                                    }),
                                    s.append("action", d),
                                    T(this).serialize());
                            return (
                                s.append("data", e),
                                T.ajax({
                                    type: "POST",
                                    data: s,
                                    contentType: !1,
                                    processData: !1,
                                    url: eltdfGlobalVars.vars.eltdfAjaxUrl,
                                    success: function (e) {
                                        e = JSON.parse(e);
                                        eltdf.modules.socialLogin.eltdfRenderAjaxResponseMessage(
                                            e
                                        ),
                                            "success" === e.status
                                                ? (o.html(a),
                                                  (window.location =
                                                      e.redirect))
                                                : o.html(t);
                                    },
                                }),
                                !1
                            );
                        });
                    }),
                u(),
                eltdf.body.hasClass("eltdf-smooth-page-transitions") &&
                    (eltdf.body.hasClass(
                        "eltdf-smooth-page-transitions-preloader"
                    ) &&
                        ((n = T(
                            "body > .eltdf-smooth-transition-loader.eltdf-mimic-ajax"
                        )),
                        (a = T("#eltdf-main-rev-holder")),
                        (d = T(".eltdf-laurent-spinner-holder")),
                        (t = !1),
                        "undefined" != typeof elementorFrontend &&
                            (t = Boolean(elementorFrontend.isEditMode())),
                        d.length &&
                            ((o = d
                                .find(".eltdf-laurent-spinner-image")
                                .find("polyline")),
                            (l = function () {
                                o.each(function () {
                                    var e = T(this);
                                    e.addClass("eltdf-line-active"),
                                        setTimeout(function () {
                                            e.removeClass("eltdf-line-active");
                                        }, 2100);
                                });
                            }),
                            (i = function () {
                                setTimeout(function () {
                                    n.addClass("eltdf-finished-animation"),
                                        clearInterval(e);
                                }, 4e3);
                            }),
                            setTimeout(function () {
                                l(),
                                    (e = setInterval(function () {
                                        l();
                                    }, 2200));
                            }, 100)),
                        T(window).on("load", function () {
                            var t, e, o;
                            d.length
                                ? (i(800, 4e3, "easeInOutSine"),
                                  a.length &&
                                      setTimeout(function () {
                                          a.find("rs-module").revstart();
                                      }, 4e3))
                                : ((t = t || 600),
                                  (o = o || "easeOutSine"),
                                  n.delay((e = e || 0)).fadeOut(t, o),
                                  T(window).on(
                                      "bind",
                                      "pageshow",
                                      function (e) {
                                          e.originalEvent.persisted &&
                                              n.fadeOut(t, o);
                                      }
                                  ));
                        }),
                        t) &&
                        n.fadeOut(1e3, "easeInOutSine"),
                    window.addEventListener("pageshow", function (e) {
                        (e.persisted ||
                            (void 0 !== window.performance &&
                                2 === window.performance.navigation.type)) &&
                            T(".eltdf-wrapper-inner").show();
                    }),
                    eltdf.body.hasClass(
                        "eltdf-smooth-page-transitions-fadeout"
                    )) &&
                    T("a").on("click", function (e) {
                        var t = T(this);
                        ((t.parents(".eltdf-shopping-cart-dropdown").length ||
                            t.parent(".product-remove").length) &&
                            t.hasClass("remove")) ||
                            t.parents(".woocommerce-product-gallery__image")
                                .length ||
                            (1 === e.which &&
                                0 <=
                                    t
                                        .attr("href")
                                        .indexOf(window.location.host) &&
                                void 0 === t.data("rel") &&
                                void 0 === t.attr("rel") &&
                                !t.hasClass("lightbox-active") &&
                                (void 0 === t.attr("target") ||
                                    "_self" === t.attr("target")) &&
                                t.attr("href").split("#")[0] !==
                                    window.location.href.split("#")[0] &&
                                (e.preventDefault(),
                                T(".eltdf-wrapper-inner").fadeOut(
                                    600,
                                    "easeOutSine",
                                    function () {
                                        window.location = t.attr("href");
                                    }
                                )));
                    }),
                g();
        }
        function o() {
            var e;
            D(),
                p().init(),
                (e = T(".widget_nav_menu")).length &&
                    e.each(function () {
                        var e = T(this).find(".menu-item");
                        e.length &&
                            e.each(function () {
                                T(this)
                                    .find("a")
                                    .append(
                                        '<span class="eltdf-btn-first-line"></span><span class="eltdf-btn-second-line"></span>'
                                    );
                            });
                    }),
                (e = T(
                    ".eltdf-blog-pagination, .woocommerce-pagination, .eltdf-pl-standard-pagination"
                )).length &&
                    e.each(function () {
                        T(this)
                            .find("li")
                            .append(
                                '<svg class="eltdf-svg-border" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="44px" height="44px" viewBox="0 0 44 44" enable-background="new 0 0 44 44" xml:space="preserve"><circle fill="none" stroke="#C6A270" stroke-miterlimit="10" cx="22" cy="22" r="21.5"/></svg>'
                            );
                    }),
                T(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/global",
                        function () {
                            D(), g();
                        }
                    );
                });
        }
        function n() {
            u(), P();
        }
        function a(e) {
            l(e);
        }
        function d(e) {
            for (var t = [37, 38, 39, 40], o = t.length; o--; )
                if (e.keyCode === t[o]) return void l(e);
        }
        function l(e) {
            (e = e || window.event).preventDefault && e.preventDefault(),
                (e.returnValue = !1);
        }
        ((eltdf.modules.common = e).eltdfFluidVideo = H),
            (e.eltdfEnableScroll = function () {
                window.removeEventListener &&
                    window.removeEventListener("wheel", a, { passive: !1 });
                window.onmousewheel =
                    document.onmousewheel =
                    document.onkeydown =
                        null;
            }),
            (e.eltdfDisableScroll = function () {
                window.addEventListener &&
                    window.addEventListener("wheel", a, { passive: !1 });
                document.onkeydown = d;
            }),
            (e.eltdfInitGridMasonryListLayout = u),
            (e.eltdfInitParallax = D),
            (e.eltdfInitSelfHostedVideoPlayer = f),
            (e.eltdfSelfHostedVideoSize = P),
            (e.eltdfStickySidebarWidget = p),
            (e.getLoadMoreData = function (e) {
                var t,
                    o = e.data(),
                    n = {};
                for (t in o)
                    o.hasOwnProperty(t) &&
                        void 0 !== o[t] &&
                        !1 !== o[t] &&
                        (n[t] = o[t]);
                return n;
            }),
            (e.setLoadMoreAjaxData = function (e, t) {
                var o,
                    n = { action: t };
                for (o in e)
                    e.hasOwnProperty(o) &&
                        void 0 !== e[o] &&
                        !1 !== e[o] &&
                        (n[o] = e[o]);
                return n;
            }),
            (e.setFixedImageProportionSize = i),
            (e.eltdfInitPerfectScrollbar = function () {
                var o = { wheelSpeed: 0.6, suppressScrollX: !0 };
                return {
                    init: function (e) {
                        var t;
                        e.length &&
                            (e = e).length &&
                            ((t = new PerfectScrollbar(e[0], o)),
                            T(window).resize(function () {
                                t.update();
                            }));
                    },
                };
            }),
            (e.eltdfOnDocumentReady = t),
            (e.eltdfOnWindowLoad = o),
            (e.eltdfOnWindowResize = n),
            T(document).ready(t),
            T(window).on("load", o),
            T(window).resize(n);
        var s = function () {
            function n() {
                if (
                    "" !== (o = window.location.hash.split("#")[1]) &&
                    0 < T('[data-eltdf-anchor="' + o + '"]').length
                ) {
                    var e = T(
                            ".eltdf-main-menu a, .eltdf-mobile-nav a, .eltdf-fullscreen-menu a, .eltdf-vertical-menu a"
                        ),
                        t = o,
                        o =
                            t !== ""
                                ? T('[data-eltdf-anchor="' + t + '"]')
                                : "";
                    if (t !== "" && o.length > 0) {
                        o = o.offset().top;
                        o = o - d(o) - eltdfGlobalVars.vars.eltdfAddForAdminBar;
                        if (e.length)
                            e.each(function () {
                                var e = T(this);
                                if (e.attr("href").indexOf(t) > -1) a(e);
                            });
                        eltdf.html
                            .stop()
                            .animate(
                                { scrollTop: Math.round(o) },
                                1e3,
                                function () {
                                    if (history.pushState)
                                        history.pushState(null, "", "#" + t);
                                }
                            );
                    }
                }
            }
            var a = function (t) {
                    T(
                        ".eltdf-main-menu, .eltdf-mobile-nav, .eltdf-fullscreen-menu, .eltdf-vertical-menu"
                    ).each(function () {
                        var e = T(this);
                        t.parents(e).length &&
                            (e
                                .find(".eltdf-active-item")
                                .removeClass("eltdf-active-item"),
                            t.parent().addClass("eltdf-active-item"),
                            e.find("a").removeClass("current"),
                            t.addClass("current"));
                    });
                },
                d = function (e) {
                    "eltdf-sticky-header-on-scroll-down-up" ===
                        eltdf.modules.stickyHeader.behaviour &&
                        (eltdf.modules.stickyHeader.isStickyVisible =
                            e > eltdf.modules.header.stickyAppearAmount),
                        "eltdf-sticky-header-on-scroll-up" ===
                            eltdf.modules.stickyHeader.behaviour &&
                            e > eltdf.scroll &&
                            (eltdf.modules.stickyHeader.isStickyVisible = !1);
                    e = eltdf.modules.stickyHeader.isStickyVisible
                        ? eltdfGlobalVars.vars
                              .eltdfStickyHeaderTransparencyHeight
                        : eltdfPerPageVars.vars.eltdfHeaderTransparencyHeight;
                    return (e = eltdf.windowWidth < 1025 ? 0 : e);
                };
            return {
                init: function () {
                    var t, e, o;
                    T("[data-eltdf-anchor]").length &&
                        (eltdf.document.on(
                            "click",
                            ".eltdf-main-menu a, .eltdf-fullscreen-menu a, a.eltdf-btn, .eltdf-anchor, .eltdf-mobile-nav a, .eltdf-vertical-menu a",
                            function () {
                                var e = T(this),
                                    t = e.prop("hash").split("#")[1],
                                    o =
                                        "" !== t
                                            ? T(
                                                  '[data-eltdf-anchor="' +
                                                      t +
                                                      '"]'
                                              )
                                            : "";
                                if ("" !== t && 0 < o.length)
                                    return (
                                        (o =
                                            (o = o.offset().top) -
                                            d(o) -
                                            eltdfGlobalVars.vars
                                                .eltdfAddForAdminBar),
                                        a(e),
                                        eltdf.html
                                            .stop()
                                            .animate(
                                                { scrollTop: Math.round(o) },
                                                1e3,
                                                function () {
                                                    history.pushState &&
                                                        history.pushState(
                                                            null,
                                                            "",
                                                            "#" + t
                                                        );
                                                }
                                            ),
                                        !1
                                    );
                            }
                        ),
                        (e = T("[data-eltdf-anchor]")),
                        "/" !==
                            (o = window.location.href.split("#")[0]).substr(
                                -1
                            ) && (o += "/"),
                        e.waypoint(
                            function (e) {
                                "down" === e &&
                                    ((t = (
                                        0 < T(this.element).length
                                            ? T(this.element)
                                            : T(this)
                                    ).data("eltdf-anchor")),
                                    a(T("a[href='" + o + "#" + t + "']")));
                            },
                            { offset: "50%" }
                        ),
                        e.waypoint(
                            function (e) {
                                "up" === e &&
                                    ((t = (
                                        0 < T(this.element).length
                                            ? T(this.element)
                                            : T(this)
                                    ).data("eltdf-anchor")),
                                    a(T("a[href='" + o + "#" + t + "']")));
                            },
                            {
                                offset: function () {
                                    return -(
                                        T(this.element).outerHeight() - 150
                                    );
                                },
                            }
                        ),
                        T(window).on("load", function () {
                            n();
                        }));
                },
            };
        };
        function r(e) {
            var t = T("#eltdf-back-to-top");
            t.removeClass("off on"),
                "on" === e ? t.addClass("on") : t.addClass("off");
        }
        function f() {
            var e = T(".eltdf-self-hosted-video");
            e.length && e.mediaelementplayer({ audioWidth: "100%" });
        }
        function P() {
            var e = T(".eltdf-self-hosted-video-holder .eltdf-video-wrap");
            e.length &&
                e.each(function () {
                    var e = T(this),
                        t = e
                            .closest(".eltdf-self-hosted-video-holder")
                            .outerWidth(),
                        o = t / eltdf.videoRatio;
                    navigator.userAgent.match(
                        /(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/
                    ) && (e.parent().width(t), e.parent().height(o)),
                        e.width(t),
                        e.height(o),
                        e.find("video, .mejs-overlay, .mejs-poster").width(t),
                        e.find("video, .mejs-overlay, .mejs-poster").height(o);
                });
        }
        function H() {
            fluidvids.init({
                selector: ["iframe"],
                players: ["www.youtube.com", "player.vimeo.com"],
            });
        }
        function c() {
            var e =
                '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="' +
                eltdfGlobalVars.vars.ppExpand +
                '">' +
                eltdfGlobalVars.vars.ppExpand +
                '</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#">\t\t\t\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" \n                    width="25.109px" height="34.906px" viewBox="0 0 25.109 34.906" enable-background="new 0 0 25.109 34.906" xml:space="preserve">\n                    <polyline fill="none" stroke="currentColor" stroke-miterlimit="10" points="0.442,34.59 13.459,17.464 0.442,0.338 "/>\n                    <polyline fill="none" class="eltdf-popout" stroke="currentColor" stroke-miterlimit="10" points="11.425,34.59 24.441,17.464 11.425,0.338 "/>\n               </svg>\t\t\t\t\t\t\t\t\t\t\t</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">\t\t\t\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" \n                    width="25.109px" height="34.906px" viewBox="0 0 25.109 34.906" enable-background="new 0 0 25.109 34.906" xml:space="preserve">\n                    <polyline fill="none" stroke="currentColor" stroke-miterlimit="10" points="24.67,34.59 11.653,17.464 24.67,0.338 "/>\n                    <polyline fill="none" class="eltdf-popout" stroke="currentColor" stroke-miterlimit="10" points="13.688,34.59 0.671,17.464 13.688,0.338 "/>\n                </svg>\t\t\t\t\t\t\t\t\t\t\t</a>                                                     </div>                                                     <div id="pp_full_res"></div>                                                     <div class="pp_details">                                                         <div class="pp_nav">                                                             <a href="#" class="pp_arrow_previous">' +
                eltdfGlobalVars.vars.ppPrev +
                '</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">' +
                eltdfGlobalVars.vars.ppNext +
                '</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">' +
                eltdfGlobalVars.vars.ppClose +
                '</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>';
            T("a[data-rel^='prettyPhoto']").prettyPhoto({
                hook: "data-rel",
                animation_speed: "normal",
                slideshow: !1,
                autoplay_slideshow: !1,
                opacity: 0.8,
                show_title: !0,
                allow_resize: !0,
                horizontal_padding: 0,
                default_width: 960,
                default_height: 540,
                counter_separator_label: "/",
                theme: "pp_default",
                hideflash: !1,
                wmode: "opaque",
                autoplay: !0,
                modal: !1,
                overlay_gallery: !1,
                keyboard_shortcuts: !0,
                deeplinking: !1,
                custom_markup: "",
                social_tools: !1,
                markup: e,
            });
        }
        function u() {
            var e = T(".eltdf-grid-masonry-list");
            e.length &&
                e.each(function () {
                    var e = T(this),
                        t = e.find(".eltdf-masonry-list-wrapper"),
                        o = e.find(".eltdf-masonry-grid-sizer").width();
                    t.waitForImages(function () {
                        t.isotope({
                            layoutMode: "packery",
                            itemSelector: ".eltdf-item-space",
                            percentPosition: !0,
                            masonry: {
                                columnWidth: ".eltdf-masonry-grid-sizer",
                                gutter: ".eltdf-masonry-grid-gutter",
                            },
                        }),
                            (e.find(".eltdf-fixed-masonry-item").length ||
                                e.hasClass("eltdf-fixed-masonry-items")) &&
                                i(t, t.find(".eltdf-item-space"), o, !0),
                            setTimeout(function () {
                                D();
                            }, 600),
                            t.isotope("layout").css("opacity", 1);
                    });
                });
        }
        function i(e, t, o, n) {
            var a, d;
            (!e.hasClass("eltdf-masonry-images-fixed") && !0 !== n) ||
                ((o = o - 2 * (n = parseInt(t.css("paddingLeft"), 10))),
                (t = e.find(".eltdf-masonry-size-small")),
                (a = e.find(".eltdf-masonry-size-large-width")),
                (d = e.find(".eltdf-masonry-size-large-height")),
                (e = e.find(".eltdf-masonry-size-large-width-height")),
                t.css("height", o),
                d.css("height", Math.round(2 * (o + n))),
                680 < eltdf.windowWidth
                    ? (a.css("height", o),
                      e.css("height", Math.round(2 * (o + n))))
                    : (a.css("height", Math.round(o / 2)), e.css("height", o)));
        }
        e.eltdfPrettyPhoto = c;
        var m = function () {
            var e = T(".eltdf-icon-has-hover");
            return {
                init: function () {
                    e.length &&
                        e.each(function () {
                            var e, t, o, n;
                            void 0 !== (e = T(this)).data("hover-color") &&
                                ((t = function (e) {
                                    e.data.icon.css("color", e.data.color);
                                }),
                                (o = e.data("hover-color")),
                                (n = e.css("color")),
                                "" !== o) &&
                                (e.on("mouseenter", { icon: e, color: o }, t),
                                e.on("mouseleave", { icon: e, color: n }, t));
                        });
                },
            };
        };
        function D() {
            var e = T(".eltdf-parallax-row-holder");
            e.length &&
                e.each(function () {
                    var e,
                        t = T(this),
                        o = t.find(".eltdf-parallax-helper-holder"),
                        n = 0,
                        a = o.length
                            ? ((e = o.data("parallax-bg-image")),
                              0.4 * o.data("parallax-bg-speed"))
                            : ((e = t.data("parallax-bg-image")),
                              0.4 * t.data("parallax-bg-speed"));
                    void 0 !== t.data("parallax-bg-height") &&
                        !1 !== t.data("parallax-bg-height") &&
                        (n = parseInt(t.data("parallax-bg-height"))),
                        void 0 !== o.data("parallax-bg-height") &&
                            !1 !== o.data("parallax-bg-height") &&
                            (n = parseInt(o.data("parallax-bg-height"))),
                        t.css({ "background-image": "url(" + e + ")" }),
                        0 < n &&
                            t.css({ "min-height": n + "px", height: n + "px" }),
                        t.parallax("50%", a);
                });
        }
        function p() {
            var d,
                l,
                e = T(".eltdf-widget-sticky-sidebar"),
                t = T(".eltdf-page-header"),
                s = t.length ? t.outerHeight() : 0,
                i = 0,
                r = 0,
                f = [];
            function o() {
                f.length &&
                    T.each(f, function (e) {
                        f[e].object;
                        var t,
                            o,
                            n = f[e].offset,
                            a = f[e].position,
                            d = f[e].height,
                            l = f[e].width,
                            i = f[e].sidebarHolder,
                            e = f[e].sidebarHolderHeight;
                        eltdf.body.hasClass("eltdf-fixed-on-scroll")
                            ? (t = T(".eltdf-fixed-wrapper.fixed")).length &&
                              (s =
                                  t.outerHeight() +
                                  eltdfGlobalVars.vars.eltdfAddForAdminBar)
                            : eltdf.body.hasClass("eltdf-no-behavior") &&
                              (s = eltdfGlobalVars.vars.eltdfAddForAdminBar),
                            1024 < eltdf.windowWidth &&
                            i.length &&
                            ((t = -(a - s)),
                            (o = d - a - 40),
                            (a =
                                e +
                                n -
                                s -
                                a -
                                eltdfGlobalVars.vars.eltdfTopBarHeight),
                            eltdf.scroll >= n - s) &&
                            d < e
                                ? (i.hasClass("eltdf-sticky-sidebar-appeared")
                                      ? i.css({ top: t + "px" })
                                      : i
                                            .addClass(
                                                "eltdf-sticky-sidebar-appeared"
                                            )
                                            .css({
                                                position: "fixed",
                                                top: t + "px",
                                                width: l,
                                                "margin-top": "-10px",
                                            })
                                            .animate(
                                                { "margin-top": "0" },
                                                200
                                            ),
                                  eltdf.scroll + o >= a
                                      ? ((n = e - o + t - s),
                                        i.css({
                                            position: "absolute",
                                            top: n + "px",
                                        }))
                                      : i.hasClass(
                                            "eltdf-sticky-sidebar-appeared"
                                        ) &&
                                        i.css({
                                            position: "fixed",
                                            top: t + "px",
                                        }))
                                : i
                                      .removeClass(
                                          "eltdf-sticky-sidebar-appeared"
                                      )
                                      .css({
                                          position: "relative",
                                          top: "0",
                                          width: "auto",
                                      });
                    });
            }
            return {
                init: function () {
                    e.length &&
                        e.each(function () {
                            var e = T(this),
                                t = e.parents("aside.eltdf-sidebar"),
                                o = e.parents(".wpb_widgetised_column"),
                                n = "",
                                a = 0;
                            (d = e.offset().top),
                                (l = e.position().top),
                                (r = i = 0),
                                t.length
                                    ? ((i = t.outerHeight()),
                                      (r = t.outerWidth()),
                                      (a = (n = t)
                                          .parent()
                                          .parent()
                                          .outerHeight()),
                                      (t = t
                                          .parent()
                                          .parent()
                                          .find(".eltdf-blog-holder")).length &&
                                          (a -= parseInt(
                                              t.css("marginBottom")
                                          )))
                                    : o.length &&
                                      ((i = o.outerHeight()),
                                      (r = o.outerWidth()),
                                      (a = (n = o)
                                          .parents(".vc_row")
                                          .outerHeight())),
                                f.push({
                                    object: e,
                                    offset: d,
                                    position: l,
                                    height: i,
                                    width: r,
                                    sidebarHolder: n,
                                    sidebarHolderHeight: a,
                                });
                        }),
                        o(),
                        T(window).scroll(function () {
                            o();
                        });
                },
                reInit: o,
            };
        }
        function h() {
            var e = T(".eltdf-owl-slider");
            e.length &&
                e.each(function () {
                    var t = T(this),
                        e = T(this),
                        o = t.children().length,
                        n = 1,
                        a = !0,
                        d = !0,
                        l = !0,
                        i = 5e3,
                        s = 600,
                        r = 0,
                        f = 0,
                        c = 0,
                        u = 0,
                        m = !1,
                        p = !1,
                        h = !1,
                        g = !1,
                        v = !1,
                        w = !0,
                        y = !1,
                        b = !1,
                        C = !!t.hasClass("eltdf-list-is-slider"),
                        _ = C ? t.parent() : t;
                    if (
                        (void 0 === t.data("number-of-items") ||
                            !1 === t.data("number-of-items") ||
                            C ||
                            (n = t.data("number-of-items")),
                        void 0 !== _.data("number-of-columns") &&
                            !1 !== _.data("number-of-columns") &&
                            C)
                    )
                        switch (_.data("number-of-columns")) {
                            case "one":
                                n = 1;
                                break;
                            case "two":
                                n = 2;
                                break;
                            case "three":
                                n = 3;
                                break;
                            case "four":
                                n = 4;
                                break;
                            case "five":
                                n = 5;
                                break;
                            case "six":
                                n = 6;
                                break;
                            default:
                                n = 4;
                        }
                    "no" === _.data("enable-loop") && (a = !1),
                        "no" === _.data("enable-autoplay") && (d = !1),
                        "no" === _.data("enable-autoplay-hover-pause") &&
                            (l = !1),
                        void 0 !== _.data("slider-speed") &&
                            !1 !== _.data("slider-speed") &&
                            (i = _.data("slider-speed")),
                        void 0 !== _.data("slider-speed-animation") &&
                            !1 !== _.data("slider-speed-animation") &&
                            (s = _.data("slider-speed-animation")),
                        void 0 !== _.data("slider-margin") &&
                        !1 !== _.data("slider-margin")
                            ? (r =
                                  "no" === _.data("slider-margin")
                                      ? 0
                                      : _.data("slider-margin"))
                            : t.parent().hasClass("eltdf-huge-space")
                            ? (r = 60)
                            : t.parent().hasClass("eltdf-large-space")
                            ? (r = 50)
                            : t.parent().hasClass("eltdf-medium-space")
                            ? (r = 40)
                            : t.parent().hasClass("eltdf-normal-space")
                            ? (r = 30)
                            : t.parent().hasClass("eltdf-small-space")
                            ? (r = 20)
                            : t.parent().hasClass("eltdf-tiny-space") &&
                              (r = 10),
                        "yes" === _.data("slider-padding") &&
                            ((m = !0),
                            (u = parseInt(0.28 * t.outerWidth())),
                            (r = 50)),
                        "yes" === _.data("enable-center") && (p = !0),
                        "yes" === _.data("enable-auto-width") && (h = !0),
                        void 0 !== _.data("slider-animate-in") &&
                            !1 !== _.data("slider-animate-in") &&
                            (g = _.data("slider-animate-in")),
                        void 0 !== _.data("slider-animate-out") &&
                            !1 !== _.data("slider-animate-out") &&
                            (v = _.data("slider-animate-out")),
                        "no" === _.data("enable-navigation") && (w = !1),
                        "yes" === _.data("enable-pagination") && (y = !0),
                        (b = "yes" === _.data("enable-thumbnail") ? !0 : b) &&
                            !y &&
                            ((y = !0),
                            e.addClass("eltdf-slider-hide-pagination")),
                        w && y && t.addClass("eltdf-slider-has-both-nav"),
                        o <= 1 && (y = w = d = a = !1);
                    var x = 2,
                        k = 3,
                        S = n,
                        I = n;
                    if (
                        (n < 3 && (k = x = n),
                        4 < n && (S = 4),
                        5 < n && (I = 5),
                        (m || 30 < r) && ((f = 20), (c = 30)),
                        0 < r && r <= 30 && (c = f = r),
                        t.waitForImages(function () {
                            e = t.owlCarousel({
                                items: n,
                                loop: a,
                                autoplay: d,
                                autoplayHoverPause: l,
                                autoplayTimeout: i,
                                smartSpeed: s,
                                margin: r,
                                stagePadding: u,
                                center: p,
                                autoWidth: h,
                                animateIn: g,
                                animateOut: v,
                                dots: y,
                                nav: w,
                                navText: [
                                    '<span class="eltdf-prev-icon">' +
                                        eltdfGlobalVars.vars
                                            .sliderNavPrevArrow +
                                        "</span>",
                                    '<span class="eltdf-next-icon">' +
                                        eltdfGlobalVars.vars
                                            .sliderNavNextArrow +
                                        "</span>",
                                ],
                                responsive: {
                                    0: {
                                        items: 1,
                                        margin: f,
                                        stagePadding: 0,
                                        center: !1,
                                        autoWidth: !1,
                                    },
                                    681: { items: x, margin: c },
                                    769: { items: k, margin: c },
                                    1025: { items: S },
                                    1281: { items: I },
                                    1367: { items: n },
                                },
                                onInitialize: function () {
                                    t.css("visibility", "visible"),
                                        D(),
                                        (t.find("iframe").length ||
                                            t.find("video").length) &&
                                            setTimeout(function () {
                                                P(), H();
                                            }, 500),
                                        b &&
                                            O.find(
                                                ".eltdf-slider-thumbnail-item:first-child"
                                            ).addClass("active");
                                },
                                onRefreshed: function () {
                                    var e;
                                    !0 === h &&
                                        ((e = parseInt(
                                            t.find(".owl-stage").css("width")
                                        )),
                                        t
                                            .find(".owl-stage")
                                            .css("width", e + 1 + "px"));
                                },
                                onTranslate: function (e) {
                                    b &&
                                        ((e = e.page.index + 1),
                                        O.find(
                                            ".eltdf-slider-thumbnail-item.active"
                                        ).removeClass("active"),
                                        O.find(
                                            ".eltdf-slider-thumbnail-item:nth-child(" +
                                                e +
                                                ")"
                                        ).addClass("active"));
                                },
                                onDrag: function (e) {
                                    eltdf.body.hasClass(
                                        "eltdf-smooth-page-transitions-fadeout"
                                    ) &&
                                        0 < e.isTrigger &&
                                        t.addClass("eltdf-slider-is-moving");
                                },
                                onDragged: function () {
                                    eltdf.body.hasClass(
                                        "eltdf-smooth-page-transitions-fadeout"
                                    ) &&
                                        t.hasClass("eltdf-slider-is-moving") &&
                                        setTimeout(function () {
                                            t.removeClass(
                                                "eltdf-slider-is-moving"
                                            );
                                        }, 500);
                                },
                            });
                        }),
                        b)
                    ) {
                        var O = t.parent().find(".eltdf-slider-thumbnail"),
                            A = "";
                        switch (parseInt(O.data("thumbnail-count")) % 6) {
                            case 2:
                                A = "two";
                                break;
                            case 3:
                                A = "three";
                                break;
                            case 4:
                                A = "four";
                                break;
                            case 5:
                                A = "five";
                                break;
                            default:
                                A = "six";
                        }
                        "" !== A && O.addClass("eltdf-slider-columns-" + A),
                            O.find(".eltdf-slider-thumbnail-item").on(
                                "click",
                                function () {
                                    T(this)
                                        .siblings(".active")
                                        .removeClass("active"),
                                        T(this).addClass("active"),
                                        e.trigger("to.owl.carousel", [
                                            T(this).index(),
                                            s,
                                        ]);
                                }
                            );
                    }
                });
        }
        function g() {
            T(
                ".eltdf-st-decor-animation, .eltdf-svg-pattern, .eltdf-svg-pattern-holder, .eltdf-team-appear, .eltdf-bar-home-reveal-image"
            ).each(function () {
                T(this).appear(
                    function () {
                        T(this).addClass("eltdf-appear");
                    },
                    { accX: 0, accY: -300 }
                );
            });
        }
        e.eltdfOwlSlider = h;
    })(jQuery),
    (function (r) {
        "use strict";
        var e = {};
        function t() {
            f();
        }
        function o() {
            a().init();
        }
        function n() {
            a().scroll();
        }
        function f() {
            var e = r("audio.eltdf-blog-audio");
            e.length && e.mediaelementplayer({ audioWidth: "100%" });
        }
        function a() {
            function o(e) {
                var t =
                    e.outerHeight() +
                    e.offset().top -
                    eltdfGlobalVars.vars.eltdfAddForAdminBar;
                !e.hasClass("eltdf-blog-pagination-infinite-scroll-started") &&
                    eltdf.scroll + eltdf.windowHeight > t &&
                    n(e);
            }
            function n(o) {
                var e,
                    n = o.children(".eltdf-blog-holder-inner"),
                    t =
                        (void 0 !== o.data("max-num-pages") &&
                            !1 !== o.data("max-num-pages") &&
                            (e = o.data("max-num-pages")),
                        o.hasClass("eltdf-blog-pagination-infinite-scroll") &&
                            o.addClass(
                                "eltdf-blog-pagination-infinite-scroll-started"
                            ),
                        eltdf.modules.common.getLoadMoreData(o)),
                    a = o.find(".eltdf-blog-pag-loading"),
                    d = t.nextPage,
                    l = o.find('input[name*="eltdf_blog_load_more_nonce_"]');
                (t.blog_load_more_id = l
                    .attr("name")
                    .substring(
                        l.attr("name").length - 4,
                        l.attr("name").length
                    )),
                    (t.blog_load_more_nonce = l.val()),
                    d <= e &&
                        (a.addClass("eltdf-showing"),
                        (l = eltdf.modules.common.setLoadMoreAjaxData(
                            t,
                            "laurent_elated_blog_load_more"
                        )),
                        r.ajax({
                            type: "POST",
                            data: l,
                            url: eltdfGlobalVars.vars.eltdfAjaxUrl,
                            success: function (e) {
                                d++, o.data("next-page", d);
                                var t = r.parseJSON(e).html;
                                o.waitForImages(function () {
                                    o.hasClass("eltdf-grid-masonry-list")
                                        ? (i(n, a, t),
                                          eltdf.modules.common.setFixedImageProportionSize(
                                              o,
                                              o.find("article"),
                                              n
                                                  .find(
                                                      ".eltdf-masonry-grid-sizer"
                                                  )
                                                  .width()
                                          ))
                                        : s(n, a, t),
                                        setTimeout(function () {
                                            f(),
                                                eltdf.modules.common.eltdfOwlSlider(),
                                                eltdf.modules.common.eltdfFluidVideo(),
                                                eltdf.modules.common.eltdfInitSelfHostedVideoPlayer(),
                                                eltdf.modules.common.eltdfSelfHostedVideoSize(),
                                                "function" ==
                                                    typeof eltdf.modules.common
                                                        .eltdfStickySidebarWidget &&
                                                    eltdf.modules.common
                                                        .eltdfStickySidebarWidget()
                                                        .reInit(),
                                                r(document.body).trigger(
                                                    "blog_list_load_more_trigger"
                                                );
                                        }, 400);
                                }),
                                    o.hasClass(
                                        "eltdf-blog-pagination-infinite-scroll-started"
                                    ) &&
                                        o.removeClass(
                                            "eltdf-blog-pagination-infinite-scroll-started"
                                        );
                            },
                        })),
                    d === e && o.find(".eltdf-blog-pag-load-more").hide();
            }
            var e = r(".eltdf-blog-holder"),
                i = function (e, t, o) {
                    e
                        .append(o)
                        .isotope("reloadItems")
                        .isotope({ sortBy: "original-order" }),
                        t.removeClass("eltdf-showing"),
                        setTimeout(function () {
                            e.isotope("layout");
                        }, 600);
                },
                s = function (e, t, o) {
                    t.removeClass("eltdf-showing"), e.append(o);
                };
            return {
                init: function () {
                    e.length &&
                        e.each(function () {
                            var t,
                                e = r(this);
                            e.hasClass("eltdf-blog-pagination-load-more") &&
                                (t = e)
                                    .find(".eltdf-blog-pag-load-more a")
                                    .on("click", function (e) {
                                        e.preventDefault(),
                                            e.stopPropagation(),
                                            n(t);
                                    }),
                                e.hasClass(
                                    "eltdf-blog-pagination-infinite-scroll"
                                ) && o(e);
                        });
                },
                scroll: function () {
                    e.length &&
                        e.each(function () {
                            var e = r(this);
                            e.hasClass(
                                "eltdf-blog-pagination-infinite-scroll"
                            ) && o(e);
                        });
                },
            };
        }
        ((eltdf.modules.blog = e).eltdfOnDocumentReady = t),
            (e.eltdfOnWindowLoad = o),
            (e.eltdfOnWindowScroll = n),
            r(document).ready(t),
            r(window).on("load", o),
            r(window).scroll(n);
    })(jQuery),
    (function (a) {
        "use strict";
        var e = {};
        function t() {
            var e, t, o, n;
            a("body:not(.error404) .eltdf-footer-uncover").length &&
                !eltdf.htmlEl.hasClass("touch") &&
                ((e = a("footer")),
                (t = e.outerHeight()),
                (o = a(".eltdf-content")),
                (n = function () {
                    o.css("margin-bottom", t), e.css("height", t);
                })(),
                a(window).resize(function () {
                    (t = e.find(".eltdf-footer-inner").outerHeight()), n();
                }));
        }
        ((eltdf.modules.footer = e).eltdfOnWindowLoad = t),
            a(window).on("load", t);
    })(jQuery),
    (function (s) {
        "use strict";
        var e = {};
        function t() {
            n(),
                setTimeout(function () {
                    s(".eltdf-drop-down > ul > li").each(function () {
                        var a = s(this);
                        a.find(".second").length &&
                            a.waitForImages(function () {
                                var t,
                                    e,
                                    o = a.find(".second"),
                                    n = eltdf.menuDropdownHeightSet
                                        ? 0
                                        : o.outerHeight();
                                a.hasClass("wide") &&
                                    ((t = 0),
                                    (e = o.find("> .inner > ul > li")).each(
                                        function () {
                                            var e = s(this).outerHeight();
                                            t < e && (t = e);
                                        }
                                    ),
                                    e.css("height", "").height(t),
                                    eltdf.menuDropdownHeightSet ||
                                        (n = o.outerHeight())),
                                    eltdf.menuDropdownHeightSet || o.height(0),
                                    navigator.userAgent.match(
                                        /(iPod|iPhone|iPad)/
                                    )
                                        ? a
                                              .on(
                                                  "touchstart mouseenter",
                                                  function () {
                                                      o.css({
                                                          height: n,
                                                          overflow: "visible",
                                                          visibility: "visible",
                                                          opacity: "1",
                                                      });
                                                  }
                                              )
                                              .on("mouseleave", function () {
                                                  o.css({
                                                      height: "0px",
                                                      overflow: "hidden",
                                                      visibility: "hidden",
                                                      opacity: "0",
                                                  });
                                              })
                                        : eltdf.body.hasClass(
                                              "eltdf-dropdown-animate-height"
                                          )
                                        ? a.hoverIntent({
                                              interval: 0,
                                              over: function () {
                                                  setTimeout(function () {
                                                      o
                                                          .addClass(
                                                              "eltdf-drop-down-start"
                                                          )
                                                          .css({
                                                              visibility:
                                                                  "visible",
                                                              height: "0",
                                                              opacity: "1",
                                                          }),
                                                          o
                                                              .stop()
                                                              .animate(
                                                                  { height: n },
                                                                  400,
                                                                  "easeInOutQuint",
                                                                  function () {
                                                                      o.css(
                                                                          "overflow",
                                                                          "visible"
                                                                      );
                                                                  }
                                                              );
                                                  }, 100);
                                              },
                                              timeout: 100,
                                              out: function () {
                                                  o
                                                      .stop()
                                                      .animate(
                                                          {
                                                              height: "0",
                                                              opacity: 0,
                                                          },
                                                          100,
                                                          function () {
                                                              o.css({
                                                                  overflow:
                                                                      "hidden",
                                                                  visibility:
                                                                      "hidden",
                                                              });
                                                          }
                                                      ),
                                                      o.removeClass(
                                                          "eltdf-drop-down-start"
                                                      );
                                              },
                                          })
                                        : a.hoverIntent({
                                              interval: 0,
                                              over: function () {
                                                  setTimeout(function () {
                                                      o.addClass(
                                                          "eltdf-drop-down-start"
                                                      )
                                                          .stop()
                                                          .css({ height: n });
                                                  }, 150);
                                              },
                                              timeout: 150,
                                              out: function () {
                                                  o.stop()
                                                      .css({ height: "0" })
                                                      .removeClass(
                                                          "eltdf-drop-down-start"
                                                      );
                                              },
                                          });
                            });
                    }),
                        s(".eltdf-drop-down ul li.wide ul li a").on(
                            "click",
                            function (e) {
                                var t;
                                1 === e.which &&
                                    ((t = s(this)),
                                    setTimeout(function () {
                                        t.mouseleave();
                                    }, 500));
                            }
                        ),
                        (eltdf.menuDropdownHeightSet = !0);
                }, 100);
        }
        function o() {
            a();
        }
        function n() {
            var e = s(
                ".eltdf-drop-down > ul > li.narrow.menu-item-has-children"
            );
            e.length &&
                e.each(function (e) {
                    var t,
                        o = s(this),
                        n = o.offset().left,
                        a = o.find(".second"),
                        d = a.find(".inner ul"),
                        l = d.outerWidth(),
                        i = eltdf.windowWidth - n;
                    eltdf.body.hasClass("eltdf-boxed") &&
                        (i =
                            eltdf.boxedLayoutWidth -
                            (n -
                                (eltdf.windowWidth - eltdf.boxedLayoutWidth) /
                                    2)),
                        0 < o.find("li.sub").length && (t = i - l),
                        a.removeClass("right"),
                        d.removeClass("right"),
                        (i < l || t < l) &&
                            (a.addClass("right"), d.addClass("right"));
                });
        }
        function a() {
            var e = s(".eltdf-drop-down > ul > li.wide");
            e.length &&
                e.each(function (e) {
                    var t,
                        o,
                        n = s(this).find(".second");
                    !n.length ||
                        n.hasClass("left_position") ||
                        n.hasClass("right_position") ||
                        (n.css("left", 0),
                        (t = n.offset().left),
                        eltdf.body.hasClass("eltdf-boxed")
                            ? ((o = s(
                                  ".eltdf-boxed .eltdf-wrapper .eltdf-wrapper-inner"
                              ).outerWidth()),
                              (t -= (eltdf.windowWidth - o) / 2),
                              n.css({ left: -t, width: o }))
                            : eltdf.body.hasClass(
                                  "eltdf-wide-dropdown-menu-in-grid"
                              )
                            ? n.css({
                                  left:
                                      -t +
                                      (eltdf.windowWidth - eltdf.gridWidth()) /
                                          2,
                                  width: eltdf.gridWidth(),
                              })
                            : n.css({ left: -t, width: eltdf.windowWidth }));
                });
        }
        ((eltdf.modules.header = e).eltdfSetDropDownMenuPosition = n),
            (e.eltdfSetDropDownWideMenuPosition = a),
            (e.eltdfOnDocumentReady = t),
            (e.eltdfOnWindowLoad = o),
            s(document).ready(t),
            s(window).on("load", o);
    })(jQuery),
    (function (f) {
        "use strict";
        var e = {};
        function t() {
            var n,
                a = f(".eltdf-wrapper"),
                d = f(".eltdf-side-menu"),
                l = f("a.eltdf-side-menu-button-opener"),
                i = !1,
                s = !1,
                r = !1;
            eltdf.body.hasClass("eltdf-side-menu-slide-from-right")
                ? (f(".eltdf-cover").remove(),
                  (n = "eltdf-right-side-menu-opened"),
                  a.prepend('<div class="eltdf-cover"/>'),
                  (i = !0))
                : eltdf.body.hasClass("eltdf-side-menu-slide-with-content")
                ? ((n = "eltdf-side-menu-open"), (s = !0))
                : eltdf.body.hasClass(
                      "eltdf-side-area-uncovered-from-content"
                  ) && ((n = "eltdf-right-side-menu-opened"), (r = !0)),
                f(
                    "a.eltdf-side-menu-button-opener, a.eltdf-close-side-menu"
                ).on("click", function (e) {
                    var t, o;
                    e.preventDefault(),
                        a.one("wheel", function () {
                            l.hasClass("opened") &&
                                (eltdf.modules.common.eltdfEnableScroll(),
                                l.removeClass("opened"),
                                eltdf.body.removeClass("eltdf-side-menu-open"));
                        }),
                        l.hasClass("opened")
                            ? (eltdf.modules.common.eltdfEnableScroll(),
                              l.removeClass("opened"),
                              eltdf.body.removeClass(n),
                              r &&
                                  (t = setTimeout(function () {
                                      d.css({ visibility: "hidden" }),
                                          clearTimeout(t);
                                  }, 400)))
                            : (eltdf.modules.common.eltdfDisableScroll(),
                              l.addClass("opened"),
                              eltdf.body.addClass(n),
                              i &&
                                  f(".eltdf-wrapper .eltdf-cover").on(
                                      "click",
                                      function () {
                                          eltdf.modules.common.eltdfEnableScroll(),
                                              eltdf.body.removeClass(
                                                  "eltdf-right-side-menu-opened"
                                              ),
                                              l.removeClass("opened");
                                      }
                                  ),
                              r && d.css({ visibility: "visible" }),
                              (o = f(window).scrollTop()),
                              f(window).scroll(function () {
                                  var e;
                                  400 < Math.abs(eltdf.scroll - o) &&
                                      (eltdf.modules.common.eltdfEnableScroll(),
                                      eltdf.body.removeClass(n),
                                      l.removeClass("opened"),
                                      r) &&
                                      (e = setTimeout(function () {
                                          d.css({ visibility: "hidden" }),
                                              clearTimeout(e);
                                      }, 400));
                              })),
                        s &&
                            (e.stopPropagation(),
                            a.on("click", function () {
                                e.preventDefault(),
                                    eltdf.modules.common.eltdfEnableScroll(),
                                    l.removeClass("opened"),
                                    eltdf.body.removeClass(
                                        "eltdf-side-menu-open"
                                    );
                            }));
                }),
                d.length &&
                    eltdf.modules.common.eltdfInitPerfectScrollbar().init(d);
        }
        ((eltdf.modules.sidearea = e).eltdfOnDocumentReady = t),
            f(document).ready(t);
    })(jQuery),
    (function (i) {
        "use strict";
        var e = {};
        function t() {
            var e,
                t,
                o,
                n,
                a,
                d = i(".eltdf-subscribe-popup-holder"),
                l = i(".eltdf-sp-close");
            d.length &&
                ((e = d.find(".eltdf-sp-prevent")),
                (t = "no"),
                e.length &&
                    ((o = d.hasClass("eltdf-sp-prevent-cookies")),
                    (n = e.find(".eltdf-sp-prevent-input")),
                    (a = n.data("value")),
                    (o
                        ? ((t = localStorage.getItem("disabledPopup")),
                          sessionStorage)
                        : ((t = sessionStorage.getItem("disabledPopup")),
                          localStorage)
                    ).removeItem("disabledPopup"),
                    e.children().on("click", function (e) {
                        "yes" !== a
                            ? ((a = "yes"),
                              n
                                  .addClass("eltdf-sp-prevent-clicked")
                                  .data("value", "yes"))
                            : ((a = "no"),
                              n
                                  .removeClass("eltdf-sp-prevent-clicked")
                                  .data("value", "no")),
                            "yes" === a
                                ? (o ? localStorage : sessionStorage).setItem(
                                      "disabledPopup",
                                      "yes"
                                  )
                                : (o ? localStorage : sessionStorage).setItem(
                                      "disabledPopup",
                                      "no"
                                  );
                    })),
                "yes" !== t) &&
                (eltdf.body.hasClass("eltdf-sp-opened")
                    ? (eltdf.body.removeClass("eltdf-sp-opened"),
                      eltdf.modules.common.eltdfEnableScroll())
                    : (eltdf.body.addClass("eltdf-sp-opened"),
                      eltdf.modules.common.eltdfDisableScroll()),
                l.on("click", function (e) {
                    e.preventDefault(),
                        eltdf.body.removeClass("eltdf-sp-opened"),
                        eltdf.modules.common.eltdfEnableScroll();
                }),
                i(document).keyup(function (e) {
                    27 === e.keyCode &&
                        (eltdf.body.removeClass("eltdf-sp-opened"),
                        eltdf.modules.common.eltdfEnableScroll());
                }));
        }
        ((eltdf.modules.subscribePopup = e).eltdfOnWindowLoad = t),
            i(window).on("load", t);
    })(jQuery),
    (function (i) {
        "use strict";
        var e = {};
        function t() {
            var e,
                t,
                o,
                n,
                a,
                d,
                l = i(".eltdf-title-holder.eltdf-bg-parallax");
            0 < l.length &&
                1024 < eltdf.windowWidth &&
                ((e = l.hasClass("eltdf-bg-parallax-zoom-out")),
                (t = parseInt(l.data("height"))),
                (o = parseInt(l.data("background-width"))),
                (n = (t / 1e4) * 7),
                (a = -eltdf.scroll * n),
                (d = eltdfGlobalVars.vars.eltdfAddForAdminBar),
                l.css({ "background-position": "center " + (a + d) + "px" }),
                e && l.css({ "background-size": o - eltdf.scroll + "px auto" }),
                i(window).scroll(function () {
                    (a = -eltdf.scroll * n),
                        l.css({
                            "background-position": "center " + (a + d) + "px",
                        }),
                        e &&
                            l.css({
                                "background-size": o - eltdf.scroll + "px auto",
                            });
                }));
        }
        ((eltdf.modules.title = e).eltdfOnDocumentReady = t),
            i(document).ready(t);
    })(jQuery),
    (function (i) {
        "use strict";
        var e = {};
        function t() {
            i(document).on(
                "click",
                ".eltdf-quantity-minus, .eltdf-quantity-plus",
                function (e) {
                    e.stopPropagation();
                    var t,
                        e = i(this),
                        o = e.siblings(".eltdf-quantity-input"),
                        n = parseFloat(o.data("step")),
                        a = parseFloat(o.data("max")),
                        d = parseFloat(o.data("min")),
                        l = !1,
                        d =
                            "function" == typeof Number.isNaN &&
                            Number.isNaN(parseFloat(o.val()))
                                ? d
                                : parseFloat(o.val());
                    (l = e.hasClass("eltdf-quantity-minus") ? !0 : l)
                        ? 1 <= (t = d - n)
                            ? o.val(t)
                            : o.val(0)
                        : ((t = d + n),
                          void 0 !== a && a <= t ? o.val(a) : o.val(t)),
                        o.trigger("change");
                }
            );
            var e = i(".woocommerce-ordering .orderby");
            e.length && e.select2({ minimumResultsForSearch: 1 / 0 }),
                (e = i(
                    ".eltdf-woocommerce-page .eltdf-content .variations td.value select"
                )).length && e.select2(),
                (e = i("#calc_shipping_country")).length && e.select2(),
                (e = i(
                    ".cart-collaterals .shipping select#calc_shipping_state"
                )).length && e.select2(),
                (e = i(
                    ".widget.widget_archive select, .widget.widget_categories select, .widget.widget_text select"
                )).length &&
                    "function" == typeof e.select2 &&
                    e.select2(),
                (e = i(
                    ".eltdf-woo-single-page.eltdf-woo-single-has-pretty-photo .images .woocommerce-product-gallery__image"
                )).length &&
                    (e
                        .children("a")
                        .attr(
                            "data-rel",
                            "prettyPhoto[woo_single_pretty_photo]"
                        ),
                    "function" ==
                        typeof eltdf.modules.common.eltdfPrettyPhoto) &&
                    eltdf.modules.common.eltdfPrettyPhoto(),
                (e = i(".woocommerce-page").find(".button")).length &&
                    e.each(function () {
                        i(this).addClass("eltdf-btn-outline");
                    }),
                (e = i(".woocommerce-tabs > ul")).length &&
                    e.each(function () {
                        var e,
                            a = i(this),
                            d =
                                (a.append(
                                    '<li class="eltdf-product-tabs-line"></li>'
                                ),
                                a.find(".eltdf-product-tabs-line")),
                            l = a.find("> li:not(.eltdf-product-tabs-line)");
                        l.filter(".active").length
                            ? ((e = l.filter(".active").offset().left),
                              d.css("width", l.filter(".active").outerWidth()))
                            : ((e = l.first().offset().left),
                              d.css("width", l.first().outerWidth())),
                            d.css("left", e - a.offset().left),
                            l.mouseenter(function () {
                                var e = i(this),
                                    t = e.outerWidth(),
                                    o = a.offset().left,
                                    e = e.offset().left - o;
                                d.css("width", t), d.css("left", e);
                            }),
                            l.mouseleave(function () {
                                var e = i(this),
                                    t = e.outerWidth(),
                                    o = a.offset().left,
                                    n = e.offset().left - o;
                                e.hasClass("active")
                                    ? (d.css("width", t), d.css("left", n))
                                    : ((t = (e =
                                          l.filter(".active")).outerWidth()),
                                      (n = e.offset().left - o),
                                      d.css("width", t),
                                      d.css("left", n));
                            });
                    });
        }
        ((eltdf.modules.woocommerce = e).eltdfOnDocumentReady = t),
            i(document).ready(t);
    })(jQuery),
    (function (u) {
        "use strict";
        var e = {};
        function t() {
            n().init(),
                u(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_blog_list.default",
                        function () {
                            eltdf.modules.common.eltdfInitGridMasonryListLayout(),
                                n().init();
                        }
                    );
                });
        }
        function o() {
            n().scroll();
        }
        function n() {
            function a(e) {
                var t =
                    e.outerHeight() +
                    e.offset().top -
                    eltdfGlobalVars.vars.eltdfAddForAdminBar;
                !e.hasClass("eltdf-bl-pag-infinite-scroll-started") &&
                    eltdf.scroll + eltdf.windowHeight > t &&
                    d(e);
            }
            function d(o, e) {
                var n,
                    a = o.find(".eltdf-blog-list"),
                    e =
                        (void 0 !== o.data("max-num-pages") &&
                            !1 !== o.data("max-num-pages") &&
                            (n = o.data("max-num-pages")),
                        o.hasClass("eltdf-bl-pag-standard-shortcodes") &&
                            o.data("next-page", e),
                        o.hasClass("eltdf-bl-pag-infinite-scroll") &&
                            o.addClass("eltdf-bl-pag-infinite-scroll-started"),
                        eltdf.modules.common.getLoadMoreData(o)),
                    d = o.find(".eltdf-blog-pag-loading"),
                    l = e.nextPage,
                    t = o.find('input[name*="eltdf_blog_load_more_nonce_"]');
                (e.blog_load_more_id = t
                    .attr("name")
                    .substring(
                        t.attr("name").length - 4,
                        t.attr("name").length
                    )),
                    (e.blog_load_more_nonce = t.val()),
                    l <= n &&
                        (o.hasClass("eltdf-bl-pag-standard-shortcodes")
                            ? (d.addClass(
                                  "eltdf-showing eltdf-standard-pag-trigger"
                              ),
                              o.addClass(
                                  "eltdf-bl-pag-standard-shortcodes-animate"
                              ))
                            : d.addClass("eltdf-showing"),
                        (t = eltdf.modules.common.setLoadMoreAjaxData(
                            e,
                            "laurent_elated_blog_shortcode_load_more"
                        )),
                        u.ajax({
                            type: "POST",
                            data: t,
                            url: eltdfGlobalVars.vars.eltdfAjaxUrl,
                            success: function (e) {
                                o.hasClass(
                                    "eltdf-bl-pag-standard-shortcodes"
                                ) || l++,
                                    o.data("next-page", l);
                                var t = u.parseJSON(e).html;
                                o.hasClass("eltdf-bl-pag-standard-shortcodes")
                                    ? (i(o, n, l),
                                      o.waitForImages(function () {
                                          o.hasClass("eltdf-bl-masonry")
                                              ? s(o, a, d, t)
                                              : (r(o, a, d, t),
                                                "function" ==
                                                    typeof eltdf.modules.common
                                                        .eltdfStickySidebarWidget &&
                                                    eltdf.modules.common
                                                        .eltdfStickySidebarWidget()
                                                        .reInit());
                                      }))
                                    : o.waitForImages(function () {
                                          o.hasClass("eltdf-bl-masonry")
                                              ? f(a, d, t)
                                              : (c(a, d, t),
                                                "function" ==
                                                    typeof eltdf.modules.common
                                                        .eltdfStickySidebarWidget &&
                                                    eltdf.modules.common
                                                        .eltdfStickySidebarWidget()
                                                        .reInit());
                                      }),
                                    o.hasClass(
                                        "eltdf-bl-pag-infinite-scroll-started"
                                    ) &&
                                        o.removeClass(
                                            "eltdf-bl-pag-infinite-scroll-started"
                                        );
                            },
                        })),
                    l === n && o.find(".eltdf-blog-pag-load-more").hide();
            }
            var e = u(".eltdf-blog-list-holder"),
                i = function (e, t, o) {
                    var e = e.find(".eltdf-bl-standard-pagination"),
                        n = e.find("li.eltdf-pag-number"),
                        a = e.find("li.eltdf-pag-prev a"),
                        e = e.find("li.eltdf-pag-next a");
                    n.removeClass("eltdf-pag-active"),
                        n.eq(o - 1).addClass("eltdf-pag-active"),
                        a.data("paged", o - 1),
                        e.data("paged", o + 1),
                        1 < o
                            ? a.css({ opacity: "1" })
                            : a.css({ opacity: "0" }),
                        o === t
                            ? e.css({ opacity: "0" })
                            : e.css({ opacity: "1" });
                },
                s = function (e, t, o, n) {
                    var a = "";
                    t.children('[class*="-grid-sizer"]').length &&
                        (a += t.children('[class*="-grid-sizer"]')[0]
                            .outerHTML),
                        t.children('[class*="-grid-gutter"]').length &&
                            (a += t.children('[class*="-grid-gutter"]')[0]
                                .outerHTML),
                        t
                            .html(a + n)
                            .isotope("reloadItems")
                            .isotope({ sortBy: "original-order" }),
                        o.removeClass(
                            "eltdf-showing eltdf-standard-pag-trigger"
                        ),
                        e.removeClass(
                            "eltdf-bl-pag-standard-shortcodes-animate"
                        ),
                        setTimeout(function () {
                            t.isotope("layout"),
                                "function" ==
                                    typeof eltdf.modules.common
                                        .eltdfStickySidebarWidget &&
                                    eltdf.modules.common
                                        .eltdfStickySidebarWidget()
                                        .reInit();
                        }, 600);
                },
                r = function (e, t, o, n) {
                    o.removeClass("eltdf-showing eltdf-standard-pag-trigger"),
                        e.removeClass(
                            "eltdf-bl-pag-standard-shortcodes-animate"
                        ),
                        t.html(n);
                },
                f = function (e, t, o) {
                    e
                        .append(o)
                        .isotope("reloadItems")
                        .isotope({ sortBy: "original-order" }),
                        t.removeClass("eltdf-showing"),
                        setTimeout(function () {
                            e.isotope("layout"),
                                "function" ==
                                    typeof eltdf.modules.common
                                        .eltdfStickySidebarWidget &&
                                    eltdf.modules.common
                                        .eltdfStickySidebarWidget()
                                        .reInit();
                        }, 600);
                },
                c = function (e, t, o) {
                    t.removeClass("eltdf-showing"), e.append(o);
                };
            return {
                init: function () {
                    e.length &&
                        e.each(function () {
                            var n,
                                e,
                                t,
                                o = u(this);
                            o.hasClass("eltdf-bl-pag-standard-shortcodes") &&
                                (e = (n = o).find(
                                    ".eltdf-bl-standard-pagination li"
                                )).length &&
                                e.each(function () {
                                    var t = u(this).children("a"),
                                        o = 1;
                                    t.on("click", function (e) {
                                        e.preventDefault(),
                                            e.stopPropagation(),
                                            void 0 !== t.data("paged") &&
                                                !1 !== t.data("paged") &&
                                                (o = t.data("paged")),
                                            d(n, o);
                                    });
                                }),
                                o.hasClass("eltdf-bl-pag-load-more") &&
                                    (t = o)
                                        .find(".eltdf-blog-pag-load-more a")
                                        .on("click", function (e) {
                                            e.preventDefault(),
                                                e.stopPropagation(),
                                                d(t);
                                        }),
                                o.hasClass("eltdf-bl-pag-infinite-scroll") &&
                                    a(o);
                        });
                },
                scroll: function () {
                    e.length &&
                        e.each(function () {
                            var e = u(this);
                            e.hasClass("eltdf-bl-pag-infinite-scroll") && a(e);
                        });
                },
            };
        }
        ((eltdf.modules.blogListSC = e).eltdfOnWindowLoad = t),
            (e.eltdfOnWindowScroll = o),
            u(window).on("load", t),
            u(window).scroll(o);
    })(jQuery),
    (function (l) {
        "use strict";
        var e = {};
        function t() {
            var o, n, e, t, a, d;
            l(".eltdf-header-bottom").length &&
                1024 < eltdf.windowWidth &&
                ((o = l(".eltdf-slider")),
                (n =
                    o.length &&
                    o.outerHeight() + eltdfGlobalVars.vars.eltdfMenuAreaHeight <
                        eltdf.windowHeight
                        ? o.outerHeight()
                        : eltdf.windowHeight -
                          eltdfGlobalVars.vars.eltdfMenuAreaHeight),
                (e = l(".eltdf-content")),
                (t = l("footer")),
                (a = t.outerHeight()),
                (d = t.hasClass("eltdf-footer-uncover")),
                0 < o.length &&
                    (o.addClass("eltdf-slider-fixed"), e.css("padding-top", n)),
                l(window).scroll(function () {
                    var e, t;
                    1024 < eltdf.windowWidth &&
                        ((e = n), (t = a), d) &&
                        (eltdf.window.scrollTop() > e
                            ? o.css("margin-top", "-" + t + "px")
                            : o.css("margin-top", 0));
                }));
        }
        ((eltdf.modules.headerBottom = e).eltdfOnDocumentReady = t),
            l(document).ready(t);
    })(jQuery),
    (function (f) {
        "use strict";
        var e = {};
        function t() {
            var e,
                t,
                o,
                n,
                a,
                d,
                l,
                i,
                s,
                r = f("a.eltdf-fullscreen-menu-opener");
            r.length &&
                ((e = f(".eltdf-fullscreen-menu-holder-outer")),
                (n = o = !1),
                (a = f(".eltdf-fullscreen-above-menu-widget-holder")),
                (d = f(".eltdf-fullscreen-below-menu-widget-holder")),
                (l = f(
                    ".eltdf-fullscreen-menu-holder-outer nav > ul > li > a"
                )),
                (i = f(".eltdf-fullscreen-menu > ul li.has_sub > a")),
                (s = f(".eltdf-fullscreen-menu ul li:not(.has_sub) a")),
                eltdf.modules.common.eltdfInitPerfectScrollbar().init(e),
                f(window).resize(function () {
                    e.height(eltdf.windowHeight);
                }),
                eltdf.body.hasClass("eltdf-fade-push-text-right")
                    ? ((t = "eltdf-push-nav-right"), (o = !0))
                    : eltdf.body.hasClass("eltdf-fade-push-text-top") &&
                      ((t = "eltdf-push-text-top"), (n = !0)),
                (o || n) &&
                    (a.length &&
                        a
                            .children()
                            .css({
                                "-webkit-animation-delay": "0ms",
                                "-moz-animation-delay": "0ms",
                                "animation-delay": "0ms",
                            }),
                    l.each(function (e) {
                        f(this).css({
                            "-webkit-animation-delay": 70 * (e + 1) + "ms",
                            "-moz-animation-delay": 70 * (e + 1) + "ms",
                            "animation-delay": 70 * (e + 1) + "ms",
                        });
                    }),
                    d.length) &&
                    d
                        .children()
                        .css({
                            "-webkit-animation-delay":
                                70 * (l.length + 1) + "ms",
                            "-moz-animation-delay": 70 * (l.length + 1) + "ms",
                            "animation-delay": 70 * (l.length + 1) + "ms",
                        }),
                r.on("click", function (e) {
                    e.preventDefault(),
                        r.hasClass("eltdf-fm-opened")
                            ? (r.removeClass("eltdf-fm-opened"),
                              eltdf.body
                                  .removeClass(
                                      "eltdf-fullscreen-menu-opened eltdf-fullscreen-fade-in"
                                  )
                                  .addClass("eltdf-fullscreen-fade-out"),
                              eltdf.body.addClass(t),
                              eltdf.modules.common.eltdfEnableScroll(),
                              f(
                                  "nav.eltdf-fullscreen-menu ul.sub_menu"
                              ).slideUp(200))
                            : (r.addClass("eltdf-fm-opened"),
                              eltdf.body
                                  .removeClass("eltdf-fullscreen-fade-out")
                                  .addClass(
                                      "eltdf-fullscreen-menu-opened eltdf-fullscreen-fade-in"
                                  ),
                              eltdf.body.removeClass(t),
                              eltdf.modules.common.eltdfDisableScroll(),
                              f(document).keyup(function (e) {
                                  27 === e.keyCode &&
                                      (r.removeClass("eltdf-fm-opened"),
                                      eltdf.body
                                          .removeClass(
                                              "eltdf-fullscreen-menu-opened eltdf-fullscreen-fade-in"
                                          )
                                          .addClass(
                                              "eltdf-fullscreen-fade-out"
                                          ),
                                      eltdf.body.addClass(t),
                                      eltdf.modules.common.eltdfEnableScroll(),
                                      f(
                                          "nav.eltdf-fullscreen-menu ul.sub_menu"
                                      ).slideUp(200));
                              }));
                }),
                i.on("tap click", function (e) {
                    e.preventDefault();
                    var t,
                        e = f(this).parent(),
                        o = e.siblings(".menu-item-has-children");
                    return (
                        e.hasClass("has_sub") &&
                            ((t = e.find("> ul.sub_menu")).is(":visible")
                                ? (t.slideUp(450, "easeInOutQuint"),
                                  e.removeClass("open_sub"))
                                : (e.addClass("open_sub"),
                                  0 === o.length
                                      ? t.slideDown(400, "easeInOutQuint")
                                      : (e
                                            .closest("li.menu-item")
                                            .siblings()
                                            .find(".menu-item")
                                            .removeClass("open_sub"),
                                        e
                                            .siblings()
                                            .removeClass("open_sub")
                                            .find(".sub_menu")
                                            .slideUp(
                                                400,
                                                "easeInOutQuint",
                                                function () {
                                                    t.slideDown(
                                                        400,
                                                        "easeInOutQuint"
                                                    );
                                                }
                                            )))),
                        !1
                    );
                }),
                s.on("click", function (e) {
                    if (
                        "http://#" === f(this).attr("href") ||
                        "#" === f(this).attr("href")
                    )
                        return !1;
                    1 === e.which &&
                        (r.removeClass("eltdf-fm-opened"),
                        eltdf.body.removeClass("eltdf-fullscreen-menu-opened"),
                        eltdf.body
                            .removeClass("eltdf-fullscreen-fade-in")
                            .addClass("eltdf-fullscreen-fade-out"),
                        eltdf.body.addClass(t),
                        f("nav.eltdf-fullscreen-menu ul.sub_menu").slideUp(200),
                        eltdf.modules.common.eltdfEnableScroll());
                }));
        }
        ((eltdf.modules.headerMinimal = e).eltdfOnDocumentReady = t),
            f(document).ready(t);
    })(jQuery),
    (function (l) {
        "use strict";
        var e = {};
        function t() {
            o().init();
        }
        ((eltdf.modules.headerVertical = e).eltdfOnDocumentReady = t),
            l(document).ready(t);
        var o = function () {
            function e() {
                var n,
                    a,
                    d,
                    e = o.find(".eltdf-vertical-menu");
                e.hasClass("eltdf-vertical-dropdown-below")
                    ? (d = e.find("ul li.menu-item-has-children")).each(
                          function () {
                              var t = l(this).find(" > .second, > ul"),
                                  o = this,
                                  n = l(this).find("> a"),
                                  a = "fast";
                              n.on("click tap", function (e) {
                                  e.preventDefault(),
                                      e.stopPropagation(),
                                      t.is(":visible")
                                          ? (l(o).removeClass("open"),
                                            t.slideUp(a))
                                          : (n
                                                .parent()
                                                .parent()
                                                .children()
                                                .hasClass("open") &&
                                            n
                                                .parent()
                                                .parent()
                                                .parent()
                                                .hasClass("eltdf-vertical-menu")
                                                ? (l(this)
                                                      .parent()
                                                      .parent()
                                                      .children()
                                                      .removeClass("open"),
                                                  l(this)
                                                      .parent()
                                                      .parent()
                                                      .children()
                                                      .find(" > .second")
                                                      .slideUp(a))
                                                : (l(this)
                                                      .parents("li")
                                                      .hasClass("open") ||
                                                      (d.removeClass("open"),
                                                      d
                                                          .find(
                                                              " > .second, > ul"
                                                          )
                                                          .slideUp(a)),
                                                  l(this)
                                                      .parent()
                                                      .parent()
                                                      .children()
                                                      .hasClass("open") &&
                                                      (l(this)
                                                          .parent()
                                                          .parent()
                                                          .children()
                                                          .removeClass("open"),
                                                      l(this)
                                                          .parent()
                                                          .parent()
                                                          .children()
                                                          .find(
                                                              " > .second, > ul"
                                                          )
                                                          .slideUp(a))),
                                            l(o).addClass("open"),
                                            t.slideDown("slow"));
                              });
                          }
                      )
                    : e.hasClass("eltdf-vertical-dropdown-side") &&
                      ((n = e.find("ul li.menu-item-has-children")),
                      (a = n.find(" > .second > .inner > ul, > ul")),
                      n.each(function () {
                          var t = l(this).find(
                                  " > .second > .inner > ul, > ul"
                              ),
                              o = this;
                          Modernizr.touch
                              ? l(this)
                                    .find("> a")
                                    .on("click tap", function (e) {
                                        e.preventDefault(),
                                            e.stopPropagation(),
                                            t.hasClass("eltdf-float-open")
                                                ? (t.removeClass(
                                                      "eltdf-float-open"
                                                  ),
                                                  l(o).removeClass("open"))
                                                : (l(this)
                                                      .parents("li")
                                                      .hasClass("open") ||
                                                      (n.removeClass("open"),
                                                      a.removeClass(
                                                          "eltdf-float-open"
                                                      )),
                                                  t.addClass(
                                                      "eltdf-float-open"
                                                  ),
                                                  l(o).addClass("open"));
                                    })
                              : l(this).hoverIntent({
                                    over: function () {
                                        t.addClass("eltdf-float-open"),
                                            l(o).addClass("open");
                                    },
                                    out: function () {
                                        t.removeClass("eltdf-float-open"),
                                            l(o).removeClass("open");
                                    },
                                    timeout: 50,
                                });
                      }));
            }
            function t() {
                o.hasClass("eltdf-with-scroll") &&
                    eltdf.modules.common.eltdfInitPerfectScrollbar().init(o);
            }
            var o = l(".eltdf-vertical-menu-area");
            return {
                init: function () {
                    o.length && (e(), t());
                },
            };
        };
    })(jQuery),
    (function (s) {
        "use strict";
        var e = {};
        function t() {
            var t,
                o,
                n,
                a = s(".eltdf-mobile-header .eltdf-mobile-menu-opener"),
                l = s(".eltdf-mobile-header .eltdf-mobile-nav"),
                e = s(
                    ".eltdf-mobile-nav .mobile_arrow, .eltdf-mobile-nav h6, .eltdf-mobile-nav a.eltdf-mobile-no-link"
                ),
                d =
                    (a.length &&
                        l.length &&
                        a.on("tap click", function (e) {
                            e.stopPropagation(),
                                e.preventDefault(),
                                l.is(":visible")
                                    ? (l.slideUp(450, "easeInOutQuint"),
                                      a.removeClass("eltdf-mobile-menu-opened"))
                                    : (l.slideDown(450, "easeInOutQuint"),
                                      a.addClass("eltdf-mobile-menu-opened"));
                        }),
                    e.length &&
                        e.each(function () {
                            var a = s(this),
                                d = l.outerHeight();
                            a.on("tap click", function (e) {
                                var t,
                                    o = a.parent("li"),
                                    n = o.siblings(".menu-item-has-children");
                                o.hasClass("has_sub") &&
                                    ((t = o.find("> ul.sub_menu")).is(
                                        ":visible"
                                    )
                                        ? (t.slideUp(450, "easeInOutQuint"),
                                          o.removeClass("eltdf-opened"),
                                          l.stop().animate({ height: d }, 300))
                                        : (o.addClass("eltdf-opened"),
                                          (0 === n.length
                                              ? o
                                              : o
                                                    .siblings()
                                                    .removeClass("eltdf-opened")
                                          )
                                              .find(".sub_menu")
                                              .slideUp(
                                                  400,
                                                  "easeInOutQuint",
                                                  function () {
                                                      t.slideDown(
                                                          400,
                                                          "easeInOutQuint"
                                                      ),
                                                          l
                                                              .stop()
                                                              .animate(
                                                                  {
                                                                      height:
                                                                          d +
                                                                          50,
                                                                  },
                                                                  300
                                                              );
                                                  }
                                              )));
                            });
                        }),
                    s(".eltdf-mobile-nav a, .eltdf-mobile-logo-wrapper a").on(
                        "click tap",
                        function (e) {
                            "http://#" !== s(this).attr("href") &&
                                "#" !== s(this).attr("href") &&
                                (l.slideUp(450, "easeInOutQuint"),
                                a.removeClass("eltdf-mobile-menu-opened"));
                        }
                    ),
                    r(),
                    s(".eltdf-mobile-header")),
                i = d.find(".eltdf-mobile-menu-opener"),
                e = d.length ? d.outerHeight() : 0;
            eltdf.body.hasClass("eltdf-content-is-behind-header") &&
                0 < e &&
                eltdf.windowWidth <= 1024 &&
                s(".eltdf-content").css("marginTop", -e),
                eltdf.body.hasClass("eltdf-sticky-up-mobile-header") &&
                    ((o = s("#wpadminbar")),
                    (n = s(document).scrollTop()),
                    (t = e + eltdfGlobalVars.vars.eltdfAddForAdminBar),
                    s(window).scroll(function () {
                        var e = s(document).scrollTop();
                        t < e
                            ? d.addClass("eltdf-animate-mobile-header")
                            : d.removeClass("eltdf-animate-mobile-header"),
                            (n < e &&
                                t < e &&
                                !i.hasClass("eltdf-mobile-menu-opened")) ||
                            e < t
                                ? (d.removeClass("mobile-header-appear"),
                                  d.css("margin-bottom", 0),
                                  o.length &&
                                      d
                                          .find(".eltdf-mobile-header-inner")
                                          .css("top", 0))
                                : (d.addClass("mobile-header-appear"),
                                  d.css("margin-bottom", t)),
                            (n = s(document).scrollTop());
                    }));
        }
        function o() {
            r();
        }
        function r() {
            var e, t, o, n;
            eltdf.windowWidth <= 1024 &&
                ((e = (t = s(".eltdf-mobile-header")).length ? t.height() : 0),
                (o = (t = t.find(".eltdf-mobile-nav")).outerHeight()),
                (n = eltdf.windowHeight - 100),
                t.length) &&
                (t.height(n < e + o ? n - e : o),
                eltdf.modules.common.eltdfInitPerfectScrollbar().init(t));
        }
        ((eltdf.modules.mobileHeader = e).eltdfOnDocumentReady = t),
            (e.eltdfOnWindowResize = o),
            s(document).ready(t),
            s(window).resize(o);
    })(jQuery),
    (function (c) {
        "use strict";
        var e = {};
        function t() {
            if (1024 < eltdf.windowWidth) {
                var t,
                    e,
                    o = c(".eltdf-page-header"),
                    n = c(".eltdf-sticky-header"),
                    a = c(".eltdf-fixed-wrapper"),
                    d = a.children(".eltdf-menu-area").outerHeight(),
                    l = c(".eltdf-slider"),
                    i = l.length ? l.outerHeight() : 0,
                    s = a.length
                        ? a.offset().top -
                          eltdfGlobalVars.vars.eltdfAddForAdminBar
                        : 0;
                switch (!0) {
                    case eltdf.body.hasClass(
                        "eltdf-sticky-header-on-scroll-up"
                    ):
                        eltdf.modules.stickyHeader.behaviour =
                            "eltdf-sticky-header-on-scroll-up";
                        var r = c(document).scrollTop();
                        (t =
                            parseInt(eltdfGlobalVars.vars.eltdfTopBarHeight) +
                            parseInt(eltdfGlobalVars.vars.eltdfLogoAreaHeight) +
                            parseInt(eltdfGlobalVars.vars.eltdfMenuAreaHeight) +
                            parseInt(
                                eltdfGlobalVars.vars.eltdfStickyHeaderHeight
                            )),
                            (e = function () {
                                var e = c(document).scrollTop();
                                (r < e && t < e) || e < t
                                    ? ((eltdf.modules.stickyHeader.isStickyVisible =
                                          !1),
                                      n
                                          .removeClass("header-appear")
                                          .find(".eltdf-main-menu .second")
                                          .removeClass("eltdf-drop-down-start"),
                                      eltdf.body.removeClass(
                                          "eltdf-sticky-header-appear"
                                      ))
                                    : ((eltdf.modules.stickyHeader.isStickyVisible =
                                          !0),
                                      n.addClass("header-appear"),
                                      eltdf.body.addClass(
                                          "eltdf-sticky-header-appear"
                                      )),
                                    (r = c(document).scrollTop());
                            })(),
                            c(window).scroll(function () {
                                e();
                            });
                        break;
                    case eltdf.body.hasClass(
                        "eltdf-sticky-header-on-scroll-down-up"
                    ):
                        (eltdf.modules.stickyHeader.behaviour =
                            "eltdf-sticky-header-on-scroll-down-up"),
                            0 !== eltdfPerPageVars.vars.eltdfStickyScrollAmount
                                ? (eltdf.modules.stickyHeader.stickyAppearAmount =
                                      parseInt(
                                          eltdfPerPageVars.vars
                                              .eltdfStickyScrollAmount
                                      ))
                                : (eltdf.modules.stickyHeader.stickyAppearAmount =
                                      parseInt(
                                          eltdfGlobalVars.vars.eltdfTopBarHeight
                                      ) +
                                      parseInt(
                                          eltdfGlobalVars.vars
                                              .eltdfLogoAreaHeight
                                      ) +
                                      parseInt(
                                          eltdfGlobalVars.vars
                                              .eltdfMenuAreaHeight
                                      ) +
                                      parseInt(i)),
                            (e = function () {
                                eltdf.scroll <
                                eltdf.modules.stickyHeader.stickyAppearAmount
                                    ? ((eltdf.modules.stickyHeader.isStickyVisible =
                                          !1),
                                      n
                                          .removeClass("header-appear")
                                          .find(".eltdf-main-menu .second")
                                          .removeClass("eltdf-drop-down-start"),
                                      eltdf.body.removeClass(
                                          "eltdf-sticky-header-appear"
                                      ))
                                    : ((eltdf.modules.stickyHeader.isStickyVisible =
                                          !0),
                                      n.addClass("header-appear"),
                                      eltdf.body.addClass(
                                          "eltdf-sticky-header-appear"
                                      ));
                            })(),
                            c(window).scroll(function () {
                                e();
                            });
                        break;
                    case eltdf.body.hasClass("eltdf-fixed-on-scroll"):
                        eltdf.modules.stickyHeader.behaviour =
                            "eltdf-fixed-on-scroll";
                        var f = function () {
                            eltdf.scroll <= s
                                ? (a.removeClass("fixed"),
                                  eltdf.body.removeClass(
                                      "eltdf-fixed-header-appear"
                                  ),
                                  o.css("margin-bottom", "0"))
                                : (a.addClass("fixed"),
                                  eltdf.body.addClass(
                                      "eltdf-fixed-header-appear"
                                  ),
                                  o.css("margin-bottom", d + "px"));
                        };
                        f(),
                            c(window).scroll(function () {
                                f();
                            });
                }
            }
        }
        ((eltdf.modules.stickyHeader = e).isStickyVisible = !1),
            (e.stickyAppearAmount = 0),
            (e.behaviour = ""),
            (e.eltdfOnDocumentReady = t),
            c(document).ready(t);
    })(jQuery),
    (function (e) {
        "use strict";
        var t = {};
        function o() {
            e(window).on("elementor/frontend/init", function () {
                elementorFrontend.hooks.addAction(
                    "frontend/element_ready/eltdf_product_list.default",
                    function () {
                        eltdf.modules.common.eltdfInitGridMasonryListLayout();
                    }
                );
            });
        }
        ((eltdf.modules.productList = t).eltdfOnWindowLoad = o),
            e(window).on("load", o);
    })(jQuery),
    (function (e) {
        "use strict";
        var t = {};
        function o() {
            e(window).on("elementor/frontend/init", function () {
                elementorFrontend.hooks.addAction(
                    "frontend/element_ready/eltdf_product_list_carousel.default",
                    function () {
                        eltdf.modules.common.eltdfOwlSlider();
                    }
                );
            });
        }
        ((eltdf.modules.productListCarousel = t).eltdfOnWindowLoad = o),
            e(window).on("load", o);
    })(jQuery),
    (function (a) {
        "use strict";
        function e() {
            a(document).on("click", ".eltdf-like", function () {
                var t = a(this),
                    e = t.attr("id"),
                    o = t.data("post-id"),
                    n = "";
                return (
                    t.hasClass("liked") ||
                        ((e = {
                            action: "laurent_core_action_like",
                            likes_id: e,
                            type: (n =
                                void 0 !== t.data("type") ? t.data("type") : n),
                            like_nonce: a("#eltdf_like_nonce_" + o).val(),
                        }),
                        a.post(
                            eltdfGlobalVars.vars.eltdfAjaxUrl,
                            e,
                            function (e) {
                                t.html(e)
                                    .addClass("liked")
                                    .attr("title", "You already like this!");
                            }
                        )),
                    !1
                );
            });
        }
        a(document).ready(e);
    })(jQuery),
    (function (d) {
        "use strict";
        var e = {};
        function t() {
            function a(e, t) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    o < t
                        ? d(n).addClass("active")
                        : d(n).removeClass("active");
                }
            }
            d(".eltdf-comment-form-rating").each(function () {
                var e = d(this),
                    t = e.find(".eltdf-rating"),
                    o = t.val(),
                    n = e.find(".eltdf-star-rating");
                a(n, o),
                    n.on("click", function () {
                        t.val(d(this).data("value")).trigger("change");
                    }),
                    t.change(function () {
                        (o = t.val()), a(n, o);
                    });
            });
        }
        ((eltdf.modules.rating = e).eltdfOnDocumentReady = t),
            d(document).ready(t);
    })(jQuery),
    (function (c) {
        "use strict";
        var e = {};
        function t() {
            var e;
            (e = c(".eltdf-portfolio-slider-holder")).length &&
                e.each(function () {
                    var e = c(this),
                        t = e.find(".eltdf-portfolio-list-holder"),
                        o = e.find(".eltdf-pli-image img"),
                        n = e.find(".swiper-container"),
                        a = !0,
                        d = !0,
                        l = !0,
                        i = 0,
                        s = 1200,
                        r = "auto";
                    if (
                        ("no" === t.data("enable-loop") && (a = !1),
                        "no" === t.data("enable-autoplay") && (d = !1),
                        "no" === t.data("enable-mouse-scroll") && (l = !1),
                        "yes" === t.data("enable-auto-width"))
                    )
                        r = "auto";
                    else
                        switch ((r = t.data("number-of-columns"))) {
                            case "one":
                                r = 1;
                                break;
                            case "two":
                                r = 2;
                                break;
                            case "three":
                                r = 3;
                                break;
                            case "four":
                                r = 4;
                                break;
                            case "five":
                                r = 5;
                                break;
                            case "six":
                                r = 6;
                                break;
                            default:
                                r = 3;
                        }
                    !1 !== d && (d = { delay: t.data("slider-speed") }),
                        void 0 !== t.data("slider-speed-animation") &&
                            !1 !== t.data("slider-speed-animation") &&
                            (s = t.data("slider-speed-animation")),
                        void 0 !== t.data("space-between-items") &&
                            !1 !== t.data("space-between-items") &&
                            (i =
                                "huge" === (i = t.data("space-between-items"))
                                    ? 60
                                    : "large" === i
                                    ? 50
                                    : "medium" === i
                                    ? 40
                                    : "normal" === i
                                    ? 30
                                    : "small" === i
                                    ? 20
                                    : "tiny" === i
                                    ? 10
                                    : 0);
                    var f = new Swiper(n, {
                        autoplay: d,
                        loop: a,
                        slidesPerView: r,
                        speed: s,
                        parallax: !0,
                        init: !0,
                        mousewheel: l,
                        spaceBetween: i,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            type: "bullets",
                            clickable: !0,
                        },
                    });
                    f.on("init", function () {
                        var t, o;
                        (o = 0),
                            c(document)
                                .on("touchstart", e, function (e) {
                                    o = e.originalEvent.touches[0].pageX;
                                })
                                .on("touchmove", e, function (e) {
                                    (t = e.originalEvent.touches[0].pageX),
                                        o < t ? f.slideNext(s) : f.slidePrev(s);
                                })
                                .on("touchend", e, function () {
                                    t = o = 0;
                                });
                    }),
                        c(window).on("load", function () {
                            e.addClass("eltdf-initialized"),
                                f.init(),
                                o.attr("data-swiper-parallax", "10%");
                        });
                });
        }
        function o() {
            l().init();
            var n,
                a,
                d,
                e = c(".eltdf-portfolio-info-float");
            e.length &&
                (eltdf.body.append(
                    '<div class="eltdf-pl-follow-info-holder"><div class="eltdf-pl-follow-info-inner"><span class="eltdf-pl-follow-info-title">Title</span></div></div>'
                ),
                (n = c(".eltdf-pl-follow-info-holder")),
                (a = n.find(".eltdf-pl-follow-info-categories")),
                (d = n.find(".eltdf-pl-follow-info-title")),
                e.each(function () {
                    var t,
                        o,
                        e = c(this);
                    e.on("mousemove", function (e) {
                        (t = e.clientX),
                            (o = "auto"),
                            (o =
                                e.clientX + n.width() > c(window).width()
                                    ? ((t = "auto"), 0)
                                    : ((t = e.clientX), "auto")),
                            n.css({ top: e.clientY, left: t, right: o });
                    }),
                        e
                            .find(".eltdf-pl-item")
                            .on("mouseenter", function () {
                                var e = c(this),
                                    t = e.find(".eltdf-pli-title"),
                                    e = e.find(".eltdf-pli-category");
                                e.length &&
                                    e.each(function () {
                                        var e = c(this);
                                        a.append(
                                            '<span class="eltdf-pl-follow-info-category">' +
                                                e.text() +
                                                '<span class="eltdf-pl-follow-info-category-slash"> / </span></span>'
                                        );
                                    }),
                                    t.length && d.text(t.text()),
                                    n.hasClass("eltdf-is-active") ||
                                        n.addClass("eltdf-is-active");
                            })
                            .on("mouseleave", function () {
                                n.hasClass("eltdf-is-active") &&
                                    n.removeClass("eltdf-is-active"),
                                    c(
                                        ".eltdf-pl-follow-info-category"
                                    ).remove();
                            }),
                        c(window).scroll(function () {
                            n.hasClass("eltdf-is-active") &&
                                (n.offset().top < e.offset().top ||
                                    n.offset().top >
                                        e.offset().top + e.outerHeight()) &&
                                n.removeClass("eltdf-is-active");
                        });
                })),
                (e = c(".eltdf-portfolio-slider-holder.eltdf-pfs-fullscreen"))
                    .length &&
                    e.each(function () {
                        function e() {
                            (a = (
                                1024 < eltdf.windowWidth
                                    ? c(".eltdf-page-header")
                                    : c(".eltdf-mobile-header")
                            ).outerHeight(!0)),
                                eltdf.body.hasClass("admin-bar") &&
                                    (c("html").css("height", "auto"),
                                    (a += c("#wpadminbar").outerHeight()));
                            var e = t
                                .find(".swiper-pagination")
                                .outerHeight(!0);
                            e &&
                                n.hasClass("eltdf-pag-below-slider") &&
                                (d += e),
                                (o = eltdf.windowHeight - a - d),
                                t.find("article").each(function () {
                                    var e = c(this),
                                        t = e.find("img").innerWidth();
                                    n.hasClass("eltdf-auto-width") &&
                                        e.css({ width: t }),
                                        e.css({ height: o });
                                }),
                                t.find(".swiper-wrapper").css({ height: o });
                        }
                        var o,
                            t = c(this),
                            n = t.find(".eltdf-portfolio-list-holder"),
                            a = 0,
                            d = c(".eltdf-page-footer").outerHeight();
                        e(),
                            c(window).on("resize", function () {
                                e();
                            });
                    });
        }
        ((eltdf.modules.portfolio = e).eltdfOnWindowLoad = o),
            (e.eltdfOnDocumentReady = t),
            c(document).ready(t),
            c(window).on("load", o);
        var l = function () {
            var o,
                e,
                n,
                a,
                d,
                l,
                i,
                t,
                s = c(
                    ".eltdf-follow-portfolio-info .eltdf-portfolio-single-holder .eltdf-ps-info-sticky-holder"
                );
            return (
                s.length &&
                    ((o = s.parent().height()),
                    (e = c(".eltdf-ps-image-holder")),
                    (n = e.height()),
                    (a = e.offset().top),
                    (d = parseInt(
                        e
                            .find(".eltdf-ps-image:last-of-type")
                            .css("marginBottom"),
                        10
                    )),
                    (l = c(".header-appear, .eltdf-fixed-wrapper")),
                    (i = l.length ? l.height() : 0),
                    (t = function () {
                        var e, t;
                        o <= n &&
                            ((e = eltdf.scroll),
                            (t =
                                (i = 0 < e && l.length ? l.height() : i) +
                                eltdfGlobalVars.vars.eltdfAddForAdminBar),
                            a - t <= e
                                ? n + a - d - t <= e + o
                                    ? (s
                                          .stop()
                                          .animate({ marginTop: n - d - o }),
                                      (i = 0))
                                    : s.stop().animate({ marginTop: e - a + t })
                                : s.stop().animate({ marginTop: 0 }));
                    })),
                {
                    init: function () {
                        s.length &&
                            (t(),
                            c(window).scroll(function () {
                                t();
                            }));
                    },
                }
            );
        };
    })(jQuery),
    (function (n) {
        "use strict";
        var e = {};
        function t() {
            o();
        }
        function o() {
            var e = n(".eltdf-accordion-holder");
            e.length &&
                e.each(function () {
                    var e,
                        t,
                        o = n(this);
                    o.hasClass("eltdf-accordion") &&
                        o.accordion({
                            animate: "swing",
                            collapsible: !0,
                            active: 0,
                            icons: "",
                            heightStyle: "content",
                        }),
                        o.hasClass("eltdf-toggle") &&
                            ((t = (e = (o = n(this)).find(
                                ".eltdf-accordion-title"
                            )).next()),
                            o.addClass(
                                "accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"
                            ),
                            e.addClass(
                                "ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"
                            ),
                            t
                                .addClass(
                                    "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                                )
                                .hide(),
                            e.each(function () {
                                var e = n(this);
                                e.on("hover", function () {
                                    e.toggleClass("ui-state-hover");
                                }),
                                    e.on("click", function () {
                                        e.toggleClass(
                                            "ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"
                                        ),
                                            e
                                                .next()
                                                .toggleClass(
                                                    "ui-accordion-content-active"
                                                )
                                                .slideToggle(400);
                                    });
                            }));
                });
        }
        ((eltdf.modules.accordions = e).eltdfInitAccordions = o),
            (e.eltdfOnDocumentReady = t),
            n(document).ready(t),
            n(window).on("load", function () {
                n(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_accordion.default",
                        function () {
                            o();
                        }
                    );
                });
            });
    })(jQuery),
    (function (a) {
        "use strict";
        var e = {};
        function t() {
            o();
        }
        function o() {
            var o,
                n,
                e = a(
                    ".eltdf-grow-in, .eltdf-fade-in-down, .eltdf-element-from-fade, .eltdf-element-from-left, .eltdf-element-from-right, .eltdf-element-from-top, .eltdf-element-from-bottom, .eltdf-flip-in, .eltdf-x-rotate, .eltdf-z-rotate, .eltdf-y-translate, .eltdf-fade-in, .eltdf-fade-in-left-x-rotate"
                );
            e.length &&
                e.each(function () {
                    var t = a(this);
                    t.appear(
                        function () {
                            var e;
                            (o = t.data("animation")),
                                (n = parseInt(t.data("animation-delay"))),
                                void 0 !== o &&
                                    "" !== o &&
                                    ((e = o + "-on"),
                                    setTimeout(function () {
                                        t.addClass(e);
                                    }, n));
                        },
                        {
                            accX: 0,
                            accY: eltdfGlobalVars.vars.eltdfElementAppearAmount,
                        }
                    );
                });
        }
        ((eltdf.modules.animationHolder = e).eltdfInitAnimationHolder = o),
            (e.eltdfOnDocumentReady = t),
            a(document).ready(t);
    })(jQuery),
    (function (i) {
        "use strict";
        var e = {};
        function t() {
            o().init();
        }
        ((eltdf.modules.button = e).eltdfOnDocumentReady = t),
            i(document).ready(t),
            i(window).on("load", function () {
                n(),
                    i(window).on("elementor/frontend/init", function () {
                        elementorFrontend.hooks.addAction(
                            "frontend/element_ready/eltdf_button.default",
                            function () {
                                o().init(), n();
                            }
                        );
                    });
            });
        var o = function () {
            var e = i(".eltdf-btn");
            return {
                init: function () {
                    e.length &&
                        e.each(function () {
                            var e, t, o, n, a, d, l;
                            void 0 !== (n = i(this)).data("hover-color") &&
                                ((o = function (e) {
                                    e.data.button.css("color", e.data.color);
                                }),
                                (t = n.css("color")),
                                (e = n.data("hover-color")),
                                n.on("mouseenter", { button: n, color: e }, o),
                                n.on("mouseleave", { button: n, color: t }, o)),
                                void 0 !==
                                    (e = i(this)).data("hover-bg-color") &&
                                    ((n = function (e) {
                                        e.data.button.css(
                                            "background-color",
                                            e.data.color
                                        );
                                    }),
                                    (t = e.css("background-color")),
                                    (o = e.data("hover-bg-color")),
                                    e.on(
                                        "mouseenter",
                                        { button: e, color: o },
                                        n
                                    ),
                                    e.on(
                                        "mouseleave",
                                        { button: e, color: t },
                                        n
                                    )),
                                void 0 !==
                                    (n = i(this)).data("hover-border-color") &&
                                    ((a = function (e) {
                                        e.data.button.css(
                                            "border-color",
                                            e.data.color
                                        );
                                    }),
                                    (d = n.css("borderTopColor")),
                                    (l = n.data("hover-border-color")),
                                    n.on(
                                        "mouseenter",
                                        { button: n, color: l },
                                        a
                                    ),
                                    n.on(
                                        "mouseleave",
                                        { button: n, color: d },
                                        a
                                    ));
                        });
                },
            };
        };
        function n() {
            var e = i(".eltdf-btn, .button");
            e.length &&
                e.each(function () {
                    var e,
                        t,
                        o = i(this);
                    o.hasClass("eltdf-btn-simple") &&
                        o.append(
                            '<span class="eltdf-btn-first-line"></span><span class="eltdf-btn-second-line"></span>'
                        ),
                        o.hasClass("eltdf-btn-outline") &&
                            (o.prepend(
                                '<span class="eltdf-btn-before-line"></span>'
                            ),
                            o.append(
                                '<span class="eltdf-btn-after-line"></span>'
                            ),
                            (e = o.find(".eltdf-btn-before-line")),
                            (t = o.find(".eltdf-btn-after-line")),
                            e.height(o.outerHeight()),
                            e.css("left", e.height() - 3),
                            t.height(o.outerHeight()),
                            t.css("left", o.outerWidth() - t.height())),
                        o.hasClass("eltdf-btn-special") &&
                            (o.on("mouseenter", function () {
                                o.hasClass("eltdf-btn-animation-out") &&
                                    o.removeClass("eltdf-btn-animation-out"),
                                    o.addClass("eltdf-btn-animation-in");
                            }),
                            o.on("mouseleave", function () {
                                o.hasClass("eltdf-btn-animation-in") &&
                                    o.removeClass("eltdf-btn-animation-in"),
                                    o.addClass("eltdf-btn-animation-out");
                            }));
                });
        }
        e.eltdfButton = o;
    })(jQuery),
    (function (e) {
        "use strict";
        e(document).ready(function () {}),
            e(window).on("load", function () {
                e(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_call_to_action.default",
                        function () {
                            eltdf.modules.button.eltdfButton().init();
                        }
                    );
                });
            });
    })(jQuery),
    (function (e) {
        "use strict";
        var t = {};
        function o() {
            e(window).on("elementor/frontend/init", function () {
                elementorFrontend.hooks.addAction(
                    "frontend/element_ready/eltdf_clients_carousel.default",
                    function () {
                        eltdf.modules.common.eltdfOwlSlider();
                    }
                );
            });
        }
        ((eltdf.modules.clientsCarousel = t).eltdfOnWindowLoad = o),
            e(window).on("load", o);
    })(jQuery),
    (function (v) {
        "use strict";
        var e = {};
        function t() {
            o();
        }
        function o() {
            var a,
                d,
                l,
                i,
                s,
                r,
                f,
                c,
                u,
                m,
                p,
                e = v(".eltdf-countdown"),
                t = new Date(),
                h = t.getMonth(),
                g = t.getFullYear();
            e.length &&
                e.each(function () {
                    var e,
                        t,
                        o = v(this).attr("id"),
                        n = v("#" + o);
                    (a = n.data("year")),
                        (d = n.data("month")),
                        (l = n.data("day")),
                        (i = n.data("hour")),
                        (s = n.data("minute")),
                        (r = n.data("timezone")),
                        (f = n.data("month-label")),
                        (c = n.data("day-label")),
                        (u = n.data("hour-label")),
                        (m = n.data("minute-label")),
                        (p = n.data("second-label")),
                        (e = n.data("digit-size")),
                        (t = n.data("label-size")),
                        (h === d && g === a) || (d -= 1),
                        n.countdown({
                            until: new Date(a, d, l, i, s, 44),
                            labels: ["", f, "", c, u, m, p],
                            format: "ODHMS",
                            timezone: r,
                            padZeroes: !0,
                            onTick: function () {
                                n
                                    .find(".countdown-amount")
                                    .css({
                                        "font-size": e + "px",
                                        "line-height": e + "px",
                                    }),
                                    n
                                        .find(".countdown-period")
                                        .css({ "font-size": t + "px" });
                            },
                        });
                });
        }
        ((eltdf.modules.countdown = e).eltdfInitCountdown = o),
            (e.eltdfOnDocumentReady = t),
            v(document).ready(t),
            v(window).on("load", function () {
                v(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_countdown.default",
                        function () {
                            o();
                        }
                    );
                });
            });
    })(jQuery),
    (function (n) {
        "use strict";
        var e = {};
        function t() {
            o();
        }
        function o() {
            var e = n(".eltdf-counter-holder");
            e.length &&
                e.each(function () {
                    var t = n(this),
                        o = t.find(".eltdf-counter");
                    t.appear(
                        function () {
                            var e;
                            t.css("opacity", "1"),
                                o.hasClass("eltdf-zero-counter")
                                    ? ((e = parseFloat(o.text())),
                                      o.countTo({
                                          from: 0,
                                          to: e,
                                          speed: 1500,
                                          refreshInterval: 100,
                                      }))
                                    : o.absoluteCounter({
                                          speed: 2e3,
                                          fadeInDelay: 1e3,
                                      });
                        },
                        {
                            accX: 0,
                            accY: eltdfGlobalVars.vars.eltdfElementAppearAmount,
                        }
                    );
                });
        }
        ((eltdf.modules.counter = e).eltdfInitCounter = o),
            (e.eltdfOnDocumentReady = t),
            n(document).ready(t),
            n(window).on("load", function () {
                n(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_counter.default",
                        function () {
                            o();
                        }
                    );
                });
            });
    })(jQuery),
    (function (s) {
        "use strict";
        var e = {};
        function t() {
            n();
        }
        function o() {
            a(),
                s(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_custom_font.default",
                        function () {
                            n(), a();
                        }
                    );
                });
        }
        function n() {
            var e = s(".eltdf-custom-font-holder");
            e.length &&
                e.each(function () {
                    var e = s(this),
                        t = "",
                        o = "",
                        n = "",
                        a = "",
                        d = "",
                        l = "",
                        i = "";
                    void 0 !== e.data("item-class") &&
                        !1 !== e.data("item-class") &&
                        (t = e.data("item-class")),
                        void 0 !== e.data("font-size-1366") &&
                            !1 !== e.data("font-size-1366") &&
                            (o +=
                                "font-size: " +
                                e.data("font-size-1366") +
                                " !important;"),
                        void 0 !== e.data("font-size-1024") &&
                            !1 !== e.data("font-size-1024") &&
                            (n +=
                                "font-size: " +
                                e.data("font-size-1024") +
                                " !important;"),
                        void 0 !== e.data("font-size-768") &&
                            !1 !== e.data("font-size-768") &&
                            (a +=
                                "font-size: " +
                                e.data("font-size-768") +
                                " !important;"),
                        void 0 !== e.data("font-size-680") &&
                            !1 !== e.data("font-size-680") &&
                            (d +=
                                "font-size: " +
                                e.data("font-size-680") +
                                " !important;"),
                        void 0 !== e.data("line-height-1366") &&
                            !1 !== e.data("line-height-1366") &&
                            (o +=
                                "line-height: " +
                                e.data("line-height-1366") +
                                " !important;"),
                        void 0 !== e.data("line-height-1024") &&
                            !1 !== e.data("line-height-1024") &&
                            (n +=
                                "line-height: " +
                                e.data("line-height-1024") +
                                " !important;"),
                        void 0 !== e.data("line-height-768") &&
                            !1 !== e.data("line-height-768") &&
                            (a +=
                                "line-height: " +
                                e.data("line-height-768") +
                                " !important;"),
                        void 0 !== e.data("line-height-680") &&
                            !1 !== e.data("line-height-680") &&
                            (d +=
                                "line-height: " +
                                e.data("line-height-680") +
                                " !important;"),
                        (o.length || n.length || a.length || d.length) &&
                            (o.length &&
                                (i +=
                                    "@media only screen and (max-width: 1366px) {.eltdf-custom-font-holder." +
                                    t +
                                    " { " +
                                    o +
                                    " } }"),
                            n.length &&
                                (i +=
                                    "@media only screen and (max-width: 1024px) {.eltdf-custom-font-holder." +
                                    t +
                                    " { " +
                                    n +
                                    " } }"),
                            a.length &&
                                (i +=
                                    "@media only screen and (max-width: 768px) {.eltdf-custom-font-holder." +
                                    t +
                                    " { " +
                                    a +
                                    " } }"),
                            d.length) &&
                            (i +=
                                "@media only screen and (max-width: 680px) {.eltdf-custom-font-holder." +
                                t +
                                " { " +
                                d +
                                " } }"),
                        (l = i.length
                            ? '<style type="text/css">' + i + "</style>"
                            : l).length && s("head").append(l);
                });
        }
        function a() {
            var e = s(".eltdf-cf-typed");
            e.length &&
                e.each(function () {
                    var e = s(this),
                        t = e.parent(".eltdf-cf-typed-wrap"),
                        o = t.parent(".eltdf-custom-font-holder"),
                        n = {
                            strings: t.data("strings"),
                            typeSpeed: 90,
                            backDelay: 700,
                            loop: !0,
                            contentType: "text",
                            loopCount: !1,
                            cursorChar: "_",
                        };
                    o.appear(
                        function () {
                            e.hasClass("qodef--initialized") ||
                                (new Typed(e[0], n),
                                e.addClass("qodef--initialized"));
                        },
                        {
                            accX: 0,
                            accY: eltdfGlobalVars.vars.eltdfElementAppearAmount,
                        }
                    );
                });
        }
        ((eltdf.modules.customFont = e).eltdfCustomFontResize = n),
            (e.eltdfCustomFontTypeOut = a),
            (e.eltdfOnDocumentReady = t),
            (e.eltdfOnWindowLoad = o),
            s(document).ready(t),
            s(window).on("load", o);
    })(jQuery),
    (function (r) {
        "use strict";
        var e = {};
        function t() {
            o();
        }
        function o() {
            var e = r(".eltdf-elements-holder");
            e.length &&
                e.each(function () {
                    var e = r(this).children(".eltdf-eh-item"),
                        t = "",
                        s = "";
                    e.each(function () {
                        var e,
                            t = r(this),
                            o = "",
                            n = "",
                            a = "",
                            d = "",
                            l = "",
                            i = "";
                        void 0 !== t.data("item-class") &&
                            !1 !== t.data("item-class") &&
                            (o = t.data("item-class")),
                            void 0 !== t.data("1400-1600") &&
                                !1 !== t.data("1400-1600") &&
                                (n = t.data("1400-1600")),
                            void 0 !== t.data("1025-1399") &&
                                !1 !== t.data("1025-1399") &&
                                (a = t.data("1025-1399")),
                            void 0 !== t.data("769-1024") &&
                                !1 !== t.data("769-1024") &&
                                (d = t.data("769-1024")),
                            void 0 !== t.data("681-768") &&
                                !1 !== t.data("681-768") &&
                                (l = t.data("681-768")),
                            void 0 !== t.data("680") &&
                                !1 !== t.data("680") &&
                                (i = t.data("680")),
                            (n.length ||
                                a.length ||
                                d.length ||
                                l.length ||
                                i.length ||
                                "".length) &&
                                (n.length &&
                                    (s +=
                                        "@media only screen and (min-width: 1400px) and (max-width: 1600px) {.eltdf-eh-item-content." +
                                        o +
                                        " { padding: " +
                                        n +
                                        " !important; } }"),
                                a.length &&
                                    (s +=
                                        "@media only screen and (min-width: 1025px) and (max-width: 1399px) {.eltdf-eh-item-content." +
                                        o +
                                        " { padding: " +
                                        a +
                                        " !important; } }"),
                                d.length &&
                                    (s +=
                                        "@media only screen and (min-width: 769px) and (max-width: 1024px) {.eltdf-eh-item-content." +
                                        o +
                                        " { padding: " +
                                        d +
                                        " !important; } }"),
                                l.length &&
                                    (s +=
                                        "@media only screen and (min-width: 681px) and (max-width: 768px) {.eltdf-eh-item-content." +
                                        o +
                                        " { padding: " +
                                        l +
                                        " !important; } }"),
                                i.length) &&
                                (s +=
                                    "@media only screen and (max-width: 680px) {.eltdf-eh-item-content." +
                                    o +
                                    " { padding: " +
                                    i +
                                    " !important; } }"),
                            "function" ==
                                typeof eltdf.modules.common.eltdfOwlSlider &&
                                (e = t.find(".eltdf-owl-slider")).length &&
                                setTimeout(function () {
                                    e.trigger("refresh.owl.carousel");
                                }, 100);
                    }),
                        (t = s.length
                            ? '<style type="text/css">' + s + "</style>"
                            : t).length && r("head").append(t);
                });
        }
        ((eltdf.modules.elementsHolder =
            e).eltdfInitElementsHolderResponsiveStyle = o),
            (e.eltdfOnDocumentReady = t),
            r(document).ready(t);
    })(jQuery),
    (function (b) {
        "use strict";
        var e = {};
        function t() {
            o();
        }
        function o() {
            var e = b(".eltdf-google-map");
            e.length &&
                e.each(function () {
                    var e,
                        t,
                        o,
                        n = b(this),
                        a = !1,
                        d = "",
                        l =
                            (void 0 !== n.data("snazzy-map-style") &&
                                "yes" === n.data("snazzy-map-style") &&
                                ((a = !0),
                                (i = (l = n
                                    .parent()
                                    .find(".eltdf-snazzy-map")).val()),
                                l.length) &&
                                i.length &&
                                (d = JSON.parse(
                                    i
                                        .replace(/`{`/g, "[")
                                        .replace(/`}`/g, "]")
                                        .replace(/``/g, '"')
                                        .replace(/`/g, "")
                                )),
                            void 0 !== n.data("custom-map-style") &&
                                (s = n.data("custom-map-style")),
                            void 0 !== n.data("color-overlay") &&
                                !1 !== n.data("color-overlay") &&
                                (r = n.data("color-overlay")),
                            void 0 !== n.data("saturation") &&
                                !1 !== n.data("saturation") &&
                                (f = n.data("saturation")),
                            void 0 !== n.data("lightness") &&
                                !1 !== n.data("lightness") &&
                                (c = n.data("lightness")),
                            void 0 !== n.data("zoom") &&
                                !1 !== n.data("zoom") &&
                                (m = n.data("zoom")),
                            void 0 !== n.data("pin") &&
                                !1 !== n.data("pin") &&
                                (e = n.data("pin")),
                            void 0 !== n.data("height") &&
                                !1 !== n.data("height") &&
                                (y = n.data("height")),
                            void 0 !== n.data("unique-id") &&
                                !1 !== n.data("unique-id") &&
                                (t = n.data("unique-id")),
                            void 0 !== n.data("scroll-wheel") &&
                                (u = n.data("scroll-wheel")),
                            void 0 !== n.data("addresses") &&
                                !1 !== n.data("addresses") &&
                                (o = n.data("addresses")),
                            "map_" + t),
                        i = a,
                        n = d,
                        a = s,
                        d = r,
                        s = f,
                        r = c,
                        f = u,
                        c = m,
                        u = "eltdf-map-" + t,
                        m = y,
                        p = e,
                        h = l,
                        g = "geocoder_" + t,
                        v = o;
                    if ("object" == typeof google) {
                        var w,
                            y = [],
                            d =
                                ((y =
                                    i && n.length
                                        ? n
                                        : [
                                              {
                                                  stylers: [
                                                      { hue: d },
                                                      { saturation: s },
                                                      { lightness: r },
                                                      { gamma: 1 },
                                                  ],
                                              },
                                          ]),
                                (n =
                                    i || "yes" === a
                                        ? "eltdf-style"
                                        : google.maps.MapTypeId.ROADMAP),
                                (f = "yes" === f),
                                new google.maps.StyledMapType(y, {
                                    name: "Google Map",
                                })),
                            s =
                                ((g = new google.maps.Geocoder()),
                                new google.maps.LatLng(-34.397, 150.644)),
                            r =
                                (isNaN(m) || (m += "px"),
                                {
                                    zoom: c,
                                    scrollwheel: f,
                                    center: s,
                                    zoomControl: !0,
                                    zoomControlOptions: {
                                        style: google.maps.ZoomControlStyle
                                            .SMALL,
                                        position:
                                            google.maps.ControlPosition
                                                .RIGHT_CENTER,
                                    },
                                    scaleControl: !1,
                                    scaleControlOptions: {
                                        position:
                                            google.maps.ControlPosition
                                                .LEFT_CENTER,
                                    },
                                    streetViewControl: !1,
                                    streetViewControlOptions: {
                                        position:
                                            google.maps.ControlPosition
                                                .LEFT_CENTER,
                                    },
                                    panControl: !1,
                                    panControlOptions: {
                                        position:
                                            google.maps.ControlPosition
                                                .LEFT_CENTER,
                                    },
                                    mapTypeControl: !1,
                                    mapTypeControlOptions: {
                                        mapTypeIds: [
                                            google.maps.MapTypeId.ROADMAP,
                                            "eltdf-style",
                                        ],
                                        style: google.maps.MapTypeControlStyle
                                            .HORIZONTAL_BAR,
                                        position:
                                            google.maps.ControlPosition
                                                .LEFT_CENTER,
                                    },
                                    mapTypeId: n,
                                });
                        for (
                            (h = new google.maps.Map(
                                document.getElementById(u),
                                r
                            )).mapTypes.set("eltdf-style", d),
                                w = 0;
                            w < v.length;
                            ++w
                        )
                            !(function (n, a, d, e) {
                                var t, l;
                                "" !== n &&
                                    ((t =
                                        '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' +
                                        n +
                                        "</p></div></div>"),
                                    (l = new google.maps.InfoWindow({
                                        content: t,
                                    })),
                                    e.geocode({ address: n }, function (e, t) {
                                        var o;
                                        t === google.maps.GeocoderStatus.OK &&
                                            (d.setCenter(
                                                e[0].geometry.location
                                            ),
                                            (o = new google.maps.Marker({
                                                map: d,
                                                position:
                                                    e[0].geometry.location,
                                                icon: a,
                                                title: n.store_title,
                                            })),
                                            google.maps.event.addListener(
                                                o,
                                                "click",
                                                function () {
                                                    l.open(d, o);
                                                }
                                            ),
                                            window.addEventListener(
                                                "resize",
                                                function () {
                                                    d.setCenter(
                                                        e[0].geometry.location
                                                    );
                                                }
                                            ));
                                    }));
                            })(v[w], p, h, g);
                        document.getElementById(u).style.height = m;
                    }
                });
        }
        ((eltdf.modules.googleMap = e).eltdfShowGoogleMap = o),
            (e.eltdfOnDocumentReady = t),
            b(document).ready(t),
            b(window).on("load", function () {
                b(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_google_map.default",
                        function () {
                            o();
                        }
                    );
                });
            });
    })(jQuery),
    (function (s) {
        "use strict";
        var e = {};
        function t() {
            o().init();
        }
        ((eltdf.modules.icon = e).eltdfIcon = o),
            (e.eltdfOnDocumentReady = t),
            s(document).ready(t),
            s(window).on("load", function () {
                s(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_icon.default",
                        function () {
                            o().init();
                        }
                    );
                });
            });
        var o = function () {
            var e = s(".eltdf-icon-shortcode");
            return {
                init: function () {
                    e.length &&
                        e.each(function () {
                            var e, t, o, n, a, d, l, i;
                            (e = s(this)).hasClass("eltdf-icon-animation") &&
                                e.appear(
                                    function () {
                                        e.parent(
                                            ".eltdf-icon-animation-holder"
                                        ).addClass("eltdf-icon-animation-show");
                                    },
                                    {
                                        accX: 0,
                                        accY: eltdfGlobalVars.vars
                                            .eltdfElementAppearAmount,
                                    }
                                ),
                                void 0 !== (d = s(this)).data("hover-color") &&
                                    ((a = function (e) {
                                        e.data.icon.css("color", e.data.color);
                                    }),
                                    (o = d.find(".eltdf-icon-element")),
                                    (t = d.data("hover-color")),
                                    (n = o.css("color")),
                                    "" !== t) &&
                                    (d.on(
                                        "mouseenter",
                                        { icon: o, color: t },
                                        a
                                    ),
                                    d.on(
                                        "mouseleave",
                                        { icon: o, color: n },
                                        a
                                    )),
                                void 0 !==
                                    (t = s(this)).data(
                                        "hover-background-color"
                                    ) &&
                                    ((d = function (e) {
                                        e.data.icon.css(
                                            "background-color",
                                            e.data.color
                                        );
                                    }),
                                    (o = t.data("hover-background-color")),
                                    (n = t.css("background-color")),
                                    "" !== o) &&
                                    (t.on(
                                        "mouseenter",
                                        { icon: t, color: o },
                                        d
                                    ),
                                    t.on(
                                        "mouseleave",
                                        { icon: t, color: n },
                                        d
                                    )),
                                void 0 !==
                                    (a = s(this)).data("hover-border-color") &&
                                    ((d = function (e) {
                                        e.data.icon.css(
                                            "border-color",
                                            e.data.color
                                        );
                                    }),
                                    (l = a.data("hover-border-color")),
                                    (i = a.css("borderTopColor")),
                                    "" !== l) &&
                                    (a.on(
                                        "mouseenter",
                                        { icon: a, color: l },
                                        d
                                    ),
                                    a.on(
                                        "mouseleave",
                                        { icon: a, color: i },
                                        d
                                    ));
                        });
                },
            };
        };
        e.eltdfIcon = o;
    })(jQuery),
    (function (t) {
        "use strict";
        var e = {};
        function o() {
            n().init();
        }
        ((eltdf.modules.iconListItem = e).eltdfInitIconList = n),
            (e.eltdfOnDocumentReady = o),
            t(document).ready(o),
            t(window).on("load", function () {
                t(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_icon_list_item.default",
                        function () {
                            n().init();
                        }
                    );
                });
            });
        var n = function () {
            var e = t(".eltdf-animate-list");
            return {
                init: function () {
                    e.length &&
                        e.each(function () {
                            var e;
                            (e = t(this)),
                                setTimeout(function () {
                                    e.appear(
                                        function () {
                                            e.addClass("eltdf-appeared");
                                        },
                                        {
                                            accX: 0,
                                            accY: eltdfGlobalVars.vars
                                                .eltdfElementAppearAmount,
                                        }
                                    );
                                }, 30);
                        });
                },
            };
        };
    })(jQuery),
    (function (a) {
        "use strict";
        var e = {};
        function t() {
            o().init();
        }
        ((eltdf.modules.iconWithText = e).eltdfInitIconWithText = o),
            (e.eltdfOnDocumentReady = t),
            a(document).ready(t),
            a(window).on("load", function () {
                a(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_icon_with_text.default",
                        function () {
                            eltdf.modules.icon.eltdfIcon().init(), o().init();
                        }
                    );
                });
            });
        var o = function () {
            var e = a(".eltdf-iwt");
            return {
                init: function () {
                    e.length &&
                        e.each(function () {
                            var e, t, o, n;
                            void 0 !==
                                (e = a(this)).data("title-hover-color") &&
                                ((t = e.find(".eltdf-iwt-title a")),
                                (o = e.data("title-color")),
                                (n = e.data("title-hover-color")),
                                t.on("mouseenter", function () {
                                    a(this).css("color", n);
                                }),
                                t.on("mouseleave", function () {
                                    a(this).css("color", o);
                                }));
                        });
                },
            };
        };
    })(jQuery),
    (function (e) {
        "use strict";
        var t = {};
        function o() {
            e(window).on("elementor/frontend/init", function () {
                elementorFrontend.hooks.addAction(
                    "frontend/element_ready/eltdf_image_gallery.default",
                    function () {
                        eltdf.modules.common.eltdfOwlSlider(),
                            eltdf.modules.common.eltdfInitGridMasonryListLayout();
                    }
                );
            });
        }
        ((eltdf.modules.imageGallery = t).eltdfOnWindowLoad = o),
            e(window).on("load", o);
    })(jQuery),
    (function (m) {
        "use strict";
        var e = {};
        function t() {
            o();
        }
        function o() {
            var e = m(
                ".eltdf-image-with-text-holder.eltdf-image-behavior-scrolling-image"
            );
            e.length &&
                e.each(function () {
                    function e() {
                        (t = r.height()),
                            (n = f.height()),
                            (o = r.width()),
                            (a = f.width()),
                            (l = u
                                ? ((d = Math.round(a - o)),
                                  2 * Math.round(a / o))
                                : ((d = Math.round(n - t)),
                                  2 * Math.round(n / t))),
                            u ? o < a && (c = !0) : t < n && (c = !0);
                    }
                    var t,
                        o,
                        n,
                        a,
                        d,
                        l,
                        i = m(this),
                        s = i.find(".eltdf-iwt-image"),
                        r = i.find(".eltdf-iwt-frame"),
                        f = i.find(".eltdf-iwt-main-image"),
                        c = !1,
                        u = i.hasClass("eltdf-scrolling-horizontal");
                    i.waitForImages(function () {
                        i.css("visibility", "visible"),
                            e(),
                            s.on("mouseenter", function () {
                                f.css("transition-duration", l + "s"),
                                    u
                                        ? f.css(
                                              "transform",
                                              "translate3d(-" +
                                                  d +
                                                  "px, 0px, 0px)"
                                          )
                                        : f.css(
                                              "transform",
                                              "translate3d(0px, -" +
                                                  d +
                                                  "px, 0px)"
                                          );
                            }),
                            s.on("mouseleave", function () {
                                c &&
                                    (f.css(
                                        "transition-duration",
                                        Math.min(l / 3, 3) + "s"
                                    ),
                                    f.css(
                                        "transform",
                                        "translate3d(0px, 0px, 0px)"
                                    ));
                            });
                    }),
                        m(window).resize(function () {
                            e();
                        });
                });
        }
        ((eltdf.modules.scrollingImage = e).eltdfScrollingImage = o),
            (e.eltdfOnDocumentReady = t),
            m(document).ready(t),
            m(window).on("load", function () {
                m(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_image_with_text.default",
                        function () {
                            o();
                        }
                    );
                });
            });
    })(jQuery),
    (function (t) {
        "use strict";
        var e = {};
        function o() {
            n();
        }
        function n() {
            var e = t(".eltdf-pie-chart-holder");
            e.length &&
                e.each(function () {
                    var o = t(this),
                        n = o.children(".eltdf-pc-percentage"),
                        a = "#83B8D9",
                        d = "#0f1d22",
                        l = 200;
                    void 0 !== n.data("size") &&
                        "" !== n.data("size") &&
                        (l = n.data("size")),
                        void 0 !== n.data("bar-color") &&
                            "" !== n.data("bar-color") &&
                            (a = n.data("bar-color")),
                        void 0 !== n.data("track-color") &&
                            "" !== n.data("track-color") &&
                            (d = n.data("track-color")),
                        n.appear(
                            function () {
                                var e, t;
                                (e = (e = n).find(".eltdf-pc-percent")),
                                    (t = parseFloat(e.text())),
                                    e.countTo({
                                        from: 0,
                                        to: t,
                                        speed: 1500,
                                        refreshInterval: 50,
                                    }),
                                    o.css("opacity", "1"),
                                    n.easyPieChart({
                                        barColor: a,
                                        trackColor: d,
                                        scaleColor: !1,
                                        lineCap: "butt",
                                        lineWidth: 2,
                                        animate: 1500,
                                        size: l,
                                    });
                            },
                            {
                                accX: 0,
                                accY: eltdfGlobalVars.vars
                                    .eltdfElementAppearAmount,
                            }
                        );
                });
        }
        ((eltdf.modules.pieChart = e).eltdfInitPieChart = n),
            (e.eltdfOnDocumentReady = o),
            t(document).ready(o),
            t(window).on("load", function () {
                t(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_pie_chart.default",
                        function () {
                            n();
                        }
                    );
                });
            });
    })(jQuery),
    (function (a) {
        "use strict";
        var e = {};
        function t() {
            o(),
                a(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_preview_slider.default",
                        function () {
                            o();
                        }
                    );
                });
        }
        function o() {
            a(".eltdf-preview-slider").each(function () {
                var e = a(this),
                    t = !1,
                    o = 2e3,
                    n = {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 1e3,
                        autoplay: (t =
                            void 0 !== e.data("autoplay") &&
                            "yes" === e.data("autoplay")
                                ? !0
                                : t),
                        autoplaySpeed: (o =
                            void 0 !== e.data("autoplay-speed") &&
                            "" !== e.data("autoplay-speed")
                                ? e.data("autoplay-speed")
                                : o),
                        arrows: !1,
                        vertical: !0,
                        useCSS: !1,
                        easing: "easeInOutCubic",
                        draggable: !1,
                        infinite: !0,
                        pauseOnHover: !1,
                    };
                a("#eltdf-main-rev-holder").length
                    ? setTimeout(function () {
                          e.find(".eltdf-ps-tablet-images").slick(n);
                          e
                              .find(".eltdf-ps-tablet-holder")
                              .css({ opacity: 1, transform: "translateY(0)" }),
                              setTimeout(function () {
                                  e.find(".eltdf-ps-laptop-images").slick(n);
                                  e.find(".eltdf-ps-laptop-holder").css({
                                      opacity: 1,
                                      transform: "translateY(0)",
                                  });
                              }, 100),
                              setTimeout(function () {
                                  e.find(".eltdf-ps-mobile-images").slick(n);
                                  e.find(".eltdf-ps-mobile-holder").css({
                                      opacity: 1,
                                      transform: "translateY(0)",
                                  });
                              }, 250);
                      }, 3800)
                    : (e.find(".eltdf-ps-tablet-images").slick(n),
                      e
                          .find(".eltdf-ps-tablet-holder")
                          .css({ opacity: 1, transform: "translateY(0)" }),
                      setTimeout(function () {
                          e.find(".eltdf-ps-laptop-images").slick(n);
                          e.find(".eltdf-ps-laptop-holder").css({
                              opacity: 1,
                              transform: "translateY(0)",
                          });
                      }, 100),
                      setTimeout(function () {
                          e.find(".eltdf-ps-mobile-images").slick(n);
                          e.find(".eltdf-ps-mobile-holder").css({
                              opacity: 1,
                              transform: "translateY(0)",
                          });
                      }, 250)),
                    e.addClass("eltdf-preview-slider-loaded");
            });
        }
        ((eltdf.modules.previewSlider = e).eltdfInitPreviewSlider = o),
            (e.eltdfOnWindowLoad = t),
            a(window).on("load", t);
    })(jQuery),
    (function (l) {
        "use strict";
        var e = {};
        function t() {
            o();
        }
        function o() {
            var e = l(".eltdf-progress-bar");
            e.length &&
                e.each(function () {
                    var o = l(this),
                        n = o.find(".eltdf-pb-content"),
                        a = o.find(".eltdf-pb-percent"),
                        d = n.data("percentage");
                    o.appear(function () {
                        var e, t;
                        (e = a),
                            (t = parseFloat(d)),
                            e.length &&
                                e.each(function () {
                                    var e = l(this);
                                    e.css("opacity", "1"),
                                        e.countTo({
                                            from: 0,
                                            to: t,
                                            speed: 2e3,
                                            refreshInterval: 50,
                                        });
                                }),
                            n
                                .css("width", "0%")
                                .animate({ width: d + "%" }, 2e3),
                            o.hasClass("eltdf-pb-percent-floating") &&
                                a
                                    .css("left", "0%")
                                    .animate({ left: d + "%" }, 2e3);
                    });
                });
        }
        ((eltdf.modules.progressBar = e).eltdfInitProgressBars = o),
            (e.eltdfOnDocumentReady = t),
            l(document).ready(t),
            l(window).on("load", function () {
                l(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_progress_bar.default",
                        function () {
                            o();
                        }
                    );
                });
            });
    })(jQuery),
    (function (a) {
        "use strict";
        var e = {};
        function t() {
            d(), n(), l();
        }
        function o() {
            d();
        }
        function n() {
            var e = a(".eltdf-ot-date");
            e.length &&
                e.each(function () {
                    a(this).datepicker({ dateFormat: "mm/dd/yy" }),
                        a(this)
                            .datepicker()
                            .mousedown(function () {
                                var e = a(this)
                                    .data("datepicker")
                                    .dpDiv.is(":visible");
                                a(this).datepicker(e ? "hide" : "show");
                            });
                });
        }
        function d() {
            var e = a(".eltdf-ot-people, .eltdf-ot-time");
            e.length && a("select.qodef-select2").length && e.select2();
        }
        function l() {
            var n = a(".eltdf-rf");
            n.on("submit", function (e) {
                e.preventDefault();
                var t,
                    e = n.serializeArray(),
                    o = "";
                a.each(e, function () {
                    var e = a(this)[0],
                        t = e.name;
                    ("date" !== t && "time" !== t) || (o += " " + e.value);
                }),
                    o.length &&
                        ((e = new Date(o)),
                        (t =
                            (t = parseInt(e.getHours(), 10)) < 10
                                ? "0" + t
                                : t),
                        (t =
                            e.getFullYear() +
                            "-" +
                            (parseInt(e.getMonth(), 10) < 10 ? "0" : "") +
                            (parseInt(e.getMonth(), 10) + 1) +
                            "-" +
                            (parseInt(e.getDate(), 10) < 10 ? "0" : "") +
                            e.getDate() +
                            "T" +
                            t +
                            ":" +
                            e.getMinutes() +
                            (30 == parseInt(e.getMinutes(), 10) ? "" : "0")),
                        n.find('[name="datetime"]').val(t)),
                    window.open(
                        n.attr("action") + "?" + n.serialize(),
                        "_blank"
                    );
            });
        }
        ((eltdf.modules.reservationForm = e).eltdfReservationDatePicker = n),
            (e.eltdfInitReservationSelect2 = d),
            (e.eltdfOnDocumentReady = t),
            (e.eltdfOnWindowResize = o),
            a(document).ready(t),
            a(window).resize(o),
            a(window).on("load", function () {
                d(),
                    a(window).on("elementor/frontend/init", function () {
                        elementorFrontend.hooks.addAction(
                            "frontend/element_ready/eltdf_reservation_form.default",
                            function () {
                                n(), d(), l();
                            }
                        );
                    }),
                    l();
            });
    })(jQuery),
    (function (o) {
        "use strict";
        var e = {};
        function t() {
            n();
        }
        function n() {
            var e = o(".eltdf-single-image-holder");
            e.length &&
                e.each(function () {
                    var e,
                        t = o(this);
                    (t.hasClass("eltdf-image-appear-from-top") ||
                        t.hasClass("eltdf-image-appear-from-left") ||
                        t.hasClass("eltdf-image-appear-from-right")) &&
                        ((e = t.find(".eltdf-si-ornament")).length
                            ? t.appear(
                                  function () {
                                      e.addClass("eltdf-appear"),
                                          setTimeout(function () {
                                              t.addClass("eltdf-appear");
                                          }, 500);
                                  },
                                  { accX: 0, accY: -150 }
                              )
                            : t.appear(
                                  function () {
                                      t.addClass("eltdf-appear");
                                  },
                                  { accX: 0, accY: 0 }
                              ));
                });
        }
        ((eltdf.modules.singleImage = e).eltdfInitSingleImage = n),
            (e.eltdfOnDocumentReady = t),
            o(document).ready(t),
            o(window).on("load", function () {
                o(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_single_image.default",
                        function () {
                            n();
                        }
                    );
                });
            });
    })(jQuery),
    (function (a) {
        "use strict";
        var e = {};
        function t() {
            o();
        }
        function o() {
            var e = a(".eltdf-stacked-images-holder");
            e.length &&
                e.each(function () {
                    var e = a(this),
                        t = e.find(".eltdf-si-first-image"),
                        o = e.find(".eltdf-si-second-image"),
                        n = e.find(".eltdf-si-third-image");
                    (e.hasClass("eltdf-background-appear-from-top") ||
                        e.hasClass("eltdf-background-appear-from-left") ||
                        e.hasClass("eltdf-background-appear-from-right") ||
                        e.hasClass("eltdf-background-svg")) &&
                        t.appear(
                            function () {
                                t.addClass("eltdf-appear");
                            },
                            { accX: 0, accY: 0 }
                        ),
                        (e.hasClass("eltdf-middle-appear-from-top") ||
                            e.hasClass("eltdf-middle-appear-from-left") ||
                            e.hasClass("eltdf-middle-appear-from-right")) &&
                        (e.hasClass("eltdf-background-appear-from-top") ||
                            e.hasClass("eltdf-background-appear-from-left") ||
                            e.hasClass("eltdf-background-appear-from-right") ||
                            e.hasClass("eltdf-background-svg"))
                            ? o.appear(
                                  function () {
                                      setTimeout(function () {
                                          o.addClass("eltdf-appear");
                                      }, 500);
                                  },
                                  { accX: 0, accY: 0 }
                              )
                            : o.appear(
                                  function () {
                                      o.addClass("eltdf-appear");
                                  },
                                  { accX: 0, accY: 0 }
                              ),
                        (e.hasClass("eltdf-foreground-appear-from-top") ||
                            e.hasClass("eltdf-foreground-appear-from-left") ||
                            e.hasClass("eltdf-foreground-appear-from-right")) &&
                        (e.hasClass("eltdf-middle-appear-from-top") ||
                            e.hasClass("eltdf-middle-appear-from-left") ||
                            e.hasClass("eltdf-middle-appear-from-right")) &&
                        (e.hasClass("eltdf-background-appear-from-top") ||
                            e.hasClass("eltdf-background-appear-from-left") ||
                            e.hasClass("eltdf-background-appear-from-right") ||
                            e.hasClass("eltdf-background-svg"))
                            ? n.appear(
                                  function () {
                                      setTimeout(function () {
                                          n.addClass("eltdf-appear");
                                      }, 1e3);
                                  },
                                  { accX: 0, accY: 0 }
                              )
                            : ((e.hasClass(
                                  "eltdf-foreground-appear-from-top"
                              ) ||
                                  e.hasClass(
                                      "eltdf-foreground-appear-from-left"
                                  ) ||
                                  e.hasClass(
                                      "eltdf-foreground-appear-from-right"
                                  )) &&
                                  (e.hasClass("eltdf-middle-appear-from-top") ||
                                      e.hasClass(
                                          "eltdf-middle-appear-from-left"
                                      ) ||
                                      e.hasClass(
                                          "eltdf-middle-appear-from-right"
                                      ))) ||
                              ((e.hasClass(
                                  "eltdf-foreground-appear-from-top"
                              ) ||
                                  e.hasClass(
                                      "eltdf-foreground-appear-from-left"
                                  ) ||
                                  e.hasClass(
                                      "eltdf-foreground-appear-from-right"
                                  )) &&
                                  (e.hasClass(
                                      "eltdf-background-appear-from-top"
                                  ) ||
                                      e.hasClass(
                                          "eltdf-background-appear-from-left"
                                      ) ||
                                      e.hasClass(
                                          "eltdf-background-appear-from-right"
                                      ) ||
                                      e.hasClass("eltdf-background-svg")))
                            ? n.appear(
                                  function () {
                                      setTimeout(function () {
                                          n.addClass("eltdf-appear");
                                      }, 500);
                                  },
                                  { accX: 0, accY: 0 }
                              )
                            : n.appear(
                                  function () {
                                      n.addClass("eltdf-appear");
                                  },
                                  { accX: 0, accY: 0 }
                              );
                });
        }
        ((eltdf.modules.stackedImages = e).eltdfInitItemShowcase = o),
            (e.eltdfOnDocumentReady = t),
            a(document).ready(t),
            a(window).on("load", function () {
                a(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_stacked_images.default",
                        function () {
                            o();
                        }
                    );
                });
            });
    })(jQuery),
    (function (n) {
        "use strict";
        var e = {};
        function t() {
            o();
        }
        function o() {
            var e = n(".eltdf-tabs");
            e.length &&
                e.each(function () {
                    var e = n(this);
                    e.children(".eltdf-tab-container").each(function (e) {
                        e += 1;
                        var t = n(this),
                            o = t.attr("id"),
                            t = t
                                .parent()
                                .find(
                                    ".eltdf-tabs-nav li:nth-child(" + e + ") a"
                                ),
                            e = t.attr("href");
                        -1 < (o = "#" + o).indexOf(e) && t.attr("href", o);
                    }),
                        e.tabs(),
                        n(".eltdf-tabs a.eltdf-external-link").unbind("click");
                });
        }
        ((eltdf.modules.tabs = e).eltdfInitTabs = o),
            (e.eltdfOnDocumentReady = t),
            n(document).ready(t),
            n(window).on("load", function () {
                n(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_tabs.default",
                        function () {
                            o();
                        }
                    );
                });
            });
    })(jQuery),
    (function (t) {
        "use strict";
        var e = {};
        function o() {
            n(),
                t(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_stacked_images.default",
                        function () {
                            n();
                        }
                    );
                });
        }
        function n() {
            var e = t(".eltdf-team-holder");
            e.length &&
                e.each(function () {
                    var e = t(this).find(".eltdf-team-icon");
                    e.length &&
                        e.each(function () {
                            t(this)
                                .find("a")
                                .append(
                                    '<span class="eltdf-btn-first-line"></span><span class="eltdf-btn-second-line"></span>'
                                );
                        });
                });
        }
        ((eltdf.modules.team = e).eltdfTeam = n),
            (e.eltdfOnWindowLoad = o),
            t(window).on("load", o);
    })(jQuery),
    (function (f) {
        "use strict";
        var e = {};
        function t() {
            o(), n();
        }
        function o() {
            var i,
                s = f(".eltdf-vertical-split-slider"),
                e = f(".eltdf-content").offset().top,
                r = !0;
            s.length &&
                (eltdf.body.hasClass("eltdf-vss-initialized") &&
                    (eltdf.body.removeClass("eltdf-vss-initialized"),
                    f.fn.multiscroll.destroy()),
                s.height(eltdf.windowHeight).animate({ opacity: 1 }, 300),
                s.css("margin-top", -e + "px"),
                (i = ""),
                eltdf.body.hasClass("eltdf-light-header")
                    ? (i = "light")
                    : eltdf.body.hasClass("eltdf-dark-header") && (i = "dark"),
                s.multiscroll({
                    scrollingSpeed: 700,
                    easing: "easeInOutQuart",
                    navigation: !0,
                    useAnchorsOnLoad: !1,
                    sectionSelector: ".eltdf-vss-ms-section",
                    leftSelector: ".eltdf-vss-ms-left",
                    rightSelector: ".eltdf-vss-ms-right",
                    afterRender: function () {
                        c(
                            f(
                                ".eltdf-vss-ms-left .eltdf-vss-ms-section:first-child"
                            ).data("header-style"),
                            i
                        ),
                            eltdf.body.addClass("eltdf-vss-initialized");
                        var e = f("div.wpcf7 > form"),
                            t =
                                (e.length &&
                                    e.each(function () {
                                        var t = f(this);
                                        t.find(".wpcf7-submit")
                                            .off()
                                            .on("click", function (e) {
                                                e.preventDefault(),
                                                    wpcf7.submit(t);
                                            });
                                    }),
                                f('<div class="eltdf-vss-responsive"></div>')),
                            o = s.find(".eltdf-vss-ms-left > div"),
                            n = s.find(".eltdf-vss-ms-right > div"),
                            e = f(".eltdf-mobile-header").outerHeight(!0);
                        s.after(t);
                        for (var a = 0; a < o.length; a++)
                            t.append(f(o[a]).clone(!0)),
                                t.append(f(n[o.length - 1 - a]).clone(!0));
                        var d = t.find(".eltdf-vss-ms-section:first-child"),
                            l = d.find(".ms-tableCell"),
                            e =
                                (d
                                    .css("height", "100%")
                                    .css("height", "-=" + e + "px"),
                                l.css("height", d.outerHeight(!0)),
                                f(".eltdf-vss-responsive .eltdf-google-map"));
                        e.length &&
                            e.each(function () {
                                var e = f(this),
                                    t =
                                        (e.empty(),
                                        Math.floor(1e5 * Math.random() + 1));
                                e.attr("id", "eltdf-map-" + t),
                                    e.data("unique-id", t);
                            }),
                            "function" ==
                                typeof eltdf.modules.animationHolder
                                    .eltdfInitAnimationHolder &&
                                eltdf.modules.animationHolder.eltdfInitAnimationHolder(),
                            "function" ==
                                typeof eltdf.modules.common.eltdfPrettyPhoto &&
                                eltdf.modules.common.eltdfPrettyPhoto(),
                            "function" ==
                                typeof eltdf.modules.button.eltdfButton &&
                                eltdf.modules.button.eltdfButton().init(),
                            "function" ==
                                typeof eltdf.modules.elementsHolder
                                    .eltdfInitElementsHolderResponsiveStyle &&
                                eltdf.modules.elementsHolder.eltdfInitElementsHolderResponsiveStyle(),
                            "function" ==
                                typeof eltdf.modules.googleMap
                                    .eltdfShowGoogleMap &&
                                eltdf.modules.googleMap.eltdfShowGoogleMap(),
                            "function" == typeof eltdf.modules.icon.eltdfIcon &&
                                eltdf.modules.icon.eltdfIcon().init(),
                            r &&
                                "function" ==
                                    typeof eltdf.modules.progressBar
                                        .eltdfInitProgressBars &&
                                (f(
                                    ".eltdf-vss-ms-left .eltdf-vss-ms-section.active"
                                ).find(".eltdf-progress-bar").length ||
                                    f(
                                        ".eltdf-vss-ms-right .eltdf-vss-ms-section.active"
                                    ).find(".eltdf-progress-bar").length) &&
                                (eltdf.modules.progressBar.eltdfInitProgressBars(),
                                (r = !1));
                    },
                    onLeave: function (e, t) {
                        var o, n;
                        r &&
                            "function" ==
                                typeof eltdf.modules.progressBar
                                    .eltdfInitProgressBars &&
                            (f(
                                ".eltdf-vss-ms-left .eltdf-vss-ms-section.active"
                            ).find(".eltdf-progress-bar").length ||
                                f(
                                    ".eltdf-vss-ms-right .eltdf-vss-ms-section.active"
                                ).find(".eltdf-progress-bar").length) &&
                            (setTimeout(function () {
                                eltdf.modules.progressBar.eltdfInitProgressBars();
                            }, 700),
                            (r = !1)),
                            (n = t),
                            (o = s).hasClass("eltdf-vss-scrolling-animation") &&
                                (1 < n && !o.hasClass("eltdf-vss-scrolled")
                                    ? o.addClass("eltdf-vss-scrolled")
                                    : 1 === n &&
                                      o.hasClass("eltdf-vss-scrolled") &&
                                      o.removeClass("eltdf-vss-scrolled")),
                            c(
                                f(
                                    f(
                                        ".eltdf-vss-ms-left .eltdf-vss-ms-section"
                                    )[t - 1]
                                ).data("header-style"),
                                i
                            );
                    },
                }),
                eltdf.windowWidth <= 1024
                    ? f.fn.multiscroll.destroy()
                    : f.fn.multiscroll.build(),
                f(window).resize(function () {
                    eltdf.windowWidth <= 1024
                        ? f.fn.multiscroll.destroy()
                        : f.fn.multiscroll.build();
                }));
        }
        function c(e, t) {
            void 0 !== e && "" !== e
                ? eltdf.body
                      .removeClass("eltdf-light-header eltdf-dark-header")
                      .addClass("eltdf-" + e + "-header")
                : "" !== t
                ? eltdf.body
                      .removeClass("eltdf-light-header eltdf-dark-header")
                      .addClass("eltdf-" + t + "-header")
                : eltdf.body.removeClass(
                      "eltdf-light-header eltdf-dark-header"
                  );
        }
        function n() {
            var e = f(".eltdf-vertical-split-slider");
            e.length &&
                e.each(function () {
                    var e = f(this).find(".eltdf-vss-ms-section");
                    e.length &&
                        e.each(function () {
                            var e = f(this),
                                t = "",
                                o = "",
                                n = "",
                                a = "",
                                d = "",
                                l = "";
                            void 0 !== e.data("item-class") &&
                                !1 !== e.data("item-class") &&
                                (t = e.data("item-class")),
                                void 0 !== e.data("item-padding-1440") &&
                                    (o +=
                                        "padding: " +
                                        e.data("item-padding-1440") +
                                        " !important;"),
                                void 0 !== e.data("item-padding-1024") &&
                                    (n +=
                                        "padding: " +
                                        e.data("item-padding-1024") +
                                        " !important;"),
                                void 0 !== e.data("item-padding-480") &&
                                    (a +=
                                        "padding: " +
                                        e.data("item-padding-480") +
                                        " !important;"),
                                (o.length || n.length || a.length) &&
                                    (o.length &&
                                        (l +=
                                            "@media only screen and (max-width: 1440px) {.eltdf-vss-ms-section." +
                                            t +
                                            " { " +
                                            o +
                                            " } }"),
                                    n.length &&
                                        (l +=
                                            "@media only screen and (max-width: 1024px) {.eltdf-vss-ms-section." +
                                            t +
                                            " { " +
                                            n +
                                            " } }"),
                                    a.length) &&
                                    (l +=
                                        "@media only screen and (max-width: 480px) {.eltdf-vss-ms-section." +
                                        t +
                                        " { " +
                                        a +
                                        " } }"),
                                (d = l.length
                                    ? '<style type="text/css">' + l + "</style>"
                                    : d).length && f("head").append(d);
                        });
                });
        }
        ((eltdf.modules.verticalSplitSlider = e).eltdfInitVerticalSplitSlider =
            o),
            (e.eltderticalSplitResponsivePadding = n),
            (e.eltdfOnDocumentReady = t),
            f(document).ready(t),
            f(window).on("load", function () {
                f(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_vertical_split_slider.default",
                        function () {
                            o(), n();
                        }
                    );
                });
            });
    })(jQuery),
    (function (e) {
        "use strict";
        var t = {};
        function o() {
            e(window).on("elementor/frontend/init", function () {
                elementorFrontend.hooks.addAction(
                    "frontend/element_ready/eltdf_video_button.default",
                    function () {
                        eltdf.modules.common.eltdfPrettyPhoto();
                    }
                );
            });
        }
        ((eltdf.modules.videoButton = t).eltdfOnWindowLoad = o),
            e(window).on("load", o);
    })(jQuery),
    (function (m) {
        "use strict";
        var e = {};
        function t() {
            n(),
                p(),
                a().init(),
                m(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_portfolio_list.default",
                        function () {
                            eltdf.modules.common.eltdfInitGridMasonryListLayout(),
                                n(),
                                p(),
                                a().init();
                        }
                    );
                });
        }
        function o() {
            a().scroll();
        }
        function p() {
            var e = m(".eltdf-portfolio-list-holder.eltdf-pl-has-animation");
            e.length &&
                e.each(function () {
                    m(this)
                        .children(".eltdf-pl-inner")
                        .children("article")
                        .each(function (e) {
                            var t = m(this);
                            t.appear(
                                function () {
                                    t.addClass("eltdf-item-show"),
                                        setTimeout(function () {
                                            t.addClass("eltdf-item-shown");
                                        }, 1e3);
                                },
                                { accX: 0, accY: 0 }
                            );
                        });
                });
        }
        function n() {
            var e = m(".eltdf-portfolio-list-holder .eltdf-pl-filter-holder");
            e.length &&
                e.each(function () {
                    var a = m(this),
                        d = a.closest(".eltdf-portfolio-list-holder"),
                        l = d.find(".eltdf-pl-inner"),
                        i = d.hasClass("eltdf-pl-pag-load-more");
                    a
                        .find(".eltdf-pl-filter:first")
                        .addClass("eltdf-pl-current"),
                        d.hasClass("eltdf-pl-gallery") && l.isotope(),
                        a.find(".eltdf-pl-filter").on("click", function () {
                            var e = m(this),
                                t = e.attr("data-filter"),
                                o = t.length ? t.substring(1) : "",
                                n = l.children().hasClass(o);
                            e
                                .parent()
                                .children(".eltdf-pl-filter")
                                .removeClass("eltdf-pl-current"),
                                e.addClass("eltdf-pl-current"),
                                i && !n && t.length
                                    ? (function o(e, t, n) {
                                          var a = e,
                                              d = a.find(".eltdf-pl-inner"),
                                              l = t,
                                              i = n,
                                              e = 0;
                                          void 0 !== a.data("max-num-pages") &&
                                              !1 !== a.data("max-num-pages") &&
                                              (e = a.data("max-num-pages"));
                                          var t =
                                                  eltdf.modules.common.getLoadMoreData(
                                                      a
                                                  ),
                                              s = t.nextPage,
                                              n =
                                                  eltdf.modules.common.setLoadMoreAjaxData(
                                                      t,
                                                      "laurent_core_portfolio_ajax_load_more"
                                                  ),
                                              r = a.find(".eltdf-pl-loading");
                                          s <= e &&
                                              (r.addClass(
                                                  "eltdf-showing eltdf-filter-trigger"
                                              ),
                                              d.css("opacity", "0"),
                                              m.ajax({
                                                  type: "POST",
                                                  data: n,
                                                  url: eltdfGlobalVars.vars
                                                      .eltdfAjaxUrl,
                                                  success: function (e) {
                                                      s++,
                                                          a.data(
                                                              "next-page",
                                                              s
                                                          );
                                                      var e = m.parseJSON(e),
                                                          t = e.html;
                                                      a.waitForImages(
                                                          function () {
                                                              d.append(t)
                                                                  .isotope(
                                                                      "reloadItems"
                                                                  )
                                                                  .isotope({
                                                                      sortBy: "original-order",
                                                                  });
                                                              var e = !!d
                                                                  .children()
                                                                  .hasClass(i);
                                                              e
                                                                  ? setTimeout(
                                                                        function () {
                                                                            eltdf.modules.common.setFixedImageProportionSize(
                                                                                a,
                                                                                d.find(
                                                                                    "article"
                                                                                ),
                                                                                d
                                                                                    .find(
                                                                                        ".eltdf-masonry-grid-sizer"
                                                                                    )
                                                                                    .width(),
                                                                                !0
                                                                            ),
                                                                                d
                                                                                    .isotope(
                                                                                        "layout"
                                                                                    )
                                                                                    .isotope(
                                                                                        {
                                                                                            filter: l,
                                                                                        }
                                                                                    ),
                                                                                r.removeClass(
                                                                                    "eltdf-showing eltdf-filter-trigger"
                                                                                ),
                                                                                setTimeout(
                                                                                    function () {
                                                                                        d.css(
                                                                                            "opacity",
                                                                                            "1"
                                                                                        ),
                                                                                            p(),
                                                                                            eltdf.modules.common.eltdfInitParallax();
                                                                                    },
                                                                                    150
                                                                                );
                                                                        },
                                                                        400
                                                                    )
                                                                  : (r.removeClass(
                                                                        "eltdf-showing eltdf-filter-trigger"
                                                                    ),
                                                                    o(a, l, i));
                                                          }
                                                      );
                                                  },
                                              }));
                                      })(d, t, o)
                                    : ((t = 0 === t.length ? "*" : t),
                                      a
                                          .parent()
                                          .children(".eltdf-pl-inner")
                                          .isotope({ filter: t }),
                                      eltdf.modules.common.eltdfInitParallax());
                        });
                });
        }
        function a() {
            function a(e) {
                var t =
                    e.outerHeight() +
                    e.offset().top -
                    eltdfGlobalVars.vars.eltdfAddForAdminBar;
                !e.hasClass("eltdf-pl-infinite-scroll-started") &&
                    eltdf.scroll + eltdf.windowHeight > t &&
                    d(e);
            }
            function d(o, n) {
                var a,
                    d = o.find(".eltdf-pl-inner"),
                    e =
                        (void 0 !== o.data("max-num-pages") &&
                            !1 !== o.data("max-num-pages") &&
                            (a = o.data("max-num-pages")),
                        o.hasClass("eltdf-pl-pag-standard") &&
                            o.data("next-page", n),
                        o.hasClass("eltdf-pl-pag-infinite-scroll") &&
                            o.addClass("eltdf-pl-infinite-scroll-started"),
                        eltdf.modules.common.getLoadMoreData(o)),
                    l = o.find(".eltdf-pl-loading"),
                    i = e.nextPage;
                (i <= a || 0 === a) &&
                    (o.hasClass("eltdf-pl-pag-standard")
                        ? (l.addClass(
                              "eltdf-showing eltdf-standard-pag-trigger"
                          ),
                          o.addClass("eltdf-pl-pag-standard-animate"))
                        : l.addClass("eltdf-showing"),
                    (e = eltdf.modules.common.setLoadMoreAjaxData(
                        e,
                        "laurent_core_portfolio_ajax_load_more"
                    )),
                    m.ajax({
                        type: "POST",
                        data: e,
                        url: eltdfGlobalVars.vars.eltdfAjaxUrl,
                        success: function (e) {
                            o.hasClass("eltdf-pl-pag-standard") || i++,
                                o.data("next-page", i);
                            var t = m.parseJSON(e).html;
                            o.hasClass("eltdf-pl-pag-standard")
                                ? (s(o, a, i),
                                  o.waitForImages(function () {
                                      (o.hasClass("eltdf-pl-masonry") ||
                                          (o.hasClass("eltdf-pl-gallery") &&
                                              o.hasClass("eltdf-pl-has-filter"))
                                          ? r
                                          : f)(o, d, l, t);
                                  }))
                                : o.waitForImages(function () {
                                      o.hasClass("eltdf-pl-masonry")
                                          ? (1 === n ? r : c)(o, d, l, t)
                                          : o.hasClass("eltdf-pl-gallery") &&
                                            o.hasClass("eltdf-pl-has-filter") &&
                                            1 !== n
                                          ? c(o, d, l, t)
                                          : 1 === n
                                          ? f(o, d, l, t)
                                          : u(d, l, t);
                                  }),
                                o.hasClass(
                                    "eltdf-pl-infinite-scroll-started"
                                ) &&
                                    o.removeClass(
                                        "eltdf-pl-infinite-scroll-started"
                                    );
                        },
                    })),
                    i === a && o.find(".eltdf-pl-load-more-holder").hide();
            }
            var e = m(".eltdf-portfolio-list-holder"),
                s = function (e, t, o) {
                    var e = e.find(".eltdf-pl-standard-pagination"),
                        n = e.find("li.eltdf-pag-number"),
                        a = e.find("li.eltdf-pag-prev a"),
                        e = e.find("li.eltdf-pag-next a");
                    n.removeClass("eltdf-pag-active"),
                        n.eq(o - 1).addClass("eltdf-pag-active"),
                        a.data("paged", o - 1),
                        e.data("paged", o + 1),
                        1 < o
                            ? a.css({ opacity: "1" })
                            : a.css({ opacity: "0" }),
                        o === t
                            ? e.css({ opacity: "0" })
                            : e.css({ opacity: "1" });
                },
                r = function (e, t, o, n) {
                    t.find("article").remove(),
                        t.append(n),
                        eltdf.modules.common.setFixedImageProportionSize(
                            e,
                            t.find("article"),
                            t.find(".eltdf-masonry-grid-sizer").width(),
                            !0
                        ),
                        t
                            .isotope("reloadItems")
                            .isotope({ sortBy: "original-order" }),
                        o.removeClass(
                            "eltdf-showing eltdf-standard-pag-trigger"
                        ),
                        e.removeClass("eltdf-pl-pag-standard-animate"),
                        setTimeout(function () {
                            t.isotope("layout"),
                                p(),
                                eltdf.modules.common.eltdfInitParallax(),
                                eltdf.modules.common.eltdfPrettyPhoto();
                        }, 600);
                },
                f = function (e, t, o, n) {
                    o.removeClass("eltdf-showing eltdf-standard-pag-trigger"),
                        e.removeClass("eltdf-pl-pag-standard-animate"),
                        t.html(n),
                        p(),
                        eltdf.modules.common.eltdfInitParallax(),
                        eltdf.modules.common.eltdfPrettyPhoto();
                },
                c = function (e, t, o, n) {
                    t.append(n),
                        eltdf.modules.common.setFixedImageProportionSize(
                            e,
                            t.find("article"),
                            t.find(".eltdf-masonry-grid-sizer").width(),
                            !0
                        ),
                        t
                            .isotope("reloadItems")
                            .isotope({ sortBy: "original-order" }),
                        o.removeClass("eltdf-showing"),
                        setTimeout(function () {
                            t.isotope("layout"),
                                p(),
                                eltdf.modules.common.eltdfInitParallax(),
                                eltdf.modules.common.eltdfPrettyPhoto();
                        }, 600);
                },
                u = function (e, t, o) {
                    t.removeClass("eltdf-showing"),
                        e.append(o),
                        p(),
                        eltdf.modules.common.eltdfInitParallax(),
                        eltdf.modules.common.eltdfPrettyPhoto();
                };
            return {
                init: function () {
                    e.length &&
                        e.each(function () {
                            var n,
                                e,
                                t,
                                o = m(this);
                            o.hasClass("eltdf-pl-pag-standard") &&
                                (e = (n = o).find(
                                    ".eltdf-pl-standard-pagination li"
                                )).length &&
                                e.each(function () {
                                    var t = m(this).children("a"),
                                        o = 1;
                                    t.on("click", function (e) {
                                        e.preventDefault(),
                                            e.stopPropagation(),
                                            void 0 !== t.data("paged") &&
                                                !1 !== t.data("paged") &&
                                                (o = t.data("paged")),
                                            d(n, o);
                                    });
                                }),
                                o.hasClass("eltdf-pl-pag-load-more") &&
                                    (t = o)
                                        .find(".eltdf-pl-load-more a")
                                        .on("click", function (e) {
                                            e.preventDefault(),
                                                e.stopPropagation(),
                                                d(t);
                                        }),
                                o.hasClass("eltdf-pl-pag-infinite-scroll") &&
                                    a(o);
                        });
                },
                scroll: function () {
                    e.length &&
                        e.each(function () {
                            var e = m(this);
                            e.hasClass("eltdf-pl-pag-infinite-scroll") && a(e);
                        });
                },
                getMainPagFunction: function (e, t) {
                    d(e, t);
                },
            };
        }
        ((eltdf.modules.portfolioList = e).eltdfOnWindowLoad = t),
            (e.eltdfOnWindowScroll = o),
            m(window).on("load", t),
            m(window).scroll(o);
    })(jQuery),
    (function (e) {
        "use strict";
        var t = {};
        function o() {
            e(window).on("elementor/frontend/init", function () {
                elementorFrontend.hooks.addAction(
                    "frontend/element_ready/eltdf_portfolio_slider.default",
                    function () {
                        eltdf.modules.common.eltdfOwlSlider(),
                            eltdf.modules.common.eltdfPrettyPhoto();
                    }
                );
            });
        }
        ((eltdf.modules.portfolioSlider = t).eltdfOnWindowLoad = o),
            e(window).on("load", o);
    })(jQuery),
    (function (u) {
        "use strict";
        var e = {};
        function t() {
            o();
        }
        function o() {
            var e = u(".eltdf-portfolio-vertical-loop-holder");
            e.length &&
                e.each(function () {
                    var n,
                        e,
                        a = u(this),
                        t = u(".eltdf-page-header"),
                        d = u(".eltdf-mobile-header"),
                        t = t.outerHeight(),
                        l = eltdf.body.hasClass("eltdf-paspartu-enabled")
                            ? parseInt(
                                  u(
                                      ".eltdf-paspartu-enabled .eltdf-wrapper"
                                  ).css("padding-left")
                              )
                            : 0,
                        i = eltdf.body.hasClass(
                            "eltdf-content-is-behind-header"
                        )
                            ? 0
                            : t,
                        s = !0,
                        r = u(".eltdf-pvl-inner"),
                        o =
                            (u(eltdf.body).on(
                                "click",
                                ".eltdf-pvli-content-holder .eltdf-pvli-content-link",
                                function (e) {
                                    if ((e.preventDefault(), !s)) return !1;
                                    s = !1;
                                    var o,
                                        t = u(this),
                                        e =
                                            ((n =
                                                eltdf.windowWidth < 1e3
                                                    ? d.outerHeight()
                                                    : i),
                                            eltdf.window.scrollTop()),
                                        e =
                                            t.closest("article").offset().top -
                                            e -
                                            n -
                                            l,
                                        e =
                                            (r
                                                .find("article:eq(0)")
                                                .addClass("fade-out"),
                                            t
                                                .closest("article")
                                                .addClass("move-up")
                                                .removeClass("next-item")
                                                .css(
                                                    "transform",
                                                    "translateY(-" + e + "px)"
                                                ),
                                            setTimeout(function () {
                                                eltdf.window.scrollTop(0),
                                                    r
                                                        .find("article:eq(0)")
                                                        .remove(),
                                                    t
                                                        .closest("article")
                                                        .removeAttr("style")
                                                        .removeClass("move-up");
                                            }, 450),
                                            eltdf.modules.common.getLoadMoreData(
                                                a
                                            )),
                                        e =
                                            eltdf.modules.common.setLoadMoreAjaxData(
                                                e,
                                                "laurent_core_portfolio_vertical_loop_ajax_load_more"
                                            );
                                    u.ajax({
                                        type: "POST",
                                        data: e,
                                        url: eltdfGlobalVars.vars.eltdfAjaxUrl,
                                        success: function (e) {
                                            var e = u.parseJSON(e),
                                                t = e.html,
                                                e = e.next_item_id,
                                                e =
                                                    (a.data("next-item-id", e),
                                                    u(t)
                                                        .find(
                                                            ".eltdf-pvl-item-inner"
                                                        )
                                                        .parent()
                                                        .addClass("next-item")
                                                        .fadeIn(400));
                                            r.append(e), (s = !0);
                                        },
                                    }),
                                        (o = (e = a).find(
                                            ".eltdf-pvl-navigation-holder"
                                        )).find(".eltdf-pvl-navigation"),
                                        (e =
                                            eltdf.modules.common.getLoadMoreData(
                                                o
                                            )),
                                        (e =
                                            eltdf.modules.common.setLoadMoreAjaxData(
                                                e,
                                                "laurent_core_portfolio_vertical_loop_ajax_load_more_navigation"
                                            )),
                                        u.ajax({
                                            type: "POST",
                                            data: e,
                                            url: eltdfGlobalVars.vars
                                                .eltdfAjaxUrl,
                                            success: function (e) {
                                                var e = u.parseJSON(e),
                                                    t = e.html,
                                                    e = e.next_item_id;
                                                o.data("next-item-id", e),
                                                    o.html(t);
                                            },
                                        });
                                }
                            ),
                            a),
                        f = r,
                        t =
                            ((t = o.find(".eltdf-pvl-navigation-holder")).find(
                                ".eltdf-pvl-navigation"
                            ),
                            void 0 !== t.data("id") &&
                                !1 !== t.data("id") &&
                                (c = t.data("id")),
                            void 0 !== t.data("next-item-id") &&
                                !1 !== t.data("next-item-id") &&
                                (e = t.data("next-item-id")),
                            (void 0 !== o.data("id") && !1 === o.data("id")) ||
                                o.data("id", c),
                            (void 0 !== o.data("next-item-id") &&
                                !1 !== o.data("next-item-id")) ||
                                o.data("next-item-id", e),
                            eltdf.modules.common.getLoadMoreData(o)),
                        c = eltdf.modules.common.setLoadMoreAjaxData(
                            t,
                            "laurent_core_portfolio_vertical_loop_ajax_load_more"
                        );
                    u.ajax({
                        type: "POST",
                        data: c,
                        url: eltdfGlobalVars.vars.eltdfAjaxUrl,
                        success: function (e) {
                            var e = u.parseJSON(e),
                                t = e.html,
                                e = e.next_item_id,
                                e =
                                    (o.data("next-item-id", e),
                                    u(t)
                                        .find(".eltdf-pvl-item-inner")
                                        .parent()
                                        .addClass("next-item")
                                        .fadeIn(400));
                            f.append(e);
                        },
                    });
                });
        }
        ((eltdf.modules.portfolioVerticalLoop = e).eltdfOnDocumentReady = t),
            u(document).ready(t),
            u(window).on("load", function () {
                u(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_portfolio_vertical_loop.default",
                        function () {
                            o();
                        }
                    );
                });
            });
    })(jQuery),
    (function (f) {
        "use strict";
        var e = {};
        function t() {
            o(),
                f(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_testimonials.default",
                        function () {
                            eltdf.modules.common.eltdfOwlSlider(), o();
                        }
                    );
                });
        }
        function o() {
            var e = f(".eltdf-testimonials-holder.eltdf-testimonials-carousel");
            e.length &&
                e.each(function () {
                    var o,
                        n,
                        e = f(this),
                        t = e.find(".eltdf-testimonials-main"),
                        a = e.children(".eltdf-testimonial-image-nav"),
                        d = !0,
                        l = !0,
                        i = 5e3,
                        s = 600,
                        r = !1;
                    "no" === t.data("enable-loop") && (d = !1),
                        "no" === t.data("enable-autoplay") && (l = !1),
                        void 0 !== t.data("slider-speed") &&
                            !1 !== t.data("slider-speed") &&
                            (i = t.data("slider-speed")),
                        void 0 !== t.data("slider-speed-animation") &&
                            !1 !== t.data("slider-speed-animation") &&
                            (s = t.data("slider-speed-animation")),
                        eltdf.windowWidth < 680 && (r = !0),
                        t.length &&
                            a.length &&
                            ((o = t.owlCarousel({
                                items: 1,
                                loop: d,
                                autoplay: l,
                                autoplayTimeout: i,
                                smartSpeed: s,
                                autoplayHoverPause: !1,
                                dots: !1,
                                nav: !1,
                                mouseDrag: !1,
                                touchDrag: r,
                                onInitialize: function () {
                                    t.css("visibility", "visible");
                                },
                            })),
                            (n = a.owlCarousel({
                                loop: d,
                                autoplay: l,
                                autoplayTimeout: i,
                                smartSpeed: s,
                                autoplayHoverPause: !1,
                                center: !0,
                                dots: !1,
                                nav: !1,
                                mouseDrag: !1,
                                touchDrag: !1,
                                responsive: {
                                    1025: { items: 5 },
                                    0: { items: 3 },
                                },
                                onInitialize: function () {
                                    a.css("visibility", "visible"),
                                        e.css("opacity", "1");
                                },
                            })),
                            a
                                .find(".owl-item")
                                .on("click touchpress", function (e) {
                                    e.preventDefault();
                                    var e = f(this).index(),
                                        t = a.find(".owl-item.cloned").length,
                                        t = 0 <= e - t / 2 ? e - t / 2 : e;
                                    n.trigger("to.owl.carousel", t),
                                        o.trigger("to.owl.carousel", t);
                                }));
                });
        }
        ((eltdf.modules.testimonialsCarousel = e).eltdfInitTestimonials = o),
            (e.eltdfOnWindowLoad = t),
            f(window).on("load", t);
    })(jQuery),
    (function (m) {
        "use strict";
        var e = {};
        function t() {
            o();
        }
        function o() {
            var e = m(".eltdf-testimonials-image-pagination-inner");
            e.length &&
                e.each(function () {
                    var e,
                        t = m(this),
                        o = t.children().length,
                        n = !0,
                        a = !0,
                        d = 3500,
                        l = 500,
                        i = !1,
                        s = !1,
                        r = !1,
                        f = !0,
                        c = !1,
                        u = t;
                    "no" === u.data("enable-loop") && (n = !1),
                        void 0 !== u.data("slider-speed") &&
                            !1 !== u.data("slider-speed") &&
                            (d = u.data("slider-speed")),
                        void 0 !== u.data("slider-speed-animation") &&
                            !1 !== u.data("slider-speed-animation") &&
                            (l = u.data("slider-speed-animation")),
                        "yes" === u.data("enable-auto-width") && (i = !0),
                        void 0 !== u.data("slider-animate-in") &&
                            !1 !== u.data("slider-animate-in") &&
                            (s = u.data("slider-animate-in")),
                        void 0 !== u.data("slider-animate-out") &&
                            !1 !== u.data("slider-animate-out") &&
                            (r = u.data("slider-animate-out")),
                        "no" === u.data("enable-navigation") && (f = !1),
                        "yes" === u.data("enable-pagination") && (c = !0),
                        f && c && t.addClass("eltdf-slider-has-both-nav"),
                        c &&
                            ((e = "#eltdf-testimonial-pagination"),
                            m(".eltdf-tsp-item").on("click", function () {
                                t.trigger("to.owl.carousel", [
                                    m(this).index(),
                                    300,
                                ]);
                            })),
                        o <= 1 && (c = f = a = n = !1),
                        t.waitForImages(function () {
                            m(this).owlCarousel({
                                items: 1,
                                loop: n,
                                autoplay: a,
                                autoplayHoverPause: !1,
                                autoplayTimeout: d,
                                smartSpeed: l,
                                margin: 0,
                                stagePadding: 0,
                                center: !1,
                                autoWidth: i,
                                animateIn: s,
                                animateOut: r,
                                dots: c,
                                dotsContainer: e,
                                nav: f,
                                drag: !0,
                                callbacks: !0,
                                navText: [
                                    '<span class="eltdf-prev-icon ion-chevron-left"></span>',
                                    '<span class="eltdf-next-icon ion-chevron-right"></span>',
                                ],
                                onInitialize: function () {
                                    t.css("visibility", "visible");
                                },
                                onDrag: function (e) {
                                    eltdf.body.hasClass(
                                        "eltdf-smooth-page-transitions-fadeout"
                                    ) &&
                                        0 < e.isTrigger &&
                                        t.addClass("eltdf-slider-is-moving");
                                },
                                onDragged: function () {
                                    eltdf.body.hasClass(
                                        "eltdf-smooth-page-transitions-fadeout"
                                    ) &&
                                        t.hasClass("eltdf-slider-is-moving") &&
                                        setTimeout(function () {
                                            t.removeClass(
                                                "eltdf-slider-is-moving"
                                            );
                                        }, 500);
                                },
                            });
                        });
                });
        }
        ((eltdf.modules.testimonialsImagePagination = e).eltdfOnDocumentReady =
            t),
            m(document).ready(t),
            m(window).on("load", function () {
                m(window).on("elementor/frontend/init", function () {
                    elementorFrontend.hooks.addAction(
                        "frontend/element_ready/eltdf_testimonials.default",
                        function () {
                            o();
                        }
                    );
                });
            });
    })(jQuery),
    (function (e) {
        "use strict";
        var t = {};
        function o() {
            e(window).on("elementor/frontend/init", function () {
                elementorFrontend.hooks.addAction(
                    "frontend/element_ready/eltdf_instagram_list.default",
                    function () {
                        eltdf.modules.common.eltdfOwlSlider();
                    }
                );
            });
        }
        ((eltdf.modules.instagramList = t).eltdfOnWindowLoad = o),
            e(window).on("load", o);
    })(jQuery);
