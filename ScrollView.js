import { View, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={[styles.container, { flexDirection: 'column', gap: 10 }]}>
        {/* Cabeçalho */}
        <View
          style={{
            padding: 20,
            backgroundColor: 'red',
            flexDirection: 'row',
            gap: 10,
          }}>
          {/* Logo */}
          <View style={{ padding: 20, backgroundColor: 'blue' }}></View>
          {/* Menu */}
          <View
            style={{ padding: 20, backgroundColor: 'black', flex: 1 }}></View>
        </View>

        {/* main/corpo */}
        <View style={{ padding: 20, backgroundColor: 'orange' }}>
          <ScrollView horizontal={true}>
            <View style={{ padding: 60, backgroundColor: 'pink' }}></View>

            <View style={{ padding: 60, backgroundColor: 'brown' }}></View>

            <View style={{ padding: 60, backgroundColor: 'pink' }}></View>

            <View style={{ padding: 60, backgroundColor: 'brown' }}></View>
            <View style={{ padding: 60, backgroundColor: 'pink' }}></View>

            <View style={{ padding: 60, backgroundColor: 'brown' }}></View>
          </ScrollView>

        </View>
        {/* RODAPÉ/FOOTER */}
        <View style={{ padding: 20, backgroundColor: 'green' }}></View>
        {/* RODAPÉ/FOOTER */}
        <View style={{ padding: 20, backgroundColor: 'green' }}></View>
        {/* RODAPÉ/FOOTER */}
        <View style={{ padding: 20, backgroundColor: 'green' }}></View>
        {/* RODAPÉ/FOOTER */}
        <View style={{ padding: 20, backgroundColor: 'green' }}></View>
        {/* RODAPÉ/FOOTER */}
        <View style={{ padding: 20, backgroundColor: 'green' }}></View>
        {/* RODAPÉ/FOOTER */}
        <View style={{ padding: 20, backgroundColor: 'green' }}></View>
        {/* RODAPÉ/FOOTER */}
        <View style={{ padding: 20, backgroundColor: 'green' }}></View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    padding: 20,
  },
});
