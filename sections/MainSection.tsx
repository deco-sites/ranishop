import DevSvg from '../components/DevIcon.tsx';

export interface props{
    nome: string;
    sobre: string;
}


export default function sectionSobre({nome, sobre}: props){
    return (
        <section className="w-full max-w-screen-2xl py-10 justify-center flex gap-3 container mx-auto px-2" id="sobre">
            <div className="w-full justify-center items-center px-10 py-10">
                <h1 className="font-bold text-gray-800 text-5xl w-auto">Olá, eu sou {nome}!</h1>
                <h2 className="font-bold text-gray-700 text-2xl w-auto pt-8 ">Sobre mim</h2>
                <p className="text-gray-700 text-justify text-lg py-2">{sobre}</p>
                
            </div>
            <div className="w-full justify-center items-center">
                <div className="w-auto px-10 py-10">
                    <DevSvg/>
                </div>
            </div>
        </section>
    );
}