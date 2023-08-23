/**
 * Contains the miscellaneous route handlers.
 * @author Olusegun Emmanuel <https://github.com/CodewithSegNet>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
