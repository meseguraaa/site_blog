import Image from 'next/image';


const customesStory = [
  {
    content: 'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.',
    ahthor: {
      name: 'Annette Bones',
      role: 'CEO na Anne Corp',
      avatar: '/avatar_AnneCorp.png'
    }
   
  },
  {
    content: 'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
    ahthor: {
      name: 'Jacob Jones',
      role: 'CEO na JJ Org',
      avatar: '/avatar_JacobJones.png'
    }
    
  }
]

export const CustomerStorySection = () => {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2 className="font-sans text-heading-xl text-gray-100">Quem utiliza, aprova!</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {customesStory.map((customesStory) => (
            <div key={customesStory.ahthor.name} className="flex flex-col gap-6 bg-gray-500 p-6 rounded-lg md:p-12">
              <p className="text-balance text-gray-200">
                {customesStory.content}
              </p>
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image src={customesStory.ahthor.avatar} alt={customesStory.ahthor.name} fill className= "object-cover"/>
                </div>
                <div className="flex flex-col">
                  <strong className="text-gray-200 text-sm">{customesStory.ahthor.name}</strong>
                  <span className="text-xs text-gray-300">{customesStory.ahthor.role}</span>
                </div>  
              </div>
            </div>  
              ))}
        </div>
      </div>
    </section>
    )
}