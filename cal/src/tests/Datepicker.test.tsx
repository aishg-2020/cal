import { render, screen,fireEvent } from '@testing-library/react';
import Datepicker from '../components/Datepicker/Datepicker';

test('displays the current date as the initial date', () => {
  render(<Datepicker setSelectedDateOuter={() => {}} />);
  const datepicker = screen.getByLabelText('Select a date:');
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split('T')[0];
  expect(datepicker).toHaveValue(currentDateString);
});

test('updates the displayed date when a new date is selected', () => {
    const setSelectedDateOuter = jest.fn();
    render(<Datepicker setSelectedDateOuter={setSelectedDateOuter} />);
    const datepicker = screen.getByLabelText('Select a date:');
    const newDate = new Date(2023, 4, 19); // May 19, 2023
    const newDateString = newDate.toISOString().split('T')[0];
    fireEvent.change(datepicker, { target: { value: newDateString } });
    expect(datepicker).toHaveValue(newDateString);
  });
