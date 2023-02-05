import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Body from '../Body';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { RESTAURANT_DATA } from '../mocks/data';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(RESTAURANT_DATA),
    }),
);
test('Shimmer should load on HomePage', () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>,
    );
    // console.log(body);
    const shimmer = body.getByTestId('shimmer');
    expect(shimmer).toBeInTheDocument();
});
test('search for string (food) on Homepage', async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>,
    );
    await waitFor(() => expect(body.getByTestId('search-btn')));
    const input = body.getByTestId('search-input');
    fireEvent.change(input, {
        target: { value: 'food' },
    });
    const searchBtn = body.getByTestId('search-btn');
    fireEvent.click(searchBtn);

    const resList = body.getByTestId('res-list-djd');

    expect(resList.children).toBe(15);
});
