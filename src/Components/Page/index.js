import NavBar from '../NavBar';
import './page.css'
const Page=({children, useAbsoluteCenter= false, showNavBar = true, pageTitle="..."})=>{
/* 
props: es una propiedad para extraer informacion
particular
children palabra reservada viene dentro de props
*/
let className = ['page'];
if(useAbsoluteCenter){
    className.push('absoluteCenter')
}
if(showNavBar){
    className.push('withNavBar')
}
    return(
        <>
        <section className={className.join(' ')}>
            {showNavBar && <NavBar title = { pageTitle }/>}
            {children}
        </section>
   
        </>
    )
}
export default Page;

/*

const Page=()=>{
    return(
        <>
        </>
    )
}
export default Page;
*/