import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import styled from 'styled-components';

const Btn = styled.button`
  opacity: 0;
`;

describe('button', () => {
  it('test should pass', () => {
    const component = renderer.create(
      <Btn>Click me</Btn>
    );

    const tree = component.toJSON();

    expect(tree).toHaveStyleRule('opacity', '0');
  });
});
