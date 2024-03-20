The application can be viewed at:
https://abgrs.github.io/sample-real-estate-frontend/

## Pre-requisites:

Node  >= 18
## Available Scripts

In the project directory, you can run:

### `npm i`
Installs the app on local

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Deployment
`npm run deploy` will create a build (by running `preDeploy`) and deploy on github pages. The application can be viewed at:
https://abgrs.github.io/sample-real-estate-frontend/

### Coming next...
- Nav Bar (FE)
- Authentication and Authorization - both FE and BE (for Apis) Intoduce OTP authentication as well
- Pagination (Both FE and BE)
- Edit and Delete a property (both FE and BE, introduce vertical elpisis that opens a little poup with the options to edit and delete) Done (Edit Api to be done, FE done)
- Router on FE
- Lazy loading
- Share a property
- Map to filter and show properties
- filter properties

#### Non functional Scope:
- Localization
- Configure Husly, pre-commit hooks, prettier and ESlint
- unit testing, sub system and integration testing
- Automation (Mable)
- Performance testing (Both FE and FE)
- Check Web Vitals and improve them
- Introduce Rdx-toolkit for managing states as the application is going to get large
- Add Swagger for APIs
- Implement logger

#### Future Plans:
- Scale the application for million users, Introduce Sharding
