### Notes
* started with create-react-app


### Time estimates
##### setup environment, dependencies (25 mins)
##### json-server readme, testing (15 mins)
  * updated db.json to reflect the common way of representing a 1:M relationship, with the foreign key on the many side, i.e. each `card` has a `listId`
  * this allows us to use routes with relationships:
    * get `/lists?_embed=cards`
    * get `/lists/1?_embed=cards`
    * get `/cards?_expand=list`
    * get `/cards/1?_expand=list`
  * see [json-server relationships](https://github.com/typicode/json-server#relationships) for more info
##### research
  * considering bulma, semantic and material
  * bulma has no official support for react & react components
  * semantic react is not yet v1.0, continues to have *breaking* changes
    * semantic react has good docs though, describing why certain choices were made, links to advanced react guides, i.e. `context`   
  * for sake of simplicity, will use material UI
