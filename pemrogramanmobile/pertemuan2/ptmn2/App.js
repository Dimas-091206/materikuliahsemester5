//import library
import React, { useState } from 'react';
//imprt component
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StatusBarStyle,
  SafeAreaView,
  StyleSheet,
  Alert,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  saveAreaProvider,


} from 'react-native';

const PROFILE = {
  name: 'Dimas Faturohman',
  title: 'Peternak Lele',
  email: 'dfaturohman9@gmail.com',
  phone: '083822112560',
  location: 'Cirebon, Jawa Barat',
  bio: 'Saya adalah seorang mahasiswa jurusan informatika yang bercita-cita menjadi peternak lele yang menggunakan otomatisasi IoT di peternakannya.',
  avatar: 'https://lh4.googleusercontent.com/-XAL676QA1Hs/AAAAAAAAAAI/AAAAAAAAAAA/lfLYp-w0Qf4/s96-c-mo/photo.jpg',
}
const SKILLS = [
  { id: '1', name: 'React Native', level: 90, color: '#61dafb' },
  { id: '2', name: 'PHP', level: 75, color: '#02569b' },
  { id: '3', name: 'Node.js', level: 88, color: '#f7df1e' },
  { id: '4', name: 'TypeScript', level: 60, color: '#f7df1e' },
  { id: '5', name: 'Flutter', level: 65, color: '#a7771f' },
  { id: '6', name: 'Firebase', level: 65, color: '#a7771f' },
  { id: '7', name: 'MySQL', level: 70, color: '#1fa79c' },
  { id: '8', name: 'Python', level: 90, color: '#61dafb' },
  { id: '9', name: 'C++', level: 90, color: '#61dafb' },
]
const SECTIONS = [
  {
    title: '🤝 Pengalaman Kerja',
    data: [
      {
        id: 'e1',
        role: 'Junior Backend Developer',
        company: 'Manajemen Proyek',
        period: '2026 - 2027',
        desc: 'Bertanggung jawab untuk mengembangkan dan memelihara sistem backend di website Himpunan Mahasiswa Informatika.'
      },
    ]
  },
  {
    title: '🎓 Pendidikan',
    data: [
      {
        id: 'd1',
        role: 'S1 Informatika',
        company: 'Universitas Islam Negeri Siber Syekh Nurjati Cirebon',
        period: '2024 - Sekarang',
        desc: 'IPS 3.81 / 4.00.'
      }
    ]
  }
];
const SOCIAL = [
  { id: '1', label: 'LinkedIn', icon:'🚀', url: 'https://www.linkedin.com/in/dimas-faturohman' },
  { id: '2', label: 'GitHub', icon:'</>', url: 'https://github.com/Dimas091206' },
  { id: '3', label: 'Instagram', icon:'📷', url: 'https://www.instagram.com/dimasfaturohman9' },
];
const SkillCard = ({ item }) => (
    <View style={styles.skillCard}>
      {/* Baris atas: nama + presentase */}
      <View style={styles.skillHeader}>
        {/* 2. Text -> nama skill */}
        <Text style={styles.skillName}>{item.name}</Text>
      <Text style={styles.skillPercent}>{item.level}%</Text>
    </View>

      {/* Progress bar: View berlapis */}
      <View style={styles.progressBg}>
        <View 
          style={[
            styles.progressFill, 
          { width: `${item.level}%`, backgroundColor: item.color },
        ]} 
        />
      </View>
    </View>
);
const  TimeLineCard = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.timelineCard}
    OnPress={() => onPress(item)}
    activeOpacity={0.75}
    >
      <View style={styles.timelineDot} />
      <View style={styles.timelineContent}>
        <Text style={styles.timelineRole}>{item.role}</Text>
        <Text style={styles.timelineCompany}>{item.company}</Text>
        <Text style={styles.timelinePeriod}>{item.period}</Text>
        <Text style={styles.timelineHint}>Ketuk untuk detail</Text>
      </View>
    </TouchableOpacity>
);
const showAlert = (title, message) => {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n\n${message}`);
  } else {
    Alert.alert(title, message);
  }
};

export default function App() {

  const [openToWork, setOpenToWork] = useState(true);

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const [sending, setSending] = useState(false);
  
  const [pressing, setPressing] = useState(false);


  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleSend = () => {

    if (!senderName.trim() || !message.trim()) {
      showAlert('Peringatan', 'Nama dan pesan tidak boleh kosong.');
      return;
    }
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSenderName('');
      setMessage('');
      showAlert('Berhasil', `Pesan dari ${senderName} berhasil dikirim!`);
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#1a1a2e"
        barStyle="light-content"
        />
        <View style={styles.headerBar}>
          <Text style={styles.headerTitle}>Curriculum Vitae</Text>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>
              {openToWork ? 'Open' : 'Busy'}
            </Text>
            <Switch
              value={openToWork}
              onValueChange={setOpenToWork}
              trackColor={{ false: '#555', true: '#4ade80' }}
              thumbColor={openToWork ? '#fff' : '#aaa'}
            />
          </View>
        </View>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.profileSection}>
            <Image 
            source={{uri: PROFILE.avatar}} style={styles.avatar}/>
            {openToWork && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Open to Work</Text>
              </View>
            )}
        
            <Text style={styles.profileName}>{PROFILE.name}</Text>
            <Text style={styles.profileTitle}>{PROFILE.title}</Text>
            <Text style={styles.profileBio}>{PROFILE.bio}</Text>
        
            <View style={styles.contactRow}>
              <Text style={styles.contactItem}>📧: {PROFILE.email}</Text>
              <Text style={styles.contactItem}>📍: {PROFILE.location}</Text>
            </View>
          <Text style={styles.contactItem}>📞: {PROFILE.phone}</Text>
        
          <View style={styles.socialRow}>
            {SOCIAL.map((s) => (
              <TouchableOpacity
                key={s.id}
                style={styles.socialButton}
                onPress={() => showAlert('🔗 Link', s.url)}
                activeOpacity={0.8}
                >
                  <Text style={styles.socialIcon}>{s.icon}</Text>
                  <Text style={styles.socialLabel}>{s.label}</Text>
                </TouchableOpacity>
            ))}
          </View>
          <Pressable
            style={({ pressed }) => [
              styles.downloadButton,
              pressed && styles.downloadButtonPressed,]}
            onPressIn={() => setPressing(true)}
            onPressOut={() => setPressing(false)}
            onPress={() => showAlert('⬇️ Download', 'CV sedang diunduh...')}
            >
              <Text style={styles.downloadButtonText}>
                {pressing ? '⌛Mengunduh ...' : '⬇️ Download CV (PDF)'}
              </Text>
          </Pressable>
          </View>
          <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>🛠️ Keahlian</Text>
              <Text style={styles.sectionSubtitle}>
                    FlatList: menampilkan list data secara efisien
              </Text>
              <FlatList
               data={SKILLS}
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => <SkillCard item={item} />}
               scrollEnabled={false}
               ItemSeparatorComponent={() => (
               <View style={{ height: 8 }} />
              )}
              />
              </View>
          <View style={styles.sectionBox}>
                <Text style={styles.sectionTitle}>📅 Riwayat</Text>
                <Text style={styles.sectionSubtitle}>
                  SectionList: data dikelompokkkan per kategori, ketuk kartu untuk model detail
                </Text>
          
                <SectionList
                  sections={SECTIONS}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TimeLineCard item={item} onPress={handleCardPress} />
                  )}
                  renderSectionHeader={({ section: { title } }) => (
                    <View style={styles.sectionHeader}>
                      <Text style={styles.sectionHeaderText}>{title}</Text>
                    </View>
                  )}
                  scrollEnabled={false}
                  ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                  SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
                />
              </View>
              <View style={styles.sectionBox}>
                    <Text style={styles.sectionTitle}>📞 Hubungi Saya</Text>
                    <Text style={styles.sectionSubtitle}>
                      TextInput, BUtton, ActivityIndicator
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Dimas Faturohman"
                      placeholderTextColor="#888"
                      value={senderName}
                      onChangeText={setSenderName}
                      returnKeyType="next"
                      editable={!sending}
                    />
                    <TextInput
                      style={[styles.input, styles.TextArea]}
                      placeholder="Tulis pesan Anda di sini..."
                      placeholderTextColor="#888"
                      value={message}
                      onChangeText={setMessage}
                      multiline
                      numberOfLines={4}
                      textAlignVertical="top"
                      editable={!sending}
                    />
                    {sending ? (
                      <View style={styles.loadingRow}>
                        <ActivityIndicator size="large" color="#7c3aed" />
                        <Text style={styles.loadingText}>Mengirim pesan...</Text>
                      </View>
                    ) : (
                      <Button 
                        title="Kirim Pesan"
                        color="#7c3aed"
                        onPress={handleSend}
                      />
                    )}
                  </View>
                  </ScrollView>
                  <Modal
                        visible={modalVisible}
                        animationType="slide"
                        transparent
                        onRequestClose={() => setModalVisible(false)}
                      >
                        <View style={styles.modalOverlay}>
                          <View style={styles.modalBox}>
                            {selectedItem && (
                              <>
                                <Text style={styles.modalTitle}>{selectedItem.role}</Text>
                                <Text style={styles.modalCompany}>{selectedItem.company}</Text>
                                <Text style={styles.modalPeriod}>{selectedItem.period}</Text>
                                <View style={styles.modalDivider} />
                                <Text style={styles.modalDesc}>{selectedItem.desc}</Text>
                              </>
                            )}
                            <TouchableOpacity
                              style={styles.modalCloseButton}
                              onPress={() => setModalVisible(false)}
                              >
                              <Text style={styles.modalCloseButtonText}>Tutup</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Modal>
                    <View style={{height: 40}}/>
            <View><Text style={{color:'#fff'}}>Step 5 done</Text></View>
    </SafeAreaView>
  );
}

const COLORS = {
  bg: '#0f0f1a',
  card: '#1a1a2e',
  cardBorder: '#2d2d44',
  accent: '#7c3aed',
  accentLight: '#a78bfa',
  text: '#f0f0f0',
  textMuted: '#9ca3af',
  textDim: '#6b7280',
  success: '#4ade80',
  white: '#ffffff',
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scroll: {
    flex: 1,
  },
  headerBar: {
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
    gap: 8,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  switchLabel: {
    color: COLORS.textMuted,
    fontSize: 14,
    fontWeight: '600',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: COLORS.card,
    marginBottom: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderWidth: 2,
    borderColor: COLORS.accent,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: COLORS.accent,
    marginBottom: 8,
  },
  badge: {
    backgroundColor: '#052e16',
    borderWidth: 1,
    borderColor: COLORS.success,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 12,
  },
  badgeText: {
    color: COLORS.success,
    fontSize: 12,
    fontWeight: '700',
  },
  profileName: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
  profileTitle: {
    color: COLORS.accentLight,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 14,
    textAlign: 'center',

  },
  profileBio: {
    color: COLORS.textMuted,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 6,
  },
  contactItem: {
    color: COLORS.textMuted,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 4,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
    marginBottom: 16,
  },
  socialButton: {
    alignItems: 'center',
    backgroundColor: '#16213e',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  socialIcon: {
    fontSize: 20,
    marginBottom: 4
  },
  socialLabel: {
    color: COLORS.accentLight,
    fontSize: 11,
    fontWeight: '600',
  },
  downloadButton: {
    backgroundColor: COLORS.accent,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 50,
    elevation: 4,
    shadowColor: COLORS.accent,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
  },
  downloadButtonPressed: {
    backgroundColor: '#5b21b6'
  },
  downloadButtonText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14
  },
  sectionBox: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  sectionSubtitle: {
    color: COLORS.textDim,
    fontSize: 11,
    fontStyle: 'italic',
    marginBottom: 16,
  },
  sectionHeader: {
    backgroundColor: '#0f172a',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
    },
    sectionHeaderText: {
      color: COLORS.accentLight,
      fontWeight: '700',
      fontSize: 13,
    },
    skillCard: {
      backgroundColor: '#16213e',
      padding: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: COLORS.cardBorder,
    },
    skillHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    skillName: {
      color: COLORS.text,
      fontWeight: '600',
      fontSize: 13,
    },
    skillPercent: {
      color: COLORS.accentLight,
      fontWeight: '700',
      fontSize: 13,
    },
    progressBg: {
      height: 6,
      backgroundColor: '#0f172a',
      borderRadius: 4,
      overflow: 'hidden',
    },
    progressFill: {
      height: 6,
      borderRadius: 4,
    },
    timelineCard: {
      flexDirection: 'row',
      backgroundColor: '#16213e',
      borderRadius: 12,
      padding: 14,
      borderWidth: 1,
      borderColor: COLORS.cardBorder,
    },
    timelineDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: COLORS.accent,
      marginTop: 4,
      marginRight: 12,
    },
    timelineContent: {
      flex: 1,
      marginLeft: 12,
    },
    timelineRole: {
      color: COLORS.white,
      fontWeight: '700',
      fontSize: 14,
      marginBottom: 2,
    },
    timelineCompany: {
      color: COLORS.accentLight,
      fontSize: 12,
      marginBottom: 2,
    },
    timelinePeriod: {
      color: COLORS.textMuted,
      fontSize: 11,
      marginBottom: 6,
    },
    timelineHint: {
      color: COLORS.accentGold,
      fontSize: 11,
      fontStyle: 'italic',
    },
    TextInput: {
      backgroundColor: '#0f172a',
      color: COLORS.text,
      borderWidth: 1,
      borderColor: COLORS.cardBorder,
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: Platform.OS === 'ios' ? 14:10,
      fontSize: 14,
      marginBottom: 12,
    },
    TextArea: {
      height: 100,
      textAlignVertical: 'top',
    },
    loadingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
    },
    loadingText: {
      color: COLORS.accentLight,
      fontSize: 14,
      fontWeight: '600'
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.75)',
      justifyContent: 'flex-end'
    },
    modalBox: {
      backgroundColor: '#1e1b4b',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: 28,
      borderTopWidth: 3,
      borderColor: COLORS.accent,
    },
    modalTitle: {
      color: COLORS.white,
      fontSize:20,
      fontWeight: '800',
      marginBottom: 4
    },
    modalCompany: {
      color: COLORS.accentLight,
      fontSize: 15,
      fontWeight: '600',
      marginBottom: 4
    },
    modalPeriod: {
      color: COLORS.textMuted,
      fontSize: 13,
      marginBottom: 16
    },
    modalDivider: {
      height: 1,
      backgroundColor: COLORS.cardBorder,
      marginBottom: 16
    },
    modalDesc: {
      color: COLORS.text,
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 24
    },
    modalCloseButton: {
      backgroundColor: COLORS.accent,
      borderRadius: 12,
      paddingVertical: 14,
      alignItems: 'center'
    },
    modalCloseButtonText: {
      color: COLORS.white,
      fontWeight: '700',
      fontSize: 14
    },
  });