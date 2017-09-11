# tech-lightning-talk
angular + bootstrap + material design = is possible!

## create an angular project

## set up mdb
Material Design for Bootstrap 4 (Angular) - https://mdbootstrap.com/angular/

the five minute quick start - https://mdbootstrap.com/angular/5min-quickstart/

### option 1: download starter files
1. in terminal, install angular cli and typescript to make sure you have the latest version:

	```npm i -g @angular/cli```

	```npm i -g typescript```


2. download starter project: 

	https://mdbootstrap.com/download/mdb-free/Hsy36cb8ICYBbdhh23csAxzjc0912/mdb-angular-free-4.3.2.zip

	unzip files and put in to local repo


3. in terminal cd into "mdb-angular-free" directory:

	```npm install```


4. in terminal:

	```ng serve```


5. go to "http://localhost:4200/"


6. start building your app with the mdb components:

	https://mdbootstrap.com/angular/components/


### option 2: build angular project with angular cli and npm install mdb
1. in terminal, install angular cli and typescript to make sure you have the latest version:

	```npm i -g @angular/cli```

	```npm i -g typescript```


2. in terminal, create project directory and cd into directory


3. in terminal, create angular project with angular cli and cd into [YOUR-PROJECT-NAME]: 

	```ng new [YOUR-PROJECT-NAME] --style-scss```


4. in terminal, install angular bootstrap mdb: 

	```npm i angular-bootstrap-md -save```


5. in terminal, open project in sublime: 

	```subl .```


6. open `app.module.ts` and add: 

	```import { MDBBootstrapModule } from 'angular-bootstrap-md';```


7. in the same file, include ```MDBBootstrapModule.forRoot()``` in the ```@NgModel``` imports


8. in the root folder of your project, open the `.angular-cli.json` file and look for the "styles" on line 22. 

	add ```"../node_modules/angular-bootstrap-md/scss/mdb.scss",``` above your ```"styles.css"```

	(don't forget the comma on the end)


9. in terminal, install the additional peer dependencies:

	```npm install -save chart.js easy-pie-chart hammerjs font-awesome @agm/core```


10. in the main `styles.scss` add ```@import "../node_modules/angular-bootstrap-md/scss/bootstrap/bootstrap.scss";```


11. back in `app.module.ts` update the @angular/core import:

	```import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';```

	in the `@NgModel` include schemas:

	```
	@NgModule({ ...
	  schemas: [ NO_ERRORS_SCHEMA ]
	  })
	  ```


12. in terminal, run your app:
	
	```ng serve -open```


13. start building your app with the mdb components:

	https://mdbootstrap.com/angular/components/
