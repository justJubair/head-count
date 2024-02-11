# Head Count

A React-based web application for managing users, with features like search, sorting, and user details. The website is designed using React, TailwindCSS, React Router DOM, and DaisyUI.

- [Live site](https://head-count.vercel.app)

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features

- **Search Users:** Search users based on their first name.
- **Sort Users:** Sort users alphabetically by name, email, and company name.
- **User Listing:** Display users in a card view with images, names, emails, addresses, company names, and designations.
- **Add Users:** Add new users using a modal with a form. [imgBB](https://imgbb.com) api is used for storing user profile images. 
- **User Details Page:** View detailed information about a user.
- **About Page:** Under development.

## Screenshots

#### Home page
![Home Page](https://raw.githubusercontent.com/justJubair/head-count/main/src/assets/images/HomePage.png)

#### User list page
![User List Page](https://raw.githubusercontent.com/justJubair/head-count/main/src/assets/images/UserListPage.png)

#### Add user modal
![Add User Modal](https://raw.githubusercontent.com/justJubair/head-count/main/src/assets/images/AddUserModal.png)

#### User details page
![User Details Page](https://raw.githubusercontent.com/justJubair/head-count/main/src/assets/images/UserDetailsPage.png)


## Getting Started

To get started with the project, follow the steps below:

### Dependencies

Make sure you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   https://github.com/justJubair/head-count.git
   ```

2. Navigate to the project directory:

   ```bash
   cd head-count
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```
4. Update the .env.local file with your own imgBB api key

```bash
VITE_ImgbbURL=https://api.imgbb.com/1/upload?expiration=600&key=Your_API_key
```

### Usage

1. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

2. Open the application in your browser: [http://localhost:5173](http://localhost:5173)

## Contributing

If you'd like to contribute to the project, please follow the steps below:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.


## Acknowledgements

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [DaisyUI](https://daisyui.com/)
- [imgBB API](https://imgbb.com)



