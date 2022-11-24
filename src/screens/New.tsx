import { Heading, VStack, Text, useToast} from 'native-base'

import Logo from '../assets/logo.svg';
import React, {useState} from 'react'
import { Header } from '../components/Header'
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import { api } from '../services/api';

export default function New() {
  const {singIn, user, clicar} =useAuth();
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false)


  const toast = useToast();

  async function handlePoolCreate(){
    if(!title.trim()){
      return toast.show({
        title: 'Informe um nome para seu bolão!',
        placement: 'top',
        bgColor: 'red.500'
      })
    }

    try {
      setIsLoading(true);

      await api.post('/pools', {title})
      toast.show({
        title: 'Bolão criado com sucesso',
        placement: 'top',
        bgColor: 'green.500'
      })

      setTitle('')
      
    } catch (error) {
      console.log(error);
      toast.show({
        title: 'Não foi possivel cria o seu bolão',
        placement: 'top',
        bgColor: 'red.500'
      });

    }finally{
      setIsLoading(false)
    }
  }

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
        onChangeText={setTitle}
        value={title}
      />

      <Button 
        type='SECONDARY'
        title="criar meu bolão"
        onPress={handlePoolCreate}
        isLoading={isLoading}
      />
      <Text color="grey" fontSize="sm" textAlign="center" px={10} mt={4}>
        Após criar seu bolão, voce recebera um codigo unico
         que podera usar para convidar outras pessoas.
      </Text>
    </VStack>
  )
}
