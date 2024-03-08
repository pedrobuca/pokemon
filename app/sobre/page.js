import Image from 'next/image'
import Dragon from '../../public/images/charizard.png'


export default function Sobre (){

    return(
     <header className="flex items-center justify-center h-full">
       
        <div className="">
            <div className="flex justify-center mt-4 max-w-md">
                <Image src={Dragon} alt='Dragon' />
            </div>

           <div className="mt-4 ">
             <span>Site para Descobrir as caracteristicas dos Pokemons!</span>
           </div>
        </div>

     </header>
    )
}