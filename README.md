# es5-ext-linaria-vm-reproduction

1. Run `yarn`
2. You should see something like this:

```
yarn install v1.16.0
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
$ webpack-cli
Hash: 42ce8f0e44e59efd287d
Version: webpack 4.41.2
Time: 505ms
Built at: 19/11/2019 19:10:40
      Asset      Size  Chunks                   Chunk Names
    main.js  9.08 KiB    main  [emitted]        main
main.js.map  3.52 KiB    main  [emitted] [dev]  main
Entrypoint main = main.js main.js.map
[./src/index.js] 5.33 KiB {main} [built] [failed] [1 error]

ERROR in ./src/index.js
Module build failed (from ./node_modules/linaria/loader.js):
SyntaxError: /es5-ext-linaria-vm-reproduction/src/index.js: An error occurred when evaluating the expression: exports is not defined. Make sure you are not using a browser or Node specific API.
  3 |
  4 | export const Component = styled.div`
> 5 |   color: ${colors.RED};
    |            ^^^^^^^^^^
  6 | `;
  7 |
    at File.buildCodeFrameError (/es5-ext-linaria-vm-reproduction/node_modules/@babel/core/lib/transformation/file/file.js:267:12)
    at NodePath.buildCodeFrameError (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/path/index.js:144:21)
    at /es5-ext-linaria-vm-reproduction/node_modules/linaria/lib/babel/visitors/TaggedTemplateExpression.js:200:22
    at Array.forEach (<anonymous>)
    at TaggedTemplateExpression (/es5-ext-linaria-vm-reproduction/node_modules/linaria/lib/babel/visitors/TaggedTemplateExpression.js:127:16)
    at TaggedTemplateExpression (/es5-ext-linaria-vm-reproduction/node_modules/linaria/lib/babel/extract.js:28:61)
    at NodePath._call (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/path/context.js:55:20)
    at NodePath.call (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/path/context.js:42:17)
    at NodePath.visit (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/path/context.js:90:31)
    at TraversalContext.visitQueue (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/context.js:112:16)
    at TraversalContext.visitSingle (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/context.js:84:19)
    at TraversalContext.visit (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/context.js:140:19)
    at Function.traverse.node (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/index.js:84:17)
    at NodePath.visit (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/path/context.js:97:18)
    at TraversalContext.visitQueue (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/context.js:112:16)
    at TraversalContext.visitMultiple (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/context.js:79:17)
    at TraversalContext.visit (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/context.js:138:19)
    at Function.traverse.node (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/index.js:84:17)
    at NodePath.visit (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/path/context.js:97:18)
    at TraversalContext.visitQueue (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/context.js:112:16)
    at TraversalContext.visitSingle (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/context.js:84:19)
    at TraversalContext.visit (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/context.js:140:19)
    at Function.traverse.node (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/index.js:84:17)
    at NodePath.visit (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/path/context.js:97:18)
    at TraversalContext.visitQueue (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/context.js:112:16)
    at TraversalContext.visitMultiple (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/context.js:79:17)
    at TraversalContext.visit (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/context.js:138:19)
    at Function.traverse.node (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/index.js:84:17)
    at traverse (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/index.js:66:12)
    at NodePath.traverse (/es5-ext-linaria-vm-reproduction/node_modules/@babel/traverse/lib/path/index.js:148:24)
```
