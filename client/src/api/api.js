import axios from "axios";

export default {
  //// MONGO FRONT END ROUTES:
  
  // Gets all auditions
  getAuditions: function() {
    return axios.get("/api/auditions");
  },

  getFilteredAuditions: function(query){
    return axios.get("/api/auditions", query);
  },
  // creates a new single audition
  createAudition: function(audition){
      return axios.post("/api/auditions", audition)
  },
  // Gets the Audition with the given id
  getAudition: function(id) {
    return axios.get("/api/auditions/" + id);
  },
  // 
  updateAudition: function(id, newData){
    return axios.put("/api/auditions/"+id, newData);
  },
  // Deletes the Auditions with the given id
  deleteAudition: function(id) {
    return axios.delete("/api/auditions/" + id);
  },



// PASSPORT FUNCTIONALITY
  passportLogin: function(login) {
    return axios.post("/api/users/login", login);
  },

  passportLogout: function() {
    return axios.get("/api/users/logout");
  },

  passportSignup: function(signUp) {
    // console.log("inside passport Signup")
    return axios.post("/api/users/signup", signUp);
  },
// END PASSPORT FUNCTIONALITY

  //// AWS FRONT END ROUTES:

  uploadTrack: function(newTrack) {
    return axios.post("/api/aws/", newTrack)
  },


  deleteTrack: function(fileName) {
    return axios.post("/api/aws/", fileName)
  }
};