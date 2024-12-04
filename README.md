"TravelTruk" - is a web-based RV booking app. The application allows users to browse the catalog of available campers, get detailed information about them, add selected campers to the list of favorites, and book them in a convenient way.

Main functions:

1. Camper catalog: Browse available campers with photo, description, price, rating and location.
2. Favorite list: Ability to add campers to the list of favorites for convenient access.
3. Booking: Booking form with fields for name, email, date and comments.
4. Filtering and sorting: Filter campers by features and sort by rating or price (if needed).
5. Data Persistence: Using redux-persist to persist a list of favorite campers between sessions.

Technologies:

1. Frontend: React, Redux Toolkit, CSS Modules, REST API
2. State Management: Redux, Redux Persist
3. Routing: React Router
4. UI libraries: React-icons, react-toastify
5. Form tools: React-datepicker

Installation instructions:

1. Clone the repository:
   git clone https://github.com/Polishchuk-4/TravelTrucks.git
2. Go to the project directory:
   cd TravelTrucks
3. Install dependencies:
   npm install
4. will run on the local server
   npm run dev

Using:

1. Open the camper catalog and view the available options.
2. Add the campers you like to the favorites list by clicking the heart button.
3. Select a camper to view detailed information.
4. Fill out the reservation form and confirm the order.

Information about the author:

Name: Denys
Contact: polishchyk0000@gmail.com
The purpose of the project: The application was created to learn React, Redux and build a real functional application.

Opportunities for expansion:

1. Integration with API for dynamic data loading.
2. Adding user registration and their profiles.
3. Additional filters, for example, by location or engine power.
