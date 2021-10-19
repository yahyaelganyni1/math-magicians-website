/* eslint-disable */
import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <input readOnly value="0" style={{ direction: 'rtl' }} />
        <button>AC</button>
        <button>+/−</button>
        <button>%</button>
        <button className="sacndry-color">÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="sacndry-color">×</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="sacndry-color">−</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="sacndry-color">+</button>
        <button className="zero">0</button>
        <button>.</button>
        <button className="sacndry-color">=</button>
      </div>
    );
  }
}
