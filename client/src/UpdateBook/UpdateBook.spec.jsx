/* eslint-disable no-undef */
import { Route } from 'react-router-dom';

import UpdateBook from './UpdateBook';
import useFetchBook from './useFetchBook';
import useUpdateBook from './useUpdateBook';

jest.mock('./useFetchBook');
jest.mock('./useUpdateBook');

describe('Update Book', () => {
  beforeEach(() => {
    useFetchBook.mockImplementation(() => ({}));
    useUpdateBook.mockImplementation(() => ({}));
  });

  it('fetches the book data for the given id', () => {
    // no need to import since it has been set as a global property in setupTests.js
    renderWithRouter(
      () => (
        <Route path="/:id">
          <UpdateBook />
        </Route>
      ),
      '/test-book-id'
    );

    expect(useFetchBook).toHaveBeenCalledWith('test-book-id');
  });

  describe('while loading', () => {
    it('renders a loader', () => {
      useFetchBook.mockImplementation(() => ({
        isLoading: true,
      }));

      const { getByTestId } = renderWithRouter(
        () => (
          <Route path="/:id">
            <UpdateBook />
          </Route>
        ),
        '/test-book-id'
      );

      expect(getByTestId('loader')).toBeTruthy();
    });
  });

  describe('with an error', () => {
    it.todo('renders an error message');
  });

  describe('with data', () => {
    it.todo('renders the  updated book title and the book form');

    describe('on book form submit', () => {
      it.todo('updates the book data and navigates to the root page');
    });
  });
});
