import React from "react";
import styles from "./Civilizations.module.scss";
import CivilizationsItem from "./CivilizationsItem/CivilizationsItem";

class Civilizations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyOpenedUnit: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id) {
    if (this.state.currentlyOpenedUnit === id) {
      this.setState({ currentlyOpenedUnit: null });
    } else this.setState({ currentlyOpenedUnit: id });
  }

  render() {
    return (
      <div className={styles.Civilizations}>
        {this.props.data.civilizations.map((item) => (
          <CivilizationsItem
            isOpened={this.state.currentlyOpenedUnit === item.id}
            {...item}
            key={item.id}
            action={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default Civilizations;
