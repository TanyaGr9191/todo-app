export const ImgContainer = (props) => {
    
    const { src, name, width, divStyle} = props
    
    return (
    <div className={divStyle}>
        <img src={src} alt={name} width={width} />
    </div>
    )
}