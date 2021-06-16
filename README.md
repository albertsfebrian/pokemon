[![Netlify Status](https://api.netlify.com/api/v1/badges/4cc0c462-477a-4803-a0a5-0bad3f263502/deploy-status)](https://app.netlify.com/sites/my-pokemon-application/deploys)

# Pokémon App
### Hosted : https://my-pokemon-application.netlify.app/
References:
1. UI Design (https://dribbble.com/shots/14241781-Pok-dex)
2. UI Design (https://dribbble.com/shots/6545819-Pokedex-App)
3. Tags (https://brickbronze.fandom.com/wiki/Appendix:Pok%C3%A9mon_Types)

## Stacks:
1. [React v17.0.2](https://reactjs.org/docs/getting-started.html)
2. [Webpack v5.38.1](https://webpack.js.org/guides/getting-started/)
3. [Emotion (Library Css in JS)](https://emotion.sh/docs/introduction)
4. [GraphQL v15.5.0](https://graphql.org/learn/)
5. [Apollo Client v3.3.20](https://www.apollographql.com/docs/react/)
6. [Jest v27.0.4](https://jestjs.io/docs/getting-started)

## Available Scripts

In the project directory, you can run:
### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:8080/](http://localhost:8080/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

If you want to run in your local network or config the port number, go to `webpack.config.js` and replace the host with your computer IP and the desired port number.

![image](https://user-images.githubusercontent.com/52168132/122200276-13bd8a00-cec5-11eb-9bbd-fdf759a8d0ae.png)

Now you can open http://192.168.100.100:3000/ **(http://[your-computer-ip]:[port-number]/)** with other devices that connect to local network.

### `npm test`

Launches the test runner 
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `dist` folder.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Lighthouse Test 
![images](https://raw.githubusercontent.com/albertsfebrian/pokemon/main/demo/Lighthouse.jpg)
Notes : This website was tested using Chrome without any Extension installed, Because Chrome extensions may be negatively affected page's load performance.

## Preview
### `Mobile-First (Responsive Web Application)`
#### Mobile
![images](https://github.com/albertsfebrian/pokemon/blob/main/demo/responsive-mobile.jpg?raw=true)
#### Tablet
![images](https://github.com/albertsfebrian/pokemon/blob/main/demo/responsive-tablet.jpg?raw=true)
#### Desktop
![images](https://github.com/albertsfebrian/pokemon/blob/main/demo/responsive-computer.jpg?raw=true)

### `Skeleton Loader`
![images](https://github.com/albertsfebrian/pokemon/blob/main/demo/Skeleton-1.jpg?raw=true)
![images](https://github.com/albertsfebrian/pokemon/blob/main/demo/Skeleton-2.jpg?raw=true)

### `Tag Failed to Fetch`
![images](https://github.com/albertsfebrian/pokemon/blob/main/demo/tag_failed.jpg?raw=true)

### `Handling Image on Error Fetch`
![images](https://github.com/albertsfebrian/pokemon/blob/main/demo/ImgOnError_1.jpg?raw=true)
![images](https://github.com/albertsfebrian/pokemon/blob/main/demo/ImgOnError_2.jpg?raw=true)
![images](https://github.com/albertsfebrian/pokemon/blob/main/demo/ImgOnError_3.jpg?raw=true)
![images](https://github.com/albertsfebrian/pokemon/blob/main/demo/ImgOnError_4.jpg?raw=true)

### `Modal`
![images](https://github.com/albertsfebrian/pokemon/blob/main/demo/Modal_1.jpg?raw=true)
![images](https://github.com/albertsfebrian/pokemon/blob/main/demo/Modal_2.jpg?raw=true)

### `Page Not Found`
![images](https://github.com/albertsfebrian/pokemon/blob/main/demo/Not_Found.jpg?raw=true)
