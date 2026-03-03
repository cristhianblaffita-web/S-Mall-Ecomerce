import "./LoadSkeleton.css"

const LoadSkeleton = (
  {
    width = "150px", 
    height = "25px",
    bg = "#e4d6db",
    shimmer = "rgba(255, 255, 255, .6)",
    accent = "#fff",
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