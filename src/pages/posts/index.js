import * as React from "react"
import { Link } from "gatsby"

const posts = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      link: 'sobre-blog',
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      link: '#',
    },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      link: '#',
    },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      link: '#',
    },
]

const PostPage = () => {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Leiam nossos Posts</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><strong className="text-yellow-500">Dev</strong>emos <strong className="text-yellow-500">empreender</strong> sempre que possível</p>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600 text-justify tab">
          Porque nós DEV's empreendemos ou deviamos? Nós programadores possuimos a habilidade de transformar ideias em realidade através do código. Empreender permite que usemos nossas habilidades de forma criativa e inovadora para criar soluções úteis e valiosas para nossos usuários, além de permitir que nós tenhamos mais controle sobre nosso próprio destino e crescimento profissional. Empreender também oferece a oportunidade de fazer a diferença na sociedade, contribuindo para o desenvolvimento de novas tecnologias e soluções que podem ajudar a melhorar a vida das pessoas.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {posts.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900"><a href={feature.link}>{feature.name}</a></p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPage

export const Head = () => <title>Posts</title>