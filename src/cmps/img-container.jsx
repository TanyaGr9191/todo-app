export const ImgContainer = ({ src, name, width, divStyle }) => (
    <div className={divStyle}>
        <img src={src} alt={name} width={width} />
    </div>
)
