import React, { Fragment } from "react";
import { Panel } from "../components";
import { connect } from "react-redux";
import panelActions from "../actions/panels";
import cardAtions from "../actions/cards";

const Panels = ({ items, addPanel, addCard }) => (
  <Fragment>
    {items.map((item, index) => (
      <Panel
        key={index}
        panelIndex={index}
        {...item}
        onAddPanel={addPanel}
        onAddCard={addCard}
      />
    ))}
    <Panel onAddPanel={addPanel} onAddCard={addCard} />
  </Fragment>
);

export default connect(({ panels }) => ({ items: panels }), {
  ...panelActions,
  ...cardAtions
})(Panels);
