import { Center, Text, Icon  } from 'native-base';
import Logo from '../assets/logo.svg';
// import Button from '../components/Button';
import { Button } from '../components/Button';
import {Fontisto} from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';

export default function SingIn() {
  
  const {singIn, user} =useAuth();
  console.log('Dados do usuario: ', user)
  return (
    <Center flex={1} backgroundColor={"black"} padding={7}>
        <Logo height={40} width={150}/>
        <Button 
          leftIcon={<Icon as={Fontisto} name="google" color="white" size="md"/>} 
          title="ENTRAR COM O GOOGLE"
          type='SECONDARY'
          mt={12}
          onPress={singIn}
        />
        <Text color={'white'} textAlign={"center"} mt={4}>Não utilizamos nenhuma informações além {'\n'}do seu email para criação de sua conta.</Text>
       
    </Center>
  )
}
// 1 hora e 24 minutos do video, retomar dessa parte....