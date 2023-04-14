import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2023,
        title: 'Eastman Chemical do Brasil LTDA - Analista fiscal e Desenvolvedor de automação',
        duration: '9 anos',
        details: 'Acompanhamento da legislação tributária. Entrega de obrigações fiscais: SPED fiscal, SPED contribuição, SPED REINF, ECF, DCTF, DCTFWEB, DIRF, GIAS, PERD COMP e Resolução 13. Automação de tarefas utilizando Python, VBA e SAP. Desenvolvimento de projetos em mudanças sistêmicas e comercial. Manutenção das tabelas de impostos dentro do SAP.'
    },
    {
        year: 2014,
        title: 'Eastman Chemical do Brasil LTDA - Estágio',
        duration: '18 meses',
        details: 'Escrituração de notas fiscais no livro de entrada, escrituração de notas de serviços no GISSONLINE, apuração do ISS, conferência do Livro Fiscal, apuração do ICMS, IPI e PIS/COFINS no regime não-cumulativo, acompanhamento e entrega do SPED FISCAL e SPED CONTRIBUIÇÕES, acompanhamento e entrega da GIA, Apuração de impostos retidos, acompanhamento da entrega da DCTF, conferência de pedidos e classificação de despesas para contabilidade.'
    },
    {
        year: 2012,
        title: 'XL Resseguros S.A - Estágio',
        duration: '6 meses',
        details: 'Lançamento de documentos no contas a pagar. Conciliação de contas bancárias. Composição do fluxo de caixa. Classificação de lançamentos contábeis.'
    },
    {
        year: 2011,
        title: 'Professor de Matemática',
        duration: '3 anos',
        details: 'Principais atividades: Hábil a lidar com o público tal como pais, responsáveis, docentes e discentes, bem como as atividades ao cargo de instrutor com os alunos, além de atender as diversas palestras e cursos da diretoria de ensino, desenvolvendo um perfil professional qualificado para as diversas atividades requisitadas tanto em sala de aula bem como na área de atuação pedagógica.'
    },
]

function Work() {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl my-10 font-bold text-center text-[#001b5e]'>Experiência profissional</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))}
        </div>
    )
}

export default Work