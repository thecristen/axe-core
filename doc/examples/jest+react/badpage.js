import React from 'react';

export default class BadPage extends React.Component {
  render() {
    return (
      <div>
				<h2>Example of a poorly designed page</h2>

				<h5>Color issues</h5>
				<p><span style={{color: '#58AA02'}}>This text fails.</span>
				<br/>This text fails because it's too light. The contrast ratio is (2.93 : 1).</p>

				<p><span style={{color: '#FFFFFF', background: '#8D8E90'}}>This text fails.</span>
				<br/>This text fails because the background isn't dark enough. The contrast ratio is (3.28 : 1).</p>

				<h4>Form issues</h4>
				<fieldset>
				  <legend>Name</legend>
				  <label htmlFor="first_name-2">First&nbsp;</label>
				  <input type='text' id='firstname-2' /><br />
				  <input type='text' placeholder='middle initial' /><br />
				  <label htmlFor="1lastname">Last&nbsp;</label>
				  <input type='text' id='1lastname' />
				</fieldset>

      </div>
    );
  }
};
