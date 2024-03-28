import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import './main.less';
import { getRepos } from "../actions/repos";
import Repo from './repo/repo'
import { setCurrentPage } from "../../redux/reposSlice";
import { createPages } from "../utils/pagesCreator";


const Main = () => {
	const dispatch = useDispatch();
	const reposData = useSelector(state => state.repos.items);
	const repos = useSelector(state => state.repos);
	const isFetching = useSelector(state => state.repos.isFetching);
	const currentPage = useSelector(state => state.repos.currentPage);
	const totalCount = useSelector(state => state.repos.totalCount);
	const perPage = useSelector(state => state.repos.perPage);
	const [searchValue, setSearchValue] = useState("");
	const pagesCount = Math.ceil(totalCount/perPage);
	const pages = [];
	createPages(pages, pagesCount, currentPage);

	useEffect(() => {
		dispatch(getRepos(searchValue, currentPage, perPage));
		console.log(pages);
	}, [currentPage])

	function searchHandler() {
		dispatch(setCurrentPage(1));
		dispatch(getRepos(searchValue, currentPage, perPage))
	}


	return(
		<div>
			<div className="search">
				<input type="text" value={searchValue} onChange={(eo) => setSearchValue(eo.target.value)} placeholder='Input repo name'className="search-input" />
				<button onClick={() => searchHandler()} className="search-btn">Search</button>
			</div>
			{ (repos.dataLoadState===0) && "no data" }
			{ (repos.dataLoadState===1) && <div className="fetching"></div> }
			{ (repos.dataLoadState===2) && (
				isFetching === false
					?
				reposData.map((repo, index) => <Repo key={index} repo={repo} />) 
					:
					<div className="fetching">

					</div>
				)}
			{ (repos.dataLoadState===3) && "error"}
				<div className="pages">
					{pages.map((page,index) => <span 
					key={index} 
					className={currentPage == page ? "current-page" : "page"}
					onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
				</div>
		</div>
	);
};

export default Main;