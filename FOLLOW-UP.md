# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?
axios: is Promises-oriented lib to make HTTP requests. I used it to make the search HTTP call
moment: I used it to easy format dates
react-placeholder: I used it to show the shimmer placeholders as loading
dotenv: used to config the environments variables. In my case, it was only to store the SERVER_HOST varible
  for development and production environments.
react-redux: to use redux functionality in my app
redux-thunk: to be able to return function instead of objects in action creators


### Q) What is the command to start the server?


(Default) `=ss630745725358065467897349852985 npm run server`
npm start server
---

# General:

### Q) How long, in hours, did you spend on the test?
I've spent about 20-24 hours

### Q) If you had more time, what further improvements or new features would you add?
I would implement: 
- changing flight info on the screen (adults, dates, etc)
- pagination of the results
- filtering and sorting
- menu
- tests

### Q) Which parts are you most proud of? And why?
I'm proud of my shimmer-placeholder and the flight-cards I've implemented. 

### Q) Which parts did you spend the most time with? What did you find most difficult?
I've spent much time with fixing and improving layout. 
The most difficult part was understanding webpack configurations.

### Q) How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.
I think it is a very complete test. I really liked to make it.
The time offerred to complete the test is pretty fair.

I only think the way API is implemented is very strange. It would be better if it was something 
easier to use, like one single REST call without having all the stuff to do before it.
The polling takes too long, and I don't know if is the case I should change. I preferred not to
change anything there.
