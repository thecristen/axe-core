import React from 'react';
import axe from 'axe-core';
import { mountToDoc } from './test-helpers';

import BadPage from './BadPage';

test('BadPage has at least one aXe violation', (done) => {
  const component = mountToDoc(
    <BadPage />
  );
  const node = component.getDOMNode();

  axe.run(node, (err, { violations }) => {
    expect(err).toBe(null);
    expect(violations).not.toHaveLength(0);
    done();
  });
});

test('BadPage has a form label violation', (done) => {
  const component = mountToDoc(
    <BadPage />
  );
  const node = component.getDOMNode();

  axe.run(node, {
		runOnly: {
     type: "rule",
     values: [ "label" ]
   }
 }, (err, { violations }) => {
    expect(err).toBe(null);
    expect(violations).not.toHaveLength(0);
    done();
  });
});

test.only('BadPage has a color contrast violation', (done) => {
  const component = mountToDoc(
    <BadPage />
  );
  const node = component.getDOMNode();

  axe.run(node, {
		runOnly: {
     type: "rule",
     values: [ "color-contrast" ]
   }
 }, (err, { violations }) => {
    expect(err).toBe(null);
    expect(violations).not.toHaveLength(0);
    done();
  });
}, 40000);
