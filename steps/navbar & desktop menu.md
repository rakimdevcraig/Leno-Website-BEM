# HTML:

### Nav

- navbar element with the class of navbar
- div with class of navbar\_\_container
- div with the class of navbar\_\_logo
  - inside we add the logo
- div with the class navbar\_\_menu
  - ul with class navbar\_\_menu-list
    - items for the list with each item having the class of
      navbar**menu-item - each item will be an anchor with the class of navbar**menu-link - the 2 fontawesome icons will have the class of navbar**menu-link**primary

# Css:

### Nav

### navbar styles

- space on the top inside the element

  - <details> 
    <summary> answer</summary>

    ```css
    padding: 1rem; 2rem
    ```

    </details>
    - fix the position
    - top/left/right elements need a number
    - high z index
    - make background-color see through
    - transition on the background element

### navbar container:

- max width 1100px
- center with margin
- flex item
- make space between on main axis center on cross axis

### navbar logo:

- width 112 px height 36px

### menu list:

- make flex item
- center on cross axis
- 1rem of space between flex items
- make items almost bold in weight

### menu list items on hover

- make primary color

### menu list icons:

- make primary color
- make white on hover
