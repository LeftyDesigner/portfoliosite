To get started in a fresh git clone, run
```bash
npm install
```
to install the required dependencies. 

**Local version**

To run local version, run

```bash
npm run serve
```
then visit the URL mentioned in the output from this command. Probably: http://0.0.0.0:8080/ . The system will monitor the source files and automatically update the browser if they change.

**Distribution version**

To build a version for distribution run
```bash
npm run build
```
The website will be available in the `dist` folder, copy the contents of this folder to the location where you want to host the website.