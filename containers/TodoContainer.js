
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

  
//Actions ?
import { addMovieAction, fetchMoviesAction, fetchSuccessAction, fetchFailedAction,
    updateItemAction, updateItemSuccessAction, //Update
    deleteItemAction, deleteItemSuccessAction
 } from '../actions';

const mapStateToProps = (state) => {        
    return {        
        movies: state.movieReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchMovies: () => {   
            dispatch(fetchMoviesAction());
        }, 
        onAddMovie: (newMovie) => {                        
            dispatch(addMovieAction(newMovie));
        },
        onUpdateItemAction: (updatedMovie) => {                        
            dispatch(updateItemAction(updatedMovie));
        }, 
        //Not necessary !  
        onUpdateItemSuccessAction: (updatedMovie) => {                        
            dispatch(updateItemSuccessAction(updatedMovie));
        }, 
        //delete a movie
        onDeleteItemAction: (deletedMovieId) => {                      
            dispatch(deleteItemAction(deletedMovieId));
        },
    };
}
const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoContainer;