//import library
import React, { useState } from 'react';
//imprt component
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SelectionList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StatusBarStyle,
  SafeAreaViewBase,
  StyleSheet,
  styles,
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
  avatar: 'assets/dimas.jpg',
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
  { id: '1', name: 'LinkedIn', icon:'🚀', url: 'https://www.linkedin.com/in/dimas-faturohman' },
  { id: '2', name: 'GitHub', icon:'</>', url: 'https://github.com/Dimas091206' },
  { id: '3', name: 'Instagram', icon:'📷', url: 'https://www.instagram.com/dimasfaturohman9' },
];
const SkillCard = ({ item }) => {
    <View style={styles.skillCard}>
      {/* Baris atas: nama + presentase */}
      <View style={styles.skillHeader}>
        {/* 2. Text -> nama skill */}
        <Text style={styles.skillName}>{item.name}</Text>
      <Text style={styles.skillPercent}>{item.level}%</Text>
    </View>

      {/* Progress bar: View berlapis */}
      <View style={styles.progressBar}>
        <View 
          style={[styles.progressFill, 
          { width: `${item.level}%`, backgroundColor: item.color },
        ]} 
        />
      </View>
    </View>
};
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
export default function App() {

  const [openToWork, setOpenToWork] = useState(true);

  const [SelectedItem, setSelectedItem] = useState(null);
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
      Alert.alert('Peringatan', 'Nama dan pesan tidak boleh kosong.');
      return;
    }
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSenderName('');
      setMessage('');
      Alert.alert('Berhasil', `Pesan dari ${senderName} berhasil dikirim!`);
    }, 2000);
  };
  return (
    <SafeAreaViewBase style={styles.safeArea}>
      <StatusBar
        backkgroundColor="#1a1a2e"
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
            <View><Text style={{color:'#fff'}}>Step 5 done</Text></View>
    </SafeAreaViewBase>

  );
}