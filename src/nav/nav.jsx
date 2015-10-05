import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="mdl-layout mdl-js-layout md-layout--fixed-header">
        <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
          <div className="mdl-layout__header-row"></div>
          <div className="mdl-layout__header-row">
            <h3>React MDL</h3>
          </div>
          <div className="mdl-layout__header-row"></div>
          <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
            <a href="#overview" className="mdl-layout__tab is-active">Overview</a>
            <a href="#features" className="mdl-layout__tab">Features</a>
          </div>
        </header>
        <main className="mdl-layout__content">
          <section className="mdl-layout__tab-panel is-active" id="overview">
            <div className="page-content"></div>
          </section>
          <section className="mdl-layout__tab-panel is-active" id="features">
            <div className="page-content"></div>
          </section>
        </main>
      </div>
    );
  }
});