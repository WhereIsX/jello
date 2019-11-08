### Notes
* started with create-react-app


### Time estimates

#### research and setup

 * 25 mins: setup environment, dependencies

 * 25 mins: json-server readme, testing
    * updated db.json to reflect the common way of representing a 1:M relationship in a relational database[1], with the foreign key on the many side, i.e. each `card` has a `listId`
    * this allows us to use routes with relationships:
      * get `/lists?_embed=cards`
      * get `/lists/1?_embed=cards`
      * get `/cards?_expand=list`
      * get `/cards/1?_expand=list`
    * see [json-server relationships](https://github.com/typicode/json-server#relationships)
    * [1] want to acknowledge that I briefly went down a rabbit hole regarding relational db vs nosql db and which side stores the foreign keys.  Time researhing is not accounted for in the estimated time given above

* 30 mins: research styling
  * considering bulma, semantic and material
  * bulma has no official support for react & react components
  * semantic react is not yet v1.0, continues to have *breaking* changes
    * semantic react has good docs though, describing why certain choices were made, links to advanced react guides, i.e. `context`   
  * for sake of simplicity, will use material UI for this project

#### time making jello (~5 hours)
  * 75 mins: get request, list, cards rendering
  * 75 mins: add card button, dynamic textfield, research new react hooks
  * 20 mins: `fetch()` post request succeeds, but behaves as if it is sent without a body.  double checked json-server endpoint using postman (POST request to /cards with JSON body) and postman works fine, so not sure if the problem might be `JSON.stringify()`?
  * 15 mins: updating readme and small lines of psueudo code for remaining functionality
  * 100 mins: material ui component fiddling (paper vs cards) themes, providers, react context and other styling

##### time making jello from home (~1.5 hours)
  * 15 mins: imported `axios.post()` which solved POST problem
  * 10 mins: read docs for icons & imported `@material-ui/icons`
  * 20 mins: read more about [hooks](https://reactjs.org/docs/hooks-state.html) and `useState` for functional components
  * 15 mins: read about javascript [`binding`](https://reactjs.org/docs/handling-events.html) and implemented in `App.constructor()`
  * 20 mins: attempted to `setState(prev => {spread operators})` and then using lodash `cloneDeep`, but decided code is easier to write and read if we just get /lists again
  * 
