import React, {Component} from "react";
import ShooterListItem from "./ShooterListItem";

const shooters = {
    'Half-Life 2': 'Fight aliens, wear a head crob, learn about gravity',
    'Halo: Combot Evolved': 'Fight aliens, wear an AI, learn about screen peeking siblings',
    'Team Fortress 2': 'Fight non-alien residents, wear hats, learn about teamwork',
    'Tribes': 'Ski, skip, and slide your way to victory',
};

class BestShootersList extends Component {
    render() {
        return (
            <>
                <h4>Best First-Person Shooters</h4>
                <div className='shooters__list'>
                    {Object.entries(shooters).map(([shooterName, shooterDesc], index) => (
                        <ShooterListItem key={index} number={index} shooterName={shooterName} shooterDesc={shooterDesc}/>
                    ))}
                </div>
            </>
        );
    }
}

export default BestShootersList;