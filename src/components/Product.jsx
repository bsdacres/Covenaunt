import { A } from '@solidjs/router';
import product from './product.module.css'
import { Motion } from '@motionone/solid';




export default function Product(props) {
  return (
 <>
   <A class={product.anchor} href={props.permalink} onchange={console.log("something Changed")}>
    <div class={product.wrapper}>
      <Motion.div 
          hover={{ y:-20 }}
          transition={{
            duration: .5
          }}
          class={product.product}>
        <img class={product.img} src={props.image.url} alt='Loading' onerror={console.log("img linK" + props.image.url )}  height={800} width={600}/>
        <div  class={product.productdata}> 
          <p  class="product-title">{props.name}</p>
          <p>${props.price.raw}</p>
        </div>
      </Motion.div>
    </div>  
  </A> 
  </>
  );
}
