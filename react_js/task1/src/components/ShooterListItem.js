import React, {Component} from "react";

class ShooterListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        const index = this.props.number + 1;
        const borderClass = (index % 2 ? 'green_border' : 'blue_border') + ' list__numbers';
        return (
            <div className='shooters__list__item'>
                <div className={borderClass}>{index}.</div>
                <div>
                    <p className='shooter__name'>{this.props.shooterName}</p>
                    <p>{this.props.shooterDesc}</p>
                </div>
            </div>
        );
    }
}

export default ShooterListItem;