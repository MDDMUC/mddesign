/* Records an open, each chapter that enters the viewport, and link clicks. */
(function () {
  var params = new URLSearchParams(location.search)
  var ref = (params.get('ref') || '').replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 40)
  var sid = ''
  try {
    sid = sessionStorage.getItem('bw-sid') || ''
    if (!/^[a-zA-Z0-9_-]{8,40}$/.test(sid)) {
      sid = Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10)
      sessionStorage.setItem('bw-sid', sid)
    }
  } catch (e) {
    sid = 'anon' + Date.now().toString(36)
  }

  var seen = {}
  function send(kind, id) {
    if (!id || seen[kind + ':' + id]) return
    seen[kind + ':' + id] = 1
    var body = JSON.stringify({ sid: sid, kind: kind, id: id, ref: ref })
    try {
      if (navigator.sendBeacon) {
        var blob = new Blob([body], { type: 'application/json' })
        if (navigator.sendBeacon('/api/blackwave', blob)) return
      }
    } catch (e) {}
    fetch('/api/blackwave', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
      keepalive: true,
    }).catch(function () {})
  }

  send('open', 'page')

  var sections = document.querySelectorAll('section[id]')
  if ('IntersectionObserver' in window) {
    var watch = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting && entries[i].intersectionRatio >= 0.4) {
            send('section', entries[i].target.id)
          }
        }
      },
      { threshold: [0.4] },
    )
    for (var s = 0; s < sections.length; s++) watch.observe(sections[s])
  }

  document.addEventListener('click', function (event) {
    var node = event.target
    if (!node || !node.closest) return
    var link = node.closest('a[href]')
    if (!link) return
    var href = link.getAttribute('href') || ''
    var label = link.getAttribute('aria-label') || ''
    var id = label || href
    if (href.charAt(0) === '#') id = href.slice(1)
    send('click', id.slice(0, 120))
  })
})()
