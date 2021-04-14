import React, { Fragment } from "react";
import Moment from "react-moment";
import moment from "moment";

const ProfileExperience = ({ experience }) => {
  return (
    <Fragment>
      <div className='card'>
        <div className='card-header'>
          {" "}
          <Moment format='YYYY/MM/DD'>
            {moment.utc(experience.from)}
          </Moment> -{" "}
          {!experience.to ? (
            " Now"
          ) : (
            <Moment format='YYYY/MM/DD'>{moment.utc(experience.to)}</Moment>
          )}
        </div>
        <div className='card-body'>
          <h4>Worked {experience.company}</h4>
          <span>
            <strong>Description</strong>
          </span>
          <p>{experience.description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileExperience;
