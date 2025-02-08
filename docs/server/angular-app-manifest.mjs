
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/updated-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/updated-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/updated-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/updated-portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/updated-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/updated-portfolio/certificates"
  },
  {
    "renderMode": 2,
    "route": "/updated-portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/updated-portfolio/testimonials"
  },
  {
    "renderMode": 2,
    "route": "/updated-portfolio/contact"
  }
],
  assets: {
    'index.csr.html': {size: 2224, hash: 'c6271732ee020d76b3fe22762d7f3e9fc9fe2bc024a30b8739994e25764d042e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: '77b7121c3b65132d8c12e3d8f970dafc17c419baaf1760d2b1594b797cd3aff7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 22377, hash: 'e37b89d116bc198d74d85609a475c7f4bc06f588059c358c6cccfd4d12cff9ee', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'certificates/index.html': {size: 24704, hash: '5ff8ee42edf0dffaa5aa9227df7523963d0a44388394ac7a500e109c87a04d75', text: () => import('./assets-chunks/certificates_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 23384, hash: 'fe813637c075bcba729b5ce14f2313c9235ea3ef1ed6205cee8e4731f9c1b760', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 19686, hash: '47facb6c50bf205c30777e22b28606e125037d0616d149386c9610d7089d3fdd', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'index.html': {size: 21557, hash: 'fb49739249b5fde1b0efdc33e0550eb1da75ed05b7fec149fd5b9cc8fe3c14a4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'testimonials/index.html': {size: 12978, hash: '69b1a357480d551f016afcd83d63b758be6a6e5a62b9b0d2758b3cfdeb48888c', text: () => import('./assets-chunks/testimonials_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 18636, hash: '1f1d1418485db235972a624182a8c218262922295e839a9f27db42241057a3d8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 27706, hash: 'a48f7389339ec70af009f1ea43e3b51f5aee5c9fe90499f84da45e9659baf6dc', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-FUSD6RI6.css': {size: 17383, hash: 'm2TmusB+lxw', text: () => import('./assets-chunks/styles-FUSD6RI6_css.mjs').then(m => m.default)}
  },
};
