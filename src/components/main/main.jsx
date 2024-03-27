import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import './main.less';
import { getRepos } from "../actions/repos";
import Repo from './repo/repo'


const Main = () => {
	const dispatch = useDispatch();
	const reposData = useSelector(state => state.repos.items);
	const repos = useSelector(state => state.repos);
	const isFetching = useSelector(state => state.repos.isFetching);

	useEffect(() => {
		dispatch(getRepos())
	}, [])


	return(
		<div>

			<div className="search">
				<input type="text" placeholder='Input repo name'className="search-input" />
				<button className="search-btn">Search</button>
			</div>
			{ (repos.dataLoadState===0) && "no data" }
			{ (repos.dataLoadState===1) && "loading..." }
			{ (repos.dataLoadState===2) && (
				isFetching === false
					?
				reposData.map(repo => <Repo repo={repo} />) 
					:
					<div className="fetching">

					</div>
				)}
			{ (repos.dataLoadState===3) && "error"}
				
		</div>
	);
};

export default Main;