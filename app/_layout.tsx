import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#0d0d0d' },
          headerTintColor: '#ffffff',
          contentStyle: { backgroundColor: '#0d0d0d' },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="strain/[id]" options={{ title: 'Strain Detail' }} />
        <Stack.Screen name="dispensary/[id]" options={{ title: 'Dispensary' }} />
      </Stack>
    </>
  );
}
