import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Navbar */}
        <View style={styles.navbar}>
          <Text style={styles.logo}>MinhaApp</Text>
          <View style={styles.navItems}>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navText}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navText}>Sobre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navText}>Contato</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main */}
        <View style={styles.main}>

          <View style={styles.mainBox}>
            <Text style={styles.boxText}>Main Box</Text>
          </View>

          <View style={styles.sideBox}>

            <View style={styles.innerBox}>
              <Text style={styles.boxText}></Text>
            </View>

            <View style={styles.innerBox}>
              <Text style={styles.boxText}></Text>
            </View>

          </View>

        </View>

        {/* Content Area */}
        <View style={styles.contentArea}>
          <Text style={styles.contentText}>Área de Conteúdo</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Rodapé</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#5F6B61'
  },
  container: {
    flex: 1,
    padding: 10,
    gap: 5,
  },
  // Navbar estilo Bootstrap
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0C2C52',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navItems: {
    flexDirection: 'row',
    gap: 5,
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  navText: {
    color: 'white',
    fontSize: 14,
  },
  // Main section
  main: {
    flex: 3,
    flexDirection: 'row',
    gap: 5,
    marginTop: 1,
  },
  mainBox: {
    flex: 1,
    backgroundColor: '#5E9DC8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
  },
  sideBox: {
    flex: 1.2,
    flexDirection: 'column',
    gap: 5,
  },
  innerBox: {
    flex: 1,
    backgroundColor: '#DCF0F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
  },
  boxText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Content Area
  contentArea: {
    alignSelf: 'center',
    width: '100%',
    height: 110,
    backgroundColor: '#5E9DC8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 1,
    padding: 10,
  },
  contentText: {
    color: 'white',
    fontSize: 16,
  },
  // Footer
  footer: {
    flex: 1,
    backgroundColor: '#0C2C52',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 1,
    padding: 10,
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  },
});
