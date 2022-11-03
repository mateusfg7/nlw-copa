import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, Center, Text } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style='light' />
      <Center flex={1} bgColor='gray.900'>
        <Text color='gray.100' fontSize={24}>
          Open up App.js to start working on your app!
        </Text>
      </Center>
    </NativeBaseProvider>
  )
}
