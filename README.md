# vite-boilerplate

> Web application or website starter template

## Usage

1. Download or clone this repository
2. Extract in a folder on your machine
3. Navigate to the folder via your preferred terminal application
4. Execute:
  - `yarn`
  - `yarn start`
5. Open `localhost:1234` 
6. Start editing the source code.

## Details

Multiple HTML files are supported, just add a new one in the root of your project.

CSS is located in `src/css`, each file should be used as a module and should contain only the relevant CSS for one component.

The `src/css/style.css` is the stylesheet entrypoint, all other files should be `@import`-ed in the `style.css` file.

JS is located in `src/js`, all modern EcmaScript features are supported.

The `style.css` is `import`-ed in the `src/js/main.js` file.

## Build for production

Run `yarn build` and use the files located in the `dist` folder.
