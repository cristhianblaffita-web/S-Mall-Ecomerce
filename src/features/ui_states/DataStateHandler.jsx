const DataStateHandler = ({
  isLoading,
  error,
  isEmpty,
  loadingComponent,
  errorComponent,
  emptyComponent,
  children,
}) =>
  error
    ? errorComponent
    : isLoading
      ? loadingComponent
      : isEmpty
        ? emptyComponent
        : children;

export default DataStateHandler;
