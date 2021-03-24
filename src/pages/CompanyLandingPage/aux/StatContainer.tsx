import './style.css'

export default (props: any) => (
    <div className="joint-shape"> 
        <div className="rectangle">
            <p className="stat-number">
                {props.count}
            </p>
            <br />
            <p className="stat-text">
                {props.text}
            </p>
        </div>
        <div className="half-circle"></div>
    </div>
)