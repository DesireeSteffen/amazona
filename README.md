# Amazona

1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository
5. Added the featured products to the page
6. Add Routing
   1. npm i react-router-dom
   2. create the route for the home screen
   3. create a router for the product screen
7. Create Node.js Server
   1. run npm init in the root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js from
   7. require express
   8. create a route for / return backend is ready
   9. move products.js from frontend to backend
   10. create a route for /API/products
   11. return products
   12. run npm start
8. Fetch Products from the Backend
   1. set proxy in package.json
   2. npm install Axios
   3. use state hooks
   4. use effect hooks
   5. use reducer hooks
9. Mange State by a Reducer Hook
   1. define reducer
   2. update fetch data
   3. get the state from the use of Reducer
10. Add bootstrap UI Framework.
    1. npm install react-bootstrap bootstrap
    2. update App.js
11. Create Product and Rating Component
    1. create Rating component
    2. Create Product Component
    3. Use Rating Component in Product Component
12. Create Product Details Screen
    1. fetch product from the backend
    2. create 3 columns for image, info and action
13. Create Loading and Message Component
    1. create Loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define the get Error function
14. Implement Add to Cart
    1. Create React Context
    2. define reducer
    3. create store provider
    4. implement add to cart button click the handler
15. Complete Add to Cart the check existing item in the cart 2. check count in stock in the backend
16. Create Cart Screen
    1. Create 2 columns
    2. display items list
    3. create action column
17. Complete Cart Screen
    1. Click handler for inc/dec item Click handler to remove items
    2. Click handler for checkout
18. Create sign-in Screen
    1. Create sign-in form
    2. add email and password
    3. add sign-in button
19. Connect to MongoDB DataBase
    1. Create an atlas MongoDB database
    2. install local MongoDB database
    3. npm install mongoose
    4. connect to MongoDB database
20. Seed sample Data
    1. create product model
    2. create user model
    3. create seed route
    4. use route in server.js
    5. seed sample product
21. Seed Sample Users
    1. create user model
    2. seed sample users
    3. create user routes
22. Create sign-in backend API
    1. create sign-in
    2. npm install jsonwebtoken
    3. define generate token
23. Complete Sign-in Screen
    1. handle submit action
    2. save token in the store and local storage
    3. show the users name in the header
24. Create Shipping Screen
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar
25. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend API
26. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit
27. Create Place Order Screen
    1. show cart items, payment and address
    2. handle place order action create order to create API
28. Create Place Order Action
    1. handle place order action
    2. create order to create an API
29. Create Order Screen
    1. Create backend API for order/:id
    2. fetch order API in the frontend
    3. show order information in 2 columns
30. Pay Order By PayPal
    1. generate PayPal client id
    2. create API to return client id
    3. install react-PayPal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in order Screen
    6. implement loadPayPalScript function
    7. render PayPal button
    8. implement approve payment function
    9. create pay order API in the backend
31. Display Order History
    1. create order screen
    2. create order history API
    3. use API in the frontend
32. Create Profile Screen
    1. get user info from the context
    2. show user information
    3. create user update API
    4. update user info
33. Publish to Heroku
    1.  create and config node project
    2.  serve build folder in the frontend folder
    3.  Create Heroku account
    4.  connect it to Github
    5.  create MongoDB atlas database
    6.  set database connection in Heroku env variables
    7.  commit and push
34.
35.
36.
37.
38.
39.
40.
