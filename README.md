# Tier2 solo project : eCalendar

This project is the front-end part of an appointment managing app created with the react library.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Link** : https://chingu-solo.github.io/solo-koala-195/

## Dependecies

- React
- React-DOM
- React-Scripts
- uniqid
- react-fontawesome
- formik
- Yup

## Installation

### Clone

- Clone this repo to your local machine using `git clone https://github.com/Chingu-Solo/solo-koala-195.git`
- `cd` into `solo-koala-195`

### Install

- Run `yarn install | npm install`

### Start

- Run `yarn start | npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Requirements

_Structure_

- [x] Page divided into calendar potion and event list portion

- [x] Calendar portion to have:

  - [x] Title and Current year in header
  - [x] Current month between previous and upcoming month
  - [x] Calendar dates of the month with display of previous month’s last dates if first day of current month does not start on a Sunday
  - [x] Arrows bordering the body of the calendar

- [x] Event portion to have

  - [x] Current day of the week displayed
  - [x] Current month and date (numerical) displayed
  - [x] List of Events with corresponding date of month divided by a vertical bar
  - [x] Add event button at bottom

- [x] _At least_ **3** demo events in the event panel portion of the project

- [x] A modal form activated via button click that floats above the content

_Styling:_

- [x] Styles should be reminiscent of the demo versions. Feel free to use artistic licencse as long as the functionality doesn't suffer

_Functionality_

_Upon Load:_

- [x] Calendar will display correct layout of the current month with the weeks starting on Sunday
- [x] Displays last days of previous month and/or first days of next month as buffers when needed; set apart with styling
- [x] Set the current date apart from the others (in the demo above it is bolded)

_Scrolling:_

- [x] Your calendar must scroll backwards and forwards accurately

_Modal Form:_

- [x] This form is used to add new events to to the calendar. It is displayed when the user clicks the add icon in appointment panel
- [x] Be able to close form without submission and have form close on submission of event information
- [x] Have modal displayed as shown in images below
- [x] Have at least the event name and dates as required, the other fields shown are optional
- [x] Is hidden when not in use

_Other:_

- [x] Your repo needs to have a robust README.md
- [x] Make sure that there are no errors in the developer console before submitting

**Extras (Not Required)**

- [x] Make your design fully responsive _(small/large/portrait/landscape, etc.)_
- [x] Optimized loading of calendar site (hint, consider the background image)
- [x] Change the background image based on the season in which the current displayed month is part of

## 🚀 Deploy

Deployed using Github Pages service and npm package [gh-pages](https://www.npmjs.com/package/gh-pages).

## 🧝‍♂️ Author

- Github: [@yassin](https://github.com/yassinblanco)
