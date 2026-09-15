## Velora 
Velora is a responsive e-commerce web application built with React.js and Tailwind CSS. The project uses the Fake Store API to fetch and display product data dynamically.
The application includes product browsing, category filtering, responsive product cards, a mobile navigation menu, and interactive shopping actions.



## Technologies Used
-	React.js
-	Tailwind CSS
-	JavaScript (ES6+)
-	Fake Store API
-	React Icons
-	Vite

## Features
-	Fetches products dynamically from the Fake Store API
-	Displays products in reusable product cards
-	Category filtering
-	Show More functionality for products
-	Responsive design for desktop, tablet, and mobile devices
-	Mobile navigation menu
-	Interactive Add to Cart and Wishlist buttons
-	Loading spinner while products are being fetched
-	Responsive and accessible UI

## Performance Improvements
Several improvements were implemented to make the application faster and more efficient:
-	Loading state: A loading spinner is displayed while products are being fetched, giving users feedback instead of showing an empty page.
-	Controlled product rendering: Initially displaying a limited number of products reduces the amount of content rendered at once. Users can select Show More when they want to view additional products.
-	Reusable components: Components such as ProductCard, Button, and Spinner were created to avoid unnecessary repetition and make the application easier to maintain.
-	Responsive layouts: Tailwind's responsive utilities were used to create layouts that adapt to different screen sizes without requiring separate desktop and mobile versions.
-	Efficient state management: React state and effects were used to manage API data, loading states, filtering, and UI interactions.

## Accessibility Considerations
Accessibility was considered throughout the development of Velora.
-	Semantic HTML elements were used where appropriate.
-	Buttons were used for interactive actions instead of clickable non-button elements.
-	Interactive elements have clear labels and recognizable icons.
-	Responsive layouts ensure that content remains usable on smaller screens.
-	Sufficient spacing and readable typography were used to improve usability.
-	The page structure was improved using appropriate heading levels and a main landmark.
-	Lighthouse was used to identify accessibility issues and guide improvements.

##  Challenges Encountered
1. Category Filtering
Implementing category filtering required understanding how to compare the selected category with each product's category and update the displayed products accordingly.
2. Responsive Design
Making the interface work well across different screen sizes was another challenge. Some layouts initially caused spacing and overflow issues on mobile devices, which required adjustments to Tailwind CSS classes.
3. Consistent Product Cards
The API products have different image sizes, titles, and descriptions. Creating product cards that remained visually consistent required careful use of fixed dimensions, spacing, image containers, and text styling.
