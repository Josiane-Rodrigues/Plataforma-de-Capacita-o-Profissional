import axios from 'axios';

// definir o usuário logado
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

// obter cursos
export const fetchCourses = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/courses'); 
    
      dispatch({ type: 'SET_COURSES', payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

//  obter vagas
export const fetchJobs = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/jobs'); 
      dispatch({ type: 'SET_JOBS', payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};
