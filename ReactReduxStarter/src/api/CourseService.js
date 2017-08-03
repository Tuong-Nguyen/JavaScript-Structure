/**
 * Created by nkim on 8/3/2017.
 */
import axios from 'axios';

const baseURL = 'http://192.168.104.45:4001/courses/';

class CourseService {

  static getAllCourses(){
    return axios.get(baseURL);
  }

  static getCourseById(id){
    return axios.get(baseURL + id);
  }

  static addCourse(course){
    return axios.post(baseURL, course);
  }

  static updateAuthor(id, course){
    return axios.put(baseURL + id, course);
  }

  static deleteAuthor(id){
    return axios.delete(baseURL + id);
  }
}

export default CourseService;
