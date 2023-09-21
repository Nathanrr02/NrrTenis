import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/welcome'
import SignIn from '../pages/signin'
import Cadastre from '../pages/cadastre'
import NrrStore from '../pages/nrr'
import Configuracoes from '../pages/config'
import CarrinhoDeCompras from '../pages/carrinho';
import Pagamento from '../pages/compra';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component= { Welcome }
        options= { {headerShown: false} }
         />
      <Stack.Screen 
        name="SignIn" 
        component= { SignIn } 
        options= { {headerShown: false} }
        />
         <Stack.Screen 
        name="cadastre" 
        component= { Cadastre}
        options= { {headerShown: false} }
         />
          <Stack.Screen 
        name="nrr" 
        component= {NrrStore}
        options= { {headerShown: false} }
         />
           <Stack.Screen 
        name="config" 
        component= {Configuracoes}
        options= { {headerShown: false} }
         />
           <Stack.Screen 
        name="carrinho" 
        component= {CarrinhoDeCompras}
        options= { {headerShown: false} }
         />
         <Stack.Screen 
        name="compra" 
        component= {Pagamento}
        options= { {headerShown: false} }
         />
    </Stack.Navigator>
    
  )
}