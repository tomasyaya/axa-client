AXA CLIENT

Instructions:

Run application with "yarn dev".

Please, you need to have the server running for the fetching data to be possible.

MAIN SCREEN:

Displays a search bar, a grid with the gnomes and pagination button at the button.

When loading a spinner presents in the screen.

Search bar is debounced for perfomance.

Cards are loaded lazy for perfomance.

Pagination buttons disabled when no next or previous page.

REDUX CLARIFICATIONS:

I used combined reducer to show its possible, in this kind of scenarios I believe its not necessary.

I choose this structure of the reducer, with this kind of separation of concerns, just to show one way. Separations inside the reducer can be as specific or global (the UPDATE case) as one desires.

COMPONENTS STRUCTURE:

HOME: container with local logic for component display. This logic could be in the Redux store, I believe Redux should have global logic/state.

BRASTLEWARKCARD: Styled card for gnomes display.

SEARCHBAR: Controlled input for locally quering the gnomes.

PAGINATION: Controlled container with pagination buttons.
