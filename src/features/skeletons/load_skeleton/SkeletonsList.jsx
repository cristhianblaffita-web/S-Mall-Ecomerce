const SkeletonsList = ({ quantity = 8, children}) => {
  return (
    <>
      {Array.from({ length: quantity }, (_, i) => (
        children
      ))}
    </>
  )
}

export default SkeletonsList