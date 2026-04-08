import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, FontSize, Radius } from '@/utils/theme';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={36} color={Colors.textSecondary} />
        </View>
        <Text style={styles.name}>Sign in to your account</Text>
        <Text style={styles.sub}>Track favorites, journal history, and personalized picks</Text>
        <TouchableOpacity style={styles.signInBtn}>
          <Text style={styles.signInText}>Sign In / Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        {[
          { icon: 'heart-outline', label: 'Favorite Strains' },
          { icon: 'location-outline', label: 'Saved Dispensaries' },
          { icon: 'notifications-outline', label: 'Notifications' },
          { icon: 'settings-outline', label: 'Settings' },
        ].map((item) => (
          <TouchableOpacity key={item.label} style={styles.row}>
            <Ionicons name={item.icon as any} size={22} color={Colors.textSecondary} />
            <Text style={styles.rowLabel}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg },
  header: { alignItems: 'center', padding: Spacing.xl },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: Colors.bgCard, alignItems: 'center', justifyContent: 'center', marginBottom: Spacing.md, borderWidth: 2, borderColor: Colors.border },
  name: { fontSize: FontSize.xl, fontWeight: '700', color: Colors.text, marginBottom: 6 },
  sub: { fontSize: FontSize.sm, color: Colors.textSecondary, textAlign: 'center', maxWidth: 260, marginBottom: Spacing.lg },
  signInBtn: { backgroundColor: Colors.primary, paddingHorizontal: Spacing.xl, paddingVertical: 12, borderRadius: Radius.full },
  signInText: { color: Colors.text, fontWeight: '700', fontSize: FontSize.md },
  section: { paddingHorizontal: Spacing.md },
  row: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: Colors.border },
  rowLabel: { fontSize: FontSize.md, color: Colors.text },
});
