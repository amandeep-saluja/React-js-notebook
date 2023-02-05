import '@testing-library/jest-dom';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
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
    // expect(shimmer).toBeInTheDocument();
    expect(shimmer.children.length).toBe(12);
});

test('Restaurants should load on HomePage', async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>,
    );
    await waitFor(() => expect(body.getByTestId('search-btn')));

    // console.log(body);
    const restList = body.getByTestId('rest-list');
    // expect(shimmer).toBeInTheDocument();
    expect(restList.children.length).toBe(15);
});
test('search for string (food) on Homepage', async () => {
    let body;
    await act(() => {
        body = render(
            <StaticRouter>
                <Provider store={store}>
                    <Body />
                </Provider>
            </StaticRouter>,
        );
    });
    await waitFor(() => expect(body.getByTestId('search-btn')));
    const input = body.getByTestId('search-input');
    await act(() => {
        fireEvent.change(input, {
            target: { value: 'food' },
        });
    });
    const searchBtn = body.getByTestId('search-btn');
    await act(() => {
        fireEvent.click(searchBtn);
    });

    const restList = body.getByTestId('rest-list');

    expect(restList.children.length).toBe(1);
});
