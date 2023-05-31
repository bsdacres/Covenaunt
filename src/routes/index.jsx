import { A, Title } from "solid-start";
import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import CollectionsPreview from "~/components/CollectionsPreview";
import { onMount } from "solid-js";
import  styles  from "./styles.module.css"
import { Motion } from "@motionone/solid";
import ProductPage from "./Store/ProductPage";
import Product from "~/components/Product";

onMount(async ()=>{
const merchant = await commerce.merchants.about();
const { data: categories } = await commerce.categories.list();
const { data: products } = await commerce.products.list();

return {
  props: {
    merchant,
    categories,
    products,
  },
};}
)

const style = 
{
  height: "65vh",
  width: "70vw",
  "border-radius": "20px",
}
export default function ({ merchant, categories, products }) {
  return (

  <>
    
    <Motion.div
    class={styles.landing}
    animate={{ width: [0, 100] } }
    transition={{ duration: 3, easing: "ease-in-out" }}
    >
      <div draggable class={styles.img}  alt='landing-image'>
        <Motion.div 
        class={styles.gradient}>
          <Motion.div class={styles.grad_container}
                animate={{ opacity: [0, 100] } }
                transition={{ duration: 3, easing: "ease-in-out", delay: 3}}>
            <h1>Canto III</h1>
            <h1> A Woodland Tradegy</h1>
            <p>Discover the Fable</p>
          </Motion.div>
        </Motion.div>
       <video src="https://media.discordapp.net/attachments/883034757376639036/1113009187669151874/Gucci_Cruise_2024_Fashion_Show.mp4" type="video/mp4" autoplay loop />
      </div>
      <hr></hr>
      <div class={styles.window}> 
        <div class={styles.left_window} >
          <p>Discover More</p> 
        </div>
        <div class={styles.right_window}>
          <p>Discover More</p> 
        </div>
      </div>
      <div class={styles.collect}>
        <div>
        <CollectionsPreview
        title="Canto I: Exordium"
        background='https://cdn.discordapp.com/attachments/883034757376639036/1105714847934599228/IMG_1429_1.jpg'
        />
        <CollectionsPreview
        draggable
        title="Canto II: Abyssal Hymns"
        background='https://cdn.discordapp.com/attachments/883034757376639036/1105714094482391100/d71c8afbb30a4e738193954ebd82de22.gif'
        />
        <CollectionsPreview
        title="Canto III: A Woodland Tragedy"
        background='https://cdn.discordapp.com/attachments/883034757376639036/1107536476280995901/FOR-INSTAGRAM-5.jpg'
        />
        <CollectionsPreview
        title="Canto IV: Ode to Aether"
        background='https://discord.com/channels/@me/883034757376639036'
        />
        </div>
      </div>
      
    </Motion.div>
    </> 
  );
}

