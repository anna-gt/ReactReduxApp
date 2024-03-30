import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getContributors, getRepo } from "../actions/repos";
import { useDispatch, useSelector } from "react-redux";
import './card.less'

const Card = (props) => {

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const {username, reponame} = useParams();
	const repo = useSelector(state => state.repos.repo);
	const status = useSelector(state => state.repos);
	const [contributors, setContributors] = useState([]);

	useEffect(() => {
		dispatch(getRepo(username, reponame));
		getContributors(username, reponame, setContributors)
	}, [])

	return(
		<div>
			<button onClick={() => navigate(-1)} className="back-btn">BACK</button>

			{ (status.dataLoadState===0) && "no data" }
			{ (status.dataLoadState===1) && <div className="fetching"></div> }
			{ (status.dataLoadState===2) && <div><div className="card">
				<img src={repo.owner.avatar_url} alt="" />
				<div className="name">{repo.name}</div>
				<div className="stars">{repo.stargazers_count}</div>
			</div>
			{contributors.map((c, index) =>
					<div key={index}>{index+1}. {c.login}</div>
				)}
			</div> }
			{ (status.dataLoadState===3) && "error"}
		</div>
	);
};

export default Card;