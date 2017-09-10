# tech-lightning-talk
angular + bootstrap + material design = is possible!

## create an angular project

## set up mdb
https://mdbootstrap.com/angular/

five minute quick start:
https://mdbootstrap.com/angular/5min-quickstart/

### option 1: download starter files
will need angular cli (we have it)
will also need typescript (we have that too)

1. download starter project: 
	https://mdbootstrap.com/download/mdb-free/Hsy36cb8ICYBbdhh23csAxzjc0912/mdb-angular-free-4.3.2.zip

	unzip files and put in to local repo

2. in terminal cd into "mdb-angular-free" directory:
	```npm install```

3. in terminal:
	```ng serve```

4. go to "http://localhost:4200/"

5. start building your app with the mdb components:
	https://mdbootstrap.com/angular/components/

### option 2: build angular project with angular cli and npm install mdb
still need angular cli (still got it) and typescript (got that too)

1. in terminal, create project directory and cd into directory

2. in terminal, create angular project with angular cli:
	```ng new [YOUR-PROJECT-NAME] --style-scss```

3. in terminal, cd into [YOUR-PROJECT-NAME]

4. in terminal, install angular bootstrap mdb:
	```npm install angular-bootstrap-md -save```

5. in terminal, open project in sublime:
	```subl .```

6. open `app.module.ts` and add:
	```import { MDBBootstrapModule } from 'angular-bootstrap-md';```

7. in the same file, include ```MDBBootstrapModule.forRoot()``` in the ```@NgModel``` imports

8. in the root folder of your project, open the `.angular-cli.json` file and look for the "styles" on line 22. 
	add ```"../node_modules/angular-bootstrap-md/scss/mdb.scss",``` above your ```"styles.css"```
	(don't forget the comma on the end)

