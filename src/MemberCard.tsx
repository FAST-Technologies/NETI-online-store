import React from 'react';
import cl from "./MemberCard.module.css"
import {team} from "./App";
const MemberCard: React.FC<team> = ({ name, job, description, img}) => {
    return (
        <div className={cl.memberObject}>
            <img
                className={cl.memberImage}
                src={img}
                alt={name}
            />
            <div className={cl.memberText}>
                <div className={cl.memberName}>
                    {name}
                </div>
                <div className={cl.memberJob}>
                    {job}
                </div>
                <div className={cl.memberDescription}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default MemberCard

