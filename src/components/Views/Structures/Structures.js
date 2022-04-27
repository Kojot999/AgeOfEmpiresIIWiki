import React from "react";
import styles from "./Structures.module.scss";
import StructuresItem from "./StructuresItem/StructuresItem";

class Structures extends React.Component {
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
      <div className={styles.Structures}>
        {this.props.data.structures.map((item) => (
          <StructuresItem
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

export default Structures;
