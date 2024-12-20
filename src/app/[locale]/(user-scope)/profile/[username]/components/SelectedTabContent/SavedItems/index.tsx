import { EmptyPapertray } from '@/assets/common/EmptyPapertray'
import { Container } from '@/components/toolkit/Container'

export const SavedItems: React.FC = () => {
  return (
    <Container
      as="section"
      className="animate__animated animate__fadeIn flex flex-col gap-4 rounded-[6px] bg-white px-6 py-8 lg:gap-8"
      data-cid="saved-items-profile"
    >
      <article className="flex w-full flex-col gap-8 lg:gap-16">
        <div className="flex w-full flex-col">
          <h2 className="font-medium lg:text-xl">Itens Salvos</h2>
          <p className="text-sm text-slate-500">
            Veja aqui os conteúdos que você achou relevantes e salvou para
            acessar depois
          </p>
        </div>
        <div className="flex w-full items-center justify-center gap-2 pb-4">
          <EmptyPapertray className="h-5 w-5" />
          <p className="text-slate-500">Você não salvou nada até o momento</p>
        </div>
      </article>
    </Container>
  )
}
