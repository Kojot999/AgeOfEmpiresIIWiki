import React from "react";
import styles from "./Technologies.module.scss";
import TechnologiesItem from "./TechnologiesItem/TechnologiesItem";

class Technologies extends React.Component {
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
      <div className={styles.Technologies}>
        {this.props.data.technologies.map((item) => (
          <TechnologiesItem
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

export default Technologies;
