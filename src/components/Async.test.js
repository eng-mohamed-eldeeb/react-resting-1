import Async from "./Async"
import {render, screen } from '@testing-library/react';

describe('Aysnc component', () => {
    test('renders post if request succeeds', async () => {
        render(<Async/>);

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0)
    })
})