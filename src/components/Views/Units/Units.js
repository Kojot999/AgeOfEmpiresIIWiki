import React from "react";
import styles from "./Units.module.scss";
import UnitsItem from "./UnitsItem/UnitsItem";

class Units extends React.Component {
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
      <div className={styles.Units}>
        {this.props.data.units.map((item) => (
          <UnitsItem
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

export default Units;
