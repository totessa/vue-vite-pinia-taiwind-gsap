const baseUrl = typeof window !== 'undefined'
  ? window.location.origin
  : (import.meta.env?.VITE_SITE_URL || 'https://pereezd24.ru')

function setMeta(name, content, isProperty = false) {
  const attr = isProperty ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function updateSeo(meta = {}) {
  const { title, description, path = '/' } = meta
  const url = baseUrl + path

  if (title) {
    document.title = title
    setMeta('og:title', title, true)
    setMeta('twitter:title', title)
  }
  if (description) {
    setMeta('description', description)
    setMeta('og:description', description, true)
    setMeta('twitter:description', description)
  }

  setMeta('og:url', url, true)
  setLink('canonical', url)
}

export { baseUrl, updateSeo }
