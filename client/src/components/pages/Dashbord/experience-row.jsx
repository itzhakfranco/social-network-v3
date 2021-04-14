import React, { Component } from "react";
import { Link } from "react-router-dom";

import Moment from "react-moment";
import moment from "moment";

import { connect } from "react-redux";

import { deleteExperience } from "../../../store/experience/experienceActions";

class ExperienceRow extends Component {
	render() {
		const { experiences, deleteExperience } = this.props;
		return experiences.map((exp, index) => (
			<tr key={index}>
				<th scope='row'>{++index}</th>
				<td>{exp.company}</td>
				<td className='hide-sm'>{exp.title}</td>
				<td>
					<Moment format='DD/MM/YYYY'>{moment.utc(exp.from)}</Moment>-
					{exp.to === null ? (
						" Now"
					) : (
						<Moment format='DD/MM/YYYY'>{moment.utc(exp.to)}</Moment>
					)}
				</td>
				<td className='text-center'>
					<Link
						className='btn btn-dark mr-3'
						to={`/user/experience/edit/${exp._id}`}
					>
						<i className='fas fa-user-edit'></i> Edit
					</Link>
					<button
						onClick={() => {
							deleteExperience(exp._id);
						}}
						className='btn btn-danger'
					>
						<i className='fas fa-trash'></i> Delete
					</button>
				</td>
			</tr>
		));
	}
}

export default connect(null, { deleteExperience })(ExperienceRow);
