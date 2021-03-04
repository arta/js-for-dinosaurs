### Following:

https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70

### And:

https://learn-rails.com/install-rails-mac/1.html for Node & Yarn install

## Complete(\*) Mac OS setup</br>
(\*) without (most of) the configurations:

`~ Install Xcode (Command Line Tools; though that may turn out insufficient)`</br>
`~ Install Homebrew`</br>
`~ % brew install coreutils curl git`</br>
`~ % brew install gnupg`</br>
`~ % brew install asdf`</br>
`~ % asdf plugin add nodejs`</br>
`~ % asdf install nodejs latest`</br>
`~ % asdf global nodejs <version>`</br>
`~ % asdf plugin add yarn`</br>
`~ % asdf install yarn latest`</br>
`~ % asdf global yarn <version>`</br>
`js-for-dinosaurs % npm init` #=> package.json</br>
`js-for-dinosaurs % npm install moment --save` #=> /node_modules</br>
`js-for-dinosaurs % npm install webpack webpack-cli --save-dev`</br>

Can now use `require` and other server side JS code and run(\**):</br>
`js-for-dinosaurs % ./node_modules/.bin/webpack index.js --mode=development`

This creates a **single file output** of our JS code (and puts it in webpack's
default `dist/main.js`)</br>
(Can be minified with a `--mode=production` flag)

Can now link just that single build file from `index.html` with
`<script src='dist/main.js'></script>`, and ..</br>
.. all should work just fine @ `file:///.../.../js-for-dinosaurs/index.html`

(\**) can shorten with configurations in `js-for-dinosaurs/webpack.config.js`
and run a shorter (free of the config flags):</br>
`js-for-dinosaurs % ./node_modules/.bin/webpack`

Can install, configure (in `webpack.config.js`), and use Babel (JS compiler):
</br>
`js-for-dinosaurs % npm install @babel/core @babel/preset-env babel-loader
--save-dev`

Can now use modern JS (e.g. `async/await`) while keeping old browser
compatibility. Run the now usual:</br>
`js-for-dinosaurs % ./node_modules/.bin/webpack`

Can add npm's **build** & **watch** scripts to `package.json` scripts for further
development automation:</br>
`..`</br>
`"build": "webpack --progress --mode=production",`</br>
`"watch": "webpack --progress --watch"`</br>
`..`</br>

And run:</br>
`js-for-dinosaurs % npm run build`</br>
`js-for-dinosaurs % npm run watch`

This set up makes changes of our JS code re-run webpack & show upon browser
reload, and ..</br>
.. all should work just fine @ `file:///.../.../js-for-dinosaurs/index.html`

Can install webpack's dev **server** for a complete, Rails style development
server setup:</br>
`js-for-dinosaurs % npm install webpack-dev-server --save-dev`

Must add npm's server script to `package.json`:</br>
`..`</br>
`"server": "webpack serve --open"`</br>
`..`</br>

And, finally (just like in Rails development):</br>
`js-for-dinosaurs % npm run server`

To access our js-for-dinosaurs app @ `localhost:8080`</br>
Instead of (in addition to) the @ `file:///.../.../js-for-dinosaurs/index.html`
