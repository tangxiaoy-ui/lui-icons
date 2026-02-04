import { describe, it, expect } from 'vitest';
import { createLUIIcon } from '../src/lui-icon-react';
import { airVent } from './testIconNodes';
import { render } from '@testing-library/react';

describe('Using createLUIIcon', () => {
  it('should create a component from an iconNode', () => {
    const AirVent = createLUIIcon('AirVent', airVent);

    const { container } = render(<AirVent />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeDefined();
  });

  it('should create a component from an iconNode with iconName', () => {
    const AirVent = createLUIIcon('air-vent', airVent);

    const { container } = render(<AirVent />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeDefined();
  });

  it('should include backwards compatible className', () => {
    const Layout2 = createLUIIcon('layout-2', airVent);

    const { container } = render(<Layout2 />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeDefined();
  });
});
