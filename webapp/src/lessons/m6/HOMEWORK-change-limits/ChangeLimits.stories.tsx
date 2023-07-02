import React from 'react';

import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ChangeLimitsProcess } from './ChangeLimitsProcess';


export default {
  title: 'Lessons/M6 State Machines/Change Limits',
  parameters: {
  },
  argTypes: {}
} as Meta;

const notify = action('notify')

export const _ChangeLimitsProcessMachine = () => {
  const successFn = () => {
    notify('succeeded')
  }

  const cancelFn = () => {
    notify('cancelled')
  }

  return <ChangeLimitsProcess
    onSuccess={successFn}
    onCancel={cancelFn}
  />
}
