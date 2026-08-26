import "./error.css"

export default function ErrorMessage({onClose,error}){
    return  <div className="overlay" onClick={onClose}><h2>{error}</h2></div>
}