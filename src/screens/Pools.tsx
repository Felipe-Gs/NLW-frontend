import {useEffect, useState} from 'react'
import { VStack, Icon, Toast, useToast } from "native-base";
import { Button } from "../components/Button";
import {useNavigation} from "@react-navigation/native";
import { Header } from "../components/Header";
import { Octicons } from '@expo/vector-icons';
import { api } from "../services/api";
import { Loading } from '../components/Loading';

import { PoolCard } from '../components/PoolCard';

export function Pools(){
    const {navigate} = useNavigation();
    const [isLoading, setIsLoading] = useState(true)
    const toast = useToast();

    async function fecthPools(){
        try {

            setIsLoading(true)
            const response = await api.get('/pools');
            console.log(response);


        } catch (error) {
            console.log(error);

            toast.show({
                title: 'Não foi possivel carregar os bolões!',
                placement:'top',
                bgColor: 'red.500'
            });

        }finally{

            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fecthPools();
    },[]);

    return(
        <VStack flex={1} bgColor="gray.900">
            <Header title="Meus bolões"/>

            <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="grey" pb={4} mb={4}>
                <Button 
                    title="BUSCAR BOLÃO POR CODIGO"
                    leftIcon={<Icon as={Octicons} name="search" color={'black'} size="md"/>}
                    onPress={()=> navigate('find')}
                />
            </VStack>
        <Loading/>
        </VStack>
    )
}