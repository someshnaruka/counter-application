
# MERN Counter Application with Redux, Tailwind CSS, and Broadcast Channel API





## Live Preview

https://counter-application-green.vercel.app

## Description

This is a simple Counter application built using the MERN stack (MongoDB, Express.js, React, and Node.js) with Redux for state management, Tailwind CSS for styling, and the Broadcast Channel API to share data between tabs, ensuring that changes made in one tab are reflected on all duplicate tabs.


## Features
- Create a new counter.
- Delete a counter.
- Increment and decrement counter values.
- Real-time synchronization across multiple browser tabs.
## Technologies Used

**Backend:**

- MongoDB: A NoSQL database used for storing counter data.
- Express.js: A Node.js web application framework used for building the server.
- React: A JavaScript library used for building the user interface.
- Redux: A state management library used for managing the application's state.
- Node.js: A JavaScript runtime environment used for the server-side code.
- Tailwind CSS: A utility-first CSS framework used for styling.
- Broadcast Channel API: A web API used for broadcasting data between tabs.


## Implementation

CRUD Operations (Create, Read, Update, Delete):

- Create: The decision to implement the ability to create new counters allows users to add new items dynamically. This feature provides flexibility and scalability to the application as users can have multiple counters for various purposes.
- Read: Displaying the current counter values and allowing users to see the state of each counter is a fundamental aspect of the application's purpose. Users need to be able to read and understand the current state of the counters easily.
- Update (Increment and Decrement): Allowing users to increment and decrement counter values is a core functionality. It provides interactivity and makes the application more engaging.
- Delete: Providing the option to delete counters gives users control over their counters, allowing them to manage their data effectively.
- Broadcast Channel API for Data Sharing:

  The decision to use the Broadcast Channel API is essential for real-time synchronization of data between multiple browser tabs. This API enables communication between different instances of the application opened in separate tabs or browser windows.
  When a user makes changes to a counter in one tab, those changes are broadcasted to all other tabs, ensuring that the data stays consistent across the application. This is particularly useful for collaborative or multi-device scenarios.
- onfocus Event Listener for Tab Activity Detection:

  The onfocus event listener is used to detect when a tab becomes active or gains focus. This design decision is crucial for real-time updates.
  When a user switches to a different tab or browser window, the onfocus event is triggered in the tab that becomes active. In response to this event, the application can check for updates from other tabs using the Broadcast Channel API and synchronize the data to reflect any changes that may have occurred in the background.
  This ensures that the user always sees the latest data, even if changes were made in other tabs while the current tab was not in focus.


## Getting Started

Follow these steps to get the Counter application up and running locally:

Clone the repository: 
```bash
  git clone https://github.com/someshnaruka/counter-application.git
```

Navigate to the project directory: 
```bash
  cd counter-application
```
Install server dependencies:
```bash
  cd backend
  npm install
```
Install client dependencies:
```bash
  cd frontend
  npm install
```
Create a .env file in the backend directory and set up your env variables:
```bash
  MONGODB_URI=your-mongodb-connection-string
  FRONTEND_URL=http://localhost:3000
``` 
Create a .env file in the frontend directory and set up your env variables:
```bash
  REACT_APP_SERVER_DOMAIN=http://localhost:8080

``` 

Start server:
```bash
  cd ../backend
  node index.js 
```
Start the client:
```bash
  cd ../frontend
  npm start
```

- Open your browser and visit http://localhost:3000 to access the application.
## Usage

- Visit http://localhost:3000 in your web browser.
- Use the application to create, delete, increment, and decrement counters.
- Open the application in multiple tabs or browsers to see real-time synchronization in action.



## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Contact

Contact
If you have any questions or issues, feel free to contact us at someshnaruka@gmail.com

Happy coding! 🚀
## License

This project is licensed under the MIT License.

