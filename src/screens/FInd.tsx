import { Heading, VStack } from 'native-base'

import React from 'react'
import { Header } from '../components/Header'
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default function Find() {
  return (
    <VStack flex={1} bgColor={'gray.900'}>
      <Header title={'Buscar por codigo'} showBackButton/>
      
      <Heading fontFamily="heading" color='white' fontSize="xl" my={10} textAlign="center">
        Encontre um bolão atraves {'\n'}
        de seu codigo unico
        
      </Heading>
      <Input 
        mb={5} 
        placeholder="Qual o codigo do  bolão?"
      />

      <Button 
        type='SECONDARY'
        title="criar meu bolão"
      />
      
    </VStack>
  )
}
