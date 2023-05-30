


function Store(props) {
    return(
        <div>
        
        <div className="card" style={{width: "18rem", height: "450px", marginBottom:"10px" , marginTop: "40px"}} >
        <img src={props.storeProducts.image} className="card-img-top" alt="..."  style={{width: "200", height: "300px"}}/>
        <div className="card-body">
          <h5 className="card-title text-truncate">{props.storeProducts.title}</h5>
          <h4 className="card-price">${props.storeProducts.price}</h4>
          <a href="https://w3school.com/" className="btn btn-primary">Add to Card</a>
        </div>
      </div>
      </div>
    );
    
}
export default Store