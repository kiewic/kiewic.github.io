# kiewic.github.io

This site is now a small static GitHub Pages site with no Jekyll build step.

## Kept Pages

- `/`
- `/paths/`
- `/custom-shapes-in-the-power-bi-waffle-chart/`
- `/privacy/`
- `/spotify-wrapped-2024/`
- `/how-to-send-text-json-or-files-using-httpclient-postasync/`
- `/win32-mutex-handles-and-windbg-handle-extension/`
- `/windbg/`
- `/mocoyoyo-messenger-bot/`
- `/metro-y-metrobus-cdmx-app/`
- `/getting-started-with-aspnet-webapi-odata/`
- `/get-a-free-ssl-tls-compatible-certificate-with-lets-encrypt-and-use-in-windows/`
- `/ftpwebrequest-alternative-for-windows-universal-and-windows-store-apps/`
- `/read-from-infinite-online-stream-using-windows-web-http-httpclient/`
- `/how-to-get-the-response-content-of-a-background-transfer-downloadoperation-when-the-result-is-not-200-ok/`
- `/how-to-kill-or-terminate-a-process-in-kernel-debugger/`
- `/weakref-in-wrl/`
- `/windbg-go-up-gu-without-hitting-any-other-breakpoint/`
- `/httpmultipartformdatacontent-vs-httpmultipartcontent/`
- `/what-is-system-diagnostics-debug-writeline-equivalent-in-cpp-cx-and-javascript/`

## Local Preview

Any static file server will work. For example, from this folder you can run a
simple local server and open the site in a browser.

## Notes

- `.nojekyll` is included so GitHub Pages serves the files directly.
- The homepage includes a link to
  `/playground/nested-json-object-deserializer.html`, which is expected to be
  served by a separate GitHub Pages project in the final deployed site layout.
  That link may not work in local-only previews of this repository by itself.
- Client-side code highlighting is enabled only on pages that contain code
  blocks, using `highlight.js` from the jsDelivr CDN. The includes are added
  directly in those individual HTML pages rather than globally, to limit
  unnecessary third-party requests on non-code pages.
- For maintenance details, see [highlight.js](https://highlightjs.org/) and the
  [highlight.js CDN release repo](https://github.com/highlightjs/cdn-release).
