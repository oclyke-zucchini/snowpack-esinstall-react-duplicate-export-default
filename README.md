# snowpack-esinstall-react-duplicate-export-default
demo of an issue with duplicate default exports from react when building with snowpack

# the error

* **```[esinstall] Failed to load snowpack-wrap:/project/node_modules/react/index.js```**
* **```Duplicate export 'default' (4:16) in snowpack-wrap:/project/node_modules/react/index.js```**

``` bash
rm -r dist && yarn build 
yarn run v1.22.18
$ /project/node_modules/.bin/snowpack build
[12:33:46] [snowpack] ! building files...
[12:33:46] [snowpack] ✔ files built. [0.03s]
[12:33:46] [snowpack] ! building dependencies...
[12:33:46] [esinstall] Failed to load snowpack-wrap:/project/node_modules/react/index.js
  Duplicate export 'default' (4:16) in snowpack-wrap:/project/node_modules/react/index.js
[12:33:46] [snowpack] Install failed.
[12:33:46] [snowpack] Error: Install failed.
    at Object.install (/project/node_modules/esinstall/lib/index.js:374:19)
    at async Object.installPackages (/project/node_modules/snowpack/lib/cjs/sources/local-install.js:24:25)
    at async installOptimizedDependencies (/project/node_modules/snowpack/lib/cjs/build/process.js:81:27)
    at async Object.buildDependencies (/project/node_modules/snowpack/lib/cjs/build/process.js:241:31)
    at async build (/project/node_modules/snowpack/lib/cjs/commands/build.js:12:5)
    at async Object.command (/project/node_modules/snowpack/lib/cjs/commands/build.js:35:9)
    at async cli (/project/node_modules/snowpack/lib/cjs/index.js:174:9)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

# reproduce

```rm -r dist && yarn build```

i'm not entirely sure what is going on here but have noticed that:
* the issue only occurs when building, not running the dev server
* the issue will happen when importing the default ```React``` package one way but not another

so... take these steps
* demo the project live to see it work: ```yarn start```
* try to build the project in default configuration: ```yarn build``` (you should get the error)
* in ```src/index.jsx``` switch the ```React``` import lines to the following:
  ```
  // // using this import style does not work
  // import React from 'react';

  // but using this import style does...
  import {
    default as React,
  } from 'react';
  ```
* try to build the project again and see success

# consider
in app.jsx ```React``` is imported using the ```import { default as React } from 'react'``` syntax. maybe this is a clue?
