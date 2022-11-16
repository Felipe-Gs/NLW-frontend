import { createContext, ReactNode, useState, useEffect} from "react";
import * as Google  from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

interface UserProps{
    name: string;
    avatarUrl: string;
}


export interface AuthContextDataProps{
    user: UserProps;
    isUserLoading:boolean;
    singIn: ()=> Promise<void>;
}

interface AuthProviderProps{
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);



export function AuthContextProvider({ children }: AuthProviderProps){
    const [user, setUser] =useState<UserProps>({} as UserProps)
    const [isUserLoading, setIsUserLoading] = useState(false);

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '16261745862-2j6n8e50njp82276tcpuu8lr1o3feuv6.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({useProxy:true}),
        scopes:['profile', 'email']
    })

    

    async function singIn() {
        try{
            setIsUserLoading(true);
            await promptAsync();
            
        }catch(eroor){
            console.log(eroor);  
            throw eroor;
        }finally{
            setIsUserLoading(false);
        }
    }

    async function singInWithGoogle(access_token:string) {
        console.log('token de autentificação!', access_token)
    }

    useEffect(()=>{
        if(response?.type === 'success' && response.authentication?.accessToken){
            singInWithGoogle(response.authentication.accessToken);
        }
    },[response]);
     
    return(
        <AuthContext.Provider value={{
            singIn, 
            isUserLoading,
            user,
        }}>
            {children}

        </AuthContext.Provider>
    )
}