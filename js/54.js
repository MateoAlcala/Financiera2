$(document).ready(function() {
    var a = {
            ci: "i",
            cr: "i",
            s: 1,
            i: "i",
            p: "i",
            unitP: 1,
            n: 1,
            cf: "i",
            t: 0,
            r: 0
        },
        i = !1,
        e = 0,
        t = 0,
        c = !1,
        r = 0;

    function s() {
        $("#message").hide(), $("#barPlot").hide(), $("#pPlot").hide(), a.ci = parseFloat($("#ci").val()), a.cr = parseFloat($("#cr").val()), a.cf = parseFloat($("#cf").val()), a.i = parseFloat($("#i").val()), a.r = a.i / 100, a.p = parseFloat($("#p").val());
        var s = parseFloat($("#unitA").val()),
            w = parseFloat($("#unitI").val()),
            m = parseFloat($("#unitP").val());
        0 == s || 1 == s || 0 == w || 1 == w || 0 == m || 1 == m ? (n(1), a.r = a.r / 365, c = !0) : (n(2), c = !1);
        var F = !1,
            M = !1,
            g = !1,
            k = !1,
            P = !1,
            x = !1;
        if (isNaN(a.ci) || (F = !0), isNaN(a.cf) || (M = !0), isNaN(a.i) || (g = !0), isNaN(a.p) || (k = !0), $("#checkcr").prop("checked") && !isNaN(a.cr) && 0 != a.cr && (P = !0), $("#checkcr").prop("checked") && (isNaN(a.cr) || 0 == a.cr) && (x = !0), F && M && g && k && !isNaN(a.cr) && 1 == i) switch (e) {
            case "pa":
                "p" != t && 0 == a.cr ? o() : d();
                break;
            case "ia":
                "i" != t && 0 == a.cr ? l() : d();
                break;
            case "cia":
                "ci" != t && 0 == a.cr ? p() : d();
                break;
            case "cr":
                "cr" != t ? u() : d();
                break;
            case "p":
                "p" != t ? h() : d();
                break;
            case "i":
                "i" != t ? v() : d();
                break;
            case "ci":
                "ci" != t ? b() : d()
        } else P ? F && M && g && !k ? (i = !0, e = "p", h()) : F && M && !g && k ? (i = !0, e = "i", v()) : F && !M && g && k ? d() : !F && M && g && k ? (i = !0, e = "ci", b()) : F && M && g && k && d() : (a.cr = 0, $("#cr").val(0), F && M && g && !k ? (i = !0, e = "pa", o()) : F && M && !g && k ? (i = !0, e = "ia", l()) : F && !M && g && k ? f() : !F && M && g && k ? (i = !0, e = "cia", p()) : F && M && g && k && !x ? f() : F && M && g && k && x && (i = !0, e = "cr", u()));
        isNaN(a.ci) || function() {
            a.t = a.p / a.unitP;
            var i = a.cr * a.s * a.t + a.ci;
            i > 0 && (i = parseFloat(i.toFixed(2)), 0 == r ? $("#depTotal").val(i + " €") : $("#depTotal").val(i + " $"));
            var e = a.cf - i;
            isNaN(e) || (e = parseFloat(e.toFixed(2)), 0 == r ? $("#intTotal").val(e + " €") : $("#intTotal").val(e + " $"));
            var t = e / i * 100;
            isNaN(t) || (t = parseFloat(t.toFixed(2)), $("#tasaintTotal").val(t + "%"))
        }()
    }

    function n(i) {
        if (1 == i)
            for (var e = 1; e < 4; e++) {
                if (1 == e) var t = "#unitA",
                    c = "s";
                else if (2 == e) t = "#unitP", c = "unitP";
                else if (3 == e) t = "#unitI", c = "n";
                switch (parseFloat($(t).val())) {
                    case 0:
                        a[c] = 1;
                        break;
                    case 1:
                        a[c] = 1 / 7;
                        break;
                    case 2:
                        a[c] = 12 / 365;
                        break;
                    case 3:
                        a[c] = 4 / 365;
                        break;
                    case 4:
                        a[c] = 3 / 365;
                        break;
                    case 5:
                        a[c] = 2 / 365;
                        break;
                    case 6:
                        a[c] = 1 / 365;
                }
            }
        /*else
                        for (e = 1; e < 4; e++) {
                            if (1 == e) t = "#unitA", c = "s";
                            else if (2 == e) t = "#unitP", c = "unitP";
                            else if (3 == e) t = "#unitI", c = "n";
                            switch (parseFloat($(t).val())) {
                                case 0:
                                    a[c] = 365;
                                    break;
                                case 1:
                                    a[c] = 365 / 7;
                                    break;
                                case 2:
                                    a[c] = 12;
                                    break;
                                case 3:
                                    a[c] = 4;
                                    break;
                                case 4:
                                    a[c] = 3;
                                    break;
                                case 5:
                                    a[c] = 2;
                                    break;
                                case 6:
                                    a[c] = 1
                            }
                        }*/
    }

    function o() {
        if (0 != a.r && a.ci > 0) {
            var i = Math.log(a.cf / a.ci) / (a.n * Math.log(1 + a.r / a.n));
            i *= a.unitP, a.p = parseFloat(i.toFixed(2)), a.p >= 0 ? $("#p").val(a.p) : a.cf < a.ci && a.r > 0 ? $("#message").show().html("Si el capital final es inferior al capital inicial la tasa de inter&eacute;s debe ser negativa.") : a.cf > a.ci && a.r < 0 && $("#message").show().html("Si el capital final es superior al capital inicial pero la tasa de inter&eacute;s es positiva es necesario que hagas aportaciones peri&oacute;dicas.")
        } else 0 == a.ci ? $("#message").show().html("Si no hay capital inicial debe haber aportaciones peri&oacute;dicas.") : a.cf < a.ci ? $("#message").show().html("Es imposible que el capital final sea inferior al capital inicial si la tasa de inter&eacute;s es igual a cero.") : $("#message").show().html("Debes introducir tambi&eacute;n una aportaci&oacute;n peri&oacute;dica o el per&iacute;odo total.")
    }

    function l() {
        if (0 == a.ci) $("#message").show().html("Si no hay capital inicial ni aportaciones peri&oacute;dicas el capital final ser&aacute; tambi&eacute;n inexistente independientemente de la tasa de inter&eacute;s."), a.cf = 0, $("#cf").val(0), a.i = 0, $("#i").val(0);
        else if (0 == a.p) $("#message").show().html("El per&iacute;odo no puede ser igual a cero para poder calcular la tasa de inter&eacute;s correspondiente.");
        else {
            a.t = a.p / a.unitP;
            var i = 100 * (Math.pow((a.cf / a.ci), 1 / (a.t)) - 1);
            c && (i *= a.t), a.i = parseFloat(i.toFixed(2)), $("#i").val(a.i)
        }
    }

    function p() {
        a.t = a.p / a.unitP;
        var i = a.cf / Math.pow(1 + a.r / a.n, a.n * a.t);
        a.ci = i > 1 ? parseFloat(i.toFixed(0)) : parseFloat(i.toFixed(3)), $("#ci").val(a.ci)
    }

    function f() {
        a.t = a.p / a.unitP;
        var i = a.ci * Math.pow(1 + a.r / a.n, a.n * a.t);
        a.cf = parseFloat(i.toFixed(2)), $("#cf").val(a.cf)
    }

    function u() {
        if (a.t = a.p / a.unitP, 0 == a.p) a.cr = 0, $("#cr").val(0), a.cf = a.ci, $("#cf").val(a.cf);
        else {
            if (0 != a.r) var i = (Math.pow(1 + a.r / a.n, a.n / a.s) - 1) / (Math.pow(1 + a.r / a.n, a.n * a.t) - 1) * (a.cf - a.ci * Math.pow(1 + a.r / a.n, a.n * a.t));
            else i = (a.cf - a.ci) / (a.s * a.t);
            (i = parseFloat(i.toFixed(2))) > 0 ? (a.cr = i, $("#cr").val(a.cr)) : ($("#cr").val(0), f())
        }
    }

    function h() {
        if (0 != a.r) {
            var i = (a.cf * Math.pow(1 + a.r / a.n, a.n / a.s) + a.cr - a.cf) / (a.ci * Math.pow(1 + a.r / a.n, a.n / a.s) - a.ci + a.cr);
            if (i > 0) {
                var e = Math.log(i) / (a.n * Math.log(1 + a.r / a.n));
                e *= a.unitP, a.p = parseFloat(e.toFixed(2)), a.p > 0 ? $("#p").val(a.p) : a.cf < a.ci && a.r > 0 ? $("#message").show().html("Si el capital final es inferior al capital inicial la tasa de inter&eacute;s debe ser negativa.") : a.cf > a.ci && a.r < 0 && $("#message").show().html("Las aportaciones peri&oacute;dicas que has indicado son insuficientes para compensar las p&eacute;rdidas generadas por la tasa de inter&eacute;s negativa.")
            } else $("#message").show().html("Las aportaciones indicadas son insuficientes para alcanzar el capital final.")
        } else if (a.cf < a.ci) $("#message").show().html("Es imposible que el capital final sea inferior al capital inicial si la tasa de inter&eacute;s es igual a cero.");
        else {
            var t = (a.cf - a.ci) / (a.cr * a.s);
            t *= a.unitP, a.p = parseFloat(t.toFixed(2)), $("#p").val(a.p)
        }
    }

    function v() {
        a.t = a.p / a.unitP;
        var i = 0,
            e = 10,
            t = a.ci + a.cr * a.s * a.t;
        if (a.cf > t) var r = Math.pow(1 + .1 / a.n, a.n / a.s);
        else if (a.cf == t) r = 1;
        else r = Math.pow(1 - .1 / a.n, a.n / a.s);
        for (; 1 != r && e > 1e-5 && i < 100;) {
            var s = a.cr * (Math.pow(r, a.t * a.s) - 1) / (r - 1) + a.ci * Math.pow(r, a.t * a.s) - a.cf,
                n = a.cr * ((a.t * a.s - 1) * Math.pow(r, a.t * a.s) - a.t * a.s * Math.pow(r, a.t * a.s - 1) + 1) / Math.pow(r - 1, 2) + a.t * a.s * a.ci * Math.pow(r, a.t * a.s - 1);
            e = Math.abs(s / n), r -= s / n, i++
        }
        t = 100 * a.n * (Math.pow(r, a.s / a.n) - 1), a.r = t / 100;
        var o = a.ci * Math.pow(1 + a.r / a.n, a.n * a.t) + a.cr * (Math.pow(1 + a.r / a.n, a.n * a.t) - 1) / (Math.pow(1 + a.r / a.n, a.n / a.s) - 1);
        c && (t *= 365), Math.abs((a.cf - o) / a.cf) < .05 && (a.i = parseFloat(t.toFixed(2)), $("#i").val(a.i))
    }

    function d() {
        if (a.t = a.p / a.unitP, 0 != a.r) var i = a.cr * (Math.pow(1 + a.r / a.n, a.n * a.t) - 1) / (Math.pow(1 + a.r / a.n, a.n / a.s) - 1) + a.ci * Math.pow(1 + a.r / a.n, a.n * a.t);
        else i = a.cr * a.s * a.t + a.ci;
        a.cf = parseFloat(i.toFixed(0)), $("#cf").val(a.cf)
    }

    function b() {
        if (a.t = a.p / a.unitP, 0 != a.r) var i = (a.cf - a.cr * (Math.pow(1 + a.r / a.n, a.n * a.t) - 1) / (Math.pow(1 + a.r / a.n, a.n / a.s) - 1)) / Math.pow(1 + a.r / a.n, a.n * a.t);
        else i = a.cf - a.cr * a.s * a.t;
        (i = parseFloat(i.toFixed(2))) > 0 ? (a.ci = i, $("#ci").val(a.ci)) : (a.ci = 0, $("#ci").val(a.ci), d())
    }
    $("#pPlot").hide(), $("#barPlot").hide(), $("#checkcr").change(function() {
        $("#checkcr").prop("checked") || (a.cr = 0, $("#cr").val(0)), i = !1
    }), $("#cr").on("input", function() {
        $("#checkcr").prop("checked", !0)
    }), $("#ci,#i,#p,#cr,#cf").on("input", function() {
        t = $(this).attr("id")
    }), $("#unit,#unit2,#unit3").on("input", function() {
        $("#unit").val($(this).val()), $("#unit2").val($(this).val()), $("#unit3").val($(this).val()), r = 0 == $(this).val() ? 0 : 1
    }), $("#plot").click(function() {
        s(),
            function() {
                var i = !1,
                    e = parseFloat(a.t.toFixed(0)),
                    t = parseFloat($("#unitA").val());
                e == a.t && (i = !0);
                if (t >= 2 && a.n && 1 == a.unitP && i && e <= 50 && !c) {
                    var r = [],
                        s = [];
                    if (a.cr > 0) var n = [];
                    for (var o = [], l = 1; l <= e; l++) {
                        r.push(l), s.push(a.ci);
                        var p = a.cr * (Math.pow(1 + a.r / a.n, a.n * l) - 1) / (Math.pow(1 + a.r / a.n, a.n / a.s) - 1) + a.ci * (Math.pow(1 + a.r / a.n, a.n * l) - 1) - a.cr * a.s * l;
                        o.push(p), a.cr > 0 && n.push(a.cr * a.s * l)
                    }
                    var f = {
                        x: r,
                        y: s,
                        name: "Capital inicial",
                        type: "bar",
                        marker: {
                            color: "rgb(39,24,79)"
                        }
                    };
                    if (a.cr > 0) var u = {
                        x: r,
                        y: n,
                        name: "Aportaciones",
                        type: "bar",
                        marker: {
                            color: "rgb(117,93,182)"
                        }
                    };
                    var h = {
                        x: r,
                        y: o,
                        name: "Intereses acumulados",
                        type: "bar",
                        marker: {
                            color: "rgb(177,149,250)"
                        }
                    };
                    if (a.cr > 0) var v = [f, u, h];
                    else var v = [f, h];
                    $("#barPlot").show(), Plotly.newPlot("barPlot", v, {
                        barmode: "stack",
                        font: {
                            size: 15
                        },
                        margin: {
                            l: 80,
                            r: 10,
                            b: 80,
                            t: 10
                        },
                        paper_bgcolor: "rgba(0, 0, 0, 0)",
                        plot_bgcolor: "rgba(0, 0, 0, 0)",
                        xaxis: {
                            title: "Período",
                            tickformat: "d"
                        },
                        yaxis: {
                            title: "Capital acumulado"
                        }
                    }, {
                        responsive: !0
                    })
                } else $("#pPlot").show().html("La representaci&oacute;n gr&aacute;fica no est&aacute; disponible para estas condiciones.")
            }()
    }), $("#calcular").click(function() {
        s()
    })
});