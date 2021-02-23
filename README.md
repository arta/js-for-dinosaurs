Following

https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70

Apparently, webpack, webpack-cli & webpack-dev-server have a longstanding
bug: https://github.com/mzgoddard/jest-webpack/issues/27

And a versions hack: https://github.com/mzgoddard/jest-webpack/issues/27#issuecomment-707063085

Downgrade devDependencies to:

"webpack": "4.32.2",
"webpack-cli": "^3.3.12",
"webpack-dev-server": "^3.11.2"
