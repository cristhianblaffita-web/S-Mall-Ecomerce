const DataStateHandler = ({
  isLoading,
  error,
  isEmpty,
  loadingComponent,
  errorComponent,
  emptyComponent,
  children,
}) =>
  isLoading
    ? loadingComponent
    : error ?
      errorComponent :
      isEmpty
        ? emptyComponent
        : children;

export default DataStateHandler;
