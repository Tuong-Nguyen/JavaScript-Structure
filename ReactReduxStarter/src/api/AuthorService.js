/**
 * Created by nkim on 8/3/2017.
 */
import axios from 'axios';

const baseURL = 'http://192.168.104.45:4001/authors/';

class AuthorService {

  static getAllAuthors(){
    return axios.get(baseURL);
  }

  static getAuthorById(id){
    return axios.get(baseURL + id);
  }

  static addAuthor(author){
    return axios.post(baseURL, author);
  }

  static updateAuthor(id, author){
    return axios.put(baseURL + id, author);
  }

  static deleteAuthor(id){
    return axios.delete(baseURL + id);
  }
}

export default AuthorService;
