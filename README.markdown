A webpack loader for Markdown files with optional [yaml front matter][1].


Installation
------------

npm install markdown-with-front-matter-loader


Usage
-----

```js
{
  module: {
    loaders: {
      {test: /\.md$/, loader: 'markdown-with-front-matter'},
    ]
  }
}
```

The result of importing a markdown file will be a JavaScript object with
properties from the front matter (as parsed by [js-yaml-front-matter]) and a
`__content` property containing the transformed markdown. For example,

```
---
name: Winston the Bulldog
contact:
  email: dogsdontuseemail@hzdg.com
---


I LIKE TO EAT CATS
==================

* Fat cats
* Skinny cats
* Whatever
```

becomes

```
{
  name: 'Winston the Bulldog',
  contact: {
    email: 'dogsdontuseemail@hzdg.com',
  },
  __content: '<h1 id="i-like-to-eat-cats">I LIKE TO EAT CATS</h1>\n<ul>\n<li>Fat cats</li>\n<li>Skinny cats</li>\n<li>Whatever</li>\n</ul>\n',
}
```


[1]: http://jekyllrb.com/docs/frontmatter/
[js-yaml-front-matter]: https://github.com/dworthen/js-yaml-front-matter
