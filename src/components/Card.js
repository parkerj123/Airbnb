import React from "react";

export default function Card() {
  return (
    <div className="card">
      <div className="card--photo">
        <h4 className="card--photo--status">SOLD OUT</h4>
      </div>
      <div className="card--info--top">
        <span>5.0</span>
        <span className="gray">(6)</span>
        <span className="gray">°USA</span>
      </div>
      <p className="card--info--desc">Life lessons with Katie Zaferes</p>
      <p className="card--info--price">
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
