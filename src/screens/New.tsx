import { Heading, VStack, Text } from 'native-base'
import Logo from '../assets/logo.svg';
import React from 'react'
import { Header } from '../components/Header'
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default function New() {
  return (
    <VStack flex={1} bgColor={'gray.900'}>
      <Header title={'Criar novo bolão'}/>
      <VStack mt={8} mx={5} alignItems={"center"}>
        <Logo/>
      </VStack>
      <Heading fontFamily="heading" color='white' fontSize="xl" my={8} textAlign="center">
        Crie seu proprio bolão da copa{'\n'}
         e compartilhe entre amigos!
      </Heading>
      <Input 
        mb={2} 
        placeholder="Qual o nome do seu bolão?"
      />

      <Button 
        type='SECONDARY'
        title="criar meu bolão"
      />
      <Text color="grey" fontSize="sm" textAlign="center" px={10} mt={4}>
        Após criar seu bolão, voce recebera um codigo unico
         que podera usar para convidar outras pessoas.
      </Text>
    </VStack>
  )
}
