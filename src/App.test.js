import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Create New ToDo', () => {
  render(<App />);

  const inputElement = screen.getByRole('textbox');
  const buttonElement = screen.getByRole('button', { name: 'Add' });

  fireEvent.change(inputElement, { target: { value: 'tasks one' }});
  fireEvent.click(buttonElement);
  
  const validateTodo = screen.getByRole('button', { name: 'tasks one' });

  expect(inputElement).toBeInTheDocument();
  expect(validateTodo).toBeInTheDocument();
});

test('Change Status ToDo', () => {
  render(<App />);

  const inputElement = screen.getByRole('textbox');
  const buttonElement = screen.getByRole('button', { name: 'Add' });

  fireEvent.change(inputElement, { target: { value: 'tasks one' }});
  fireEvent.click(buttonElement);

  const statusTodo = screen.getByRole('button', { name: 'tasks one' });
  // console.log(statusTodo.value);
  fireEvent.click(statusTodo);

  expect(statusTodo.value).toEqual('true');
});

test('Remove ToDo', () => {
  render(<App />);

  const buttonDelete = screen.getByTestId("1");
  const todoElement = screen.getByRole('button', { name: 'Vivamus id arcu laoreet'});

  fireEvent.click(buttonDelete);
  // console.log(buttonDelete);
  
  expect(todoElement).toBeInTheDocument();
});

test('Filters ToDo complete', () => {
  render(<App />);

  const buttonFilter = screen.getByRole('button', { name: 'complete'});
  const statusTodo = screen.getByRole('button', { name: 'Donec cursus mi'});

  fireEvent.click(buttonFilter);
  // console.log(statusTodo.value);
  
  expect(statusTodo.value).toEqual('true');
});