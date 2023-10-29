# Customer Meeting Tracker

This full-stack web application allows employees to efficiently manage and track customer meetings and their details. With an intuitive interface, you can easily create, view, update, and delete customer records, ensuring all essential information is at your fingertips.

## Key Features

- **Customer Management**: Add and organize customer details.
- **Employee Information**: Keep track of the employee responsible for each customer record.
- **Intuitive UI**: A user-friendly interface for seamless navigation and efficient data management.
- **CRUD Operations**: Apply Create, Read, Update, and Delete operations for enhanced data control.

## Demo

### General Design

![General Design](https://github.com/oguzsaracc/customer-meeting-tracker/assets/47661397/f6833bfe-3c68-497f-8873-725f32aa3f05)


### Create Operation

![Create Operation](https://github.com/oguzsaracc/customer-meeting-tracker/assets/47661397/caa77b92-26e5-4dee-ae1c-26cd46a17702)


### Read Operation

![Read Operation](https://github.com/oguzsaracc/customer-meeting-tracker/assets/47661397/3cb6a2e6-2d70-4d32-9c01-249c83eb0446)


### Update Operation

![Update Operation](https://github.com/oguzsaracc/customer-meeting-tracker/assets/47661397/65cc2b7f-c762-4deb-b6e8-501c26e35641)


### Delete Operation

![Delete Operation](https://github.com/oguzsaracc/customer-meeting-tracker/assets/47661397/89d214c8-9b17-45ef-b283-6ffa1402a041)


## Technologies Used

- Frontend: React (with Hooks), HTML
- Backend: Node.js, Express
- Database: MongoDB
- API Testing: Postman
- Styling: CSS, Bootstrap

## Getting Started

To get a local copy up and running, follow these simple steps.

### Setup

1. Clone the repository to your local machine.
2. Set up the environment variables. Create a `.env` file in the root of the `meeting-manager-server` folder with the following content:

```plaintext
DATABASE=ADD_URI_MONGODB
```

Create another .env file in the root of the meeting-manager folder with the following content:
```
REACT_APP_API=http://localhost:8000/api
```

These files are used to define environment variables for the project.

### Usage
1. Open your terminal and navigate to the `meeting-manager-server` directory.
2. Run the command `npm install` to install the necessary dependencies.
3. Start the backend server by running `npm start`.

Next:

1. Open a new terminal window and navigate to the `meeting-manager` directory.
2. Run `npm install` to install the frontend dependencies.
3. Start the React application with `npm start`.

 Your application should now be running on `http://localhost:3000`.

## Contributing
Contributions are always welcome! If you'd like to contribute, please fork the repository and create a new branch, then submit a pull request.
