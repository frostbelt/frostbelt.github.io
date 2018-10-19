;(function(){
    function n(e, t) {
        var n = (e & 65535) + (t & 65535),
            r = (e >> 16) + (t >> 16) + (n >> 16);
        return r << 16 | n & 65535
    }
    function r(e, t) {
        return e << t | e >>> 32 - t
    }
    function i(e, t, i, s, o, u) {
        return n(r(n(n(t, e), n(s, u)), o), i)
    }
    function s(e, t, n, r, s, o, u) {
        return i(t & n | ~t & r, e, t, s, o, u)
    }
    function o(e, t, n, r, s, o, u) {
        return i(t & r | n & ~r, e, t, s, o, u)
    }
    function u(e, t, n, r, s, o, u) {
        return i(t ^ n ^ r, e, t, s, o, u)
    }
    function a(e, t, n, r, s, o, u) {
        return i(n ^ (t | ~r), e, t, s, o, u)
    }
    function f(e, t) {
        e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
        var r, i, f, l, c, h = 1732584193,
            p = -271733879,
            d = -1732584194,
            v = 271733878;
        for (r = 0; r < e.length; r += 16) i = h, f = p, l = d, c = v, h = s(h, p, d, v, e[r], 7, -680876936), v = s(v, h, p, d, e[r + 1], 12, -389564586), d = s(d, v, h, p, e[r + 2], 17, 606105819), p = s(p, d, v, h, e[r + 3], 22, -1044525330), h = s(h, p, d, v, e[r + 4], 7, -176418897), v = s(v, h, p, d, e[r + 5], 12, 1200080426), d = s(d, v, h, p, e[r + 6], 17, -1473231341), p = s(p, d, v, h, e[r + 7], 22, -45705983), h = s(h, p, d, v, e[r + 8], 7, 1770035416), v = s(v, h, p, d, e[r + 9], 12, -1958414417), d = s(d, v, h, p, e[r + 10], 17, -42063), p = s(p, d, v, h, e[r + 11], 22, -1990404162), h = s(h, p, d, v, e[r + 12], 7, 1804603682), v = s(v, h, p, d, e[r + 13], 12, -40341101), d = s(d, v, h, p, e[r + 14], 17, -1502002290), p = s(p, d, v, h, e[r + 15], 22, 1236535329), h = o(h, p, d, v, e[r + 1], 5, -165796510), v = o(v, h, p, d, e[r + 6], 9, -1069501632), d = o(d, v, h, p, e[r + 11], 14, 643717713), p = o(p, d, v, h, e[r], 20, -373897302), h = o(h, p, d, v, e[r + 5], 5, -701558691), v = o(v, h, p, d, e[r + 10], 9, 38016083), d = o(d, v, h, p, e[r + 15], 14, -660478335), p = o(p, d, v, h, e[r + 4], 20, -405537848), h = o(h, p, d, v, e[r + 9], 5, 568446438), v = o(v, h, p, d, e[r + 14], 9, -1019803690), d = o(d, v, h, p, e[r + 3], 14, -187363961), p = o(p, d, v, h, e[r + 8], 20, 1163531501), h = o(h, p, d, v, e[r + 13], 5, -1444681467), v = o(v, h, p, d, e[r + 2], 9, -51403784), d = o(d, v, h, p, e[r + 7], 14, 1735328473), p = o(p, d, v, h, e[r + 12], 20, -1926607734), h = u(h, p, d, v, e[r + 5], 4, -378558), v = u(v, h, p, d, e[r + 8], 11, -2022574463), d = u(d, v, h, p, e[r + 11], 16, 1839030562), p = u(p, d, v, h, e[r + 14], 23, -35309556), h = u(h, p, d, v, e[r + 1], 4, -1530992060), v = u(v, h, p, d, e[r + 4], 11, 1272893353), d = u(d, v, h, p, e[r + 7], 16, -155497632), p = u(p, d, v, h, e[r + 10], 23, -1094730640), h = u(h, p, d, v, e[r + 13], 4, 681279174), v = u(v, h, p, d, e[r], 11, -358537222), d = u(d, v, h, p, e[r + 3], 16, -722521979), p = u(p, d, v, h, e[r + 6], 23, 76029189), h = u(h, p, d, v, e[r + 9], 4, -640364487), v = u(v, h, p, d, e[r + 12], 11, -421815835), d = u(d, v, h, p, e[r + 15], 16, 530742520), p = u(p, d, v, h, e[r + 2], 23, -995338651), h = a(h, p, d, v, e[r], 6, -198630844), v = a(v, h, p, d, e[r + 7], 10, 1126891415), d = a(d, v, h, p, e[r + 14], 15, -1416354905), p = a(p, d, v, h, e[r + 5], 21, -57434055), h = a(h, p, d, v, e[r + 12], 6, 1700485571), v = a(v, h, p, d, e[r + 3], 10, -1894986606), d = a(d, v, h, p, e[r + 10], 15, -1051523), p = a(p, d, v, h, e[r + 1], 21, -2054922799), h = a(h, p, d, v, e[r + 8], 6, 1873313359), v = a(v, h, p, d, e[r + 15], 10, -30611744), d = a(d, v, h, p, e[r + 6], 15, -1560198380), p = a(p, d, v, h, e[r + 13], 21, 1309151649), h = a(h, p, d, v, e[r + 4], 6, -145523070), v = a(v, h, p, d, e[r + 11], 10, -1120210379), d = a(d, v, h, p, e[r + 2], 15, 718787259), p = a(p, d, v, h, e[r + 9], 21, -343485551), h = n(h, i), p = n(p, f), d = n(d, l), v = n(v, c);
        return [h, p, d, v]
    }
    function l(e) {
        var t, n = "";
        for (t = 0; t < e.length * 32; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n
    }
    function c(e) {
        var t, n = [];
        n[(e.length >> 2) - 1] = undefined;
        for (t = 0; t < n.length; t += 1) n[t] = 0;
        for (t = 0; t < e.length * 8; t += 8) n[t >> 5] |= (e.charCodeAt(t / 8) & 255) << t % 32;
        return n
    }
    function h(e) {
        return l(f(c(e), e.length * 8))
    }
    function p(e, t) {
        var n, r = c(e),
            i = [],
            s = [],
            o;
        i[15] = s[15] = undefined, r.length > 16 && (r = f(r, e.length * 8));
        for (n = 0; n < 16; n += 1) i[n] = r[n] ^ 909522486, s[n] = r[n] ^ 1549556828;
        return o = f(i.concat(c(t)), 512 + t.length * 8), l(f(s.concat(o), 640))
    }
    function d(e) {
        var t = "0123456789abcdef",
            n = "",
            r, i;
        for (i = 0; i < e.length; i += 1) r = e.charCodeAt(i), n += t.charAt(r >>> 4 & 15) + t.charAt(r & 15);
        return n
    }
    function v(e) {
        return unescape(encodeURIComponent(e))
    }
    function m(e) {
        return h(v(e))
    }
    function g(e) {
        return d(m(e))
    }
    function y(e, t) {
        return p(v(e), v(t))
    }
    function b(e, t) {
        return d(y(e, t))
    }
    window.md5 = window.md5 || function(e, t, n) {
        return t ? n ? y(t, e) : b(t, e) : n ? m(e) : g(e)
    };
})();