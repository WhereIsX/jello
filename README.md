### Notes
* started with create-react-app


### Time estimates

##### setup environment, dependencies (25 mins)

##### json-server readme, testing (15 mins)
  * updated db.json to reflect the common way of representing a 1:M relationship in a relational database[1], with the foreign key on the many side, i.e. each `card` has a `listId`
  * this allows us to use routes with relationships:
    * get `/lists?_embed=cards`
    * get `/lists/1?_embed=cards`
    * get `/cards?_expand=list`
    * get `/cards/1?_expand=list`
  * see [json-server relationships](https://github.com/typicode/json-server#relationships)
  * [1] want to acknowledge that I briefly went down a rabbit hole regarding relational db vs nosql db and which side stores the foreign keys.  Time researhing is not accounted for in the estimated time given above

##### research
  * considering bulma, semantic and material
  * bulma has no official support for react & react components
  * semantic react is not yet v1.0, continues to have *breaking* changes
    * semantic react has good docs though, describing why certain choices were made, links to advanced react guides, i.e. `context`   
  * for sake of simplicity, will use material UI for this project
