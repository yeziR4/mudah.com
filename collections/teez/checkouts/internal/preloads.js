
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.esm.en.a604305ffb49ae4af95b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/272.esm.en.2ae3e878f4ddaeb06766.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/760.esm.en.f2cb630bddd4c8d1f729.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/40.esm.en.4287589a15343c28956f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.esm.en.1cf9a8ed6e68a7bfa295.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/240.esm.en.7e799301c38fb44a1766.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.esm.en.e6c146cc039da19131eb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/580.esm.en.52b6a4dbcce8afe9eea7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/44.esm.en.d90a7ac6c31307662670.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.esm.en.f74a39ed43944805c331.js"];
      var styles = ["../../shopifycloud/checkout-web/assets/272.esm.en.dc52c3d7eff9ae474fd0.css","../../shopifycloud/checkout-web/assets/app.esm.en.add66e9102ede3337ae8.css","../../shopifycloud/checkout-web/assets/904.esm.en.ecabf796dbb52187a082.css","../../shopifycloud/checkout-web/assets/457.esm.en.18aaac83edbd83e76047.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0602/5317/6050/files/chiefsl_x320.png?v=1708055873"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  