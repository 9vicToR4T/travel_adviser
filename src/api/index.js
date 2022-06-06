import axios from "axios";

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export const getPlacesData = async (type, ne, sw) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          bl_latitude: sw.lat,
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key":
            "e6004a0a4fmshb800b6c06d385e6p1f48c3jsn040d01c3a8e8",
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error, "error in axios request");
  }
};
