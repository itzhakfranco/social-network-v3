import React from "react";
import { Link } from "react-router-dom";
export const ExperienceTable = () => {
	return (
		<>
			<div className='container mt-4'>
				<div className='card'>
					<div className='card-header'>
						<strong className='card-title'>Experience Table</strong>
						<Link
							className='btn btn-success float-right'
							role='button'
							to='/user/profile/experience'
						>
							<i className='fab fa-black-tie text-white mr-2'></i>Add Experience
						</Link>
					</div>
					<div className='card-body'>
						<table className='table'>
							<thead>
								<tr>
									<th scope='col'>#</th>
									<th scope='col'>Company</th>
									<th scope='col'>Title</th>
									<th scope='col'>Years</th>
									<th className='text-center' scope='col'>
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope='row'>1</th>
									<td>sadasd</td>
									<td className='hide-sm'>dadas</td>
									<td>
										<time datetime='1618099200000'>2021/04/11</time> - Now
									</td>
									<td className='text-center'>
										<a
											className='btn btn-dark mr-3'
											href='/user/experience/edit/6073487012dd1ca05352ee68'
										>
											<i className='fas fa-user-edit'></i> Edit
										</a>
										<button className='btn btn-danger'>
											<i className='fas fa-trash'></i> Delete
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};
