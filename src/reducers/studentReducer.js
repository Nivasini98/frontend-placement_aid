import {
  ALL_STUDENTS_REQUEST,
  ALL_STUDENTS_SUCCESS,
  ALL_STUDENTS_FAIL,
  CLEAR_ERRORS,
} from "../constants/studentConstants";

export const studentReducer =
  (state = { students: [] },
  action) => {
    switch (action.type) {
      case ALL_STUDENTS_REQUEST:
        return {
          loading: true,
          students: [],
        };

      case ALL_STUDENTS_SUCCESS:
        return {
          loading: false,
          students: action.payload.students,
          studentsCount: action.payload.studentsCount,
        };

      case ALL_STUDENTS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };

        case CLEAR_ERRORS:
            return {
                ...state,
                error : null
            }

      default:
        return state;
    }
  };
