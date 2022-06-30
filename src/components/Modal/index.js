import React from 'react'
import {ContainerModal,ButtonCloseModal, ContentModal,ContentModalArea,ContentModalAreaRow} from './styles'
import { FiX } from 'react-icons/fi'

export default function Modal({conteudo, close}){
    return(
        <ContainerModal>
            <ContentModal>
                <ButtonCloseModal onClick={close}>
                    <FiX size={20} color='#fff' />
                    Fechar
                </ButtonCloseModal>
                <ContentModalArea>
                    <ContentModalAreaRow>
                        <span>Cliente:</span>
                        <h4>{conteudo.cliente}</h4>
                    </ContentModalAreaRow>

                    <ContentModalAreaRow>
                        <span>Assunto:</span>
                        <h4>{conteudo.assunto}</h4>
                    </ContentModalAreaRow>

                    <ContentModalAreaRow>
                        <span>Cadastrado em:</span>
                        <h4>{conteudo.createdFormated}</h4>
                    </ContentModalAreaRow>

                    <ContentModalAreaRow>
                        <span>Status:</span>
                        <h4 style={{color: '#fff', backgroundColor: conteudo.status === 'Em Aberto' ? '#5cb85c' : '#999'}}>{conteudo.status}</h4>
                    </ContentModalAreaRow>

                    {conteudo.complemento !== '' && (
                    <>
                        <h4>Complemento</h4>
                        <p style={{marginTop: 6}}>
                            {conteudo.complemento}
                        </p>
                    </>
                )}

                </ContentModalArea>
            </ContentModal>
        </ContainerModal>
    )
}