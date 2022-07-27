

export const GifItem = ({title, url}) => {

   
  return (
    <div className="card">
        <img src={url} alt={title} srcSet="" />
        <p>{title}</p>
    </div>
  )
}
  

