// app/elements/doc-content
export default function Element ({ html, state }) {
  const { store } = state
  const { doc } = store
  return html`
<h1 class="text3">${doc.title}</h1>
<div>
  ${doc.html}
</div>
`
}

