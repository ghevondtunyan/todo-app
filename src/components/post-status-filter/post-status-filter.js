import React from "react";

export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "all", label: "Add" },
      { name: "like", label: "Liked" },
    ];
  }
  render() {
    const button = this.buttons.map(({ name, label }) => {
      const active = this.props.filter === name;
      const clazz = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={name}
          type="button"
          className={clazz}
          onClick={() => this.props.onFilterSelct(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{button}</div>;
  }
}
