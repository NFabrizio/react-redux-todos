# React Redux Todos App in Meteor

This is a simple todo app using React and Redux in Meteor. It basically follows
the example app set up from [Redux.js.org](http://redux.js.org/docs/basics/ExampleTodoList.html).

## Installation and Set Up  
Below are the instructions for installing this React Redux Meteor application.
*These instructions are valid as of 2016.12.01*

### Environment Set Up  
1. Clone this repository to your local environment.
  1. Fork this Github repo.
    1. In a web browser, visit https://github.com/NFabrizio/react-redux-todos
    2. Click the Fork button in the upper right corner of the screen
    3. In the "Where should we fork this repository?" pop up, select your username Github should create a fork of the repo in your account
  2. Clone your fork of the React Redux repo.
    1. In the terminal on your local environment, navigate to the directory where you want to clone the React Redux repo  
      `cd ~/path/to/your/directory`
    2. In the terminal, run:  
      `git clone [clone-url-for-your-fork]`  
      The URL should be in the format git@github.com:YourUsername/react-redux-todos.git
2. Change to the directory in which you cloned this repository.
3. Install the required NPM packages.
  1. To install the required NPM packages, run the following command in your terminal:  

    ```
    npm install --save bcrypt meteor-node-stubs react react-addons-create-fragment react-addons-css-transition-group react-addons-linked-state-mixin react-addons-perf react-addons-pure-render-mixin react-addons-test-utils react-addons-transition-group react-addons-update react-dom  
    ```

4. Start the Meteor project.
  1. In your terminal, run the following command:  
    `meteor`  
    The system should start the project. The first time it runs, it may take some time as all of the packages will have to be downloaded. Once the project has started, you should see a message along the line of

    ```
    => Started your app.  

    => App running at: http://localhost:3000/
    ```  

    This will lock your terminal window as long as the Meteor application is running.
5. In a web browser, visit the URL http://localhost:3000/. You should see the todo app.
6. Stop the Meteor project.
  * In the terminal window where the Meteor project is running, run:  
    `Ctrl + C`  
    This will kill the Meteor process, detaching the application in the browser window and allowing you to use the command line again.

## Application Use  
This application operates like the standard todos app for Meteor. The only
difference is marking a todo list item as completed. To mark an item as completed,
simply click the item in the bullet list. This will cause the item to be marked
as complete and to be displayed using a strike through.
