**WDDM: Final Composite Project**
# Web Store: Criteria and Assessment (WDDM 113 & WDDM 114)

Develop a functional single-page e-commerce application interface. 

You may use the provided `index.html` as an example file, or a starting template only. It is expected that your page will deviate significantly from the sample to create a unique application interface.


## Minimum deliverable

### Data
Single-page HTML template layout to be loaded with products dynamically from a set of at least 20 Objects (ary the content for each product so that they all appear to be distinctly different) written in a single Array. 

At minimum, each product (Object) should include:

- `id` (a unique identifier - a sequential Number works great)
- `name`
- `image` (a url, relative to the root folder)
- `description`
- `price`
- `quantity` (in stock)
- `category`
- At least two other multi-valued criteria (for example, `size`, `color`, `weight`, etc)

### Functionality

Minimum functionality should include:

- Products are split into pages if they exceed a specified amount (may be variable)
- Sort by at least two metrics, each in both directions (ascending and descending)
- Search by name (partial match, non case sensitive)
- Filter by at least two other metrics using: `radio`, `checkbox`, or `select`
- Product's should display at least one option as form components dynamically
  - _For example_: A product comes in 3 colours, which is stored as an Array inside of the product. Each colour option is represented in the UI as a radio button, created dynamically

### Interface

The site must be styled and responsive. Emphasis should be put primarily on the products themselves, as well as the components used for sorting/filtering.

HTML and CSS should adhere to best practices for accessibility and search engine optimization to the best of your ability (See "submission" section for a list of testing tools).

### Documentation & Code

All code, images or other materials references in any part from a source outside of classroom material must be cited (with a direct link if available) in your repo's `README.md`, with a reference to the citation in a code comment above the block. 

Code should be sufficiently commented so that all logic and functionality is clear at a glance.

Projects with un-cited code will be penalized and may possibly lead to further action if deemed to be plagiarism. Code examples found online can be referenced, or may be used in small parts, but should never be directly copied/used in blocks.

## Additional deliverable ideas

Some ideas for additional functionality that you may consider:
- Dynamic layouts and/or styles
- Add items to a cart, update graphic or create a dynamic dropdown of items
- Click to favourite/unfavourite products
- Display full product in popover or dynamically as a "page" within `index.html`
- Load additional products on scroll (replaces required pagination)
- Rate and/or review a product
- Multiple product states: sold out, limited quantity, clearance, added to cart, etc
- Manage multiple images with a custom gallery, popover or side-scroller component
- Display related products 
- Assign "tags" to a product for sorting/searching/related

You may discuss other possibilities with the course instructor if you are unsure about the scope and/or requirements for implementation of a feature.


## Course breakdown 

### WDDM 113: Applied Web Programming

Topics/categories assessed for this course:
1. Javascript syntax and best practices
2. Data structures and iteration
3. Scalability and application patterns
4. Events and filtering components (Functional)

The above _may_ include:
- Variety, completeness and structure of 20 products and properties
- Application of logic 
  - Including efficiency of conditions, loops, etc.
- Functional structure and data integrity (immutability)
- Data: storing, retrieving, parsing, formatting, display
- Holding user state data and updating the UI on change of data


### WDDM 114: Applied Web Design

Topics/categories assessed for this course:
1. Content and content structure
2. Responsive styling
3. Product template and state management
4. Events and management of form components (UI/UX)
  
The above _may_ include:
- Form components are styled and usable
- Layouts and responsive patterns
- Products shown in various states, with styles (well) written in CSS
- Output of dynamic content to the document
- Dynamic interface, usability, and interactions


## Submission

Forked repository on Github with direct link to live site active as part of the Github repo description. Final commits must be made and pushed _before_ the final week's class on **December 12th, 2019**. Assessment of the application will be done in class, with feedback provided.

### Testing for performance and accessibility

Before submitting, use the following tools to ensure your site passes the minimum requirements for useable and accessible web interfaces:

- Passes w3c validation: <https://validator.w3.org/#validate_by_input>
- Scores green across all Google Chrome "Audit" metrics
  - Chrome Developer Tools > "Audit" Tab > Device: "Mobile" > "Run audits"
- (Suggested, not required) Assess live site with Wave: https://wave.webaim.org/


## Grading

Each category listed above for the respective classes will be assessed with the following in mind. A grade out of 100 will be determined based on an average of all assessment category.

### Rubric

Each developed aspect of the project is measured using the following system:

- **Level 1 (Below Expectation):** Does not demonstrate practical understanding of the concept
- **Level 2 (Approaching Standard):** Fundamental understanding, but needs additional practice to meet required standard
- **Level 3 (Standard Met):** Strong grasp of concepts; some room for maturity _(translates to approximately 50-70%)_
- **Level 4 (Mastered):** Expert level knowledge, would be able to effectively teach the concept to others

### A Note on Expectations

Because much of this project is demonstrated in class, completing the project as per exact specification for each required deliverable category will result in a *maximum* grade of approximately 65-70%. To earn additional grades, you will be required to think outside the box and implement additional features and functionality.
