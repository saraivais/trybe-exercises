import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testa se não exibe a mensagem de email válido ou inválido se não houver sido enviado nenhum email ainda.', () => {
  render(<ValidEmail email={''}/>);
  const mailMessageSuccess = screen.queryByText('Email Válido');
  const mailMessageFailure = screen.queryByText('Email Inválido');
  expect(mailMessageSuccess).not.toBeInTheDocument();
  expect(mailMessageFailure).not.toBeInTheDocument();
});

test('Testa se, ao enviar email inválido, a mensagem de erro possui a cor vermelha', () => {
  const invalidMail = 'invalidmailhuh'
  render(<ValidEmail email={ invalidMail } />);
  const mailMessage = screen.getByTestId('email-message');
  expect(mailMessage).toBeInTheDocument();
  expect(mailMessage).toHaveTextContent('Email Inválido');
  expect(mailMessage).toHaveAttribute('class', 'red');
});

test('Testa se, ao enviar email válido, a mensagem de erro possui a cor verde', () => {
  const validMail = 'email@email.com';
  render(<ValidEmail email={ validMail } />);
  const mailMessage = screen.getByTestId('email-message');
  expect(mailMessage).toBeInTheDocument();
  expect(mailMessage).toHaveTextContent('Email Válido');
  expect(mailMessage).toHaveAttribute('class', 'green');
});