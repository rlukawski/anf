import React, { ComponentProps } from 'react';

import { Meta } from '@storybook/react';

import { Button } from 'ui/atoms';
import { useModalToggle } from 'ui/molecules';

import { useErrorScreen } from './ErrorScreenContext';
import { ErrorPage } from './ErrorPage';
import { ErrorModal } from './ErrorModal';
import { ErrorBoundary } from './ErrorBoundary';
import { KaboomSync } from './Kaboom';

import { useRandom } from 'stories';
export default {
  title: 'Lessons/M9 Error handling/Error UI',
  component: ErrorPage,
  argTypes: {
  },
} as Meta;

export const _ErrorPage = () => {
  return <ErrorPage errorMessage={{ type: "CONNECTION_FAILURE" }} />
}

export const _ErrorModal = () => {
  const [isOpen, open, close] = useModalToggle()

  return <>
    <Button variant="PRIMARY" onClick={open}>open</Button>
    <ErrorModal
      isOpen={isOpen}
      errorMessage={{ type: 'CONNECTION_FAILURE' }}
      onClose={close}
    />
  </>
}

export const _ErrorBoundary = () => {
  const [random, randomize] = useRandom();
  return (
    <>
      <ErrorBoundary>
        <Button variant="SECONDARY" onClick={randomize}>randomize ({random})</Button>
        <KaboomSync shouldFail={() => random > 0.5}>
          Some content here, will explode if random &gt; 0.5
        </KaboomSync>
      </ErrorBoundary>
    </>
  );
};

export const _ErrorScreen = () => {
  const { showError } = useErrorScreen()

  return <>
    <Button
      variant="PRIMARY"
      onClick={() => showError({
        layout: "ERROR_PAGE",
        message: { type: 'CONNECTION_FAILURE' }
      })}
    >kaboom! page</Button>

    <Button
      variant="PRIMARY"
      onClick={() => showError({
        layout: "ERROR_MODAL",
        message: { type: 'CONNECTION_FAILURE' }
      })}
    >kaboom! modal</Button>
  </>
}
