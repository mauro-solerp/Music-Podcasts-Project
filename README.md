# Music Podcaster

Welcome to Music Podcaster! Is an application that provides a curated list of the 100 most popular and most listened to podcasts on iTunes. You can see the details of each postcast with its chapters and listen to them.

## Getting Started

To run the application locally, follow the steps below:

### Clone the Repository

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/mauro-solerp/music-podcasts-project.git
    ```

## Installation

1. Navigate to the root directory of the repository.
    ```bash
   cd music-podcasts-project
    ```
2. Install the dependencies.
    ```bash
    npm install
     ```

## Starting the Application
To start the application, you have two modes available: 
-  Development mode
- Production mode
  
### Development Mode
- To start the application in development mode, run the following command:
    ```bash
    npm start
    ```
This will start the development server and automatically open your application in a web browser.

### Production Mode
1. To start the application in production mode, run the following command:
    ```bash
     npm run build:prod
     ```
2. Serve the built files using a static file server. You can use a tool like serve or any other HTTP server of your choice.
For example, using serve:
    ```bash
    npm install -g serve
    serve -s build
    ```
This will start the server and serve the production version of your application. You can access it by opening your browser  the specified port.


