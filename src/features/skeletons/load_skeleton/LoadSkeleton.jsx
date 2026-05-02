import "./LoadSkeleton.css"

const LoadSkeleton = (
  {
    width = "150px", 
    height = "25px",
    bg = "var(--color-border)",
    shimmer = "rgba(255, 255, 255, .6)",
    accent = "var(--color-surface)",
    radius = "16px"
  }) => {
  
  return (
    <div 
      className="default-skeleton"
      style={{
        position: "relative",
        overflow: "hidden",
        width: `${width}`,
        height: `${height}`,
        background: `${bg}`,
        borderRadius: `${radius}`,
        "--shimmer-bg": `${shimmer}`
      }}
    >

    </div>  
  )
}

export default LoadSkeleton