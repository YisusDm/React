import React from "react";

class Aptitudes extends React.Component {
  render() {
    return (
      <section className="aptitudes">
        <h2>Aptitudes</h2>
        <ul>
          {this.props.aptitudes.map(function (item) {
            return <li>{item}</li>;
          })}
        </ul>
      </section>
    );
  }
}

export default Aptitudes;
