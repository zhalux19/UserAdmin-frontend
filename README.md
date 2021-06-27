Please launch the backend before starting the UI app. Run yarn to install all the packages. 
Run yarn start to start the application. Open http://localhost:3000 to view it in the browser.

Main library React, React-Hooks, React-Redux, Redux-Saga, React-Hook-Form, yup and React-Bootstrap

All components are functional components to enjoy the benefits of react hooks. State is managed using React-Redux. The page is responsive using React-Bootstrap.

Form validation is added for all input fields. If it detects any empty fields, alert mesasges will show up. Form submission will be blocked. The form validation and submission are done through React-Hook-Form and yup

While the form is being submitted to the backend, the submit button will be disabled. Button text will become "Submitting" Redux-Saga takeLeading is also used to avoid submission while the previous api call is in progress.

At the moment the UI displays all data. If more time was given can add pagination to the display of the data
