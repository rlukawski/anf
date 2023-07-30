import React, { useEffect } from 'react';

import { Logger, LoggerProvider, HTTPLogger } from 'lessons/m9/logger';
import { ErrorScreenProvider } from 'lessons/m9/error-ui';

interface AppProvidersProps {
  logger?: Logger
}

export const AppProviders = (props: React.PropsWithChildren<AppProvidersProps>) => {
  const { children, logger = new HTTPLogger() } = props

  useEffect(() => {
    logger.debug('initialized app')
  }, [logger])

  return (
    <LoggerProvider logger={logger}>
      <ErrorScreenProvider>
        { children }
      </ErrorScreenProvider>
    </LoggerProvider>
  )
}
