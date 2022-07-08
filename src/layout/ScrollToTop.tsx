import React from 'react';
import { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface propsType extends RouteComponentProps {
  children: React.ReactNode
}

export const ScrollToTop = withRouter(({ history, children }: propsType) => {
  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    return () => {
      unListen();
    };
  }, [history,]);

  return (
    <>
      {children}
    </>
  );
});
