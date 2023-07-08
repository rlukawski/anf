import React from 'react';

interface AppProvidersProps {
}

export const AppProviders = (props: React.PropsWithChildren<AppProvidersProps>) => {
  const { children } = props

  // 🔥 w następnych modułach dojdą providery
  return <>
    {children}
  </>
}
