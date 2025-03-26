# E-commerce

## Milestone-1
- Got overview of the e-commerce project Tech Stack.
- MongoDB,nodeJS,expressJS,reactJS
  
## Milestone 2:

- Worked on login Page.
- Structure of react.
- Using Tailwind css.
- Used React-Dom

## Milestone-3

- Implemented Express on the backend
- Used MongoDBAtlas to create a cluster
- Used mongoose to connect MongoDb with the backend
- Made some error-handling changes

## Milestone-4

- Installed JSON token
- Created the Multer file

## Milestone-5

- Created the SignUp page
- Used Tailwind css

## Milestone-6

- Encrypt the Password:
- Use bcrypt to hash the user's password during signup.
- Save the hashed password in the database instead of plain text.
- Store Complete User Data:
- Save all the user's data (e.g., name, email, etc.) in the database while ensuring that the password remains encrypted.

## Milestone-7

- Login Endpoint
- This endpoint accepts user credentials (email/username and password), retrieves the corresponding user from the database, and validates the password using bcrypt.
- If the credentials are valid, it returns a JWT token for authentication.

## Milestone 8 

- Create the Card Component:
- Design a reusable card component with props for product details (e.g., name, image, price).
- Design the Homepage Layout:
- Set up a grid layout or flexbox for displaying multiple cards neatly.

## Milestone 9

- Created the Createproduct.jsx
- Collects product details such as name, description, category, tags, price, and stock.
- Allows users to upload multiple images.
- Displays a preview of uploaded images.
- Uses useState for state management.

## Milestone 10

- Define product schema using Mongoose (name, description, price, image URL)
- Add validation for required fields and data types
- Create a POST endpoint to receive and store product data in MongoDB

## Milestone 11

- Create an API endpoint to send all product data.
- Fetch data from the backend.
- Pass it to the product card component.
- Display the data dynamically.

## Milestone 12     

- Create an API endpoint that filters and retrieves data from MongoDB based on the user's email.
- Fetch data on the frontend by calling this API.
- Dynamically display the data using the previously created product card component.

## Milestone 13

- Create an API endpoint that receives new data.
- Use MongoDB's update operation to modify the existing data.
- Add an Edit button to the product card.
- When clicked, the existing data is sent to a form.
- Auto-fill the form with previous data.
- Allow users to modify the data and save changes.

## Milestone 14  

- Create an API endpoint to delete a product from MongoDB using its ID.
- Implement a delete button in the frontend on each product card.
- Send a delete request to the backend when the button is clicked

## Milestone-15
- Created an new Nav component with links to
- Created a link to Home
- Created a link to My-products
- Created a link to Add product
- Created a link to cart

## Milestone-16
- Created new page to display each product.
- Created add quantity and add to cart button.

## Milestone-18
- Created an Backend endpoint for cart page
- Wrote endpoint to get products inside cart for user

## Milestone-19
- Created cart frontend page and displayed the products
- For each product added an option to increase and decrease quantity using + and - buttons.
- Created an Backend endpoint for increase and decrease quantity

## Milestone-20
- Created backend endpoint that will send all the user data using mail.
- Created an frontend profile page that will display all the user data
- Displayed profile photo, name, mail and addresses.
- Another section to display address and add an button called "Add address"
- Display "No address found" if it is not found

### Milestone 21

- Created address form frontend page
- Created an state that will store input address
- Navigating address in profile  to this form page.

### Milestone 22

- Created an endpoint that will receive the address from address form in frontend
- Added the address to the address array inside user collection.

### Milestone 23
- Created an placeorder button inside cart page and navigated to selected address page when clicked.
- Created address page that will display all the available address and have an option to select one address.
- An backend endpoint that will send all the addresses of the user.

### Milestone 24
- First we display all the products we are ordering
- Next we will display the address user selected to deliver
- Display the total value of the cart
- Place order button at the bottom.
