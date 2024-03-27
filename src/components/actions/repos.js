import axios from 'axios';
import { setRepos, updateLoadState, setFetching, setCurrentPage } from '../../redux/reposSlice';

export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
	if(searchQuery == "") {
		searchQuery = "stars:%3E1";
	}
	return async (dispatch) => {
		try {
			dispatch(setFetching(true))
			dispatch( updateLoadState({state:1,error:null}) );
			const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`);
			dispatch( updateLoadState({state:2,error:null}) );
			console.log(response.data);
			dispatch(setRepos(response.data));
		}
		catch(err) {
			dispatch( updateLoadState({state:3,error:err.message}) );
		}
			
	}
}