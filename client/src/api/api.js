import axios from "axios";

export default {
  //// MONGO FRONT END ROUTES:
  
  // Gets all auditions
  getAuditions: function() {
    return axios.get("/api/auditions");
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


  //// AWS FRONT END ROUTES:

  uploadTrack: function(newTrack) {
    return axios.post("/api/aws/", newTrack)
  },

  deleteTrack: function(fileName) {
    return axios.post("/api/aws/", fileName)
  }
};