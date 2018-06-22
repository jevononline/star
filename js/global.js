function init() {
    verticalAlign();
    menuClick();
}


function verticalAlign() {
    var timeout;
    $(window).on('resize', function () {
        function set() {
            $('#menu,.blue-warp,.lineheight-center').each(function () {
                var $this = $(this);
                $this.css('lineHeight', 'normal');
                $this.css('lineHeight', $this.height() + 'px');
            });
            // $('#menu').each(function(){
            //     var $this = $(this);
            //     $this.css('lineHeight', 'normal');
            //     $this.css('lineHeight', $this.height()+'px');
            // });
        }
        set();
        window.clearTimeout(timeout);
        timeout = window.setTimeout(function () {
            set();
        }, 50);
    }).trigger('resize');
}
function menuClick() {
    $('#menuButtonClose').click(function () {
        $('#menu').fadeOut();
        $(this).fadeOut()
    });
    $('#menuButton').click(function () {
        $('#menu').fadeIn();
        $('#menuButtonClose').fadeIn()
    });
    $('#inner-logo').click(function () {
        window.location.href = 'index.html'
    })
}

var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
_paq.push(["setCookieDomain", "*.star-brands.widiazine.cn"]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function () {
    var u = "//tongji.widiazine.cn/";
    _paq.push(['setTrackerUrl', u + 'piwik.php']);
    _paq.push(['setSiteId', '8']);
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript'; g.async = true; g.defer = true; g.src = u + 'piwik.js'; s.parentNode.insertBefore(g, s);
})();