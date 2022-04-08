export const combineProviders = (...components) => {

  return components.reduce((Accumulated, CurrentComponent) => {
      return ({ children }) => {

        return (
          <Accumulated>
            <CurrentComponent>{children}</CurrentComponent>
          </Accumulated>
        );
      };
    }, ({ children }) => <>{children}</>);

};
