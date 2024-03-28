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

export const getCurrentRepo = async (userName, repoName, setRepo) => {
	try {
		const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}`)
		setRepo(response.data)
	}
	catch(err) {
		console.log(err)
	}		
}

export const getContributors = async (userName, repoName, setContrubutors) => {
	try {
		const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}/contributors?page=1&per_page=10`)
		setContrubutors(response.data)
	}
	catch(err) {
		console.log(err)
	}		
}