import '../../App.css';
// import { Link } from 'react-router-dom';
function BrouserCategories(prop){
    const{src,brouseName,alt}=prop
    // console.log(prop)
//    const click =onclick{}

return(
    <div style={{cursor:"pointer"}}>
        <img src={src} alt={alt} />
        <h3>{brouseName}</h3>
    </div>
)
}
export default BrouserCategories