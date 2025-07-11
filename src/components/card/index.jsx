import './card.css'


export const Card = ({data}) =>{
    return (
        <div className='Card' key={data.id}>
            <div className='text'>
            <img src={data.img} alt="" />
            <h5>{data.aksiya}</h5>
            </div>
            <h2>Add To Cart</h2>
            <h3>{data.name}</h3>
            <h4>${data.price}</h4>
            <h6>{data.reting}</h6>
        </div>
    )
} 

