import axios from "axios";
import Swal from "sweetalert2";
//Constantes
const LOADING = "LOADING";
const GET_QUESTIONS = "GET_QUESTIONS";
const NAME_AUTH = "NAME_AUTH";
const RETRY_QUEST = "RETRY_QUEST";
//Action Creators
export function getQuestions() {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    return await axios
      .get("https://opentdb.com/api.php?amount=10&type=boolean")
      .then((obj) => {
        console.log("quiz: ", obj);
        dispatch({ type: GET_QUESTIONS, payload: obj.data.results });
      })
      .catch((error) => {
        if (error.status === 404) {
          Swal.fire({
            icon: "error",
            allowOutsideClick: false,
            title: "Error 404",
            text: "Hay un problema comunicandose con el servidor",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        }
      });
  };
}

export function nameAuth() {
  return {
    type: NAME_AUTH,
  };
}

export function retryQuest() {
  return {
    type: RETRY_QUEST,
  };
}

export { LOADING, GET_QUESTIONS, NAME_AUTH, RETRY_QUEST };
