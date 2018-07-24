import axios from "axios";

export default {
  // Gets all auditions
  getAuditions: function() {
    return axios.get("/api/auditions");
  },
  // creates a new single audition
  createAudition: function(){
      return axios.post("/api/auditions")
  },
  // Gets the Audition with the given id
  getAudition: function(id) {
    return axios.get("/api/auditions/" + id);
  },
  // 
  updateAudition: function(id, newData){
    return axios.get("/api/auditions/"+id, newData);
  },
  // Deletes the Auditions with the given id
  deleteAudition: function(id) {
    return axios.delete("/api/auditions/" + id);
  }
  
  ,
  getUsers: function() {
    return axios.get("/api/auditions/users");
  }
};