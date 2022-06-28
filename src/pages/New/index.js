import React from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import {FiPlusCircle} from 'react-icons/fi'

import {Container, ContainerNew, ContextHeaderTitle, ContextMain
        ,FormNew, LabelNew, SelectNew,OptionNew,
        InputRadioOption, SpanNew, AreaInputsRadio, TextAreaNew,ButtonNew
} from './styles'

export default function New(){

    function handleAddNew(e){
        e.preventDefault();

        alert('clicou no botão')
    }

    return(
    <Container>
        <ContextHeaderTitle>
            <Header/>
    
            <ContextMain>
                <Title name='Novo Chamado'>
                    <FiPlusCircle size={25} />
                </Title>

                <ContainerNew>
                    <FormNew onSubmit={handleAddNew}>
                        <LabelNew>Clientes</LabelNew>
                        <SelectNew key={1} value={1}>
                            <OptionNew>Sujeito Programador</OptionNew>
                        </SelectNew>

                        <LabelNew>Assuntos</LabelNew>
                        <SelectNew>
                            <OptionNew value='Suporte'>Suporte</OptionNew>
                            <OptionNew value='Visita Técnica'>Visita Técnica</OptionNew>
                            <OptionNew value='Financeiro'>Financeiro</OptionNew>
                        </SelectNew>

                        <LabelNew>Status</LabelNew>
                        {/* em aberto, progresso, atendido
                            label complementto
                            text area opcional..
                        */}
                        <AreaInputsRadio>
                            <InputRadioOption
                                type='radio'
                                name='radio'
                                value='Aberto'
                                />
                            <SpanNew>Em Aberto</SpanNew>

                            <InputRadioOption
                                type='radio'
                                name='radio'
                                value='Progresso'
                                />
                            <SpanNew>Progresso</SpanNew>

                            <InputRadioOption
                                type='radio'
                                name='radio'
                                value='Atendido'
                                />
                            <SpanNew>Atendido</SpanNew>
                        </AreaInputsRadio>

                        <LabelNew>Complemento</LabelNew>
                        <TextAreaNew type='text' placeholder='Descreva seu complemento... (opcional)'/>

                        <ButtonNew type='submit'>Registrar</ButtonNew>

                    </FormNew>
                </ContainerNew>

            </ContextMain>
        </ContextHeaderTitle>
    </Container>
    )
}