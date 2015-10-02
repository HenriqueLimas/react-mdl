import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div className="mdl-layout mdl-js-layout md-layout--fixed-header">
				<header className="mdl-layout__header">
					<div className="mdl-layout__header-row">
						<span className="mdl-layout-title">React MDL</span>

						<div className="mdl-layout-spacer"></div>

						<nav className="mdl-navigation mdl-layout--large-screen-only">
							<a className="mdl-navigation__link" href="#">Link</a>
							<a className="mdl-navigation__link" href="#">Link</a>
							<a className="mdl-navigation__link" href="#">Link</a>
							<a className="mdl-navigation__link" href="#">Link</a>
						</nav>
					</div>
				</header>
			</div>
		);
	}
});